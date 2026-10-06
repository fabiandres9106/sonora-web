import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const services = defineCollection({
	loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			order: z.int(),
			description: z.string(),
			href: z.string().optional(),
			heroImage:z.optional(image()),
			tags: z.string().array().optional(),
		}),
});

const events = defineCollection({
	loader: glob({ base: './src/content/events', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			order: z.int(),
			description: z.string(),
			href: z.string().optional(),
			heroImage:z.optional(image()),
			tags: z.string().array().optional(),
		}),
});

export const collections = { blog, services, events };
