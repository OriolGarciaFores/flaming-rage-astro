import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      publishDate: z.string(),
      description: z.string(),
      category: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      })
    })
});

export const collections = {
  blog: postsCollection,
  proyectos: postsCollection
};