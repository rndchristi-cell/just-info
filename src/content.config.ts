import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    category: z.string().optional().default('Umum'),
    tags: z.array(z.string()).optional().default([]),
    bannerImage: z.string().optional(),
    bannerUrl: z.string().url().optional(),
    bannerPosisi: z.enum(['atas', 'tengah', 'sidebar']).optional().default('atas'),
  }),
});

export const collections = {
  blog,
};
