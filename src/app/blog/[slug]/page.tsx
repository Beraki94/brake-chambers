import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import BlogPostClient from '@/features/blog/components/BlogPostClient';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | BRC Brake Chambers',
    };
  }

  return {
    title: `${post.title} | BRC Brake Chambers`,
    description: post.excerpt,
  };
}

// Generate static params for all known blog posts at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = blogPosts[postIndex];
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return <BlogPostClient post={post} prevPost={prevPost} nextPost={nextPost} />;
}
