import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tu-i-jo/', // 👈 muy importante para GitHub Pages
})
