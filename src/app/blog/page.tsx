import React from 'react';
import BlogClient from '@/features/blog/components/BlogClient';

export const metadata = {
  title: 'Industry Insights & News | BRC Brake Chambers',
  description: 'Stay updated with the latest in heavy-duty commercial vehicle braking, ISO compliance, engineering updates, and BRC company news.',
};

import { getBlogPosts } from '@/sanity/queries';

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  return <BlogClient blogPosts={blogPosts} />;
}
