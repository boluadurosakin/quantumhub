import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    stack:       z.array(z.string()),
    status:      z.enum(['production', 'experimental', 'archived']),
    featured:    z.boolean().default(false),
    date:        z.coerce.date(),
    category:    z.enum(['ai', 'automation', 'web', 'backend', 'devops', 'data', 'api', 'tool']),
    github:      z.string().url().optional(),
    demo:        z.string().url().optional(),
    cover:       z.string().optional(),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    stack:       z.array(z.string()).default([]),
    role:        z.string().optional(),
    timeline:    z.string().optional(),
    liveUrl:     z.string().url().optional(),
    githubUrl:   z.string().url().optional(),
    featured:    z.boolean().default(false),
    date:        z.coerce.date().optional(),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { projects, caseStudies };