"use client";

import React from 'react';
import Link from 'next/link';
import { useMarketStore } from '../store/market';
import { ShieldCheck, Truck, Wrench, ArrowRight, ArrowUp } from 'lucide-react';

interface KeepExploringProps {
  currentCategory?: 'spring-brakes' | 'service-chambers' | 'chamber-parts-kits';
}

export default function KeepExploring({ currentCategory }: KeepExploringProps = {}) {
  const selectedMarket = useMarketStore(state => state.selectedMarket);

  const categories = [
    {
      id: 'spring-brakes',
      name: 'Spring Brakes',
      desc: 'Type 30/30, Piggybacks & Long Strokes',
      href: `/${selectedMarket.code}/spring-brakes`,
      icon: ShieldCheck,
      gradient: 'from-navy-800 to-slate-800',
      bgHover: 'group-hover:scale-105'
    },
    {
      id: 'service-chambers',
      name: 'Service Brakes',
      desc: 'Standard & Steer Axle Chambers',
      href: `/${selectedMarket.code}/service-chambers`,
      icon: Truck,
      gradient: 'from-slate-700 to-navy-950',
      bgHover: 'group-hover:scale-105'
    },
    {
      id: 'chamber-parts-kits',
      name: 'Accessories',
      desc: 'Diaphragms, Caging Bolts & Adjusters',
      href: `/${selectedMarket.code}/chamber-parts-kits`,
      icon: Wrench,
      gradient: 'from-slate-800 to-slate-600',
      bgHover: 'group-hover:scale-105'
    }
  ];

  // If we're on a category page, don't show the current category. Otherwise, show all.
  const otherCategories = currentCategory 
    ? categories.filter(cat => cat.id !== currentCategory)
    : categories;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-navy-900 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.5)] p-6 md:p-10 border border-slate-700/50">
      {/* Decorative Dot Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-500/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-500/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-8">
        <div>
          <h3 className="text-3xl font-heading font-bold text-white drop-shadow-md">Explore Our Catalog</h3>
          <p className="text-navy-200 mt-2 text-sm md:text-base font-medium">Discover premium wholesale deals across all our heavy-duty categories.</p>
        </div>
        <button 
          onClick={scrollToTop}
          className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors mt-4 md:mt-0"
        >
          <ArrowUp className="w-4 h-4" /> Back to Top
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {otherCategories.map(cat => (
          <Link href={cat.href} key={cat.id} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 border border-slate-600/30 hover:border-slate-400/50">
            {/* Background Color/Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-95 transition-transform duration-700 ${cat.bgHover}`}></div>
            
            {/* Pattern Overlay inside card */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

            <div className="relative p-8 flex flex-col justify-between h-full min-h-[220px] z-10 text-white">
              <div>
                <cat.icon className="w-10 h-10 mb-6 text-slate-300 drop-shadow-md" />
                <h4 className="text-2xl font-bold font-heading mb-2 drop-shadow-sm">{cat.name}</h4>
                <p className="text-slate-300 text-sm font-medium">{cat.desc}</p>
              </div>
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center backdrop-blur-md border border-slate-600/50 group-hover:bg-slate-300 group-hover:text-navy-900 transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button 
        onClick={scrollToTop}
        className="relative z-10 md:hidden w-full mt-6 py-3 flex items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl text-sm font-bold text-slate-300 hover:bg-slate-700 hover:text-white shadow-sm transition-colors"
      >
        <ArrowUp className="w-4 h-4" /> Back to Top
      </button>
    </div>
  );
}
