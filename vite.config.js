import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/eco-ahorro-chile-react/', // GitHub Pages base path
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true
  }
})