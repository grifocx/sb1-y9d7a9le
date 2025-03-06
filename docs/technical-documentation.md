# Technical Documentation

## Architecture Overview

The Haymarket Bicycles website is built using a modern JAMstack architecture with the following key components:

- **Astro.js**: Core framework for static site generation
- **React**: Component library for interactive UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **TypeScript**: Type-safe JavaScript for improved developer experience

## Directory Structure

```
src/
  components/       # UI components
    ui/             # shadcn/ui components
  content/          # Content collections
    resources/      # Markdown content for resources
  hooks/            # React hooks
  layouts/          # Page layouts
  lib/              # Utility functions
  pages/            # Astro pages
    api/            # API endpoints
    admin/          # Admin pages
  styles/           # Global styles
public/             # Static assets
```

## Build Configuration

### Astro Configuration

The project uses a custom Astro configuration (`astro.config.mjs`) with the following key features:

- React integration for interactive components
- Tailwind CSS for styling
- Netlify adapter for deployment
- Asset optimization settings
- Build performance enhancements

### Build Optimization

The build process includes several optimizations:

- **Asset Optimization**
  - Image compression and optimization
  - CSS and JavaScript minification
  - Chunk splitting for vendor code
  - Preloading of critical resources

- **Caching Strategy**
  - Immutable caching for static assets
  - Appropriate cache headers for different file types
  - Cache busting through filename hashing

- **Performance Enhancements**
  - Code splitting
  - Tree shaking
  - Dead code elimination
  - Dynamic import preloading

## Component System

### UI Components

The project uses a combination of custom components and shadcn/ui components:

- **Layout Components**: Navbar, Hero, Footer
- **Product Components**: ProductGrid, ProductSpotlight, ProductCategories
- **Service Components**: ServicesList, ServicePlans, ServiceFAQ
- **Contact Components**: ContactForm, VisitUsTabbed
- **About Components**: Mission, History, TeamMember
- **Community Components**: LocalEvents, Reviews

### Component Guidelines

- Use TypeScript for all components
- Follow the shadcn/ui pattern for custom components
- Ensure all components are responsive
- Implement proper accessibility attributes
- Use Lucide React for icons

## Content Management

### Resources Section

The Resources section uses Astro's content collections with Markdown files:

- Each resource is a Markdown file in `src/content/resources/`
- Frontmatter contains metadata (title, description, date, etc.)
- Content is written in Markdown format
- Resources are rendered using Astro's content API

### Content Schema

Resources follow this schema:

```typescript
{
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  category: string;
  featured: boolean;
}
```

## SEO Implementation

### Structured Data

The project implements several Schema.org structured data types:

- **LocalBusiness**: Business information, location, hours
- **Product**: Product details for featured bikes
- **Service**: Service offerings and pricing
- **Article**: Blog post and resource content
- **BreadcrumbList**: Navigation hierarchy
- **FAQPage**: Frequently asked questions

### Meta Tags

Each page includes optimized meta tags:

- Title tags with location keywords
- Meta descriptions with calls to action
- Open Graph tags for social sharing
- Twitter Card tags for Twitter sharing
- Canonical URLs to prevent duplicate content

### Technical SEO

- XML sitemap with priority settings
- Robots.txt configuration
- Proper heading hierarchy
- Semantic HTML structure
- Responsive design for mobile-friendliness

## Security Implementation

### Headers

The following security headers are implemented:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Strict-Transport-Security
- Permissions-Policy

### CORS Configuration

- Configured allowed origins
- Set allowed methods
- Defined allowed headers
- Set max age for preflight

### Resource Protection

- SRI implementation
- Asset integrity checking
- Cross-Origin-Resource-Policy
- Cache control headers

## Mobile Optimization

### Touch Target Optimization

- Minimum 48px touch targets for interactive elements
- Adequate spacing between touch targets
- Enhanced active states for better feedback

### Mobile-Specific Features

- Click-to-call functionality
- Optimized forms for mobile input
- Back to top button for long pages
- Mobile-specific navigation

### Tab Interface Optimization

- Stacked tab layout on mobile devices
- Icon indicators for better visual recognition
- Improved touch target size for tab triggers
- Enhanced active state styling for better visibility
- Consistent spacing and alignment across devices

### Performance Considerations

- Reduced payload for mobile connections
- Optimized images for mobile devices
- Responsive text sizing
- Mobile-specific spacing utilities

## Deployment

### Netlify Configuration

The project is deployed to Netlify with the following configuration:

- Static site generation
- Custom domain configuration
- Redirect rules for clean URLs
- Cache control headers
- Security headers

### Build Process

The build process includes:

1. Content compilation
2. Asset optimization
3. Static site generation
4. Deployment to Netlify

## Testing Guidelines

### Accessibility Testing

- Screen reader compatibility
- Keyboard navigation
- Color contrast compliance
- Focus state visibility

### Cross-Browser Testing

- Test on Chrome, Firefox, Safari, and Edge
- Test on iOS and Android devices
- Verify responsive breakpoints
- Check touch interactions

### Performance Testing

- Lighthouse audits
- Core Web Vitals monitoring
- Load time measurements
- Interaction to Next Paint (INP) testing