import { z, defineCollection } from 'astro:content';

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string().url(),
    category: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  resources: resourcesCollection,
};