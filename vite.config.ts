import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Change this if your repo name is different
const repoName = "guna-portfolio";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
