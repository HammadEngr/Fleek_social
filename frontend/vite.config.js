import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // equivalent to --host
    watch: {
      usePolling: true,
      interval: 1000, // check for changes every second
    },
    port: 5173,
  },
});
