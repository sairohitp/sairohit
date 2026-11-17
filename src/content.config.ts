import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/*
 * Blog posts live in src/content/blog as Markdown files.
 * Front matter: title, description, date, tags, art, and optionally related (a case study slug) and featured.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    /** Cover illustration style, drawn in CSS. */
    art: z.enum(['table', 'code', 'stage', 'a11y', 'waves', 'chat', 'palette', 'flow', 'terminal', 'grid']).default('table'),
    /** Slug of a related case study. */
    related: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
