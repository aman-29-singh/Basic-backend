import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:4000',
       //added for proxy 'http://localhost:4000/api' means jo backend par frontend se request aarahi hai woh issi 4000 url se aarahi hai
    },
  },
  plugins: [react()],
})
