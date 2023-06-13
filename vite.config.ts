import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: '.yarn/.vite',
  plugins: [
    UnoCSS(),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://rwr.runningwithrifles.com/',
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  envPrefix: 'RWR_'
})
