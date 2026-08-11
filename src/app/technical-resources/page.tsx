import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ShieldCheck, Ruler, FileText, Download, AlertTriangle, ArrowRight, Settings, Wrench, ShieldAlert, Cpu, Video, FileCog } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Technical Resources & Engineering Data | BRC Brake Chambers',
  description: 'Installation guides, maintenance schedules, safety procedures, and comprehensive engineering data for BRC commercial air brake actuators.',
};

export default function TechnicalResourcesHub() {
  const categories = [
    {
      title: 'Installation & Maint.',
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      theme: 'border-blue-100 hover:border-blue-200 shadow-blue-900/5',
      items: [
        { name: 'Installation Guides', slug: 'installation', desc: 'Step-by-step mounting and torquing procedures.' },
        { name: 'Maintenance Schedules', slug: 'maintenance', desc: 'Preventive maintenance and inspection intervals.' },
        { name: 'Troubleshooting Guides', slug: 'troubleshooting', desc: 'Diagnosing common pneumatic and mechanical issues.' },
        { name: 'Safe Caging Procedures', slug: 'caging', desc: 'Critical steps for manually caging spring brakes.' },
      ]
    },
    {
      title: 'Specifications & Sizing',
      icon: <Ruler className="w-6 h-6 text-emerald-500" />,
      theme: 'border-emerald-100 hover:border-emerald-200 shadow-emerald-900/5',
      items: [
        { name: 'Size & Dimension Charts', slug: 'size-charts', desc: 'Full dimensional tables for all standard chamber types.' },
        { name: 'Stroke Length Guide', slug: 'stroke-length', desc: 'Standard vs. long-stroke limits and DOT criteria.' },
        { name: 'Pushrod Calculations', slug: 'pushrod', desc: 'Formulas for cutting pushrods to the exact length.' },
        { name: 'Air Port Thread Sizes', slug: 'port-threads', desc: 'Identification of NPTF and metric port threads.' },
      ]
    },
    {
      title: 'Safety & Compliance',
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      theme: 'border-purple-100 hover:border-purple-200 shadow-purple-900/5',
      items: [
        { name: 'CVSA OOS Criteria', slug: 'cvsa', desc: 'Understanding roadside inspection brake violation limits.' },
        { name: 'FMVSS 121 Standards', slug: 'fmvss-121', desc: 'Federal safety compliance for commercial air brakes.' },
        { name: 'Safety Warnings', slug: 'spring-brake-safety', desc: 'Critical handling and disposal protocols for spring brakes.' },
        { name: 'Warranty Information', slug: 'warranty', desc: 'Coverage details and the standard claims process.' },
      ]
    },
    {
      title: 'Engineering & Training',
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      theme: 'border-amber-100 hover:border-amber-200 shadow-amber-900/5',
      items: [
        { name: 'CAD Models & 3D Files', slug: 'cad-models', desc: 'Downloadable STEP models for chassis engineers.' },
        { name: 'Material Specifications', slug: 'material-specs', desc: 'Metallurgical data and rubber compound properties.' },
        { name: 'Video Training Library', slug: 'video-tutorials', desc: 'Visual step-by-step guides for fleet mechanics.' },
        { name: 'Engineering Whitepapers', slug: 'whitepapers', desc: 'In-depth research on commercial braking dynamics.' },
      ]
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24">
      <PageHeader 
        badge="Engineering & Support"
        title="Technical Resources"
        description="Your centralized hub for installation manuals, compliance criteria, safety protocols, and detailed engineering specifications for the entire BRC product line."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Technical Resources</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <section className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className={`bg-white rounded-3xl p-8 sm:p-10 shadow-xl border ${category.theme} transition-all duration-300`}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-extrabold text-navy-900 font-heading">{category.title}</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {category.items.map((item, itemIdx) => (
                  <Link key={itemIdx} href={`/technical-resources/${item.slug}`} className="group block p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-navy-900 group-hover:text-amber-600 transition-colors text-sm">{item.name}</h3>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors group-hover:translate-x-1 shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Support CTA */}
      <section className="container mx-auto px-4 mt-24 max-w-5xl">
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden border border-navy-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 opacity-5 rounded-full blur-3xl -ml-20 -mt-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Need Custom Engineering Support?</h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              If you require specific pushrod calculations, unique bracket alignments, or modified stroke limits, our engineering team is ready to assist.
            </p>
            <Link href="/contact" className="inline-block bg-amber-500 text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20">
              Contact BRC Engineering
            </Link>
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: 'Technical Resources' }]} />
    </div>
  );
}
