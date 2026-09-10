import React from 'react';
import { ShieldCheck, Target, Droplets, Factory } from 'lucide-react';

const qualityFeatures = [
  {
    icon: Factory,
    title: "Automotive Standards",
    description: "Manufactured in our audited, certified facility for total quality control."
  },
  {
    icon: Target,
    title: "1-Million Cycles",
    description: "Tested to withstand over a million duty cycles in extreme conditions."
  },
  {
    icon: Droplets,
    title: "Anti-Corrosion",
    description: "Heavy epoxy powder-coating resists salt spray and harsh chemicals."
  },
  {
    icon: ShieldCheck,
    title: "Premium Rubber",
    description: "Diaphragms engineered for extreme temperatures (-40°C to 80°C)."
  }
];

export default function ManufacturingQualityGrid() {
  return (
    <div className="mt-16 sm:mt-24 mb-16 sm:mb-24">
      <h2 className="text-2xl font-extrabold text-navy-900 mb-6 text-center">Engineered for Maximum Reliability</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 md:gap-6">
        {qualityFeatures.map((feature, idx) => (
          <div key={idx} className="flex flex-col h-full bg-white p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-navy-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
