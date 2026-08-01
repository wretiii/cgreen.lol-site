import { defineCollection, z } from 'astro:content';

const shared = {
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  draft: z.boolean().default(false),
};

const talks = defineCollection({
  schema: z.object({
    ...shared,
    event: z.string().optional(),
    location: z.string().optional(),
    slides: z.string().optional(),
    topics: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  schema: z.object({
    ...shared,
    updated: z.coerce.date().optional(),
    topics: z.array(z.string()).default([]),
  }),
});

export const collections = { talks, blog };
