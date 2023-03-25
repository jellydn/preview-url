import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "PreviewUrl",
      formats: ["es", "umd", "cjs", "iife"],
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
    dts(),
  ],
});
