import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { Download, Table, FileSpreadsheet } from 'lucide-react';
import { BRAKE_CHAMBERS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Full Interchange Database | BRC Brake Chambers',
  description: 'View or download our complete commercial brake chamber cross-reference database mapping Bendix, Knorr-Bremse, ZF/WABCO, Meritor, Haldex, and more to BRC equivalents.',
  keywords: ['Brake Chamber Database', 'Download Cross Reference', 'Air Brake Interchange PDF', 'Fleet Maintenance Data'],
};

export default function DatabasePage() {
  
  // Extract all OEM part mappings for the table
  const allMappings: Array<{
    oemBrand: string;
    oemPart: string;
    brcEquivalent: string;
    category: string;
    brcSlug: string;
  }> = [];
  
  BRAKE_CHAMBERS.forEach(chamber => {
    if (chamber.oemPartNumbers) {
      chamber.oemPartNumbers.forEach(oem => {
        allMappings.push({
          oemBrand: oem.brand,
          oemPart: oem.partNumber,
          brcEquivalent: chamber.name,
          category: chamber.category,
          brcSlug: chamber.category === 'Spring Brake' ? `/spring-brake-chambers/${chamber.slug}` : `/service-brake-chambers/${chamber.slug}`
        });
      });
    }
  });

  // Sort alphabetically by OEM Brand
  allMappings.sort((a, b) => a.oemBrand.localeCompare(b.oemBrand));

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <PageHeader
        badge="Master List"
        title="Full Interchange Database"
        description="Access our entire cross-reference database below. Fleet managers and mechanics can also download this data for offline use."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: 'Database' }
        ]}
      />

      <div className="container mx-auto px-4 max-w-6xl py-12">
        
        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mr-4">
              <Table className="w-6 h-6 text-navy-500" />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 text-lg">Live Web Index</h3>
              <p className="text-sm text-slate-500">{allMappings.length} exact matches found</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold rounded-xl transition-colors">
              <FileSpreadsheet className="w-5 h-5 mr-2" /> Export CSV
            </button>
            <button className="flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold rounded-xl transition-colors shadow-lg shadow-amber-500/20">
              <Download className="w-5 h-5 mr-2" /> Download PDF Guide
            </button>
          </div>
        </div>

        {/* Database Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-bold text-navy-900">OEM Brand</th>
                  <th className="p-4 font-bold text-navy-900">OEM Part #</th>
                  <th className="p-4 font-bold text-navy-900">Category</th>
                  <th className="p-4 font-bold text-navy-900">BRC Equivalent</th>
                  <th className="p-4 font-bold text-navy-900 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {allMappings.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-slate-700">{row.oemBrand}</td>
                    <td className="p-4 font-mono font-bold text-navy-900">{row.oemPart}</td>
                    <td className="p-4 text-slate-500 text-sm">{row.category}</td>
                    <td className="p-4 font-bold text-emerald-600">{row.brcEquivalent}</td>
                    <td className="p-4 text-right">
                      <Link href={row.brcSlug} className="text-amber-600 hover:text-amber-700 font-bold text-sm hover:underline">
                        View Part
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <BreadcrumbSchema items={[
        { name: 'OEM Cross-Reference', item: 'https://www.brcbrakechambers.com/oem-cross-reference' },
        { name: 'Database' }
      ]} />
    </div>
  );
}
