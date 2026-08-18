"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, Share2 } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';
import { fadeInUp } from '../../lib/animations';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-16">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Link */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-amber-600 font-bold text-sm uppercase tracking-widest transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Articles
          </Link>
        </motion.div>

        {/* Post Header */}
        <motion.header variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-amber-500 text-navy-950 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5" /> {post.date}
            </span>
            <span className="text-slate-400 text-[12px] font-bold uppercase tracking-widest flex items-center hidden sm:flex">
              <Clock className="w-3.5 h-3.5 mr-1.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-light">
            {post.excerpt}
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-16">
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl relative">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="lg:col-span-8">
            <style dangerouslySetInnerHTML={{__html: `
              .blog-content p { margin-bottom: 1.5rem; line-height: 1.8; color: #475569; font-size: 1.125rem; }
              .blog-content h2 { font-size: 1.875rem; font-weight: 800; color: #0f172a; margin-top: 2.5rem; margin-bottom: 1rem; }
              .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #475569; font-size: 1.125rem; }
              .blog-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #475569; font-size: 1.125rem; }
              .blog-content li { margin-bottom: 0.5rem; }
              .blog-content strong { color: #0f172a; font-weight: 700; }
            `}} />
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="lg:col-span-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-32">
              <h3 className="text-sm font-extrabold text-navy-900 uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">
                Share Article
              </h3>
              <div className="flex gap-4 mb-10">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-colors border border-slate-200">
                  <Share2 className="w-4 h-4" />
                </button>
                {/* Add social icons here if needed */}
              </div>

              <h3 className="text-sm font-extrabold text-navy-900 uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">
                Contact Us
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                For sales inquiries, bulk orders, or technical support, please contact our team.
              </p>
              <a href="mailto:sales@brakechambers.com" className="text-amber-600 font-bold hover:underline">
                sales@brakechambers.com
              </a>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
