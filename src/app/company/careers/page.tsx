import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Briefcase, ArrowRight, HeartPulse, ShieldCheck, GraduationCap, Clock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Careers | BRC Engineering',
  description: 'Join the team at BRC Engineering. We are hiring CNC machinists, engineers, and supply chain professionals.',
};

const BENEFITS = [
  {
    title: 'Comprehensive Healthcare',
    description: '100% employer-paid medical, dental, and vision for you and your family.',
    icon: <HeartPulse className="w-8 h-8 text-rose-500 mb-4" />
  },
  {
    title: 'Financial Security',
    description: 'Aggressive 401(k) matching and quarterly profit-sharing bonuses.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
  },
  {
    title: 'Work-Life Balance',
    description: 'Generous PTO, paid holidays, and flexible shifts for manufacturing roles.',
    icon: <Clock className="w-8 h-8 text-amber-500 mb-4" />
  },
  {
    title: 'Tuition Reimbursement',
    description: 'We pay for your continued education and specialized engineering certifications.',
    icon: <GraduationCap className="w-8 h-8 text-blue-500 mb-4" />
  }
];

const OPEN_POSITIONS = [
  {
    title: 'Senior Manufacturing Engineer',
    department: 'Engineering',
    location: 'Global HQ',
    type: 'Full-Time',
    desc: 'Lead the optimization of our automated assembly lines and oversee the integration of new robotic welding cells.'
  },
  {
    title: 'CNC Machinist (2nd Shift)',
    department: 'Production',
    location: 'Global HQ',
    type: 'Full-Time',
    desc: 'Operate and program 5-axis CNC mills to produce precision aluminum and steel brake components.'
  },
  {
    title: 'Quality Assurance Inspector',
    department: 'Quality',
    location: 'Global HQ',
    type: 'Full-Time',
    desc: 'Conduct pressure decay tests, cycle testing, and metallurgical analysis on incoming raw materials.'
  },
  {
    title: 'Global Supply Chain Analyst',
    department: 'Operations',
    location: 'Global HQ / Hybrid',
    type: 'Full-Time',
    desc: 'Manage international vendor relationships, forecast steel pricing, and optimize inbound freight logistics.'
  }
];

export default function CareersPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        badge={<><Briefcase className="w-4 h-4 inline-block -mt-0.5" /> Join Our Team</>}
        title="Build Your Career With Us"
        description="At BRC, you aren't just making parts. You are engineering systems that keep millions of tons of freight moving safely across the globe every single day."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li><Link href="/company" className="hover:text-white transition-colors">Company</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Careers</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        
        {/* Core Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="font-bold text-navy-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-navy-900 mb-4">Open Positions</h2>
            <p className="text-slate-600 text-lg">We are experiencing rapid global growth and are looking for top-tier talent to scale with us.</p>
          </div>

          <div className="space-y-4">
            {OPEN_POSITIONS.map((job, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-amber-400 hover:shadow-md transition-all duration-300 group flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-navy-100 text-navy-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {job.department}
                    </span>
                    <span className="text-slate-500 text-sm font-semibold">{job.location}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 text-sm font-semibold">{job.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600">
                    {job.desc}
                  </p>
                </div>
                
                <div className="shrink-0 lg:ml-6">
                  <Link href="/contact" className="inline-flex items-center justify-center bg-navy-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-navy-800 transition-colors w-full sm:w-auto">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-navy-900 mb-2">Don't see a fit?</h4>
            <p className="text-slate-600 text-sm mb-4">We are always accepting resumes from talented individuals.</p>
            <Link href="/contact" className="text-amber-600 font-bold hover:text-amber-500 underline underline-offset-4">
              Send an open application
            </Link>
          </div>

        </div>

      </div>
      <BreadcrumbSchema items={[{ name: 'Company', item: '/company' }, { name: 'Careers' }]} />
    </div>
  );
}
