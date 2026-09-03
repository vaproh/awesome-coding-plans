import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const plans = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/plans" }),
  schema: z.object({
    title: z.string(),
    price: z.string(),
    models: z.string(),
    quota: z.string(),
    website: z.string().url(),
    bestFor: z.string(),
  }),
});

export const collections = { plans };
