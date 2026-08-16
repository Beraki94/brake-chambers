import React from 'react';
import { Truck, Bus, HardHat, Warehouse } from 'lucide-react';

const applications = [
  {
    icon: Truck,
    title: "Heavy-Duty Trucks",
    description: "Class 8 tractors and vocational trucks."
  },
  {
    icon: Warehouse,
    title: "Commercial Trailers",
    description: "Dry vans, flatbeds, and refrigerated units."
  },
  {
    icon: Bus,
    title: "Transit & School Buses",
    description: "High-frequency stopping applications."
  },
  {
    icon: HardHat,
    title: "Severe Duty",
    description: "Logging, mining, and off-highway."
  }
];

export default function ApplicationScopeSection() {
  return (
    <div className="mt-16 mb-8 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-12">
      <h3 className="text-2xl font-extrabold text-navy-900 mb-8 text-center">Global Fleet Applications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {applications.map((app, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white border border-slate-200 text-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-sm hover:scale-105 transition-transform">
              <app.icon className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-navy-900 mb-2">{app.title}</h4>
            <p className="text-sm text-slate-600">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
