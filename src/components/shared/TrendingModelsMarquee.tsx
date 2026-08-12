"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react';
import { BRAKE_CHAMBERS } from '../../lib/data';
import { fadeInUp } from '../../lib/animations';

export default function TrendingModelsMarquee() {
  // We'll use a subset of popular chambers for the marquee
  const popularChambers = BRAKE_CHAMBERS.slice(0, 8);

  return (
    <motion.section 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 max-w-7xl mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="text-2xl font-black font-heading text-navy-900 tracking-tight">
            Most Popular Assemblies
          </h3>
        </div>
        <div className="hidden md:block">
          <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
            High Demand
          </span>
        </div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        {/* We duplicate the content to create a seamless infinite scroll effect */}
        <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max pb-8 pt-2">
          {/* First set */}
          <div className="flex gap-6 px-3">
            {popularChambers.map((chamber, i) => {
              const urlCategory = chamber.category.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link 
                  key={`${chamber.slug}-${i}`} 
                  href={`/${urlCategory}/${chamber.slug}`}
                  className="w-72 bg-white border border-slate-200 rounded-[1.5rem] p-5 flex flex-col hover:border-amber-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group/card relative"
                >
                  <div className="w-full h-40 relative bg-slate-50 rounded-xl mb-5 overflow-hidden flex items-center justify-center">
                    {chamber.galleryUrls?.[0] ? (
                      <Image 
                        src={chamber.galleryUrls[0]} 
                        alt={chamber.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm font-medium">
                        No Image Available
                      </div>
                    )}
                    {/* Subtle inner shadow overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none rounded-xl"></div>
                  </div>
                  
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-extrabold text-navy-900 text-lg truncate">{chamber.name}</h4>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover/card:text-amber-500 transition-colors flex-shrink-0" />
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      {chamber.type}
                    </span>
                    <span className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover/card:text-amber-500 transition-colors">
                      View Specs
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Second set (duplicated for seamless looping) */}
          <div className="flex gap-6 px-3">
            {popularChambers.map((chamber, i) => {
              const urlCategory = chamber.category.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link 
                  key={`dup-${chamber.slug}-${i}`} 
                  href={`/${urlCategory}/${chamber.slug}`}
                  className="w-72 bg-white border border-slate-200 rounded-[1.5rem] p-5 flex flex-col hover:border-amber-400 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group/card relative"
                >
                  <div className="w-full h-40 relative bg-slate-50 rounded-xl mb-5 overflow-hidden flex items-center justify-center">
                    {chamber.galleryUrls?.[0] ? (
                      <Image 
                        src={chamber.galleryUrls[0]} 
                        alt={chamber.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm font-medium">
                        No Image Available
                      </div>
                    )}
                    {/* Subtle inner shadow overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none rounded-xl"></div>
                  </div>
                  
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-extrabold text-navy-900 text-lg truncate">{chamber.name}</h4>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover/card:text-amber-500 transition-colors flex-shrink-0" />
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      {chamber.type}
                    </span>
                    <span className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover/card:text-amber-500 transition-colors">
                      View Specs
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      </div>
    </motion.section>
  );
}
