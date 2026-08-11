import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Newspaper, Megaphone, ArrowRight, Download } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Press & News | BRC Engineering',
  description: 'Official press releases, company announcements, and global manufacturing news from BRC.',
};

const PRESS_RELEASES = [
  {
    date: 'November 12, 2026',
    title: 'BRC Announces $15M Expansion of Global Manufacturing Facility',
    type: 'Company Announcement',
    desc: 'To meet surging global demand for our severe-duty air brake chambers, BRC is breaking ground on a new 50,000 sq ft automated manufacturing wing.',
    hasPdf: true
  },
  {
    date: 'August 04, 2026',
    title: 'Successful Recertification of ISO 9001:2015 Standards',
    type: 'Quality & Compliance',
    desc: 'Our commitment to zero-defect manufacturing continues. We have passed our annual external ISO audit with zero non-conformances.',
    hasPdf: true
  },
  {
    date: 'May 18, 2026',
    title: 'Launch of Next-Generation Sealed Breathing Technology',
    type: 'Product Launch',
    desc: 'BRC unveils a proprietary sealed breathing system that completely isolates the internal power spring from external moisture, eliminating the #1 cause of spring failure.',
    hasPdf: true
  },
  {
    date: 'February 22, 2026',
    title: 'BRC Secures Multi-Year Contract with Top 10 North American Fleet',
    type: 'Partnership',
    desc: 'Following extensive field testing against leading OEM brands, a top 10 linehaul fleet has selected BRC as their exclusive aftermarket brake chamber supplier.',
    hasPdf: true
  }
];

export default function NewsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        badge={<><Megaphone className="w-4 h-4 inline-block -mt-0.5" /> Press Releases</>}
        title="Company News & Announcements"
        description="Stay updated with the latest official press releases, facility expansions, and major product launches from BRC headquarters."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li><Link href="/company" className="hover:text-white transition-colors">Company</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Company News</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl -mt-20 relative z-20">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {PRESS_RELEASES.map((release, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 group-hover:bg-amber-500 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                  <Newspaper className="w-4 h-4" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm group-hover:shadow-md group-hover:border-amber-200 transition-all">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-sm font-bold text-slate-400">{release.date}</span>
                    <span className="text-slate-300">•</span>
                    <span className="bg-navy-100 text-navy-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{release.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{release.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {release.desc}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <button className="text-navy-900 font-bold text-sm flex items-center gap-1 hover:text-amber-600 transition-colors">
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </button>
                    {release.hasPdf && (
                      <button className="text-slate-500 font-bold text-sm flex items-center gap-1 hover:text-navy-900 transition-colors">
                        <Download className="w-4 h-4" /> PDF
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
      <BreadcrumbSchema items={[{ name: 'Company', item: '/company' }, { name: 'Company News' }]} />
    </div>
  );
}
