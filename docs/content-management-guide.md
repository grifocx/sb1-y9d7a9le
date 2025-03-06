# Content Management Guide

## Overview
This guide explains how to manage the Resources section of the website using Markdown files. This approach provides a simple, Git-friendly way to update content without requiring a database or CMS.

## Directory Structure
```
src/
  content/
    resources/
      config.ts           # Schema configuration
      *.md               # Resource content files
  pages/
    resources/
      index.astro        # Resources listing page
      [slug].astro       # Individual resource page
```

## Adding New Content

### 1. Create a New Resource
Create a new `.md` file in `src/content/resources/` with the following frontmatter structure:

```markdown
---
title: "Your Title Here"
description: "A brief description of the resource"
date: "YYYY-MM-DD"
author: "Author Name"
image: "https://images.unsplash.com/..."
category: "Category Name"
featured: false
---

Your content here in Markdown format...
```

### 2. Required Fields
- `title`: The title of the resource
- `description`: A brief summary (shown in cards)
- `date`: Publication date in YYYY-MM-DD format
- `author`: Content author's name
- `image`: URL to the header image (Unsplash recommended)
- `category`: Content category (e.g., "Maintenance", "Buying Guide")
- `featured`: Boolean to mark as featured (only one should be true)

### 3. Writing Content
- Use Markdown syntax for content
- Structure with headings (## for main sections)
- Use lists and emphasis where appropriate
- Keep paragraphs concise and readable

### 4. Images
- Use high-quality images from Unsplash
- Ensure image URLs are valid and accessible
- Choose images that are relevant to the content

## Best Practices

1. **File Naming**
   - Use kebab-case for filenames
   - Make names descriptive and URL-friendly
   - Example: `bike-maintenance-101.md`

2. **Content Structure**
   - Start with a clear introduction
   - Use proper heading hierarchy
   - Include practical, actionable information
   - End with a call to action when appropriate

3. **Maintenance**
   - Regularly review and update content
   - Check for broken image links
   - Update dates when content is modified
   - Remove outdated information

4. **SEO Considerations**
   - Use descriptive titles
   - Write compelling descriptions
   - Choose relevant categories
   - Include appropriate keywords naturally

## Example Resource

```markdown
---
title: "Essential Bike Maintenance Tips"
description: "Learn the fundamental maintenance tasks every cyclist should know"
date: "2024-02-21"
author: "John Smith"
image: "https://images.unsplash.com/photo-example"
category: "Maintenance"
featured: false
---

Regular bike maintenance is crucial for both safety and performance...

## 1. Clean Your Chain

A clean chain is essential for...

## 2. Check Tire Pressure

Proper tire pressure ensures...
```

## Categories

Current categories include:
- Maintenance
- Buying Guide
- Training
- Community
- Events
- Documentation

## Featured Content

- Only one article should be marked as `featured: true`
- Featured articles appear prominently at the top of the resources page
- Update featured status by modifying the frontmatter

## Publishing Workflow

1. **Create Content**
   - Write content in Markdown format
   - Add appropriate frontmatter
   - Place in the resources directory

2. **Preview Content**
   - Run the development server
   - Check formatting and appearance
   - Verify links and images

3. **Publish Content**
   - Commit changes to the repository
   - Push to the main branch
   - Wait for the site to rebuild

## Content Guidelines

### Writing Style
- Use clear, concise language
- Write in active voice
- Address reader directly
- Include practical examples
- Break up long content with subheadings

### SEO Best Practices
- Include location keywords where appropriate
- Use descriptive headings
- Include relevant terms naturally
- Optimize image alt text
- Link to related content

### Content Types
- How-to guides
- Maintenance tips
- Buying guides
- Community events
- Training advice
- Product information