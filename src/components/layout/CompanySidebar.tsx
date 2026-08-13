import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Building2, Factory, FileBadge, FlaskConical, Users, Pickaxe, Activity } from 'lucide-react';

export default function CompanySidebar() {
  const pathname = usePathname();

  const links = [
    { title: 'Our Story', href: '/company/our-story', icon: <Building2 className="w-5 h-5" /> },
    { title: 'Leadership Team', href: '/company/leadership', icon: <Users className="w-5 h-5" /> },
    { title: 'Facility Overview', href: '/company/facility-overview', icon: <Building2 className="w-5 h-5" /> },
    { title: 'Production Process', href: '/company/production-process', icon: <Factory className="w-5 h-5" /> },
    { title: 'Material Sourcing', href: '/company/material-sourcing', icon: <Pickaxe className="w-5 h-5" /> },
    { title: 'Testing Laboratory', href: '/company/testing-laboratory', icon: <FlaskConical className="w-5 h-5" /> },
    { title: 'ISO Certifications', href: '/company/iso-certifications', icon: <FileBadge className="w-5 h-5" /> },
    { title: 'Research & Innovation', href: '/company/research-and-innovations', icon: <Activity className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 sticky top-24">
      <h3 className="text-xl font-bold text-navy-900 mb-6 font-heading">Inside BRC</h3>
      <div className="space-y-2">
        {links.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={idx} 
              href={link.href}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-amber-100 border border-amber-100' 
                  : 'hover:bg-slate-50 border border-transparent'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                isActive ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-500'
              }`}>
                {link.icon}
              </div>
              <span className={`font-semibold text-sm transition-colors ${
                isActive ? 'text-amber-700' : 'text-navy-700 group-hover:text-amber-700'
              }`}>
                {link.title}
              </span>
              <ArrowRight className={`w-4 h-4 ml-auto transition-all ${
                isActive ? 'text-amber-500 translate-x-1' : 'text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1'
              }`} />
            </Link>
          );
        })}
      </div>
      
      <div className="mt-8 pt-8 border-t border-slate-100">
         <h4 className="font-bold text-navy-900 text-sm mb-3 uppercase tracking-wider">Need Specifications?</h4>
         <p className="text-slate-500 text-xs leading-relaxed mb-4">Download our full ISO certification packets and technical engineering brochures.</p>
         <Link href="/technical-resources" className="w-full inline-flex justify-center items-center gap-2 bg-navy-900 text-white font-bold text-xs uppercase tracking-widest px-4 py-3 rounded-xl hover:bg-navy-800 transition-colors">
           Resource Center
         </Link>
      </div>
    </div>
  );
}
