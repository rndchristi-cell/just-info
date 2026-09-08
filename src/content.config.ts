import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const emptyToUndefined = (value: unknown) =>
  typeof value === 'string' && value.trim() === '' ? undefined : value;

const optionalUrl = z.preprocess(emptyToUndefined, z.string().url().optional());
const optionalString = z.preprocess(emptyToUndefined, z.string().optional());

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
    bannerImage: optionalString,
    bannerUrl: optionalUrl,
    bannerPosisi: z.enum(['atas', 'tengah', 'sidebar']).optional().default('atas'),
  }),
});

export const collections = {
  blog,
};
