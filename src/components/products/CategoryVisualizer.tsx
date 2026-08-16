"use client";

import React from 'react';
import { ShieldEllipsis, Wrench, Disc } from 'lucide-react';

export default function CategoryVisualizer({ type }: { type: 'spring' | 'service' | 'parts' | 'adp' }) {
  const content = {
    service: {
      badge: "Stroke Length Comparison",
      title: "Reserve Stopping Power.",
      desc: "Service brakes can fade under heavy use. Long Stroke chambers provide an additional reserve of pushrod travel, ensuring reliable braking even when drums expand from extreme heat.",
      tab1: "Standard Stroke",
      tab2: "Long Stroke",
      highlight1Title: "Standard Application",
      highlight1Desc: "Ideal for standard highway operations and fleets with strict preventative maintenance schedules. Reliable, consistent daily performance.",
      highlight2Title: "Enhanced Safety Margin",
      highlight2Desc: "Provides up to 3 inches of extra stroke. Critical for severe duty cycles, steep grades, and maximizing lining wear life.",
      img: "/products/service_brake_pushrod.png",
      imgClass: "mix-blend-screen drop-shadow-[0_0_40px_rgba(34,211,238,0.2)] max-w-full max-h-[450px] object-contain",
      icon: ShieldEllipsis,
    },
    spring: {
      badge: "Dual Chamber System",
      title: "Fail-Safe Parking Power.",
      desc: "Spring brakes combine a standard service chamber with an emergency parking spring. If air pressure is lost, the heavy-duty mechanical spring automatically applies the brakes.",
      tab1: "Service Braking",
      tab2: "Emergency / Parking",
      highlight1Title: "Air Applied",
      highlight1Desc: "Air pressure pushes the diaphragm to apply service brakes during normal driving. Completely independent from the parking spring.",
      highlight2Title: "Mechanical Spring Applied",
      highlight2Desc: "When air is released (or lost), the powerful steel spring expands to mechanically lock the brakes. A vital fail-safe mechanism.",
      img: "/products/spring_brake_schematic.png",
      imgClass: "mix-blend-screen drop-shadow-[0_0_40px_rgba(251,191,36,0.2)] max-w-full max-h-[450px] object-contain",
      icon: ShieldEllipsis,
    },
    parts: {
      badge: "Modular Components",
      title: "Cost-Effective Rebuilds.",
      desc: "Instead of replacing entire assemblies, our piggyback kits and replacement diaphragms allow fleets to perform rapid, modular maintenance that saves money and reduces downtime.",
      tab1: "Full Assembly",
      tab2: "Piggyback Kit",
      highlight1Title: "Complete Replacement",
      highlight1Desc: "Replacing the entire chamber ensures all components are new. This is the ideal solution for severely corroded or damaged units.",
      highlight2Title: "Smart Maintenance",
      highlight2Desc: "Replace only the failed parking section. Reuses the existing service housing and pushrod, cutting costs by up to 40%.",
      img: "/products/piggyback.jpg",
      imgClass: "mix-blend-screen drop-shadow-[0_0_40px_rgba(34,211,238,0.2)] max-w-full max-h-[450px] object-contain",
      icon: Wrench,
    },
    adp: {
      badge: "Air Disc Actuators",
      title: "Consistent Linear Force.",
      desc: "Air disc brake actuators translate air pressure into direct, linear mechanical force. This drives the caliper pistons to squeeze the rotor, delivering superior stopping distance and virtually eliminating brake fade.",
      tab1: "Drum Actuation",
      tab2: "Disc Actuation",
      highlight1Title: "S-Cam Rotation",
      highlight1Desc: "Traditional drum brakes use the pushrod to rotate an S-cam, which pushes brake shoes outward against the drum.",
      highlight2Title: "Direct Caliper Force",
      highlight2Desc: "Disc actuators push directly into the caliper mechanism, resulting in faster response times and perfectly even pad wear.",
      img: "/products/air-disc-brake.jpg",
      imgClass: "mix-blend-screen drop-shadow-[0_0_40px_rgba(251,191,36,0.2)] max-w-full max-h-[450px] object-contain",
      icon: Disc,
    }
  };

  const data = content[type];
  const Icon = data.icon;

  return (
    <div className="w-full mt-10 md:mt-16 mb-8 rounded-[2rem] lg:rounded-[2.5rem] bg-navy-950 border border-navy-800 shadow-2xl relative overflow-hidden flex flex-col items-center">
      
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] transition-colors duration-1000 z-0 pointer-events-none bg-cyan-500/5"></div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] transition-colors duration-1000 z-0 pointer-events-none bg-amber-500/5"></div>
      
      {/* Subtle Engineering Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Header (Top Center) */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-8 pt-10 md:pt-16 pb-6 md:pb-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-4 md:mb-6 rounded-full border border-navy-700 bg-navy-800/80 text-navy-300 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
          <Icon className="w-3 h-3 mr-2 text-amber-500" /> {data.badge}
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
          {data.title}
        </h2>
        <p className="text-navy-200 text-sm md:text-base leading-relaxed">
          {data.desc}
        </p>
      </div>

      {/* Visual Grid Area */}
      <div className="relative w-full max-w-7xl px-4 md:px-12 pb-10 md:pb-20 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 z-10">
        
        {/* Center Diagram (Appears First on Mobile) */}
        <div className="w-full lg:w-1/3 flex justify-center items-center py-4 lg:py-0 relative order-first lg:order-none mb-4 lg:mb-0">
           <img 
             src={data.img} 
             alt={data.title}
             className={`relative z-10 w-full transition-transform duration-1000 hover:scale-105 ${data.imgClass}`}
           />
           
           {/* Animated Pushrod Extension Graphic (Only for Service Brakes) */}
           {type === 'service' && (
             <div className="absolute right-0 md:right-[-10%] top-1/2 -translate-y-1/2 z-20 flex items-center">
                <div className="w-8 md:w-12 h-1 bg-white/20 relative">
                  <div className="absolute -left-1 -top-1 w-2 md:w-3 h-2 md:h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                  <div className="absolute -right-1 -top-1 w-2 md:w-3 h-2 md:h-3 rounded-full bg-white/50"></div>
                </div>
                <div className="h-1 bg-amber-500 relative flex items-center w-8 md:w-12 opacity-100">
                   <div className="absolute -right-1 w-3 md:w-4 h-3 md:h-4 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,1)]"></div>
                   <div className="absolute left-1/2 -translate-x-1/2 -top-8 md:-top-10 bg-amber-500/20 text-amber-400 border border-amber-500/50 px-2 md:px-3 py-1 rounded-md text-[9px] md:text-[11px] font-bold whitespace-nowrap backdrop-blur-sm">
                     + Extra Stroke
                   </div>
                </div>
             </div>
           )}
        </div>

        {/* Card 1 (Left Flank) */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm bg-navy-900/60 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.05)] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] transform lg:translate-y-[-2rem] transition-transform hover:-translate-y-1 hover:border-cyan-500/50">
             <span className="flex items-center gap-2 text-cyan-400 uppercase tracking-widest text-[10px] font-black mb-2 md:mb-3">
               <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></span>
               {data.tab1}
             </span>
             <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">{data.highlight1Title}</h3>
             <p className="text-navy-200 text-xs md:text-sm leading-relaxed">{data.highlight1Desc}</p>
          </div>
        </div>

        {/* Card 2 (Right Flank) */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="w-full max-w-sm bg-navy-900/60 backdrop-blur-md border border-amber-500/30 shadow-[0_0_30px_rgba(251,191,36,0.05)] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] transform lg:translate-y-[2rem] transition-transform hover:-translate-y-1 hover:border-amber-500/50">
             <span className="flex items-center gap-2 text-amber-400 uppercase tracking-widest text-[10px] font-black mb-2 md:mb-3">
               <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.8)]"></span>
               {data.tab2}
             </span>
             <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">{data.highlight2Title}</h3>
             <p className="text-navy-200 text-xs md:text-sm leading-relaxed">{data.highlight2Desc}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
