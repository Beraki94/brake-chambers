import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Globe, Users, History, Award, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About BRC | Commercial Air Brake Manufacturer',
  description: 'Learn about BRC Brake Chambers, our history, global reach, and commitment to manufacturing premium commercial vehicle safety components.',
};

export default function CompanyPage() {
  const companyFeatures = [
    {
      title: 'Global Reach',
      icon: <Globe className="w-8 h-8 text-amber-500" />,
      description: 'Supplying OEMs, fleets, and distributors across over 50 countries with reliable commercial braking solutions.',
    },
    {
      title: 'Experienced Leadership',
      icon: <Users className="w-8 h-8 text-amber-500" />,
      description: 'Guided by decades of industry expertise in commercial vehicle safety and heavy-duty manufacturing.',
    },
    {
      title: 'Legacy of Quality',
      icon: <History className="w-8 h-8 text-amber-500" />,
      description: 'A proven track record of engineering excellence and continuous improvement since our founding.',
    },
    {
      title: 'Certified Excellence',
      icon: <Award className="w-8 h-8 text-amber-500" />,
      description: 'ISO 9001:2015 certified operations ensuring every product meets the highest global safety standards.',
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        badge="Company"
        title="Engineering Safety, Globally"
        description="BRC is a premier manufacturer of heavy-duty commercial air brake chambers, dedicated to delivering uncompromised quality and reliability to the global transportation industry."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Company</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <section className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 group hover:-translate-y-1 transition-all flex flex-col h-full">
              <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                {feature.icon}
              </div>
              <h2 className="text-xl font-extrabold text-navy-900 mb-4 font-heading">{feature.title}</h2>
              <p className="text-slate-600 leading-relaxed font-light flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="container mx-auto px-4 py-24 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 font-heading">Our Mission</h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
          To engineer and manufacture the most reliable commercial vehicle braking components in the world. We believe that road safety starts at the factory, and we are committed to providing fleets, owner-operators, and distributors with products that exceed OEM specifications at an exceptional value.
        </p>
      </section>

      {/* Join Our Network CTA */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden border border-navy-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Join Our Global Network</h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              We are actively expanding our distribution network. Partner with BRC to offer your customers factory-direct pricing on premium brake chambers.
            </p>
            <Link href="/contact" className="inline-block bg-amber-500 text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20">
              Become a Distributor
            </Link>
          </div>
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: 'Company' }]} />
    </div>
  );
}
