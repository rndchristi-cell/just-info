import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // Default membuat artikel lama tetap valid
    // meskipun belum memiliki field category atau tags.
    category: z.string().optional().default('Umum'),
    tags: z.array(z.string()).optional().default([]),

    bannerImage: z.string().optional(),
    bannerUrl: z.string().optional(),
    bannerPosisi: z
      .enum(['atas', 'tengah', 'sidebar'])
      .optional(),
  }),
});

export const collections = {
  blog,
};
