import path from "node:path"
import { fileURLToPath } from "node:url"
import puppeteer from "puppeteer"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")

// Input HTML (local file) and output PNG
const htmlPath = path.resolve(
	repoRoot,
	"marketing/concepts/www.a1recyclinglubbock.com/mockup-a.html",
)
const outputPath = path.resolve(
	repoRoot,
	"marketing/concepts/www.a1recyclinglubbock.com/mockup-a-portrait.png",
)

const fileUrl = `file://${htmlPath}`

async function launchBrowser() {
	// Try system Chrome via channel first, then known macOS paths, then default
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

async function run() {
	const browser = await launchBrowser()
	const page = await browser.newPage()

	// Portrait-friendly viewport; fullPage captures entire height
	await page.setViewport({ width: 1200, height: 1800, deviceScaleFactor: 2 })

	// Be patient for CDN styles
	await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 60000 })

	// Small extra settle time for fonts/gradients
	await new Promise((r) => setTimeout(r, 400))

	await page.screenshot({ path: outputPath, fullPage: true, type: "png" })
	await browser.close()

	console.log("Saved screenshot to:", outputPath)
}

run().catch((err) => {
	console.error(err)
	process.exit(1)
})
