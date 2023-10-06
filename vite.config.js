import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/react-profile/",
  plugins: [react()],
  build: {
    root:'src',
    emptyOutDir: true,
  },
})
