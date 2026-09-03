import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const plans = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/plans" }),
  schema: z.object({
    title: z.string(),
    price: z.string().optional(),
    models: z.string().optional(),
    quota: z.string().optional(),
    website: z.string().optional(),
    bestFor: z.string().optional(),
  }),
});

export const collections = { plans };
