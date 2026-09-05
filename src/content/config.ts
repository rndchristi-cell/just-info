import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    bannerImage: z.string().optional(),
    bannerUrl: z.string().optional(),
    bannerPosisi: z.enum(['atas', 'tengah', 'sidebar']).optional(),
  }),
});

export const collections = { blog };