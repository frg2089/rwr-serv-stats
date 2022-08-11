import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import tailwindConfig from './tailwind.config'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: '.yarn/.vite',
  css: {
    postcss: {
      plugins: [
        tailwindcss(tailwindConfig)
      ]
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
