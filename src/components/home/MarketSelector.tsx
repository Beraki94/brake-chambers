"use client";

import React, { useEffect, useState, useRef } from 'react';
import { useMarketStore } from '../../store/market';
import { MARKETS } from '../../lib/data';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';

export default function MarketSelector() {
  const { setMarket } = useMarketStore();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentMarket = useMarketStore(state => state.selectedMarket) || MARKETS[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-32 bg-navy-50 animate-pulse rounded-full"></div>;
  }

  const handleMarketChange = (newMarketCode: string) => {
    setIsOpen(false);
    if (newMarketCode === currentMarket.code) return;
    
    const marketToSet = MARKETS.find(m => m.code === newMarketCode);
    if (marketToSet) {
      setMarket(marketToSet);
      
      if (newMarketCode === 'en') {
        // To reliably restore original language, clear the cookie and reload
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
        window.location.reload();
      } else {
        // Set the Google Translate cookie for persistence
        document.cookie = `googtrans=/en/${newMarketCode}; path=/`;
        document.cookie = `googtrans=/en/${newMarketCode}; path=/; domain=${window.location.hostname}`;
        
        // Try to trigger Google Translate programmatically
        let selectField = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        
        if (selectField) {
          selectField.value = newMarketCode; 
          selectField.dispatchEvent(new Event('change'));
        } else {
          // If the widget hasn't fully loaded, poll for it briefly before falling back to reload
          let retries = 0;
          const poll = setInterval(() => {
            selectField = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (selectField) {
              clearInterval(poll);
              selectField.value = newMarketCode; 
              selectField.dispatchEvent(new Event('change'));
            } else if (retries >= 15) { 
              // Give up after ~1.5 seconds and reload
              clearInterval(poll);
              window.location.reload();
            }
            retries++;
          }, 100);
        }
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white hover:border-amber-400 hover:shadow-md transition-all pl-2 pr-2 py-1.5 rounded-full border border-navy-200 text-navy-900 font-semibold text-sm shadow-sm group h-8"
      >
        <span className="text-lg leading-none -mt-0.5">{currentMarket.flag || '🌐'}</span>
        <span className="group-hover:text-amber-600 transition-colors hidden sm:block font-bold">
          {currentMarket.countryName}
        </span>
        <span className="group-hover:text-amber-600 transition-colors sm:hidden uppercase font-bold text-[11px] tracking-wider">
          {currentMarket.code}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-navy-400 transition-transform ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden z-50">
          <div className="bg-slate-50/80 backdrop-blur-md px-4 py-3 border-b border-slate-100 flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-navy-400 uppercase tracking-widest">Select Region</span>
            <Globe className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="p-2 max-h-[300px] overflow-y-auto">
            {MARKETS.map(market => (
              <button
                key={market.code}
                onClick={() => handleMarketChange(market.code)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all ${market.code === currentMarket.code ? 'bg-amber-50 border border-amber-100/50' : 'hover:bg-slate-50 border border-transparent'}`}
              >
                 <span className="text-xl leading-none">{market.flag}</span>
                 <span className={`font-bold ${market.code === currentMarket.code ? 'text-amber-600' : 'text-slate-600'}`}>
                   {market.countryName}
                 </span>
                 {market.code === currentMarket.code && (
                   <div className="ml-auto w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                 )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
