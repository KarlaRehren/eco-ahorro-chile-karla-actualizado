import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // For GitHub Pages compatibility
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true
  }
})