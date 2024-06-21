import { z, defineCollection } from "astro:content"
import { maxRating, minRating } from "../contants"

const toolCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    // TODO: Tags should be predefined, not arbitrary.
    tags: z.array(z.string()),
    rating: z.number()
      .min(minRating, `Rating must be higher or equal to ${minRating}`)
      .max(maxRating, `Rating must be less than or equal to ${maxRating}`),
    links: z.array(z.array(z.string()).length(2, "Links must be an array of display name and URL")),
    creationDate: z.date(),
  }),
})

export const collections = {
  tool: toolCollection,
}