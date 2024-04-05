import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://moviex-87oaxl017-sneh1604s-projects.vercel.app",
      "/uploads/": "https://moviex-87oaxl017-sneh1604s-projects.vercel.app",
    },
  },
});
