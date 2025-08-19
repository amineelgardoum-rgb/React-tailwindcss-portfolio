import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:'/',
  resolve: {
    alias: {
      // Now __dirname is correctly defined
      "@": path.resolve(__dirname, "./src")
    },
  },
});