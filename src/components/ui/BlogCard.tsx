"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  variants?: any;
}

export default function BlogCard({ post, variants }: BlogCardProps) {
  const isGreen = post.category === 'Technical Guide' || post.category === 'Industry News';

  return (
    <motion.div variants={variants} className="group cursor-pointer flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
        <div className="h-56 rounded-2xl mb-6 overflow-hidden relative shadow-md flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-luminosity" 
          />
          <div className="absolute bottom-5 left-5 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className={`text-[11px] font-bold px-3 py-1.5 rounded border flex items-center ${
              isGreen 
                ? 'bg-emerald-500 text-white border-emerald-400' 
                : 'bg-amber-500 text-navy-950 border-amber-400'
            }`}>
              Read Article <ChevronRight className="w-3 h-3 ml-1" />
            </span>
          </div>
        </div>
        
        <div className={`text-[11px] font-extrabold uppercase tracking-widest mb-3 flex-shrink-0 ${
          isGreen ? 'text-emerald-600' : 'text-amber-500'
        }`}>
          {post.category}
        </div>
        
        <h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-tight flex-shrink-0">
          {post.title}
        </h3>
        
        <p className="text-slate-600 text-[13px] mb-4 line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>
        
        {/* Date is now slate grey uniformly, fixing the previous green text issue */}
        <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center mt-auto">
          <Calendar className="w-3 h-3 mr-1.5" /> {post.date}
        </span>
      </Link>
    </motion.div>
  );
}
