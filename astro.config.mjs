import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*', '**/components/**/*.{jsx,tsx}']
    }),
    tailwind({
      applyBaseStyles: false
    })
  ],
  output: 'static',
  adapter: netlify(),
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
    format: 'file',
    splitting: true,
    preload: ['@fontsource/*', '/fonts/*'],
  },
  server: {
    host: true
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@radix-ui/')) {
                return 'vendor-radix';
              }
              if (id.includes('react/') || id.includes('react-dom/')) {
                return 'vendor-react';
              }
              if (id.includes('lucide-react/')) {
                return 'vendor-icons';
              }
              if (id.includes('date-fns/')) {
                return 'vendor-date-fns';
              }
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/chunk.[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    ssr: {
      noExternal: ['@radix-ui/*', 'class-variance-authority', 'clsx', 'tailwind-merge', 'lucide-react']
    },
    plugins: []
  }
});