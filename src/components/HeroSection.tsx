"use client";

import React from 'react';
import { ShieldCheck, Factory } from 'lucide-react';

interface HeroSectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  videoUrl?: string; // Optional: If provided, plays a video. Otherwise, falls back to image.
  fallbackImageUrl?: string;
}

export default function HeroSection({
  title = (
    <>
      Premium Commercial <span className="text-slate-400">Brake Chambers.</span>
    </>
  ),
  subtitle = "Factory-direct spring brakes, service brakes, and high-quality replacement parts for heavy-duty commercial fleets worldwide. Skip the middlemen.",
  videoUrl,
  fallbackImageUrl = "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80"
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white py-12 lg:py-16">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-slate-500 rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-12 w-80 h-80 bg-navy-700 rounded-full mix-blend-screen filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] bg-slate-700 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
      </div>
      
      {/* Dot Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-slate-300 text-sm font-semibold mb-6">
            <Factory className="w-4 h-4" /> B2B Factory Direct
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg text-navy-200 max-w-xl mb-10 mx-auto md:mx-0 font-medium">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#inventory" 
              className="bg-[#D9B340] text-navy-900 font-bold px-8 py-3.5 rounded-full hover:bg-[#c9a330] transition-colors w-full sm:w-auto text-center shadow-[0_0_20px_rgba(255,176,0,0.3)]"
            >
              Browse Catalog &rarr;
            </a>
            <a 
              href="/quote" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-bold h-auto border-2 border-slate-500/30 hover:border-slate-400 hover:bg-slate-800/50 transition-all text-center backdrop-blur-sm"
            >
              Request a Quote
            </a>
          </div>
        </div>
        <div className="flex-1 hidden md:flex justify-end relative">
           {/* Decorative Background element */}
           <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-slate-500/20 blur-[80px]"></div>
           
           {/* Image/Video container */}
           <div className="relative w-full max-w-md hover:-translate-y-2 transition-transform duration-700">
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-600 via-slate-400 to-navy-500 rounded-[2.5rem] blur-xl opacity-50"></div>
              
              {videoUrl ? (
                <video 
                  src={videoUrl}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="relative rounded-[2rem] shadow-2xl border border-slate-500/30 object-cover w-full h-[340px] lg:h-[420px]"
                />
              ) : (
                <img 
                  src={fallbackImageUrl}
                  alt="Premium Wholesale Stock" 
                  className="relative rounded-[2rem] shadow-2xl border border-slate-500/30 object-cover w-full h-[340px] lg:h-[420px]"
                />
              )}
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-10 bg-navy-800/90 backdrop-blur-md border border-slate-600/50 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
                <div className="bg-gradient-to-br from-slate-400 to-slate-600 p-3 rounded-full text-white shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wide">ISO 9001 Certified</div>
                  <div className="text-xs text-slate-300 font-medium">1M Cycle Tested</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
