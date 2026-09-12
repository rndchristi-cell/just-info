import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const emptyToUndefined = (value: unknown) =>
  typeof value === 'string' && value.trim() === '' ? undefined : value;

const optionalUrl = z.preprocess(emptyToUndefined, z.string().url().optional());
const optionalString = z.preprocess(emptyToUndefined, z.string().optional());
const optionalDate = z.preprocess(emptyToUndefined, z.coerce.date().optional());

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    seoTitle: optionalString,
    seoDescription: optionalString,
    author: optionalString.default('Just Info'),
    pubDate: z.coerce.date(),
    updatedDate: optionalDate,
    category: z.string().optional().default('Umum'),
    tags: z.array(z.string()).optional().default([]),
    bannerImage: optionalString,
    bannerUrl: optionalUrl,
    bannerPosisi: z.enum(['atas', 'tengah', 'sidebar']).optional().default('atas'),
    noindex: z.boolean().optional().default(false),
  }),
});

const products = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/products',
  }),
  schema: z.object({
    name: z.string().min(1),
    image: z.string().min(1),
    description: z.string().min(1),
    url: z.string().url(),
    category: z.string().min(1),
    type: z.enum(['physical', 'digital']).default('digital'),
    order: z.number().int().default(10),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  blog,
  products,
};
