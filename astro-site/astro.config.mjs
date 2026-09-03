import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

export default defineConfig({
  output: "static",
  integrations: [pagefind()],
  site: "https://awesome-coding-plans.netlify.app",
});
