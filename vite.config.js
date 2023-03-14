import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import nodePolyfills from "vite-plugin-node-stdlib-browser";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    eslint({
      cache: true,
      fix: true,
      emitWarning: false,
      include: ["src/**/*.{ts,tsx,js,jsx}"],
    }),
  ],
});
