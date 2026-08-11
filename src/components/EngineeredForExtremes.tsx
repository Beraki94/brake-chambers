"use client";

import React, { useState } from 'react';
import { Snowflake, Sun, Droplets, Shield } from 'lucide-react';

type Environment = 'arctic' | 'heat' | 'salt';

export default function EngineeredForExtremes() {
  const [activeEnv, setActiveEnv] = useState<Environment>('arctic');

  const environments = {
    arctic: {
      id: 'arctic',
      name: 'Arctic Freeze',
      icon: Snowflake,
      bgClass: 'from-blue-900 via-slate-900 to-cyan-950',
      accent: 'text-cyan-400',
      bgAccent: 'bg-cyan-400',
      border: 'border-cyan-500/50',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.3)]',
      tooltip1: {
        title: 'Cold-Resistant Diaphragm',
        desc: 'Maintains flexibility and prevents cracking down to -40°F (-40°C).',
        pos: 'top-[30%] left-[20%]'
      },
      tooltip2: {
        title: 'Sealed Boot',
        desc: 'Prevents ice build-up inside the pushrod chamber.',
        pos: 'bottom-[40%] right-[15%]'
      }
    },
    heat: {
      id: 'heat',
      name: 'Extreme Heat',
      icon: Sun,
      bgClass: 'from-amber-950 via-orange-900 to-red-950',
      accent: 'text-amber-400',
      bgAccent: 'bg-amber-400',
      border: 'border-amber-500/50',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
      tooltip1: {
        title: 'High-Temp O-Rings',
        desc: 'Resists thermal degradation during continuous downhill braking.',
        pos: 'top-[45%] right-[25%]'
      },
      tooltip2: {
        title: 'Heat-Treated Springs',
        desc: 'Maintains uniform force output without sagging at high operating temps.',
        pos: 'bottom-[25%] left-[30%]'
      }
    },
    salt: {
      id: 'salt',
      name: 'Corrosive Salt',
      icon: Droplets,
      bgClass: 'from-emerald-950 via-teal-950 to-slate-950',
      accent: 'text-emerald-400',
      bgAccent: 'bg-emerald-400',
      border: 'border-emerald-500/50',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      tooltip1: {
        title: 'Advanced E-Coating',
        desc: 'Multi-stage electro-deposition housing prevents rust and salt pitting.',
        pos: 'top-[20%] right-[30%]'
      },
      tooltip2: {
        title: 'Zinc-Plated Hardware',
        desc: 'Clamp bands and nuts resist galvanic corrosion from road chemicals.',
        pos: 'bottom-[35%] left-[20%]'
      }
    }
  };

  const current = environments[activeEnv];

  return (
    <div className="w-full mt-16 mb-8 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
      {/* Background with dynamic transition */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${current.bgClass} transition-colors duration-1000 ease-in-out`}
      ></div>
      
      {/* Overlay pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-color-dodge transition-opacity duration-1000"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>

      <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 min-h-[500px]">
        
        {/* Left Side: Content & Toggles */}
        <div className="w-full md:w-5/12 flex flex-col">
          <div className={`inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-black/30 border ${current.border} ${current.accent} text-[11px] font-bold uppercase tracking-widest backdrop-blur-md transition-colors duration-500 w-max`}>
            <Shield className="w-3 h-3 mr-2" /> Engineered for Extremes
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg transition-all duration-500">
            Uncompromising <br/>Durability.
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-md">
            Our brake chambers are precision-engineered to withstand the harshest operating environments on the planet. Select an environment below to see how our architecture protects your fleet.
          </p>

          <div className="flex flex-col gap-3">
            {(Object.keys(environments) as Environment[]).map((env) => {
              const e = environments[env];
              const isActive = activeEnv === env;
              const Icon = e.icon;
              return (
                <button
                  key={env}
                  onClick={() => setActiveEnv(env)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 text-left border ${
                    isActive 
                      ? `bg-black/40 ${e.border} ${e.glow} backdrop-blur-md translate-x-2` 
                      : 'bg-black/10 border-transparent hover:bg-black/20 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isActive ? `bg-white/10 ${e.accent}` : 'bg-white/5'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`font-bold tracking-wide ${isActive ? 'text-white' : ''}`}>
                    {e.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Interactive Image */}
        <div className="w-full md:w-7/12 relative flex justify-center items-center">
          {/* Main Image */}
          <div className="relative w-full max-w-lg aspect-square">
            {/* Soft glow behind image */}
            <div className={`absolute inset-0 rounded-full blur-[100px] transition-colors duration-1000 opacity-20 ${current.bgClass.split(' ')[0].replace('from-', 'bg-')}`}></div>
            
            <img 
              src="/products/spring-brake.jpg" 
              alt="Brake Chamber Engineering" 
              className="w-full h-full object-contain mix-blend-screen drop-shadow-2xl opacity-90 transition-all duration-1000"
            />
            
            {/* Tooltip 1 */}
            <div className={`absolute ${current.tooltip1.pos} group z-20`}>
              <div className={`w-6 h-6 rounded-full border-2 ${current.border} ${current.glow} flex items-center justify-center cursor-pointer bg-black/50 backdrop-blur-sm`}>
                <div className={`w-2 h-2 rounded-full ${current.bgAccent} animate-ping`}></div>
                <div className={`absolute w-2 h-2 rounded-full ${current.bgAccent}`}></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-10 w-48 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <h4 className={`text-sm font-bold mb-1 ${current.accent}`}>{current.tooltip1.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{current.tooltip1.desc}</p>
              </div>
            </div>

            {/* Tooltip 2 */}
            <div className={`absolute ${current.tooltip2.pos} group z-20`}>
              <div className={`w-6 h-6 rounded-full border-2 ${current.border} ${current.glow} flex items-center justify-center cursor-pointer bg-black/50 backdrop-blur-sm`}>
                <div className={`w-2 h-2 rounded-full ${current.bgAccent} animate-ping`}></div>
                <div className={`absolute w-2 h-2 rounded-full ${current.bgAccent}`}></div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-10 w-48 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                <h4 className={`text-sm font-bold mb-1 ${current.accent}`}>{current.tooltip2.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{current.tooltip2.desc}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
