import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip
    compression({ algorithm: "gzip", ext: ".gz" }),
    // Brotli
    compression({ algorithm: "brotliCompress", ext: ".br" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Target modern browsers — smaller output
    target: "esnext",
    // Split CSS per chunk
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — cached aggressively
          "vendor-react": ["react", "react-dom"],
          // Motion library — heavy, split separately
          "vendor-motion": ["motion"],
          // react-icons — largest contributor to bundle size
          "vendor-icons": ["react-icons", "@radix-ui/react-icons", "lucide-react"],
          // Magic UI (icon cloud canvas renderer)
          "vendor-magicui": ["react-dom/server"],
        },
      },
    },
  },
});
