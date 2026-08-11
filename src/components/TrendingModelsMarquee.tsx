"use client";

import React from 'react';
import Link from 'next/link';
import { BRAKE_CHAMBERS } from '../lib/data';
import { useMarketStore } from '../store/market';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';

export default function TrendingModelsMarquee() {
  const selectedMarket = useMarketStore(state => state.selectedMarket);
  const marketCode = selectedMarket?.code || 'us';
  
  // We'll use a subset of popular chambers for the marquee
  const popularChambers = BRAKE_CHAMBERS.slice(0, 8);

  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white border-t border-navy-100 py-8 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 max-w-7xl mb-6">
        <h3 className="text-xl font-heading font-bold text-navy-900 flex items-center gap-2">
          <span className="w-2 h-6 bg-slate-500 rounded-full inline-block"></span>
          Most Popular Assemblies
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        {/* We duplicate the content to create a seamless infinite scroll effect */}
        <div className="flex animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max">
          {/* First set */}
          <div className="flex gap-4 px-2">
            {popularChambers.map((chamber, i) => {
              const urlCategory = chamber.category.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link 
                  key={`${chamber.slug}-${i}`} 
                  href={`/${urlCategory}/${chamber.slug}`}
                  className="w-64 bg-white border border-navy-100 rounded-xl p-4 flex flex-col hover:border-slate-400 hover:shadow-lg transition-all"
                >
                  <div className="w-full h-32 relative bg-navy-50 rounded-lg mb-4 overflow-hidden">
                    {chamber.galleryUrls?.[0] ? (
                      <Image 
                        src={chamber.galleryUrls[0]} 
                        alt={chamber.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-navy-300">
                        No Image
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1 truncate">{chamber.name}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded-md">
                      {chamber.type}
                    </span>
                    <span className="text-navy-900 font-bold text-sm">
                      Bulk Quote
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Second set (duplicated for seamless looping) */}
          <div className="flex gap-4 px-2">
            {popularChambers.map((chamber, i) => {
              const urlCategory = chamber.category.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link 
                  key={`dup-${chamber.slug}-${i}`} 
                  href={`/${urlCategory}/${chamber.slug}`}
                  className="w-64 bg-white border border-navy-100 rounded-xl p-4 flex flex-col hover:border-slate-400 hover:shadow-lg transition-all"
                >
                  <div className="w-full h-32 relative bg-navy-50 rounded-lg mb-4 overflow-hidden">
                    {chamber.galleryUrls?.[0] ? (
                      <Image 
                        src={chamber.galleryUrls[0]} 
                        alt={chamber.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-navy-300">
                        No Image
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-navy-900 text-sm mb-1 truncate">{chamber.name}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded-md">
                      {chamber.type}
                    </span>
                    <span className="text-navy-900 font-bold text-sm">
                      Bulk Quote
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </motion.div>
  );
}
