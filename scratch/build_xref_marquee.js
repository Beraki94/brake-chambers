const fs = require('fs');

const code = `"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import { BRAKE_CHAMBERS } from '../../lib/data';
import { fadeInUp } from '../../lib/animations';
import SectionHeader from '../ui/SectionHeader';

interface CrossReferenceMarqueeProps {
  filterBrand?: string; // Optional: Only show matches for a specific OEM brand (e.g., 'Bendix')
  maxItems?: number;
}

export default function CrossReferenceMarquee({ filterBrand, maxItems = 15 }: CrossReferenceMarqueeProps) {
  
  // Extract and flatten all cross-references from the database
  const matches = useMemo(() => {
    let allMatches: any[] = [];
    
    // Some basic styling mapping for different brands
    const brandStyles: Record<string, { bg: string, text: string, border: string }> = {
      'Bendix': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
      'Meritor': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
      'Haldex': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      'WABCO': { bg: 'bg-navy-50', text: 'text-navy-700', border: 'border-navy-200' },
      'Knorr-Bremse': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
      'default': { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' }
    };

    const categoryUrlMap: Record<string, string> = {
      'Service Brake': 'service-brake-chambers',
      'Spring Brake': 'spring-brake-chambers',
      'Air Disc Actuator': 'air-disc-brake-actuators'
    };

    BRAKE_CHAMBERS.forEach(chamber => {
      if (chamber.oemPartNumbers) {
        chamber.oemPartNumbers.forEach(oem => {
          if (!filterBrand || oem.brand.toLowerCase() === filterBrand.toLowerCase()) {
            
            // Map the brand style or fallback to default
            let style = brandStyles['default'];
            Object.keys(brandStyles).forEach(key => {
              if (oem.brand.toLowerCase().includes(key.toLowerCase())) {
                style = brandStyles[key];
              }
            });

            allMatches.push({
              oemBrand: oem.brand,
              oemPart: oem.partNumber,
              brcName: chamber.name,
              brcType: chamber.type,
              brcImage: chamber.galleryUrls?.[0] || null,
              url: \`/\${categoryUrlMap[chamber.category] || 'products'}/\${chamber.slug}\`,
              style: style
            });
          }
        });
      }
    });

    // Shuffle and slice to get a diverse, limited set for the marquee
    // Simple deterministic pseudo-shuffle for stable rendering
    allMatches.sort((a, b) => (a.oemPart > b.oemPart ? 1 : -1));
    
    // We want a mix, so maybe pick every Nth item or just slice
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

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group mt-4 z-0">
        {/* We duplicate the content to create a seamless infinite scroll effect */}
        {/* Adjusted duration based on number of items so it doesn't move too fast */}
        <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max pb-8 pt-2">
          
          {/* First set */}
          <div className="flex gap-4 sm:gap-6 px-2 sm:px-3">
            {matches.map((match, i) => (
              <Link
                key={\`\${match.oemPart}-\${i}\`}
                href={match.url}
                className="w-72 sm:w-80 bg-white border border-slate-200 rounded-3xl p-5 flex flex-col hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card relative shrink-0"
              >
                {/* Top Section: OEM Data */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={\`\${match.style.bg} \${match.style.text} \${match.style.border} border px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider\`}>
                    {match.oemBrand}
                  </div>
                  <span className="font-mono text-navy-900 font-bold text-lg truncate">
                    {match.oemPart}
                  </span>
                </div>

                <div className="flex items-center mb-4 text-slate-400 font-medium text-xs uppercase tracking-widest gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-amber-500" />
                  <span>Direct Match</span>
                </div>

                {/* Middle Section: BRC Equivalent */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4 mb-5 flex-grow group-hover/card:bg-amber-50/30 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-xl border border-slate-200 flex-shrink-0 relative overflow-hidden flex items-center justify-center p-1">
                    {match.brcImage ? (
                      <Image
                        src={match.brcImage}
                        alt={match.brcName}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <ShieldCheck className="w-6 h-6 text-slate-300" />
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">BRC Equivalent</p>
                    <h3 className="font-bold text-navy-900 text-sm truncate group-hover/card:text-amber-600 transition-colors" title={match.brcName}>
                      {match.brcName}
                    </h3>
                  </div>
                </div>

                {/* Bottom Section: CTA */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
                    {match.brcType}
                  </span>
                  <span className="text-amber-600 font-bold text-[13px] uppercase tracking-widest flex items-center gap-1 group-hover/card:text-amber-500 transition-colors">
                    View Specs <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Second set (duplicated for seamless looping) */}
          <div className="flex gap-4 sm:gap-6 px-2 sm:px-3">
             {matches.map((match, i) => (
              <Link
                key={\`dup-\${match.oemPart}-\${i}\`}
                href={match.url}
                className="w-72 sm:w-80 bg-white border border-slate-200 rounded-3xl p-5 flex flex-col hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card relative shrink-0"
              >
                {/* Top Section: OEM Data */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={\`\${match.style.bg} \${match.style.text} \${match.style.border} border px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider\`}>
                    {match.oemBrand}
                  </div>
                  <span className="font-mono text-navy-900 font-bold text-lg truncate">
                    {match.oemPart}
                  </span>
                </div>

                <div className="flex items-center mb-4 text-slate-400 font-medium text-xs uppercase tracking-widest gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-amber-500" />
                  <span>Direct Match</span>
                </div>

                {/* Middle Section: BRC Equivalent */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4 mb-5 flex-grow group-hover/card:bg-amber-50/30 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-xl border border-slate-200 flex-shrink-0 relative overflow-hidden flex items-center justify-center p-1">
                    {match.brcImage ? (
                      <Image
                        src={match.brcImage}
                        alt={match.brcName}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <ShieldCheck className="w-6 h-6 text-slate-300" />
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">BRC Equivalent</p>
                    <h3 className="font-bold text-navy-900 text-sm truncate group-hover/card:text-amber-600 transition-colors" title={match.brcName}>
                      {match.brcName}
                    </h3>
                  </div>
                </div>

                {/* Bottom Section: CTA */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
                    {match.brcType}
                  </span>
                  <span className="text-amber-600 font-bold text-[13px] uppercase tracking-widest flex items-center gap-1 group-hover/card:text-amber-500 transition-colors">
                    View Specs <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth fade on edges (responsive width) */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </motion.section>
  );
}
`;

fs.writeFileSync('src/components/ui/CrossReferenceMarquee.tsx', code);
console.log('Created CrossReferenceMarquee.tsx');
