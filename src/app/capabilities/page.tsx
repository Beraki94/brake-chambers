import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Factory, ShieldCheck, FlaskConical, ArrowRight, Settings, Target, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Manufacturing & Capabilities | BRC Brake Chambers',
  description: 'Explore BRC manufacturing capabilities, quality assurance processes, and R&D engineering for commercial air brake chambers.',
};

export default function CapabilitiesPage() {
  const categories = [
    {
      title: 'Manufacturing',
      icon: <Factory className="w-6 h-6 text-amber-500" />,
      items: [
        { name: 'Production Process', slug: 'production-process', desc: 'State-of-the-art robotic assembly lines.' },
        { name: 'Material Sourcing', slug: 'materials', desc: 'Premium-grade steel and custom rubber compounds.' },
      ]
    },
    {
      title: 'Quality Assurance',
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      items: [
        { name: 'ISO Certifications', slug: 'iso-certifications', desc: 'ISO 9001:2015 certified quality systems.' },
        { name: 'Testing Laboratory', slug: 'testing-laboratory', desc: '1-million cycle endurance testing capabilities.' },
        { name: 'Regulatory Compliance', slug: 'regulatory-compliance', desc: 'FMVSS 121 and SAE J1469 compliant products.' },
      ]
    },
    {
      title: 'R&D and Engineering',
      icon: <FlaskConical className="w-6 h-6 text-amber-500" />,
      items: [
        { name: 'Custom Engineering', slug: 'custom-engineering', desc: 'Application-specific actuator design.' },
        { name: 'Rapid Prototyping', slug: 'rapid-prototyping', desc: '3D printing and 5-axis CNC prototyping.' },
        { name: 'Recent Innovations', slug: 'recent-innovations', desc: 'Weight reduction and smart sensor integration.' },
      ]
    },
    {
      title: 'B2B Partnerships',
      icon: <Target className="w-6 h-6 text-amber-500" />,
      items: [
        { name: 'Contract Manufacturing', slug: 'contract-manufacturing', desc: 'White-label production of premium components.' },
        { name: 'Fleet Volume Orders', slug: 'fleet-inquiries', desc: 'Direct supply chain solutions for fleets.' },
        { name: 'Facility Overview', slug: 'facility-overview', desc: '500,000+ sq ft of global production space.' },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        badge="Capabilities"
        title="World-Class Manufacturing"
        description="From raw materials to finished products, our vertically integrated manufacturing process ensures uncompromised quality, durability, and performance for every brake chamber we produce."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Capabilities</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <section className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center shrink-0">
                  {category.icon}
                </div>
                <h2 className="text-xl font-extrabold text-navy-900 font-heading">{category.title}</h2>
              </div>
              
              <ul className="space-y-4 flex-1">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link href={`/capabilities/${item.slug}`} className="group block p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-navy-900 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors group-hover:translate-x-1" />
                      </div>
                      <p className="text-sm text-slate-500 line-clamp-2">{item.desc}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OEM Partner CTA */}
      <section className="container mx-auto px-4 mt-24 max-w-5xl">
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden border border-navy-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Looking for an OEM Partner?</h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our engineering team can design, prototype, and produce custom air brake actuators tailored to your specific fleet or OEM requirements.
            </p>
            <Link href="/contact" className="inline-block bg-amber-500 text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: 'Capabilities' }]} />
    </div>
  );
}
