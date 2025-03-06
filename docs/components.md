# Component Documentation

## Overview
This document provides detailed documentation for all components in the Haymarket Bicycles website.

## UI Components

### Layout Components

#### `Navbar`
Navigation component that provides site-wide navigation.

```tsx
import { Navbar } from '@/components/Navbar';

<Navbar />
```

**Features:**
- Responsive design with mobile menu
- Active link highlighting
- Smooth transitions
- Brand logo integration

#### `Hero`
Main hero section for landing pages.

```tsx
import { Hero } from '@/components/Hero';

<Hero />
```

**Features:**
- Full-width background image
- Gradient overlay
- Responsive text sizing
- Call-to-action buttons

#### `BackToTop`
Floating button that appears when scrolling down to allow users to return to the top of the page.

```tsx
import { BackToTop } from '@/components/BackToTop';

<BackToTop />
```

**Features:**
- Appears after scrolling threshold
- Smooth scroll to top
- Accessible design
- Mobile-friendly touch target

### Product Components

#### `ProductGrid`
Displays a grid of products with filtering capabilities.

```tsx
import { ProductGrid } from '@/components/ProductGrid';

<ProductGrid />
```

**Features:**
- Responsive grid layout
- Product cards with hover effects
- Image optimization
- Price and category display

#### `ProductSpotlight`
Featured products showcase component.

```tsx
import { ProductSpotlight } from '@/components/ProductSpotlight';

<ProductSpotlight />
```

**Features:**
- Highlighted product display
- Detailed product information
- Custom badges
- Responsive layout

#### `ProductCategories`
Displays product categories in a grid layout.

```tsx
import { ProductCategories } from '@/components/ProductCategories';

<ProductCategories />
```

**Features:**
- Category cards with icons
- Descriptive text
- Hover effects
- Responsive grid

#### `ProductFilters`
Sidebar component for filtering products.

```tsx
import { ProductFilters } from '@/components/ProductFilters';

<ProductFilters />
```

**Features:**
- Price range slider
- Brand checkboxes
- Size filters
- Sticky positioning

#### `BrandShowcase`
Displays bicycle brands available at the shop.

```tsx
import { BrandShowcase } from '@/components/BrandShowcase';

<BrandShowcase />
```

**Features:**
- Brand cards with logos
- Descriptions
- Hover effects
- Responsive grid

#### `ProductTabs`
Tab interface for switching between product views.

```tsx
import ProductTabs from '@/components/ProductTabs';

<ProductTabs 
  categories={<ProductCategories />}
  featured={<ProductSpotlight />}
  brands={<BrandShowcase />}
/>
```

**Features:**
- Tab navigation
- Content switching
- Smooth transitions
- Responsive design

### Service Components

#### `ServicesList`
Displays available bicycle services.

```tsx
import { ServicesList } from '@/components/ServicesList';

<ServicesList />
```

**Features:**
- Service cards with icons
- Pricing information
- Duration estimates
- Category organization

#### `ServicePlans`
Maintenance plan comparison component.

```tsx
import { ServicePlans } from '@/components/ServicePlans';

<ServicePlans />
```

**Features:**
- Plan comparison cards
- Feature lists
- Pricing display
- Call-to-action buttons

#### `ServiceFAQ`
Frequently asked questions about bicycle services.

```tsx
import { ServiceFAQ } from '@/components/ServiceFAQ';

<ServiceFAQ />
```

**Features:**
- Accordion interface
- Expandable questions
- Organized content
- Responsive design

#### `Services`
Overview of service categories with icons.

```tsx
import { Services } from '@/components/Services';

<Services />
```

**Features:**
- Service category cards
- Descriptive icons
- Brief descriptions
- Responsive grid

### Contact Components

#### `ContactForm`
Contact form component with validation.

```tsx
import { ContactForm } from '@/components/ContactForm';

<ContactForm />
```

**Features:**
- Form validation
- Error handling
- Success notifications
- Field types:
  - Name
  - Email
  - Subject
  - Message
- React Hook Form integration
- Supabase submission

#### `VisitUsTabbed`
Tabbed interface for multiple store locations.

```tsx
import VisitUsTabbed from '@/components/VisitUsTabbed';

<VisitUsTabbed 
  mainShopHours={mainShopHours}
  studioHours={studioHours}
/>
```

**Features:**
- Tab navigation between locations
- Separate information cards per location
- Responsive design for both mobile and desktop
- Location-specific contact information
- Interactive maps with directions
- Optimized for touch devices
- Visual indicators for active location
- Consistent styling with the rest of the site
- Accessible navigation with proper ARIA attributes
- Icon indicators for each location type

### About Components

#### `Mission`
Displays company mission and values.

```tsx
import { Mission } from '@/components/Mission';

<Mission />
```

**Features:**
- Value cards with icons
- Mission statement
- Responsive grid
- Hover effects

#### `History`
Timeline of company history.

```tsx
import { History } from '@/components/History';

<History />
```

**Features:**
- Timeline visualization
- Milestone cards
- Year indicators
- Responsive layout

#### `TeamMember`
Individual team member card.

```tsx
import { TeamMember } from '@/components/TeamMember';

<TeamMember
  name="John Smith"
  role="Service Manager"
  image="https://example.com/image.jpg"
  bio="Team member bio..."
  certifications={["Certification 1", "Certification 2"]}
/>
```

