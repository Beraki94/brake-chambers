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
        
        // Trigger Google Translate programmatically
        const selectField = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectField) {
          selectField.value = newMarketCode; 
          selectField.dispatchEvent(new Event('change'));
        } else {
          // If the widget hasn't fully loaded, reload the page to apply the cookie
          window.location.reload();
        }
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white hover:border-slate-400 hover:shadow-md transition-all pl-3 pr-2 py-1.5 rounded-full border border-navy-200 text-navy-900 font-semibold text-sm shadow-sm group"
      >
        <Globe className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors" />
        <span className="group-hover:text-slate-700 transition-colors hidden sm:block">
          {currentMarket.countryName}
        </span>
        <span className="group-hover:text-slate-700 transition-colors sm:hidden uppercase">
          {currentMarket.code}
        </span>
        <ChevronDown className={`w-4 h-4 text-navy-400 transition-transform ${isOpen ? 'rotate-180 text-slate-600' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-navy-100 shadow-xl rounded-xl overflow-hidden z-50">
          <div className="bg-navy-50 px-4 py-2 border-b border-navy-100 text-[10px] font-bold text-navy-400 uppercase tracking-wider">
            Select Language
          </div>
          <div className="py-1 max-h-64 overflow-y-auto">
            {MARKETS.map(market => (
              <button
                key={market.code}
                onClick={() => handleMarketChange(market.code)}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-slate-50 transition-colors ${market.code === currentMarket.code ? 'bg-navy-50/50' : ''}`}
              >
                 <span className={`font-semibold ${market.code === currentMarket.code ? 'text-navy-900' : 'text-slate-700'}`}>
                   {market.countryName}
                 </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
