import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./assets/scss/abstracts/functions.scss";
              @import "./assets/scss/vars/colors.scss";
              @import "./assets/scss/vars/breakpoints.scss";
              @import "./assets/scss/vars/fonts.scss";
              @import "./assets/scss/default.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
