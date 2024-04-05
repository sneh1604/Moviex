import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://moviex-sepia.vercel.app",
      "/uploads/": "https://moviex-sepia.vercel.app",
    },
  },
});
