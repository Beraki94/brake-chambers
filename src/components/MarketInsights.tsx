"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface MarketInsightsProps {
  posts: BlogPost[];
}

export default function MarketInsights({ posts }: MarketInsightsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-20 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Premium Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      {/* Soft background gradient orbs for depth - Distinct colors from Grading System */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div className="max-w-2xl text-left">
            <h2 className="font-heading text-3xl font-bold text-navy-900 mb-2">Market Insights</h2>
            <p className="text-navy-600 text-sm md:text-base">Tips, guides, and trends for phone dealers in emerging markets.</p>
          </div>
          <Link href={`/blog`} className="hidden md:flex items-center gap-2 text-slate-600 font-bold hover:text-slate-700 transition-colors mt-4 md:mt-0">
            View All Reports <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-navy-100 hover:border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 shadow-sm">
              <div className="aspect-video relative overflow-hidden bg-navy-50 border-b border-navy-50">
                <img
                  src={post.featuredImageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 mb-3 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-4 group-hover:text-slate-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-navy-400 group-hover:text-slate-600 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href={`/blog`} className="md:hidden mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-navy-100 text-navy-700 font-bold hover:bg-navy-50 transition-colors">
          View All Reports <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
