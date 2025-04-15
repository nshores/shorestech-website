import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    hmr: {
      host: 'localhost'
    },
    allowedHosts: [
      'localhost',
      '.trycloudflare.com'
    ]
  }
})
