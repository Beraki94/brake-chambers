"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LeadershipClient() {
  const leaders = [
    {
      name: 'James Chen',
      role: 'Chief Executive Officer',
      bio: 'James brings over 25 years of tier-1 automotive manufacturing experience. He spearheaded BRC\'s transition into automated robotics and expanded our global footprint.',
      img: '51'
    },
    {
      name: 'Sarah Jenkins',
      role: 'VP of Engineering',
      bio: 'With a Ph.D. in Mechanical Engineering, Sarah leads our R&D division, focusing on next-generation Air Disc Brake technologies and metallurgical advancements.',
      img: '52'
    },
    {
      name: 'Michael Torres',
      role: 'Director of Global Supply Chain',
      bio: 'Michael ensures our continuous flow assembly lines never stop. He manages our raw material sourcing, guaranteeing we only use premium 8-gauge steel.',
      img: '53'
    },
    {
      name: 'David Wu',
      role: 'Head of Quality Assurance',
      bio: 'David oversees our ISO 9001 compliance and our rigorous 1 million+ cycle testing laboratory, ensuring zero defects leave the factory floor.',
      img: '54'
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Global Sales',
      bio: 'Elena manages our international distributor network, helping fleets across 35+ countries access OEM-quality replacements directly from the manufacturer.',
      img: '55'
    },
    {
      name: 'Robert Hayes',
      role: 'Lead Innovation Architect',
      bio: 'Robert focuses on rapid prototyping and custom OEM solutions, working directly with trailer builders to design bespoke braking systems.',
      img: '56'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        title="Leadership Team"
        description="Driven by experts in commercial vehicle braking systems, metallurgy, and lean manufacturing."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Company', href: '/company' },
          { label: 'Leadership Team' }
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center group">
                <div className="w-40 h-40 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/300?img=${leader.img}`} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-1">{leader.name}</h3>
                <p className="text-primary-600 text-sm font-bold uppercase tracking-widest mb-4">{leader.role}</p>
                <div className="w-12 h-1 bg-slate-100 mx-auto mb-4 group-hover:bg-primary-400 transition-colors"></div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {leader.bio}
                </p>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="bg-white py-16 border-t border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-6 font-heading tracking-tight">Discover How We Build</h2>
          <Link href="/company/production-process" className="inline-flex items-center text-primary-500 font-bold hover:text-primary-400 transition-colors uppercase tracking-widest text-lg">
            Explore Our Production Process <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
