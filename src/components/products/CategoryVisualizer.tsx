"use client";

import React, { useState } from 'react';
import { ShieldEllipsis, CheckCircle2, Wrench, Disc } from 'lucide-react';

export default function CategoryVisualizer({ type }: { type: 'spring' | 'service' | 'parts' | 'adp' }) {
  const [isInteractive, setIsInteractive] = useState<boolean>(false);

  const content = {
    service: {
      badge: "Stroke Length Comparison",
      title: "Reserve Stopping Power.",
      desc: "Service brakes can fade under heavy use. Long Stroke chambers provide an additional reserve of pushrod travel, ensuring reliable braking even when drums expand from extreme heat.",
      tab1: "Standard Stroke",
      tab2: "Long Stroke",
      highlight1Title: "Standard Application",
      highlight1Desc: "Ideal for standard highway operations and fleets with strict preventative maintenance schedules.",
      highlight2Title: "Enhanced Safety Margin",
      highlight2Desc: "Provides up to 3 inches of extra stroke. Critical for severe duty cycles, steep grades, and maximizing lining wear life.",
      img: "/products/service_brake_pushrod.png",
      imgClass: "mix-blend-screen drop-shadow-2xl max-w-sm",
      icon: ShieldEllipsis,
    },
    spring: {
      badge: "Dual Chamber System",
      title: "Fail-Safe Parking Power.",
      desc: "Spring brakes combine a standard service chamber with an emergency parking spring. If air pressure is lost, the heavy-duty mechanical spring automatically applies the brakes.",
      tab1: "Service Braking",
      tab2: "Emergency / Parking",
      highlight1Title: "Air Applied",
      highlight1Desc: "Air pressure pushes the diaphragm to apply service brakes during normal driving.",
      highlight2Title: "Mechanical Spring Applied",
      highlight2Desc: "When air is released (or lost), the powerful steel spring expands to mechanically lock the brakes.",
      img: "/products/spring_brake_schematic.png",
      imgClass: "drop-shadow-2xl max-w-full rounded-2xl",
      icon: ShieldEllipsis,
    },
    parts: {
      badge: "Modular Components",
      title: "Cost-Effective Rebuilds.",
      desc: "Instead of replacing entire assemblies, our piggyback kits and replacement diaphragms allow fleets to perform rapid, modular maintenance that saves money and reduces downtime.",
      tab1: "Full Assembly",
      tab2: "Piggyback Kit",
      highlight1Title: "Complete Replacement",
      highlight1Desc: "Replacing the entire chamber ensures all components are new, ideal for severely corroded or damaged units.",
      highlight2Title: "Smart Maintenance",
      highlight2Desc: "Replace only the failed parking section. Reuses the existing service housing and pushrod, cutting costs by up to 40%.",
      img: "/products/piggyback.jpg",
      imgClass: "drop-shadow-2xl max-w-sm rounded-2xl",
      icon: Wrench,
    },
    adp: {
      badge: "Air Disc Actuators",
      title: "Consistent Linear Force.",
      desc: "Air disc brake actuators translate air pressure into direct, linear mechanical force. This drives the caliper pistons to squeeze the rotor, delivering superior stopping distance and virtually eliminating brake fade.",
      tab1: "Drum Actuation",
      tab2: "Disc Actuation",
      highlight1Title: "S-Cam Rotation",
      highlight1Desc: "Traditional drum brakes use the pushrod to rotate an S-cam, which pushes brake shoes outward.",
      highlight2Title: "Direct Caliper Force",
      highlight2Desc: "Disc actuators push directly into the caliper mechanism, resulting in faster response times and perfectly even pad wear.",
      img: "/products/air-disc-brake.jpg",
      imgClass: "drop-shadow-2xl max-w-sm rounded-2xl",
      icon: Disc,
    }
  };

  const data = content[type];
  const Icon = data.icon;

  return (
    <div className="w-full mt-16 mb-8 rounded-[2.5rem] bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
      
      {/* Background glow */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] transition-colors duration-1000 ${
        isInteractive ? 'bg-[#D9B340]/10' : 'bg-cyan-500/10'
      }`}></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Controls & Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-navy-700 bg-navy-800/80 text-navy-300 text-[11px] font-bold uppercase tracking-widest w-max">
            <Icon className="w-3 h-3 mr-2" /> {data.badge}
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {data.title}
          </h2>
          <p className="text-navy-200 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            {data.desc}
          </p>

          {/* Toggle Controls */}
          <div className="flex flex-col sm:flex-row bg-navy-950 p-1.5 rounded-2xl border border-navy-800 mb-6 w-full max-w-md gap-1">
            <button 
              onClick={() => setIsInteractive(false)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                !isInteractive 
                  ? 'bg-navy-800 text-white shadow-lg border border-navy-700' 
                  : 'text-navy-400 hover:text-white hover:bg-navy-900'
              }`}
            >
              {!isInteractive && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
              {data.tab1}
            </button>
            <button 
              onClick={() => setIsInteractive(true)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                isInteractive 
                  ? 'bg-navy-800 text-white shadow-lg border border-navy-700' 
                  : 'text-navy-400 hover:text-white hover:bg-navy-900'
              }`}
            >
              {isInteractive && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
              {data.tab2}
            </button>
          </div>

          {/* Feature Highlight */}
          <div className={`p-5 rounded-2xl border transition-all duration-500 max-w-md ${
            isInteractive ? 'bg-navy-800/50 border-[#D9B340]/30' : 'bg-navy-800/50 border-cyan-500/30'
          }`}>
            <h4 className={`text-sm font-bold mb-2 ${isInteractive ? 'text-amber-400' : 'text-cyan-400'}`}>
              {isInteractive ? data.highlight2Title : data.highlight1Title}
            </h4>
            <p className="text-xs text-navy-200 leading-relaxed">
              {isInteractive ? data.highlight2Desc : data.highlight1Desc}
            </p>
          </div>

        </div>

        {/* Right Side: Visualizer */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center bg-navy-950 rounded-3xl p-8 aspect-square md:aspect-video lg:aspect-square border border-navy-800 overflow-hidden">
          
          <img 
            src={data.img} 
            alt={data.title}
            className={`relative z-10 w-full transition-transform duration-700 ${data.imgClass} ${isInteractive ? 'scale-105' : 'scale-100'}`}
          />

          {/* Animated Pushrod Extension Graphic (Only for Service Brakes) */}
          {type === 'service' && (
            <div className="absolute right-[20%] top-1/2 -translate-y-1/2 z-20 flex items-center">
               <div className="w-24 h-1 bg-white/20 relative">
                 <div className="absolute -left-1 -top-1 w-3 h-3 rounded-full bg-cyan-400"></div>
                 <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-white/50"></div>
               </div>
               <div className={`h-1 bg-amber-500 relative transition-all duration-700 ease-out flex items-center ${
                 isInteractive ? 'w-20 opacity-100' : 'w-0 opacity-0'
               }`}>
                  <div className={`absolute -right-1 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-opacity duration-700 delay-300 ${isInteractive ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`absolute left-1/2 -translate-x-1/2 -top-8 bg-amber-500/20 text-amber-400 border border-amber-500/50 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap transition-opacity duration-700 delay-500 ${isInteractive ? 'opacity-100' : 'opacity-0'}`}>
                    + Extra Stroke
                  </div>
               </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
