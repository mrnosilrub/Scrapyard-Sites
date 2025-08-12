import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  build: { inlineStylesheets: "auto" }
  // If you know your canonical URL, set: site: "https://YOURDOMAIN"
  // For project pages like user.github.io/repo, you can add: base: "/REPO" (optional; avoid unless needed)
});


