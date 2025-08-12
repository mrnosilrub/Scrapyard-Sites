import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://mrnosilrub.github.io",
  base: "/Scrapyard-Sites",
  trailingSlash: "always",
  integrations: [tailwind(), mdx()],
  build: { inlineStylesheets: "auto" }
});


