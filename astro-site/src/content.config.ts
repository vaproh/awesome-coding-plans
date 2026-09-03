import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const plans = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/plans" }),
  schema: z.object({
    title: z.string(),
    price: z.string().default(""),
    models: z.string().default(""),
    quota: z.string().default(""),
    website: z.string().default(""),
    bestFor: z.string().default(""),
    type: z.enum(["Free", "Paid", "Freemium"]).default("Paid"),
    priceRange: z.enum(["Free", "Budget", "Mid", "Premium", "Enterprise"]).default("Premium"),
    quotaModel: z.enum(["Credits", "Tokens", "Requests", "Sessions", "Unlimited", "Mixed"]).default("Mixed"),
    bestForTags: z.array(z.string()).default([]),
    modelAccess: z.enum(["Single", "Multi-model", "Aggregator", "Frontier"]).default("Multi-model"),
    flags: z.array(z.string()).default([]),
  }),
});

export const collections = { plans };
