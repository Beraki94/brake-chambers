import React from 'react';
import { ShieldCheck, Target, Droplets, Factory } from 'lucide-react';

const qualityFeatures = [
  {
    icon: Factory,
    title: "ISO 9001:2015",
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
    <div className="mt-16 mb-8">
      <h3 className="text-2xl font-extrabold text-navy-900 mb-6 text-center">Engineered for Maximum Reliability</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {qualityFeatures.map((feature, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-navy-900 mb-2">{feature.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
