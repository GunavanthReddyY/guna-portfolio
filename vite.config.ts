import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Change this if your repo name is different

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',          // or simply remove `base` completely
  build: {
    outDir: 'dist',   // default, but safe to be explicit
  },
});