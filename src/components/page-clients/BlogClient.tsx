"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts, BlogPostCategory } from '@/data/blogPosts';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const categories: (BlogPostCategory | 'All')[] = [
  'All',
  'Product Release',
  'Certification',
  'Logistics Notice',
  'Technical Guide',
  'Company News'
];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<BlogPostCategory | 'All'>('All');

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'All' ? true : post.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <SectionHeader 
        title="Industry Insights & News"
        description="Technical bulletins, engineering updates, and company announcements from BRC Brake Chambers."
        accentColor="amber"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-amber-500 text-navy-950 shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Force re-render animation when category changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} variants={fadeInUp} />
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-24 text-slate-500">
            No articles found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
