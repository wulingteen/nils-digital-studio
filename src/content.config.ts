import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    titleDe: z.string().optional(),
    excerpt: z.string(),
    excerptEn: z.string().optional(),
    excerptDe: z.string().optional(),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    pinned: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
