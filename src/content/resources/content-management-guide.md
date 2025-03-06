---
title: "Content Management Guide: Adding and Updating Resources"
description: "A comprehensive guide for managing content in the Resources section using Git-based workflow."
date: "2024-02-21"
author: "Michael Thompson"
image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80"
category: "Documentation"
featured: false
---

This guide explains how to manage content in the Resources section using our Git-based workflow.

## Content Structure

### File Location
All resource content is stored in the `src/content/resources` directory as Markdown (`.md`) files.

### Required Frontmatter
Every resource file must include these fields at the top:

```yaml
---
title: "Your Title Here"
description: "Brief, compelling description"
date: "YYYY-MM-DD"
author: "Author Name"
image: "https://images.unsplash.com/..."
category: "Category Name"
featured: false
---
```

## Adding New Content

### 1. Create New File
- Use descriptive, URL-friendly filenames
- Use kebab-case: `your-article-title.md`
- Place in `src/content/resources/`

### 2. Write Content
Use Markdown formatting:
```markdown
## Main Heading

Regular paragraph text with **bold** and *italic* emphasis.

### Subheading

- List item one
- List item two
- List item three

1. Numbered item one
2. Numbered item two
3. Numbered item three
```

### 3. Best Practices
- Start with a clear introduction
- Use proper heading hierarchy (## for sections)
- Include practical, actionable information
- End with relevant calls to action
- Keep paragraphs concise
- Use lists for better readability

## Content Organization

### Categories
Current categories include:
- Maintenance
- Buying Guide
- Training
- Community
- Events
- Documentation

### Featured Content
- Only one article should be marked as `featured: true`
- Featured articles appear prominently at the top of the resources page
- Update featured status by modifying the frontmatter

## Workflow

### 1. Local Development
```bash
# Create new content
1. Create .md file in src/content/resources/
2. Add frontmatter and content
3. Run dev server to preview
4. Test all links and formatting
```

### 2. Version Control
```bash
# Commit changes
1. Stage new/modified files
2. Commit with descriptive message
3. Push to repository
```

### 3. Deployment
- Site automatically rebuilds when changes are pushed
- New content is live within minutes
- No additional deployment steps needed

## Content Guidelines

### Writing Style
- Use clear, concise language
- Write in active voice
- Address reader directly
- Include practical examples
- Break up long content with subheadings

### Images
- Use high-quality images from Unsplash
- Choose relevant, visually appealing images
- Ensure proper licensing
- Optimize for web performance

### SEO Best Practices
- Use descriptive titles
- Write compelling descriptions
- Include relevant keywords naturally
- Use proper heading hierarchy
- Add alt text for images

## Maintenance

### Regular Tasks
- Review content monthly
- Update outdated information
- Fix broken links
- Update images if needed
- Refresh featured content

### Content Calendar
- Plan content in advance
- Maintain consistent publishing schedule
- Coordinate with events and promotions
- Track content performance

## Example Article Structure

```markdown
---
title: "Essential Bike Maintenance Tips"
description: "Learn the fundamental maintenance tasks every cyclist should know"
date: "2024-02-21"
author: "Michael Thompson"
image: "https://images.unsplash.com/..."
category: "Maintenance"
featured: false
---

Introduction paragraph explaining the importance of the topic...

## Main Topic One

Detailed explanation with key points...

### Subtopic

Specific details and examples...

## Main Topic Two

More content with practical tips...

## Conclusion

Summary and call to action...
```

## Need Help?

If you have questions about content management:
- Review this guide
- Check existing articles for examples
- Contact the technical team
- Submit questions through the repository

Remember, quality content helps our community and improves our search engine visibility. Take time to create valuable, well-structured resources that benefit our readers.