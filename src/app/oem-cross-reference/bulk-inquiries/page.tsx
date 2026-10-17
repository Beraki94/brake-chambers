import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import { Factory, ShieldCheck, FileCheck, MessageCircle, CheckCircle2 } from 'lucide-react';
import BulkInquiriesForm from './BulkInquiriesForm';

export const metadata: Metadata = {
  title: 'Bulk Sourcing & OEM/ODM | BRC Brake Chambers',
  description: 'Direct factory manufacturing for custom brake chambers, private label packaging, container programs, and large fleet sourcing operating to IATF 16949 standards.',
  keywords: ['Bulk Brake Chambers', 'OEM Brake Chambers', 'ODM Manufacturing', 'Container Air Brake Orders', 'Private Label Brake Chambers'],
};

export default function BulkInquiriesPage() {
  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24 font-sans overflow-x-clip">
      <PageHeader
        badge="Direct Factory Manufacturing & OEM/ODM"
        title="Bulk Sourcing & OEM/ODM Programs: Factory Direct"
        description="Partner directly with our Zhuji manufacturing facility operating to IATF 16949 standards for high-volume custom manufacturing, private labeling, and container-scale distribution agreements."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cross-Reference', href: '/oem-cross-reference' },
          { label: 'Bulk Sourcing & OEM' }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] -mt-6 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form Column (Left) */}
          <div className="lg:col-span-7 xl:col-span-8 order-1">
            <BulkInquiriesForm />
          </div>

          {/* Sticky Sidebar Cards (Right) */}
          <div className="lg:col-span-5 xl:col-span-4 order-2 space-y-5 lg:sticky lg:top-24">
            
            {/* Card 1: OEM / ODM Capabilities */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_8px_24px_rgba(10,25,41,0.04)]">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Factory className="w-4.5 h-4.5 text-amber-600" />
                </span>
                <h3 className="font-extrabold text-navy-900 text-lg sm:text-xl">
                  OEM / ODM Capabilities
                </h3>
              </div>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 border border-navy-100 mt-0.5">
                    <Factory className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-base mb-1">Custom Manufacturing</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Special stroke lengths, custom port clocking, reinforced diaphragms, and bespoke spring force ratings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 border border-navy-100 mt-0.5">
                    <FileCheck className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-base mb-1">Private Label Programs</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Custom electrostatic powder coating, laser-etched logos, and custom branded retail packaging for distributors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 border border-navy-100 mt-0.5">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-base mb-1">IATF 16949 Compliance</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Full material mill certificates, salt-spray corrosion reports, and batch cycle endurance tests with every container.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Direct Manufacturer Advantages */}
            <div className="bg-gradient-to-b from-navy-800 to-navy-900 text-white border border-navy-700/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_12px_36px_rgba(10,25,41,0.18)]">
              <div className="flex items-center gap-2.5 mb-3.5">
                <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
                <h3 className="font-extrabold text-lg sm:text-xl text-white">
                  Direct Manufacturer Advantages
                </h3>
              </div>
              <p className="text-navy-200 text-sm sm:text-base leading-relaxed mb-4">
                Cut out broker layers and import directly from the source factory in Zhejiang, China:
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-200 mb-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>True Factory Wholesale Pricing (FOB / CIF / DDP)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Full Container Load (FCL) & LCL Flexible Logistics</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Engineered to SAE J1469 & FMVSS 121 Standards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Dedicated Project Engineer & Rapid Prototyping</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-navy-700/60">
                <a
                  href="https://wa.me/8613395856758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 sm:py-4 px-5 rounded-xl sm:rounded-2xl text-sm sm:text-base transition-colors shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Connect with Export Sales on WhatsApp</span>
                </a>
                <p className="text-xs text-navy-300 text-center mt-2.5">
                  Direct factory sales desk • English & Spanish support.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <BreadcrumbSchema items={[
        { name: 'OEM Cross-Reference', item: 'https://www.brakechambers.com/oem-cross-reference' },
        { name: 'Bulk Sourcing & OEM' }
      ]} />
    </div>
  );
}
