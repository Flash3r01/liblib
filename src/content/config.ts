import { z, defineCollection, reference } from "astro:content"
import { maxRating, minRating } from "../contants"

const toolCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    tags: z.array(reference("tag")),
    rating: z.number()
      .min(minRating, `Rating must be higher or equal to ${minRating}`)
      .max(maxRating, `Rating must be less than or equal to ${maxRating}`),
    links: z.array(z.array(z.string()).length(2, "Links must be an array of display name and URL")),
    description: reference("text"),
    notes: reference("text"),
    created: z.date(),
  }),
})

const tagCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    created: z.date(),
    color: z.string().regex(/^#[0-9a-f]{6}$/i, "Color must be a hexadecimal color code"),
  }),
})

const textCollection = defineCollection({
  type: "content",
  schema: z.object({
    created: z.date(),
    updated: z.date(),
  })
})

export const collections = {
  tool: toolCollection,
  tag: tagCollection,
  text: textCollection,
}