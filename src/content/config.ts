import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    titleEn: z.string().optional(),
    titleDe: z.string().optional(),
    excerpt: z.string(),
    excerptEn: z.string().optional(),
    excerptDe: z.string().optional(),
    date: z.string().or(z.date()),
    author: z.string().default('Nils Liu'),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    pinned: z.boolean().default(false),
  })
});

export const collections = {
  'posts': postsCollection,
};
