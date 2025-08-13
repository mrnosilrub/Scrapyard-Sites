import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
	site: "https://mrnosilrub.github.io",
	base: "/Scrapyard-Sites",
	trailingSlash: "always",
	integrations: [tailwind(), mdx(), sitemap()],
	build: { inlineStylesheets: "auto" },
})
