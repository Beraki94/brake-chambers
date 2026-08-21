"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ShieldCheck, Factory, Beaker, Users, ChevronDown } from 'lucide-react';

export default function CompanySidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    {
      title: "About Us",
      icon: <Users className="w-5 h-5" />,
      items: [
        { name: "Our Story", href: "/company/our-story" },
        { name: "Leadership Team", href: "/company/leadership" },
        { name: "Global Logistics", href: "/shipping" }
      ]
    },
    {
      title: "Manufacturing",
      icon: <Factory className="w-5 h-5" />,
      items: [
        { name: "Manufacturing Process", href: "/company/manufacturing-process" },
        { name: "Production Facility", href: "/company/production-facility" },
        { name: "Material Sourcing", href: "/company/material-sourcing" }
      ]
    },
    {
      title: "Quality & R&D",
      icon: <Beaker className="w-5 h-5" />,
      items: [
        { name: "IATF Certifications", href: "/company/iatf-certifications" },
        { name: "Brake Testing Lab", href: "/company/brake-testing-lab" },
        { name: "Brake R&D", href: "/company/brake-r-and-d" }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden w-full bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-center justify-between mb-6 font-bold text-navy-900"
      >
        <span className="flex items-center gap-2">
          <Factory className="w-5 h-5 text-amber-500" /> Company Navigation
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Sidebar Content */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block sticky top-24`}>
        <nav className="space-y-8">
          {navigation.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-extrabold text-navy-900 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="text-amber-500">{section.icon}</span>
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIdx) => {
                  const isActive = pathname === item.href || (item.href === '/company/our-story' && pathname === '/company');
                  return (
                    <li key={itemIdx}>
                      <Link 
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                          isActive 
                            ? 'bg-amber-50 text-amber-700 font-bold border-l-4 border-amber-500' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-navy-900 font-medium border-l-4 border-transparent'
                        }`}
                      >
                        {item.name}
                        {isActive && <ChevronRight className="w-4 h-4" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Build With Us Callout */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 p-6 rounded-2xl text-white shadow-xl mt-8">
            <h4 className="font-extrabold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" /> Build With Us
            </h4>
            <p className="text-navy-200 text-xs mb-4 leading-relaxed">
              Partner directly with the manufacturer. Skip the middleman for your heavy-duty fleet.
            </p>
            <Link 
              href="/contact"
              className="block w-full bg-amber-500 text-navy-900 text-center font-bold py-2.5 rounded-lg text-sm hover:bg-amber-400 transition-colors"
            >
              Discuss Project
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
