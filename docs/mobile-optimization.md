# Mobile Optimization Guide

## Overview
This document outlines the mobile optimization strategies implemented for the Haymarket Bicycles website. These improvements focus on touch target optimization, responsive design, navigation improvements, and overall mobile user experience.

## Implemented Enhancements

### Touch Target Optimization
- Increased interactive element sizes to meet the recommended 48px minimum touch target size
- Added `mobile-touch-target` utility class for consistent touch target sizing
- Enhanced button and link padding for better touchability
- Improved spacing between interactive elements to prevent accidental taps
- Optimized mobile navigation tabs with larger touch areas

### Mobile Navigation Improvements
- Added visual feedback for active navigation states
- Enhanced mobile tab navigation with better visual indicators
- Implemented "Back to Top" button for long scrolling pages
- Added scroll margin for anchor links to account for fixed header
- Improved mobile menu with more distinct active states

### Content Hierarchy Refinements
- Added responsive text sizing for better readability on small screens
- Implemented mobile-specific spacing utilities
- Enhanced content padding on mobile devices
- Improved vertical spacing between elements with `mobile-spacing` utility
- Adjusted section padding with `mobile-py` utility

### Mobile-Specific Features
- Added click-to-call button in hero section for mobile users
- Implemented "Back to Top" floating button for long pages
- Enhanced form inputs with larger touch targets
- Improved mobile form element sizing
- Added telephone link detection for mobile devices

### Accessibility Improvements
- Added proper `aria-current` attributes for navigation
- Enhanced viewport meta tag with improved settings
- Added width and height attributes to images to prevent layout shifts
- Improved focus states for interactive elements
- Enhanced form label associations

### Tab Interface Optimization
- Redesigned tab interface for better mobile usability
- Implemented stacked tab layout on mobile devices
- Added icon indicators for better visual recognition
- Improved touch target size for tab triggers
- Enhanced active state styling for better visibility
- Ensured consistent spacing and alignment across devices
- Optimized tab content for mobile viewing

## Technical Implementation

### Mobile Utility Classes
```css
/* Mobile touch target optimization */
.mobile-touch-target {
  min-height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile spacing optimization */
.mobile-spacing > * + * {
  margin-top: 1.5rem;
}

/* Mobile padding optimization */
.mobile-padding {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

/* Mobile vertical padding optimization */
.mobile-py {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

/* Active state for mobile navigation */
.mobile-nav-active {
  background-color: hsl(var(--accent)/0.1);
  color: hsl(var(--accent));
  font-weight: 500;
}

/* Custom styles for tabs */
@media (max-width: 640px) {
  [role="tablist"] {
    background-color: transparent;
    border: none;
    padding: 0;
  }
  
  [role="tablist"] [data-state] {
    border: 1px solid hsl(var(--border));
    border-radius: var(--radius);
    margin-bottom: 0.5rem;
  }
  
  [role="tablist"] [data-state="active"] {
    border-color: hsl(var(--accent));
  }
}
```

### Back to Top Component
```tsx
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`back-to-top ${isVisible ? 'visible' : ''} bg-background/80 backdrop-blur-sm`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
```

### Mobile Navigation
```tsx
{/* Mobile Navigation */}
<nav className="md:hidden sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
  {/* Logo and Brand */}
  <div className="flex items-center justify-between px-4 h-16">
    <a href="/" className="flex items-center group">
      <Bike className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
      <span className="ml-2 text-lg font-semibold group-hover:text-accent transition-colors">
        Haymarket Bicycles
      </span>
    </a>
    
    <a href="tel:+17037541911" className="mobile-touch-target">
      <Phone className="h-5 w-5 text-accent" />
    </a>
  </div>

  {/* Navigation Icons */}
  <div className="flex justify-around items-center px-2 h-14 border-t">
    {navigation.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.href);
      return (
        <a
          key={item.id}
          href={item.href}
          className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg mobile-touch-target ${
            active
              ? 'mobile-nav-active'
              : 'text-foreground/60 hover:text-accent hover:bg-accent/5'
          } transition-colors`}
          aria-current={active ? 'page' : undefined}
        >
          <Icon className="h-5 w-5" />
          <span className="text-xs mt-1">{item.name}</span>
        </a>
      );
    })}
  </div>
</nav>
```

### Optimized Tab Interface
```tsx
<Tabs defaultValue="main-shop" className="w-full">
  <TabsList className="flex flex-col sm:flex-row w-full mb-8 gap-2 sm:gap-0">
    <TabsTrigger value="main-shop" className="text-base py-3 justify-start sm:justify-center w-full">
      <Bike className="h-4 w-4 mr-2" />
      <span>Main Shop</span>
    </TabsTrigger>
    <TabsTrigger value="studio" className="text-base py-3 justify-start sm:justify-center w-full">
      <Coffee className="h-4 w-4 mr-2" />
      <span className="text-left">Haymarket Bicycles Studio @ Doppio Bunny Coffee</span>
    </TabsTrigger>
  </TabsList>
  
  <TabsContent value="main-shop" className="fade-in">
    {/* Main shop content */}
  </TabsContent>
  
  <TabsContent value="studio" className="fade-in">
    {/* Studio content */}
  </TabsContent>
</Tabs>
```

## Testing Guidelines

### Device Testing
- Test on various iOS devices (iPhone SE, iPhone X+, iPad)
- Test on various Android devices (small, medium, large screens)
- Test on different browsers (Chrome, Safari, Firefox)
- Test with different connection speeds

### Touch Interaction Testing
- Verify all touch targets meet 48px minimum size
- Test navigation with touch only (no keyboard)
- Verify form inputs are easy to tap and use
- Test scrolling and touch gestures
- Verify tab interface works correctly on touch devices
- Test tab switching on various screen sizes

### Accessibility Testing
- Test with VoiceOver on iOS
- Test with TalkBack on Android
- Verify proper focus states
- Check color contrast on mobile
- Ensure tab interface is keyboard navigable
- Verify ARIA attributes are correctly implemented

## Best Practices

### Touch Targets
- Minimum size: 48px × 48px
- Adequate spacing between targets (at least 8px)
- Visual feedback on touch
- Proper hit testing area

### Typography
- Minimum font size: 16px for body text
- Line height: at least 1.5
- Adequate contrast
- Responsive text sizing

### Forms
- Large input fields (min-height: 48px)
- Clear labels
- Visible focus states
- Appropriate input types (tel, email, etc.)

### Navigation
- Clear, tappable navigation items
- Visible active states
- Easy access to main sections
- Back to top functionality for long pages

### Tab Interfaces
- Stack tabs vertically on mobile
- Use icons for better recognition
- Provide clear visual feedback for active state
- Ensure adequate touch target size
- Maintain consistent spacing and alignment

## Performance Considerations

### Image Optimization
- Responsive images with srcset
- Lazy loading for below-the-fold images
- Proper width and height attributes
- WebP format where supported

### JavaScript Optimization
- Minimal JavaScript for mobile
- Defer non-critical scripts
- Use passive event listeners
- Optimize animations for mobile

### CSS Optimization
- Mobile-first approach
- Minimal CSS for mobile
- Optimize critical rendering path
- Reduce unnecessary styles