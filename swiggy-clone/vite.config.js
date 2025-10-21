import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const SWIGGY_API_URL = 'https://www.swiggy.com';
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    port: 5173,
    proxy: {
     
      '/dapi': {
        target: SWIGGY_API_URL,
      
        changeOrigin: true,
      },
    },
  },
})
