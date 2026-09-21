"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import PageHeader from '@/components/layout/PageHeader';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts, BlogPostCategory } from '@/data/blogPosts';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import TrendingModelsMarquee from '@/components/ui/TrendingModelsMarquee';
import { Newspaper } from 'lucide-react';

const categories: (BlogPostCategory | 'All')[] = [
  'All',
  'Buying Guide',
  'How-To',
  'Innovation',
  'Technical Guide',
  'Industry News',
  'Fleet Management'
];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<BlogPostCategory | 'All'>('All');

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'All' ? true : post.category === activeCategory
  );

  return (
    <article className="min-h-screen bg-slate-50 font-sans overflow-x-clip pb-0">
      <PageHeader
      badge="Brake Chamber Insights"
        badgeIcon={Newspaper}
      title="Brake Chamber Blog: Technical Guides, Industry News & Updates"
      description="Technical bulletins, installation guides, cross-reference updates, and industry news from BRC Brake Chambers. Written for fleet managers, technicians, and distributors who spec, install, and sell commercial brake chambers."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' }
        ]}
      />

      <div className="relative z-20 -mt-8 md:-mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-16">
          {/* Category Filter Toolbar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 md:p-6 mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-amber-500 text-navy-950 shadow-md transform -translate-y-0.5' 
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-navy-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

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
      
      {/* Blog CTA */}
      <section className="py-16 md:py-24 bg-[#F1EFE8] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl shadow-navy-900/30 border border-navy-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Internal Card Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>

            <div className="max-w-xl relative z-10 w-full">
              <SectionHeader
                badge="Expert Support"
                title="Have Questions About Our Products?"
                description="Whether you need help with part identification, cross-referencing, or engineering specifications, our technical team is ready to help."
                align="left"
                theme="dark"
                accentColor="amber"
                className="!mb-0"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/contact" className="inline-block w-full bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-center px-10 py-5 rounded-xl uppercase tracking-widest text-[14px] transition-all duration-300 shadow-xl shadow-amber-500/20 transform hover:-translate-y-1 whitespace-nowrap">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cross-Sell Section */}
      <TrendingModelsMarquee />
    </article>
  );
}
