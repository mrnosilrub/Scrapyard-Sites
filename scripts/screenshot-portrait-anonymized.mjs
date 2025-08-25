import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import puppeteer from "puppeteer"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")

const htmlPath = path.resolve(
	repoRoot,
	"marketing/concepts/evergreen/mockup-a.html",
)
const outputDir = path.resolve(repoRoot, "marketing/concepts/evergreen")
const outputPath = path.resolve(outputDir, "mockup-a.png")
const fileUrl = `file://${htmlPath}`

async function launchBrowser() {
	try {
		return await puppeteer.launch({
			headless: true,
			channel: "chrome",
			args: ["--no-sandbox", "--disable-dev-shm-usage"],
		})
	} catch {}
	const macStable =
		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
	const macCanary =
		"/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
	try {
		return await puppeteer.launch({
			headless: true,
			executablePath: macStable,
			args: ["--no-sandbox", "--disable-dev-shm-usage"],
		})
	} catch {}
	try {
		return await puppeteer.launch({
			headless: true,
			executablePath: macCanary,
			args: ["--no-sandbox", "--disable-dev-shm-usage"],
		})
	} catch {}
	return await puppeteer.launch({
		headless: true,
		args: ["--no-sandbox", "--disable-dev-shm-usage"],
	})
}

async function anonymize(page) {
	await page.evaluate(() => {
		const replacements = [
			[/A[\u2011-]1\s+Recycling/gi, "Your Company"],
			[/Lubbock/gi, "Your City"],
			[/1909\s+Crickets\s+Ave/gi, "123 Main St"],
			[/TX\s*79404/gi, "ST 00000"],
			[/\+1-806-747-2441/gi, "+1-555-555-5555"],
			[/\(\s*806\s*\)\s*747[\u2011-]2441/gi, "(555) 555‑5555"],
			[/747[\u2011-]2441/gi, "555‑5555"],
			[
				/A[\u2011-]1\s+Recycling\s+—\s+Lubbock,\s*TX/gi,
				"Your Company — Your City, ST",
			],
		]

		// Walk text nodes and replace
		const walker = document.createTreeWalker(
			document.body,
			NodeFilter.SHOW_TEXT,
		)
		const nodes = []
		while (walker.nextNode()) nodes.push(walker.currentNode)
		for (const node of nodes) {
			let text = node.nodeValue
			if (!text) continue
			for (const [pattern, replacement] of replacements) {
				text = text.replace(pattern, replacement)
			}
			node.nodeValue = text
		}

		// Neutralize tel links
		for (const a of document.querySelectorAll('a[href^="tel:"]')) {
			a.textContent = a.textContent?.match(/call/i) ? a.textContent : "Call now"
			a.setAttribute("href", "#")
		}

		// Replace address tile explicitly if present
		const addressLabel = Array.from(document.querySelectorAll("div")).find(
			(el) => el.textContent?.trim() === "Address",
		)
		if (addressLabel) {
			const container = addressLabel.parentElement
			const strong = container?.querySelector("div.font-semibold")
			const city = container?.querySelector("div.text-sm")
			if (strong) strong.textContent = "123 Main St"
			if (city) city.textContent = "Your City, ST 00000"
		}

		// Neutralize map links
		for (const a of document.querySelectorAll(
			'a[href*="maps.apple.com"], a[href*="google.com/maps"], a[href*="waze.com"]',
		)) {
			a.textContent = "Map"
			a.setAttribute("href", "#")
		}
	})
}

async function run() {
	await fs.mkdir(outputDir, { recursive: true })
	const browser = await launchBrowser()
	const page = await browser.newPage()
	await page.setViewport({ width: 1200, height: 1800, deviceScaleFactor: 2 })
	await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 60000 })
	await new Promise((r) => setTimeout(r, 400))
	await anonymize(page)
	await new Promise((r) => setTimeout(r, 150))
	await page.screenshot({ path: outputPath, fullPage: true, type: "png" })
	await browser.close()
	console.log("Saved anonymized screenshot to:", outputPath)
}

run().catch((err) => {
	console.error(err)
	process.exit(1)
})
