import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Auf GitHub Pages liegt die Seite unter /Letsskee/ – lokal unter /
  base: command === 'build' ? '/Letsskee/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
}))