**Features:**
- Profile image
- Name and role
- Biography
- Certifications badges

### Community Components

#### `LocalEvents`
Displays local cycling events.

```tsx
import { LocalEvents } from '@/components/LocalEvents';

<LocalEvents />
```

**Features:**
- Event cards
- Date and location info
- Participant details
- Call-to-action buttons

#### `Reviews`
Customer reviews carousel.

```tsx
import { Reviews } from '@/components/Reviews';

<Reviews />
```

**Features:**
- Review cards
- Star ratings
- Customer quotes
- Carousel navigation

### Admin Components

#### `AdminNav`
Navigation for admin pages.

```tsx
import { AdminNav } from '@/components/AdminNav';

<AdminNav />
```

**Features:**
- Links to admin sections
- Icon indicators
- Responsive design

### Schema Components

#### `LocalBusinessSchema`
Schema.org markup for local business.

```astro
import LocalBusinessSchema from '@/components/LocalBusinessSchema.astro';

<LocalBusinessSchema />
```

**Features:**
- Structured data for SEO
- Business information
- Location details
- Opening hours

#### `BreadcrumbSchema`
Schema.org markup for breadcrumb navigation.

```astro
import BreadcrumbSchema from '@/components/BreadcrumbSchema.astro';

<BreadcrumbSchema items={breadcrumbItems} />
```

**Features:**
- Structured data for breadcrumbs
- SEO enhancement
- Navigation path

#### `FAQSchema`
Schema.org markup for frequently asked questions.

```astro
import FAQSchema from '@/components/FAQSchema.astro';

<FAQSchema />
```

**Features:**
- Structured data for FAQs
- Question-answer pairs
- SEO enhancement

#### `ServiceSchema`
Schema.org markup for service offerings.

```astro
import ServiceSchema from '@/components/ServiceSchema.astro';

<ServiceSchema />
```

**Features:**
- Structured data for services
- Price information
- Service descriptions
- SEO enhancement

#### `SocialPreviewImage`
Generates meta tags for social media previews.

```astro
import SocialPreviewImage from '@/components/SocialPreviewImage.astro';

<SocialPreviewImage 
  imageUrl="https://example.com/image.jpg"
  title="Page Title"
  opacity={0.7}
/>
```

**Features:**
- Open Graph meta tags
- Twitter card meta tags
- Customizable opacity
- Title overlay support

#### `TranslucentImage`
Creates a CSS-based translucent image overlay.

```astro
import TranslucentImage from '@/components/TranslucentImage.astro';

<TranslucentImage 
  imageUrl="https://example.com/image.jpg"
  opacity={0.7}
  width={1200}
  height={630}
  alt="Image description"
/>
```

**Features:**
- Adjustable opacity
- Customizable dimensions
- Alt text support

## UI Component Library

The project uses shadcn/ui components, which are imported from `@/components/ui/*`. These include:

- `Accordion` - Collapsible content panels
- `Alert` - Status messages
- `AlertDialog` - Modal dialogs for important actions
- `AspectRatio` - Maintains aspect ratio for content
- `Avatar` - User or entity representation
- `Badge` - Small status indicators
- `Button` - Interactive button elements
- `Calendar` - Date selection component
- `Card` - Container for related content
- `Carousel` - Scrollable content container
- `Checkbox` - Selection control
- `Collapsible` - Toggle visibility of content
- `Command` - Command palette interface
- `ContextMenu` - Right-click menu
- `Dialog` - Modal window
- `DropdownMenu` - Menu triggered by a button
- `Form` - Form components with validation
- `HoverCard` - Card displayed on hover
- `Input` - Text input field
- `Label` - Form field label
- `Menubar` - Horizontal menu
- `NavigationMenu` - Navigation component
- `Pagination` - Page navigation controls
- `Popover` - Floating content
- `Progress` - Progress indicator
- `RadioGroup` - Radio button group
- `ScrollArea` - Scrollable container
- `Select` - Dropdown selection
- `Separator` - Visual divider
- `Sheet` - Side panel
- `Skeleton` - Loading placeholder
- `Slider` - Range selection
- `Switch` - Toggle control
- `Table` - Data table
- `Tabs` - Tabbed interface
- `Textarea` - Multiline text input
- `Toast` - Notification message
- `Toaster` - Toast container
- `Toggle` - Two-state button
- `ToggleGroup` - Group of toggle buttons
- `Tooltip` - Informational popup

## Best Practices

### Component Usage
1. Always import components from the root component directory
2. Use client:load directive for interactive components in Astro
3. Maintain consistent prop naming conventions
4. Use TypeScript for type safety

### Styling
1. Use Tailwind CSS classes for styling
2. Follow the project's color scheme using CSS variables
3. Maintain responsive design patterns
4. Use hover-scale class for hover animations

### Performance
1. Lazy load images where appropriate
2. Use client:load sparingly
3. Implement proper error boundaries
4. Optimize component re-renders

### Accessibility
1. Ensure proper ARIA attributes
2. Maintain keyboard navigation
3. Use semantic HTML elements
4. Provide adequate color contrast
5. Ensure touch targets are at least 48px on mobile