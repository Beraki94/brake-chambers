import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, ArrowRight, Calendar, User } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Industry Blog & Articles | BRC Engineering',
  description: 'Read the latest technical insights, manufacturing trends, and commercial transport safety articles from the engineers at BRC.',
};

const BLOG_POSTS = [
  {
    title: 'The Future of Air Disc Brakes in Commercial Fleets',
    excerpt: 'As fleets increasingly transition to ADB systems, we explore the ROI, weight savings, and maintenance benefits driving the change.',
    category: 'Industry Trends',
    author: 'Sarah M.',
    date: 'Oct 15, 2026',
    image: 'bg-navy-800'
  },
  {
    title: 'Understanding CVSA Out-of-Service Brake Criteria',
    excerpt: 'Brake violations remain the #1 cause of OOS orders. Learn how to pre-trip inspect your brake chambers and measure stroke length correctly.',
    category: 'Safety & Compliance',
    author: 'Elena R.',
    date: 'Sep 28, 2026',
    image: 'bg-amber-600'
  },
  {
    title: 'Why 8-Gauge Steel Matters for Off-Highway Logging',
    excerpt: 'Not all housings are created equal. We break down the metallurgical reasons why severe-duty applications require thicker pressure vessels.',
    category: 'Engineering',
    author: 'Robert C.',
    date: 'Sep 02, 2026',
    image: 'bg-slate-700'
  },
  {
    title: 'Preventing Internal Corrosion: The Role of Sealed Breathing',
    excerpt: 'Water intrusion is the silent killer of power springs. Discover how advanced breathing systems isolate the spring cavity from external moisture.',
    category: 'Technical',
    author: 'Michael T.',
    date: 'Aug 14, 2026',
    image: 'bg-navy-900'
  },
  {
    title: 'The Hidden Costs of Rebuilt vs. New Brake Chambers',
    excerpt: 'Is the core charge worth it? We run the numbers on fleet downtime, warranty claims, and the safety risks of utilizing rebuilt components.',
    category: 'Fleet Management',
    author: 'David L.',
    date: 'Jul 30, 2026',
    image: 'bg-emerald-700'
  },
  {
    title: 'High-Temp Elastomers: Solving the Refuse Truck Dilemma',
    excerpt: 'Stop-and-go refuse cycles generate massive heat. See how new neoprene blends are preventing diaphragm melting and premature failure.',
    category: 'Engineering',
    author: 'Sarah M.',
    date: 'Jul 12, 2026',
    image: 'bg-indigo-800'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        badge={<><BookOpen className="w-4 h-4 inline-block -mt-0.5" /> Industry Insights</>}
        title="BRC Engineering Blog"
        description="Technical deep-dives, regulatory updates, and manufacturing innovations straight from the experts building your brake systems."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Blog</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        
        {/* Featured Post (First Item) */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-12 group cursor-pointer hover:border-amber-400 transition-colors">
          <div className="flex flex-col lg:flex-row">
            <div className={`w-full lg:w-1/2 h-64 lg:h-auto ${BLOG_POSTS[0].image} relative overflow-hidden flex items-center justify-center p-12`}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h2 className="text-3xl font-extrabold text-white/90 text-center relative z-10 leading-tight">
                {BLOG_POSTS[0].title}
              </h2>
            </div>
            <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {BLOG_POSTS[0].category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4 group-hover:text-amber-600 transition-colors">
                {BLOG_POSTS[0].title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {BLOG_POSTS[0].excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {BLOG_POSTS[0].author}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {BLOG_POSTS[0].date}</span>
                </div>
                <div className="text-navy-900 font-bold group-hover:text-amber-600 transition-colors flex items-center">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col cursor-pointer">
              <div className={`h-48 ${post.image} relative overflow-hidden flex items-center justify-center p-6`}>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
                 <h3 className="text-xl font-bold text-white/90 text-center relative z-10 leading-tight line-clamp-3">
                   {post.title}
                 </h3>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination / CTA */}
        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-slate-200 text-navy-900 font-bold px-8 py-3 rounded-full hover:border-navy-900 transition-colors">
            Load More Articles
          </button>
        </div>

      </div>
      <BreadcrumbSchema items={[{ name: 'Blog' }]} />
    </div>
  );
}
