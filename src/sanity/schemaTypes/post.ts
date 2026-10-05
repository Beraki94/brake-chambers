import { defineField, defineType } from 'sanity'

const postGroups = [
  { name: 'content', title: 'Content', default: true },
  { name: 'seo', title: 'SEO' },
];

const postCategories = ['Buying Guide', 'How-To', 'Innovation', 'Technical Guide', 'Industry News', 'Fleet Management'];

const postOrderings = [
  { title: 'Newest first', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] as any },
];

// Mirrors the BlogPost type in src/data/blogPosts.ts.
export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: postGroups,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'content', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'The blog post address: /blog/<slug>. Avoid changing it after publishing.',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
      options: {
        list: postCategories,
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'publishedAt', title: 'Publish Date', type: 'date', group: 'content', validation: (r) => r.required() }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string', group: 'content', description: 'e.g. 7 min read' }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short summary shown on blog cards.',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Cover Image URL',
      type: 'string',
      group: 'content',
      description: 'Path or link to the cover image. Ignored if a Cover Image is uploaded below.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image (upload)',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
    }),
    defineField({
      name: 'contentHtml',
      title: 'Article Body (HTML)',
      type: 'text',
      rows: 25,
      group: 'content',
      description: 'The full article in HTML (<h2>, <p>, <ul>, <strong>…).',
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seo', group: 'seo' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
  },
})
