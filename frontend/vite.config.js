import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  // ADD THIS SECTION FOR react-icons/si
  optimizeDeps: {
    include: ['react-icons/si', 'react-icons']
  },
  build: {
    commonjsOptions: {
      include: [/react-icons/, /node_modules/]
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-icons': ['react-icons']
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://portfolio-backend:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    host: '0.0.0.0',
    port: 5173,
  }
});