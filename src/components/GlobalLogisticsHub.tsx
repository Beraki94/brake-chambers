"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Globe2, Ship, Plane, CheckCircle2, Box, Anchor } from 'lucide-react';

type ContainerType = '20ft' | '40ft' | '40HQ';

interface ContainerSpecs {
  type: ContainerType;
  label: string;
  pallets: number;
  totalChambers: number; // Avg mixed load
  transitTime: string;
  bestFor: string;
}

const CONTAINERS: Record<ContainerType, ContainerSpecs> = {
  '20ft': {
    type: '20ft',
    label: '20ft Standard Container',
    pallets: 10,
    totalChambers: 2400,
    transitTime: '21-28 Days (Ocean)',
    bestFor: 'Regional Distributors & Mid-Size Fleets'
  },
  '40ft': {
    type: '40ft',
    label: '40ft Standard Container',
    pallets: 20,
    totalChambers: 4800,
    transitTime: '21-28 Days (Ocean)',
    bestFor: 'National Suppliers'
  },
  '40HQ': {
    type: '40HQ',
    label: '40ft High Cube (HQ)',
    pallets: 20,
    totalChambers: 5600, // Taller so you can stack more
    transitTime: '21-28 Days (Ocean)',
    bestFor: 'High-Volume Global Importers'
  }
};

export default function GlobalLogisticsHub() {
  const [activeContainer, setActiveContainer] = useState<ContainerType>('40ft');

  const specs = CONTAINERS[activeContainer];

  return (
    <div className="mt-16 rounded-3xl overflow-hidden border border-navy-800 shadow-2xl relative bg-navy-950 flex flex-col lg:flex-row">
      
      {/* Left Side: The Interactive Map */}
      <div className="relative w-full lg:w-3/5 min-h-[400px] lg:min-h-[500px]">
        <Image 
          src="/products/global_logistics_map.png"
          alt="Global Shipping Routes"
          fill
          className="object-cover opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>

        {/* Floating Tag */}
        <div className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-navy-700">
          <Globe2 className="w-4 h-4 text-emerald-400" />
          <span className="text-white text-xs font-bold uppercase tracking-widest">Global Distribution</span>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-8 left-8 flex gap-6">
          <div className="bg-navy-900/80 backdrop-blur-md p-4 rounded-xl border border-navy-700">
            <div className="text-2xl font-black text-amber-500 mb-1 font-heading">65+</div>
            <div className="text-xs font-bold text-navy-300 uppercase tracking-wider">Countries Served</div>
          </div>
          <div className="bg-navy-900/80 backdrop-blur-md p-4 rounded-xl border border-navy-700">
            <div className="text-2xl font-black text-emerald-400 mb-1 font-heading">99.8%</div>
            <div className="text-xs font-bold text-navy-300 uppercase tracking-wider">On-Time Delivery</div>
          </div>
        </div>
      </div>

      {/* Right Side: Container Optimizer */}
      <div className="w-full lg:w-2/5 bg-gradient-to-b from-navy-950 to-navy-900 p-8 lg:p-12 relative z-10 border-l border-navy-800 flex flex-col justify-center">
        
        <div className="mb-8">
          <h3 className="text-3xl font-extrabold text-white mb-3 font-heading">
            Container <span className="text-emerald-400">Optimizer</span>
          </h3>
          <p className="text-navy-200">
            Maximize your freight efficiency. Select a container size to see typical mixed-load capacities.
          </p>
        </div>

        {/* Container Toggles */}
        <div className="flex bg-navy-800 p-1 rounded-xl mb-8 border border-navy-700">
          {(['20ft', '40ft', '40HQ'] as ContainerType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActiveContainer(type)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                activeContainer === type
                  ? 'bg-emerald-500 text-navy-950 shadow-md'
                  : 'text-navy-300 hover:text-white hover:bg-navy-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Data Readout */}
        <div className="bg-navy-900/60 p-6 rounded-2xl border border-navy-700 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-emerald-500/10 transition-colors"></div>
          
          <h4 className="text-white font-bold text-lg mb-6">{specs.label}</h4>

          <div className="space-y-5">
            <div className="flex justify-between items-center border-b border-navy-800 pb-3">
              <div className="flex items-center gap-2 text-navy-200">
                <Box className="w-4 h-4 text-amber-500" /> Standard Pallets
              </div>
              <div className="font-bold text-white text-lg">{specs.pallets}</div>
            </div>

            <div className="flex justify-between items-center border-b border-navy-800 pb-3">
              <div className="flex items-center gap-2 text-navy-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Est. Chambers
              </div>
              <div className="font-black text-emerald-400 text-xl">{specs.totalChambers.toLocaleString()}</div>
            </div>

            <div className="flex justify-between items-center pb-1">
              <div className="flex items-center gap-2 text-navy-200">
                <Anchor className="w-4 h-4 text-blue-400" /> Avg. Transit Time
              </div>
              <div className="font-bold text-white">{specs.transitTime}</div>
            </div>
          </div>
        </div>

        <button className="w-full bg-white hover:bg-slate-100 text-navy-900 font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg group">
          <Ship className="w-5 h-5 group-hover:-rotate-12 transition-transform" /> Contact Logistics Team
        </button>

      </div>
    </div>
  );
}
