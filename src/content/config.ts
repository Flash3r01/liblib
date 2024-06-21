import { z, defineCollection } from "astro:content"

const toolCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    // TODO: Tags should be predefined, not arbitrary.
    tags: z.array(z.string()),
    rating: z.number().min(0, "Rating must be positive").max(5, "Rating must be less than or equal to 5"),
    links: z.array(z.array(z.string()).length(2, "Links must be an array of display name and URL")),
    creationDate: z.date(),
  }),
})

export const collections = {
  tool: toolCollection,
}