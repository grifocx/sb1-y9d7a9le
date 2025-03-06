# Deployment Guide

## Overview
This document outlines the deployment process for the Haymarket Bicycles website, including build configuration, environment setup, and deployment procedures.

## Deployment Configuration

### Netlify Configuration
The project is deployed to Netlify with the following configuration in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  environment = { NODE_VERSION = "20" }

[build.environment]
  ASTRO_TELEMETRY_DISABLED = "1"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Content-Security-Policy = "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'none';"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    X-XSS-Protection = "1; mode=block"
    X-Permitted-Cross-Domain-Policies = "none"
    Cross-Origin-Resource-Policy = "same-origin"
    Cross-Origin-Opener-Policy = "same-origin"
    Cross-Origin-Embedder-Policy = "require-corp"
    Link = "</assets/chunk.trsucAPx.js>; rel=preload; as=script, </assets/chunk.B045xJDx.js>; rel=preload; as=script"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.(?:jpg|jpeg|gif|png|svg|webp)"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.(?:woff|woff2|eot|ttf|otf)"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Canonical redirects
[[redirects]]
  from = "https://haymarketbicycles.netlify.app/*"
  to = "https://haymarketbicycles.com/:splat"
  status = 301
  force = true

# Trailing slash redirects
[[redirects]]
  from = "/*/"
  to = "/:splat"
  status = 301
  force = false

# SPA fallback
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Build Configuration
The build process is configured in `astro.config.mjs`:

```javascript
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
```

## Environment Setup

### Required Environment Variables
The following environment variables should be set in the Netlify dashboard:

- `PUBLIC_SITE_URL`: The production URL of the website

### Local Development Environment
For local development, create a `.env` file with the following variables:

```
PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment Process

### Manual Deployment
1. Push changes to the main branch
2. Netlify will automatically build and deploy the site
3. Monitor the build process in the Netlify dashboard
4. Verify the deployment by checking the live site

### Deployment Commands
```bash
# Build the site locally
npm run build

# Preview the built site locally
npm run preview
```

## Post-Deployment Verification

### Checklist
- Verify all pages load correctly
- Check for any console errors
- Test responsive design on multiple devices
- Verify all links work correctly
- Check form submissions
- Validate SEO elements
- Test performance using Lighthouse

### Performance Monitoring
- Monitor Core Web Vitals in Google Search Console
- Check Netlify analytics for any issues
- Monitor error rates in browser consoles
- Track page load times

## Rollback Procedure

If issues are detected after deployment:

1. Go to the Netlify dashboard
2. Navigate to the "Deploys" section
3. Find the last working deployment
4. Click "Publish deploy" on that version
5. Verify the rollback fixed the issues

## Security Considerations

### Headers
The deployment includes several security headers:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Strict-Transport-Security
- Permissions-Policy

### HTTPS
- All traffic is forced to HTTPS
- HSTS is enabled with a long max-age
- Secure cookies are used

### Content Security
- Restrictive CSP policy
- Frame ancestors restricted to prevent clickjacking
- External resources limited to trusted sources

## Caching Strategy

### Asset Caching
- Static assets (JS, CSS, images, fonts) use immutable caching
- HTML files use shorter cache times to allow updates
- Cache-Control headers are set for different file types

### Cache Invalidation
- Assets use content-based hashing for cache busting
- HTML files are not cached aggressively
- Redirects are used to handle URL changes

## Domain Configuration

### Custom Domain
- Primary domain: haymarketbicycles.com
- Netlify subdomain: haymarketbicycles.netlify.app
- Redirects from Netlify subdomain to primary domain

### DNS Configuration
- CNAME record pointing to Netlify
- Netlify DNS for domain management
- SSL certificate managed by Netlify