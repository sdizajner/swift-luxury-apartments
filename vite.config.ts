import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [
    tailwindcss(), // Tailwind ide prvi
    react(),       // Zatim React
  ],
  base: '/swift-luxury-apartments/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})