import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function OEMQuickLinks({ categoryName }: { categoryName: string }) {
  const oemBrands = [
    { name: 'Bendix', slug: 'bendix' },
    { name: 'Meritor', slug: 'meritor' },
    { name: 'Haldex', slug: 'haldex' },
    { name: 'Wabco', slug: 'wabco' },
    { name: 'MGM', slug: 'mgm' },
    { name: 'TSI', slug: 'tsi' },
  ];

  return (
    <section className="mt-12">
      <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
        {/* Abstract background design */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-navy-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-500/20 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="font-heading text-2xl font-bold mb-3">Looking for a specific OEM replacement?</h2>
            <p className="text-navy-200 text-sm mb-6">
              Our {categoryName} are engineered as direct aftermarket drop-in replacements. Cross-reference your existing part numbers instantly.
            </p>
            <Link 
              href="/oem-cross-reference" 
              className="inline-flex items-center gap-2 bg-primary-500 text-navy-900 px-6 py-3 rounded-lg font-bold hover:bg-primary-400 transition-colors"
            >
              Open Cross-Reference Tool
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3">
            {oemBrands.map((brand) => (
              <Link 
                key={brand.slug}
                href={`/oem-cross-reference/${brand.slug}`}
                className="bg-navy-800/80 border border-navy-700 hover:border-primary-500/50 hover:bg-navy-800 p-4 rounded-xl flex items-center justify-center transition-all group"
              >
                <span className="font-bold text-navy-100 group-hover:text-primary-400">{brand.name} Replacements</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
