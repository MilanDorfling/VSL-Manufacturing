import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    host: '0.0.0.0',
    port: 5173, // or your chosen port
  },
  build: {
    assetsInlineLimit: 0, // Don't inline any assets as base64
    target: 'es2015', // Better browser compatibility
    cssTarget: 'chrome61', // CSS compatibility target
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/mp4|webm|mov|avi/i.test(extType)) {
            return `assets/videos/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.mov'],
})