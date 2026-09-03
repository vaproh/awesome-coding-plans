import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://awesome-coding-plans.netlify.app",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
