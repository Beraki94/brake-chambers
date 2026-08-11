import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MessageSquare, Mail, ChevronRight, Users } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Leadership Team | BRC Engineering',
  description: 'Meet the executive leadership team guiding BRC\'s global manufacturing and engineering operations.',
};

const LEADERSHIP_DATA = [
  {
    name: 'Robert C.',
    role: 'Chief Executive Officer',
    bio: 'With over 30 years in commercial vehicle manufacturing, Robert leads BRC with a commitment to engineering excellence and global scale.',
    initials: 'RC'
  },
  {
    name: 'Sarah M.',
    role: 'VP of Engineering',
    bio: 'Sarah oversees our R&D division, pioneering new alloys and leading our Air Disc Brake (ADB) development programs.',
    initials: 'SM'
  },
  {
    name: 'David L.',
    role: 'VP of Global Sales',
    bio: 'David manages our international distribution network, ensuring our aftermarket parts reach fleets in over 50 countries.',
    initials: 'DL'
  },
  {
    name: 'Elena R.',
    role: 'Director of Quality Assurance',
    bio: 'Elena strictly enforces our ISO 9001 protocols, overseeing the pressure and cycle testing of every chamber that leaves our facility.',
    initials: 'ER'
  },
  {
    name: 'Michael T.',
    role: 'Supply Chain Director',
    bio: 'Michael ensures our vertical integration remains robust, sourcing the highest quality 8-gauge steel and neoprene rubber globally.',
    initials: 'MT'
  },
  {
    name: 'James K.',
    role: 'Chief Financial Officer',
    bio: 'James drives our financial strategy, enabling continuous investment in our state-of-the-art CNC machining centers.',
    initials: 'JK'
  }
];

export default function LeadershipPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader 
        badge={<><Users className="w-4 h-4 inline-block -mt-0.5" /> Executive Team</>}
        title="Guided by Experience"
        description="Our leadership team brings decades of deep industry expertise in commercial transport, metallurgy, and global supply chain management."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li><Link href="/company" className="hover:text-white transition-colors">Company</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Leadership Team</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERSHIP_DATA.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 group hover:shadow-xl hover:border-amber-200 transition-all duration-300">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-navy-100 flex items-center justify-center text-navy-900 font-extrabold text-2xl group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                  {leader.initials}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">{leader.name}</h3>
                  <p className="text-amber-500 font-bold text-sm">{leader.role}</p>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {leader.bio}
              </p>
              
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="mt-20 bg-gradient-to-r from-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 shadow-xl border border-navy-800 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Want to Join Our Ranks?</h2>
          <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
            We are always looking for driven engineers, machinists, and sales professionals to push the boundaries of commercial safety.
          </p>
          <Link href="/company/careers" className="inline-flex items-center bg-amber-500 text-navy-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 gap-2">
            View Open Careers <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
      <BreadcrumbSchema items={[{ name: 'Company', item: '/company' }, { name: 'Leadership Team' }]} />
    </div>
  );
}
