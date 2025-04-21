import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// config for vite and proxy setup
export default defineConfig({
  plugins: [react()], // lets vite use react

  server: {
    proxy: {
      // this sends anything starting with /api to the real api url
      '/api': {
        target: 'https://course-api.com', // the api we use
        changeOrigin: true, // needed for cors stuff
        rewrite: path => path.replace(/^\/api/, '') // removes /api from the path
      }
    }
  }
})
