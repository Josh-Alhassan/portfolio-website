// vite.config.js
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: "public",
    emptyOutDir: true,
  },
  base: "./", // Ensure relative paths work
});
