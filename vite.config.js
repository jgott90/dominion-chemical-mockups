import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // Automatically open the site on launch
  },
  css: {
    postcss: './postcss.config.js',
  },
})


