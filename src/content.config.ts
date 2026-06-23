import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mediaItemSchema = z.object({
  type: z.enum(['image', 'video', 'youtube']),
  src: z.string(),
  title: z.string().optional(),
  alt: z.string().optional(),
  poster: z.string().optional(),
  position: z.string().optional(),
});

const coverSchema = mediaItemSchema.omit({ title: true, poster: true });

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Web Projects', 'Game Systems', 'Visual Work']),
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    highlights: z.array(z.unknown()).default([]),
    cover: coverSchema.optional(),
    heroCover: coverSchema.optional(),
    media: z.array(mediaItemSchema).default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
