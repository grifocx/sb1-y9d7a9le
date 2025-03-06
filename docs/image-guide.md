# Image Optimization Guide

## Overview
This guide explains how to use Netlify's Image CDN for optimizing and serving images across the Haymarket Bicycles website.

## Image CDN Configuration

### Base URL Structure
```
/.netlify/images/[path-to-image]?[parameters]
```

### Common Parameters
- `nf_resize`: Resize mode (`fit`, `fill`, `crop`)
- `w`: Width in pixels
- `h`: Height in pixels
- `q`: Quality (1-100)
- `f`: Format (auto, webp, jpeg, png)

## Recommended Image Specifications

### Product Images
- Upload size: 1200x800px
- Aspect ratio: 3:2
- Format: JPG or WebP
- Quality: 80-90%

Example URL:
```
/.netlify/images/products/bike-model.jpg?nf_resize=fit&w=1200&q=85
```

### Hero Images
- Upload size: 1920x1080px
- Aspect ratio: 16:9
- Format: JPG or WebP
- Quality: 80-90%

Example URL:
```
/.netlify/images/hero/store-front.jpg?nf_resize=fit&w=1920&q=85
```

### Resource/Blog Images
- Upload size: 1600x900px
- Aspect ratio: 16:9
- Format: JPG or WebP
- Quality: 80-90%

Example URL:
```
/.netlify/images/resources/maintenance-guide.jpg?nf_resize=fit&w=1600&q=85
```

### Thumbnail/Card Images
- Upload size: 600x400px
- Aspect ratio: 3:2
- Format: JPG or WebP
- Quality: 80-85%

Example URL:
```
/.netlify/images/products/thumbnail.jpg?nf_resize=fit&w=600&q=80
```

## Best Practices

### Responsive Images
Use different sizes for different viewports:

```html
<img
  src="/.netlify/images/products/bike.jpg?nf_resize=fit&w=400"
  srcset="
    /.netlify/images/products/bike.jpg?nf_resize=fit&w=400 400w,
    /.netlify/images/products/bike.jpg?nf_resize=fit&w=800 800w,
    /.netlify/images/products/bike.jpg?nf_resize=fit&w=1200 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Product description"
/>
```

### Art Direction
For different image crops on different devices:

```html
<picture>
  <source
    media="(min-width: 768px)"
    srcset="/.netlify/images/hero/desktop.jpg?nf_resize=fit&w=1920"
  />
  <source
    media="(min-width: 400px)"
    srcset="/.netlify/images/hero/tablet.jpg?nf_resize=fit&w=800"
  />
  <img
    src="/.netlify/images/hero/mobile.jpg?nf_resize=fit&w=400"
    alt="Hero image"
  />
</picture>
```

### Performance Optimization
1. **Lazy Loading**
   ```html
   <img loading="lazy" ... />
   ```

2. **Width/Height Attributes**
   Always specify dimensions to prevent layout shift:
   ```html
   <img
     width="800"
     height="600"
     src="/.netlify/images/products/bike.jpg?nf_resize=fit&w=800"
     alt="Product"
   />
   ```

3. **Background Images**
   ```css
   .hero-section {
     background-image: url('/.netlify/images/hero/background.jpg?nf_resize=fit&w=1920&q=85');
     background-size: cover;
     background-position: center;
   }
   ```

## Common Use Cases

### Product Cards
```tsx
<Card>
  <img
    src={`/.netlify/images/${product.image}?nf_resize=fit&w=600`}
    srcset={`
      /.netlify/images/${product.image}?nf_resize=fit&w=400 400w,
      /.netlify/images/${product.image}?nf_resize=fit&w=600 600w
    `}
    sizes="(max-width: 768px) 100vw, 50vw"
    alt={product.name}
    width="600"
    height="400"
    loading="lazy"
    className="object-cover aspect-[3/2]"
  />
</Card>
```

### Hero Sections
```tsx
<div className="relative">
  <img
    src={`/.netlify/images/hero/background.jpg?nf_resize=fit&w=1920`}
    srcset={`
      /.netlify/images/hero/background.jpg?nf_resize=fit&w=800 800w,
      /.netlify/images/hero/background.jpg?nf_resize=fit&w=1200 1200w,
      /.netlify/images/hero/background.jpg?nf_resize=fit&w=1920 1920w
    `}
    sizes="100vw"
    alt="Hero background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

### Blog/Resource Images
```tsx
<article>
  <img
    src={`/.netlify/images/resources/${post.image}?nf_resize=fit&w=1600`}
    srcset={`
      /.netlify/images/resources/${post.image}?nf_resize=fit&w=800 800w,
      /.netlify/images/resources/${post.image}?nf_resize=fit&w=1200 1200w,
      /.netlify/images/resources/${post.image}?nf_resize=fit&w=1600 1600w
    `}
    sizes="(max-width: 768px) 100vw, 75vw"
    alt={post.title}
    width="1600"
    height="900"
    loading="lazy"
    className="rounded-lg shadow-lg"
  />
</article>
```

## Image Upload Process

1. **Prepare Images**
   - Use appropriate dimensions for the intended use
   - Optimize before upload using tools like ImageOptim
   - Use descriptive filenames

2. **Upload to Netlify**
   - Use the Netlify UI or CLI
   - Maintain organized folder structure
   - Keep original high-resolution versions

3. **Implementation**
   - Use appropriate CDN parameters
   - Implement responsive images
   - Add proper alt text
   - Include width/height attributes
   - Enable lazy loading where appropriate

## Troubleshooting

### Common Issues

1. **Blurry Images**
   - Increase quality parameter
   - Check original image dimensions
   - Verify resize parameters

2. **Slow Loading**
   - Reduce quality for less important images
   - Implement proper lazy loading
   - Use appropriate sizes for viewport

3. **Layout Shift**
   - Always include width/height attributes
   - Use aspect-ratio CSS
   - Implement proper placeholder techniques

### Support

For additional assistance:
- Check Netlify's Image Transform documentation
- Contact Netlify support
- Review browser developer tools for network/performance issues