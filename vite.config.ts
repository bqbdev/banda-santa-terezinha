import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "/banda-santa-terezinha/",
  plugins: [react()],
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        transparencia: resolve(__dirname, "transparencia/index.html"),
      },
    },
  },
});
