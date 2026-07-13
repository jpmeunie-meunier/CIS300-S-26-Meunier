import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        about:    resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        gallery:  resolve(__dirname, 'gallery/index.html'),
        reviews:  resolve(__dirname, 'reviews/index.html'),
        contact:  resolve(__dirname, 'contact/index.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
