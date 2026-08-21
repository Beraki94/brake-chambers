"use client";

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import CompanyPageLayout from '@/components/company/CompanyPageLayout';

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
  ];

  return (
    <CompanyPageLayout
      badge="Executive Team"
      title="Leadership Team"
      description="Driven by experts in commercial vehicle braking systems, metallurgy, and lean manufacturing."
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center group">
              <div className="w-40 h-40 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden relative">
                <img src={`https://i.pravatar.cc/300?img=${leader.img}`} alt={leader.name} className="w-full h-full object-cover grayscale transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-1">{leader.name}</h3>
              <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4">{leader.role}</p>
              <div className="w-12 h-1 bg-slate-100 mx-auto mb-4 group-hover:bg-amber-400 transition-colors"></div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {leader.bio}
              </p>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        {/* Group Photo Section */}
        <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
          <img 
            src="/leadership-group.jpg" 
            alt="BRC Leadership Team on the manufacturing floor" 
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
            <h3 className="text-white text-3xl md:text-4xl font-black mb-2 tracking-tight">United by Precision</h3>
            <p className="text-navy-100 max-w-2xl text-lg">
              Our diverse executive board combines decades of tier-1 automotive manufacturing experience with forward-thinking engineering to redefine commercial vehicle safety.
            </p>
          </div>
        </div>
        {/* Next Step CTA */}
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100">
          <SectionHeader title="Discover How We Build" className="!mb-6" />

          <Link href="/company/production-process" className="inline-flex items-center text-amber-500 font-bold hover:text-amber-400 transition-colors uppercase tracking-widest text-lg">
            Explore Our Production Process <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </CompanyPageLayout>
  );
}
