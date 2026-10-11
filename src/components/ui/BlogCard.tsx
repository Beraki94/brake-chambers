"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  variants?: any;
}

export default function BlogCard({ post, variants }: BlogCardProps) {
  const isGreen = post.category === 'Technical Guide' || post.category === 'Industry News';

  return (
    <motion.div variants={variants} className="group cursor-pointer flex flex-col h-full bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_-6px_rgba(15,23,42,0.10)] hover:shadow-[0_14px_32px_-10px_rgba(15,23,42,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col p-3 sm:p-4">
        <div className="h-48 sm:h-52 lg:h-56 rounded-xl mb-4 sm:mb-5 overflow-hidden relative flex-shrink-0 bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src={post.featuredImageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700  " 
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
        
        <h3 className="text-xl font-extrabold text-navy-900 mb-3 leading-tight flex-shrink-0">
          {post.title}
        </h3>
        
        <p className="text-slate-600 text-[13px] mb-4 line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>
        
        {/* Date is now slate grey uniformly, fixing the previous green text issue */}
        <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center mt-auto">
          <Calendar className="w-3 h-3 mr-1.5" /> {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
      </Link>
    </motion.div>
  );
}
