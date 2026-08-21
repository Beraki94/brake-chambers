"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const COMPANY_PAGES = [
  { name: "Our Story", href: "/company/our-story", description: "Discover the history and heritage behind BRC." },
  { name: "Leadership Team", href: "/company/leadership", description: "Meet the engineers and visionaries leading our company." },
  { name: "Production Process", href: "/company/production-process", description: "Explore our end-to-end automated manufacturing." },
  { name: "Facility Overview", href: "/company/facility-overview", description: "Take a tour of our state-of-the-art Zhuji plant." },
  { name: "Material Sourcing", href: "/company/material-sourcing", description: "Learn about our uncompromising steel and rubber standards." },
  { name: "ISO Certifications", href: "/company/iso-certifications", description: "Review our global compliance and auditing standards." },
  { name: "Testing Laboratory", href: "/company/testing-laboratory", description: "See how we simulate 1 million+ cycles and extreme conditions." },
  { name: "R&D and Innovations", href: "/company/research-and-innovations", description: "Discover what's next in heavy-duty braking technology." }
];

export default function CompanyRelatedLinks() {
  const pathname = usePathname();
  
  // Find current index (handling exact match or the base /company route routing to our-story)
  const currentIndex = COMPANY_PAGES.findIndex(page => 
    pathname === page.href || (pathname === '/company' && page.href === '/company/our-story')
  );

  if (currentIndex === -1) return null;

  const prevPage = currentIndex > 0 ? COMPANY_PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < COMPANY_PAGES.length - 1 ? COMPANY_PAGES[currentIndex + 1] : null;

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6">
        
        {/* Previous Page Link */}
        <div className="flex-1">
          {prevPage && (
            <Link 
              href={prevPage.href}
              className="group h-full bg-white border border-slate-200 hover:border-navy-400 p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col justify-center text-left"
            >
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-navy-900 group-hover:text-navy-700 transition-colors mb-2 tracking-tight">
                {prevPage.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed hidden sm:block">
                {prevPage.description}
              </p>
            </Link>
          )}
        </div>

        {/* Next Page Link */}
        <div className="flex-1">
          {nextPage && (
            <Link 
              href={nextPage.href}
              className="group h-full bg-slate-50 border border-slate-200 hover:border-amber-400 p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all flex flex-col justify-center text-left sm:text-right"
            >
              <div className="text-[10px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest mb-3 flex items-center justify-start sm:justify-end gap-2">
                <span className="hidden sm:inline">Up Next</span>
                <span className="inline sm:hidden">Next</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-navy-900 group-hover:text-amber-700 transition-colors mb-2 tracking-tight">
                {nextPage.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed hidden sm:block">
                {nextPage.description}
              </p>
            </Link>
          )}
        </div>
        
      </div>
    </div>
  );
}
