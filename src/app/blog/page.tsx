import React from 'react';
import BlogClient from '@/features/blog/components/BlogClient';

export const metadata = {
  title: 'Brake Chamber Blog: Technical Guides, How-To & Industry Insights | BRC',
  description: 'Technical bulletins, installation guides, cross-reference updates, and regulatory compliance insights from BRC Brake Chambers.',
};

import { getBlogPosts } from '@/sanity/queries';

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return <BlogClient blogPosts={blogPosts} />;
}
