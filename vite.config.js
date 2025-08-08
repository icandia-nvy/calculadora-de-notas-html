
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Cambia esto si tu repo tiene otro nombre
const repoName = 'calculadora-de-notas-html'

// Si se construye en GitHub Actions, usamos base con subcarpeta del repo.
// En local (npm run dev / build manual) usamos base '/'
const isPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isPages ? `/${repoName}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
