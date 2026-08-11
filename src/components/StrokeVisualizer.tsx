"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldEllipsis } from 'lucide-react';

export default function StrokeVisualizer() {
  const [isLongStroke, setIsLongStroke] = useState<boolean>(false);

  return (
    <div className="w-full mt-16 mb-8 rounded-[2.5rem] bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
      
      {/* Background glow */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] transition-colors duration-1000 ${
        isLongStroke ? 'bg-[#D9B340]/5' : 'bg-cyan-500/5'
      }`}></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Controls & Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-navy-700 bg-navy-800/80 text-navy-300 text-[11px] font-bold uppercase tracking-widest w-max">
            <ShieldEllipsis className="w-3 h-3 mr-2" /> Stroke Length Comparison
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Reserve Stopping Power.
          </h2>
          <p className="text-navy-200 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Service brakes can fade under heavy use. Long Stroke chambers provide an additional reserve of pushrod travel, ensuring reliable braking even when drums expand from extreme heat.
          </p>

          {/* Toggle Controls */}
          <div className="flex bg-navy-950 p-1.5 rounded-2xl border border-navy-800 mb-6 w-full max-w-md">
            <button 
              onClick={() => setIsLongStroke(false)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                !isLongStroke 
                  ? 'bg-navy-800 text-white shadow-lg border border-navy-700' 
                  : 'text-navy-400 hover:text-white'
              }`}
            >
              {!isLongStroke && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
              Standard Stroke
            </button>
            <button 
              onClick={() => setIsLongStroke(true)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                isLongStroke 
                  ? 'bg-navy-800 text-white shadow-lg border border-navy-700' 
                  : 'text-navy-400 hover:text-white'
              }`}
            >
              {isLongStroke && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
              Long Stroke
            </button>
          </div>

          {/* Feature Highlight */}
          <div className={`p-5 rounded-2xl border transition-all duration-500 max-w-md ${
            isLongStroke ? 'bg-navy-800/50 border-[#D9B340]/30' : 'bg-navy-800/50 border-cyan-500/30'
          }`}>
            <h4 className={`text-sm font-bold mb-2 ${isLongStroke ? 'text-amber-400' : 'text-cyan-400'}`}>
              {isLongStroke ? 'Enhanced Safety Margin' : 'Standard Application'}
            </h4>
            <p className="text-xs text-navy-200 leading-relaxed">
              {isLongStroke 
                ? 'Provides up to 3 inches of extra stroke. Critical for severe duty cycles, steep grades, and maximizing lining wear life.' 
                : 'Ideal for standard highway operations and fleets with strict preventative maintenance schedules.'}
            </p>
          </div>

        </div>

        {/* Right Side: Visualizer */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center bg-navy-950 rounded-3xl p-8 aspect-square md:aspect-video lg:aspect-square border border-navy-800 overflow-hidden">
          
          <img 
            src="/products/service_brake_pushrod.png" 
            alt="Service Brake Pushrod"
            className="relative z-10 w-full max-w-sm mix-blend-screen drop-shadow-2xl"
          />

          {/* Animated Pushrod Extension Graphic */}
          <div className="absolute right-[20%] top-1/2 -translate-y-1/2 z-20 flex items-center">
             
             {/* The base pushrod indicator */}
             <div className="w-24 h-1 bg-white/20 relative">
               <div className="absolute -left-1 -top-1 w-3 h-3 rounded-full bg-cyan-400"></div>
               <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-white/50"></div>
             </div>

             {/* The extension that animates out */}
             <div className={`h-1 bg-amber-500 relative transition-all duration-700 ease-out flex items-center ${
               isLongStroke ? 'w-20 opacity-100' : 'w-0 opacity-0'
             }`}>
                {/* Connecting visual */}
                <div className={`absolute -right-1 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-opacity duration-700 delay-300 ${isLongStroke ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Plus label */}
                <div className={`absolute left-1/2 -translate-x-1/2 -top-8 bg-amber-500/20 text-amber-400 border border-amber-500/50 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap transition-opacity duration-700 delay-500 ${isLongStroke ? 'opacity-100' : 'opacity-0'}`}>
                  + Extra Stroke
                </div>
             </div>

          </div>

        </div>

      </div>
    </div>
  );
}
