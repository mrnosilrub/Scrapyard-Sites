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

const files = fs
	.readdirSync(SLIDES_DIR)
	.filter((f) => f.endsWith(".svg") && /^slide-\d+\.svg$/.test(f))
	.map((f) => path.join(SLIDES_DIR, f))
	.sort()
if (!files.length) {
	console.error("No SVG slides found:", SLIDES_DIR)
	process.exit(1)
}

// Try to resolve local Chrome for Testing if available
function findLocalChrome() {
	const chromeDir = path.join(ROOT, "chrome")
	if (!fs.existsSync(chromeDir)) return null
	const entries = fs.readdirSync(chromeDir)
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
	await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 })

	for (const svgPath of files) {
		const urlPath = `file://${svgPath}`
		await page.goto(urlPath, { waitUntil: "networkidle0", timeout: 60000 })
		const base = path.basename(svgPath, ".svg")
		const out = path.join(SLIDES_DIR, `${base}@2x.png`)
		await page.screenshot({ path: out, fullPage: false })
		console.log("Exported", out)
	}
} finally {
	await browser.close()
}
