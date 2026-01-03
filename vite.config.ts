import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Study-ELS/',   // 🔥 BẮT BUỘC
  plugins: [react()],
})
