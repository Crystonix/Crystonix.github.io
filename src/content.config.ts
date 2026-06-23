import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { projectCategorySchema } from './data/projectCategories';

const baseMediaSchema = z.object({
  src: z.string(),
  title: z.string().optional(),
  alt: z.string().optional(),
  position: z.string().optional(),
});

const imageMediaSchema = baseMediaSchema.extend({
  type: z.literal('image'),
});

const videoMediaSchema = baseMediaSchema.extend({
  type: z.literal('video'),
  poster: z.string().optional(),
});

const youtubeMediaSchema = z.object({
  type: z.literal('youtube'),
  src: z.url(),
  title: z.string().optional(),
});

const visualPreviewSchema = z.union([imageMediaSchema, videoMediaSchema]);
const projectMediaSchema = z.union([
  imageMediaSchema,
  videoMediaSchema,
  youtubeMediaSchema,
]);
const projectHighlightSchema = z.union([
  z.string(),
  z.object({
    title: z.string().optional(),
    text: z.string(),
  }),
]);

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: projectCategorySchema,
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    highlights: z.array(projectHighlightSchema).default([]),
    cover: visualPreviewSchema.optional(),
    heroCover: visualPreviewSchema.optional(),
    media: z.array(projectMediaSchema).default([]),
    links: z
      .object({
        repo: z.url().optional(),
        demo: z.url().optional(),
      })
      .default({}),
  }),
});

export const collections = { projects };
