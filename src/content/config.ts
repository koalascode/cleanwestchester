import { z, defineCollection } from 'astro:content';

const membersCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    //tags: z.array(z.string()),
    pfp: z.string(),
    email: z.string(),
    description: z.string().optional(),
    role: z.string(),
    position: z.number()
  }),
});

const articlesCollection = defineCollection({
  schema: z.object({
    authors: z.string().array(),
    title: z.string(),
    date: z.string(),
    coverimg: z.string(),
    description: z.string(),

  })
})

const cleanupsCollection = defineCollection({
  schema: z.object({
    participants: z.string().array(),
    name: z.string(),
    date: z.string(),
    icon: z.string(),
    coverimg: z.string().optional(),
    link: z.string(),
    hours: z.number(),
  })
})

export const collections = {
  'members': membersCollection,
  'articles': articlesCollection,
  'cleanups': cleanupsCollection,
};