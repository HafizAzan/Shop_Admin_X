import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      features: path.resolve(__dirname, "src/features"),
      hooks: path.resolve(__dirname, "src/hooks"),
      store: path.resolve(__dirname, "src/store"),
      utils: path.resolve(__dirname, "src/utils"),
      assets: path.resolve(__dirname, "src/assets"),
      services: path.resolve(__dirname, "src/services"),
      context: path.resolve(__dirname, "src/context"),
      layouts: path.resolve(__dirname, "src/layouts"),
      pages: path.resolve(__dirname, "src/pages"),
      config: path.resolve(__dirname, "src/config"),
    },
  },
});
