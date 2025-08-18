import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

export default defineConfig({
	site: "https://scrapyardsites.com",
	// base is only needed for GitHub Pages; remove for production domain
	base: undefined,
	trailingSlash: "always",
	integrations: [tailwind(), mdx(), sitemap()],
	build: { 
		inlineStylesheets: "auto",
		assets: "_astro"
	},
	vite: {
		build: {
			rollupOptions: {
				output: {
					assetFileNames: 'assets/[name].[hash][extname]',
					chunkFileNames: 'assets/[name].[hash].js',
					entryFileNames: 'assets/[name].[hash].js'
				}
			}
		}
	},
})
