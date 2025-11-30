import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
   build: {
    rollupOptions: {
        external: ['element-plus', 'vue']
    },
     lib: {
        entry: resolve(__dirname, './src/main.ts'),
        name: 'ljComponents',
        fileName: 'lj-components',
        formats: ['es', 'cjs', 'umd',]
      }
  },
})
