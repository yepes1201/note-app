import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/assets": path.resolve(__dirname + "/src/assets"),
      "@/components": path.resolve(__dirname + "/src/components"),
      "@/firebase": path.resolve(__dirname + "/src/firebase"),
      "@/hooks": path.resolve(__dirname + "/src/hooks"),
      "@/layout": path.resolve(__dirname + "/src/layout"),
      "@/routes": path.resolve(__dirname + "/src/routes"),
      "@/store": path.resolve(__dirname + "/src/store"),
      "@/styles": path.resolve(__dirname + "/src/styles"),
      "@/utils": path.resolve(__dirname + "/src/utils"),
    },
  },
});
