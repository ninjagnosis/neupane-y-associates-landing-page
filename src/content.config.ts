import { defineCollection, z, getCollection as astroGetCollection } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    icon: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    deliverables: z.array(z.string()),
    whoFor: z.array(z.string()),
    process: z
      .array(
        z.object({
          step: z.string(),
          detail: z.string(),
        }),
      )
      .optional(),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Yogesh Neupane'),
    category: z.enum(['Tax', 'Audit', 'Advisory', 'Compliance', 'Firm news']),
    readingTime: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
    image: z.string(),
    qualifications: z.array(z.string()),
    specializations: z.array(z.string()),
    summary: z.string(),
  }),
});

export const collections = { services, insights, team };
