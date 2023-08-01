import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    strictPort: true,
    port: 3006, // this is the port for the dev server
  },
  plugins: [react()],
});
