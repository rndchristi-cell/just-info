import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
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
