import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        name: z.string(),
        img: z.string(),
        alt: z.string(),
        sm_description: z.string(),
        technologies: z.array(z.string())
    })
})

export const collections = { projects }