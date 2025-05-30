import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/dominion-chemical-mockups/', // <--- Trailing slash is important
  plugins: [react()],
  server: { open: true },
  css: { postcss: './postcss.config.js' },
})