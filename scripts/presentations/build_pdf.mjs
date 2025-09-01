#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import url from "node:url"
import puppeteer from "puppeteer"

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..", "..")
const SLIDES_DIR = path.join(
	ROOT,
	"docs",
	"presentations",
	"industry-brief",
	"exports",
)
const OUT_PDF = path.join(SLIDES_DIR, "industry-brief.pdf")
const PUBLIC_DL = path.join(ROOT, "public", "downloads")

const allPngs = fs
	.readdirSync(SLIDES_DIR)
	.filter((f) => /^(slide-\d+)(@2x)?\.png$/.test(f))
	.sort((a, b) => a.localeCompare(b))

// Prefer @2x images; fall back to 1x if needed
const candidates = allPngs.filter((f) => f.endsWith("@2x.png")).length
	? allPngs.filter((f) => f.endsWith("@2x.png"))
	: allPngs

if (!candidates.length) {
	console.error("No slide PNGs found in", SLIDES_DIR)
	process.exit(1)
}

function pathToFileURL(p) {
	return url.pathToFileURL(p).toString()
}

function findLocalChrome() {
	const chromeDir = path.join(ROOT, "chrome")
	if (!fs.existsSync(chromeDir)) return null
	// Prefer newest subdir
	const entries = fs.readdirSync(chromeDir).sort().reverse()
	for (const ent of entries) {
		const p = path.join(
			chromeDir,
			ent,
			"chrome-mac-x64",
			"Google Chrome for Testing.app",
			"Contents",
			"MacOS",
			"Google Chrome for Testing",
		)
		if (fs.existsSync(p)) return p
	}
	return null
}

const execPath = findLocalChrome()

const browser = await puppeteer.launch({
	headless: "new",
	args: ["--no-sandbox", "--disable-setuid-sandbox"],
	executablePath: execPath ?? undefined,
})

try {
	const page = await browser.newPage()
	// Inline images as data URIs to avoid file:// restrictions
	const dataImgs = candidates.map((f) => {
		const p = path.join(SLIDES_DIR, f)
		const b64 = fs.readFileSync(p).toString("base64")
		return `data:image/png;base64,${b64}`
	})

	// Build a simple HTML with one image per page
	const html = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        @page { size: 1080px 1350px; margin: 0; }
        body { margin: 0; }
        .page { width: 1080px; height: 1350px; page-break-after: always; display: flex; align-items: center; justify-content: center; }
        img { width: 1080px; height: 1350px; display: block; }
      </style>
    </head>
    <body>
      ${dataImgs.map((src) => `<div class="page"><img src="${src}" /></div>`).join("\n")}
    </body>
  </html>`

	await page.setContent(html, { waitUntil: "networkidle0" })
	await page.pdf({
		path: OUT_PDF,
		printBackground: true,
		width: "1080px",
		height: "1350px",
		preferCSSPageSize: true,
		pageRanges: "1-",
	})
	console.log("Built PDF:", OUT_PDF)

	// Publish copies to public/downloads for static linking
	if (!fs.existsSync(PUBLIC_DL)) fs.mkdirSync(PUBLIC_DL, { recursive: true })
	const dated = path.join(PUBLIC_DL, "industry-brief-2025-09-02.pdf")
	const latest = path.join(PUBLIC_DL, "industry-brief.pdf")
	fs.copyFileSync(OUT_PDF, dated)
	fs.copyFileSync(OUT_PDF, latest)
	console.log("Copied to:", dated)
	console.log("Copied to:", latest)
} finally {
	await browser.close()
}
