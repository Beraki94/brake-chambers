import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Truck, Bus, Construction, Factory, Mountain, ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Applications | Commercial Brake Chambers | BRC',
  description: 'Explore BRC commercial air brake chambers engineered for specific industry applications including refuse, transit, off-highway, and heavy-duty freight.',
};

const categoryGroups = [
  {
    title: 'Commercial & Freight',
    desc: 'The backbone of the global supply chain requires absolute reliability and extreme mileage endurance.',
    icon: <Truck className="w-8 h-8 text-blue-500" />,
    color: 'border-blue-100 hover:border-blue-300',
    links: [
      { id: 'commercial-linehaul', title: 'Commercial Linehaul' },
      { id: 'heavy-duty-freight', title: 'Heavy-Duty Freight' },
      { id: 'regional-delivery', title: 'Regional Delivery' },
    ]
  },
  {
    title: 'Severe-Duty',
    desc: 'Surviving in environments where pavement ends and the most punishing, high-cycle conditions begin.',
    icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
    color: 'border-amber-100 hover:border-amber-300',
    links: [
      { id: 'refuse-sanitation', title: 'Refuse & Sanitation Trucks' },
      { id: 'off-highway-mining', title: 'Off-Highway & Mining' },
      { id: 'agricultural-transport', title: 'Agricultural Transport' },
    ]
  },
  {
    title: 'Passenger & Transit',
    desc: 'Precision modulation and failsafe reliability required for carrying the most precious cargo.',
    icon: <Bus className="w-8 h-8 text-emerald-500" />,
    color: 'border-emerald-100 hover:border-emerald-300',
    links: [
      { id: 'transit-coach-bus', title: 'Transit & Coach Buses' },
      { id: 'school-buses', title: 'School Buses' },
      { id: 'shuttle-fleets', title: 'Shuttle Fleets' },
    ]
  },
  {
    title: 'OEM & Custom',
    desc: 'Partner directly with the manufacturer. Custom engineering, bulk orders, and contract manufacturing.',
    icon: <Factory className="w-8 h-8 text-purple-500" />,
    color: 'border-purple-100 hover:border-purple-300',
    links: [
      { id: 'fleet-inquiries', title: 'Fleet Volume Orders' },
      { id: 'custom-engineering', title: 'Custom Engineering' },
      { id: 'contract-manufacturing', title: 'Contract Manufacturing' },
      { id: '/quote', title: 'Request Custom Quote' },
    ]
  }
];

import PageHeader from '@/components/PageHeader';

export default function ApplicationsHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        badge="Applications"
        title="Engineered for Every Environment"
        description="Different industries demand different braking solutions. From high-cycle refuse trucks to extreme-load logging trailers, discover how BRC chambers are engineered to excel in your specific application."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Applications</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      {/* Grid Section */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryGroups.map((group, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-sm border-2 ${group.color} transition-all p-8 flex flex-col h-full`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0">
                  {group.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-navy-900 font-heading tracking-tight">{group.title}</h2>
                </div>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed font-light">
                {group.desc}
              </p>
              
              <div className="mt-auto space-y-3">
                {group.links.map((link) => (
                  <Link 
                    key={link.id} 
                    href={link.id.startsWith('/') ? link.id : `/applications/${link.id}`} 
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-navy-50 hover:text-amber-600 transition-colors group/link border border-slate-100 hover:border-amber-200"
                  >
                    <span className="font-bold text-navy-900 group-hover/link:text-amber-600">{link.title}</span>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover/link:text-amber-600 group-hover/link:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Application CTA */}
      <div className="container mx-auto px-4 pb-24 max-w-5xl">
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-3xl p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden border border-navy-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Need a Custom Quote?</h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our engineering team can design, prototype, and produce custom air brake actuators tailored to your specific mechanical requirements.
            </p>
            <Link href="/quote" className="inline-block bg-amber-500 text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </div>
      <BreadcrumbSchema items={[{ name: 'Applications' }]} />
    </div>
  );
}
