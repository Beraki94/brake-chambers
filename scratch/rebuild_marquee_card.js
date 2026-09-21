const fs = require('fs');

const code = `"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRightLeft } from 'lucide-react';
import { BRAKE_CHAMBERS } from '../../lib/data';
import { fadeInUp } from '../../lib/animations';
import SectionHeader from '../ui/SectionHeader';

interface CrossReferenceMarqueeProps {
  filterBrand?: string;
  maxItems?: number;
}

export default function CrossReferenceMarquee({ filterBrand, maxItems = 15 }: CrossReferenceMarqueeProps) {
  
  const matches = useMemo(() => {
    let allMatches: any[] = [];
    
    const categoryUrlMap: Record<string, string> = {
      'Service Brake': 'service-brake-chambers',
      'Spring Brake': 'spring-brake-chambers',
      'Air Disc Actuator': 'air-disc-brake-actuators'
    };

    BRAKE_CHAMBERS.forEach(chamber => {
      if (chamber.oemPartNumbers) {
        chamber.oemPartNumbers.forEach(oem => {
          if (!filterBrand || oem.brand.toLowerCase() === filterBrand.toLowerCase()) {
            allMatches.push({
              oemBrand: oem.brand,
              oemPart: oem.partNumber,
              brcName: chamber.name,
              brcType: chamber.type,
              url: \`/\${categoryUrlMap[chamber.category] || 'products'}/\${chamber.slug}\`,
            });
          }
        });
      }
    });

    allMatches.sort((a, b) => (a.oemPart > b.oemPart ? 1 : -1));
    return allMatches.slice(0, maxItems);
  }, [filterBrand, maxItems]);

  if (matches.length === 0) return null;

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 overflow-hidden relative z-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] relative">
        <SectionHeader
          badge="Live Database Updates"
          title={filterBrand ? \`Latest \${filterBrand} Cross-References\` : "Latest Brake Chamber Cross-References"}
          description="Explore our recently verified OEM-to-BRC aftermarket matches shipping to distribution centers worldwide."
          align="center"
        />
      </div>

      <div className="relative w-full flex overflow-x-hidden group mt-4 z-0">
        <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max pb-8 pt-2">
          
          {/* First set */}
          <div className="flex gap-6 px-3">
            {matches.map((match, i) => (
              <Link
                key={\`\${match.oemPart}-\${i}\`}
                href={match.url}
                className="w-72 bg-white border border-slate-200 rounded-3xl p-5 flex flex-col hover:border-amber-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/card relative shrink-0"
              >
                {/* Content Box mimicking the image box height but text-based */}
                <div className="w-full h-40 bg-slate-50 rounded-2xl relative mb-5 overflow-hidden flex flex-col items-center justify-center border border-slate-100 p-4 text-center group-hover/card:bg-amber-50/50 transition-colors">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{match.oemBrand}</div>
                  <div className="font-mono text-2xl font-black text-navy-900 mb-3">{match.oemPart}</div>
                  
                  <div className="flex items-center gap-2 text-amber-600 bg-amber-100/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    Direct Match
                  </div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none rounded-2xl"></div>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-extrabold text-navy-900 text-lg truncate" title={match.brcName}>BRC {match.brcName}</h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover/card:text-amber-500 transition-colors flex-shrink-0" />
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 shadow-sm px-3 py-1.5 rounded-full">
                    {match.brcType}
                  </span>
                  <span className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover/card:text-amber-500 transition-colors">
                    View Specs
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Second set (duplicated for seamless looping) */}
          <div className="flex gap-6 px-3">
             {matches.map((match, i) => (
              <Link
                key={\`dup-\${match.oemPart}-\${i}\`}
                href={match.url}
                className="w-72 bg-white border border-slate-200 rounded-3xl p-5 flex flex-col hover:border-amber-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/card relative shrink-0"
              >
                {/* Content Box mimicking the image box height but text-based */}
                <div className="w-full h-40 bg-slate-50 rounded-2xl relative mb-5 overflow-hidden flex flex-col items-center justify-center border border-slate-100 p-4 text-center group-hover/card:bg-amber-50/50 transition-colors">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{match.oemBrand}</div>
                  <div className="font-mono text-2xl font-black text-navy-900 mb-3">{match.oemPart}</div>
                  
                  <div className="flex items-center gap-2 text-amber-600 bg-amber-100/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    Direct Match
                  </div>
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none rounded-2xl"></div>
                </div>

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-extrabold text-navy-900 text-lg truncate" title={match.brcName}>BRC {match.brcName}</h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover/card:text-amber-500 transition-colors flex-shrink-0" />
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 shadow-sm px-3 py-1.5 rounded-full">
                    {match.brcType}
                  </span>
                  <span className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover/card:text-amber-500 transition-colors">
                    View Specs
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>

        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </motion.section>
  );
}
`;

fs.writeFileSync('src/components/ui/CrossReferenceMarquee.tsx', code);
console.log('Updated CrossReferenceMarquee.tsx to match TrendingModelsMarquee styling without images.');
