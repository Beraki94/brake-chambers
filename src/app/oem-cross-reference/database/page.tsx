import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Database, Search, ArrowRight, Download } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { BRAKE_CHAMBERS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Complete Interchange Database Index | BRC Brake Chambers',
  description: 'Browse our complete table index of commercial air brake cross-references. View all competitor and OEM part numbers mapped to BRC factory-direct equivalents.',
};

export default function DatabasePage() {
  // Extract all cross-references into a flat array for the table
  const crossReferences: { oemBrand: string, oemPartNumber: string, brcModel: string, brcSlug: string, category: string }[] = [];
  
  BRAKE_CHAMBERS.forEach(chamber => {
    if (chamber.oemPartNumbers) {
      chamber.oemPartNumbers.forEach(oem => {
        crossReferences.push({
          oemBrand: oem.brand,
          oemPartNumber: oem.partNumber,
          brcModel: chamber.name,
          brcSlug: chamber.slug,
          category: chamber.category === 'Spring Brake' ? 'spring-brakes' : 'service-chambers'
        });
      });
    }
  });

  // Sort alphabetically by OEM Brand
  crossReferences.sort((a, b) => {
    if (a.oemBrand < b.oemBrand) return -1;
    if (a.oemBrand > b.oemBrand) return 1;
    return 0;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        title="Complete Interchange Index"
        description="Browse our comprehensive table mapping thousands of competitor part numbers to identical BRC aftermarket equivalents."
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-10 relative z-20">
        
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-navy-900/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-3">
              <Database className="w-6 h-6 text-amber-500" />
              Cross-Reference Index
            </h2>
            <div className="flex gap-3 w-full md:w-auto">
              <Link href="/oem-cross-reference/part-search" className="flex items-center justify-center gap-2 bg-navy-50 text-navy-900 font-bold px-4 py-2 rounded-lg hover:bg-navy-100 transition-colors border border-navy-200 text-sm w-full md:w-auto">
                <Search className="w-4 h-4" /> Search Tool
              </Link>
            </div>
          </div>

          {crossReferences.length > 0 ? (
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="p-4 font-bold text-sm tracking-wider uppercase border-b border-navy-800">OEM Brand</th>
                    <th className="p-4 font-bold text-sm tracking-wider uppercase border-b border-navy-800">OEM Part Number</th>
                    <th className="p-4 font-bold text-sm tracking-wider uppercase border-b border-navy-800">BRC Equivalent</th>
                    <th className="p-4 font-bold text-sm tracking-wider uppercase border-b border-navy-800">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {crossReferences.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors group">
                      <td className="p-4 text-slate-800 font-semibold">{item.oemBrand}</td>
                      <td className="p-4 text-slate-600 font-mono">{item.oemPartNumber}</td>
                      <td className="p-4 text-navy-900 font-bold">{item.brcModel}</td>
                      <td className="p-4">
                        <Link 
                          href={`/${item.category}/${item.brcSlug}`}
                          className="inline-flex items-center text-amber-600 font-bold hover:text-amber-500 text-sm group-hover:translate-x-1 transition-transform"
                        >
                          View Product <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
             <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-100">
               <p className="text-slate-500">Database is currently syncing. Please use the search tool.</p>
             </div>
          )}

          <div className="mt-8 text-center text-sm text-slate-500 bg-navy-50 p-4 rounded-lg border border-navy-100">
            <strong>Note:</strong> This database is continuously updated by our engineering team. If your part number is not listed, <Link href="/oem-cross-reference/request" className="text-navy-900 font-bold underline">request a manual cross-match</Link>.
          </div>
        </div>

      </div>
    </div>
  );
}
