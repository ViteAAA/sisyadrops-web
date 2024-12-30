import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Убедитесь, что сборка сохраняется в правильную директорию
  },
  resolve: {
    alias: {
      '@': '/src', // Это может быть полезно для использования абсолютных путей
    },
  },
});