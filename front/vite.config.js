import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:"/react-profile/",
  plugins: [react()],
  build: {
    root:'src',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
      }
    }
  }
})
