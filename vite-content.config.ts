import { defineConfig } from 'vite'

import { r } from './scripts/util'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      '~': r('src'),
    },
  },
  build: {
    outDir: 'dist/scripts/content',
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: r('./src/scripts/content.ts'),
      name: 'content',
      fileName: 'content',
    },
  },
})
