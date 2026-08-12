"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useMarketStore } from '../../store/market';
import { BRAKE_CHAMBERS } from '../../lib/data';
import { Search, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

// We will dynamically search BRAKE_CHAMBERS for oemPartNumbers

export default function OEMSearchForm() {
  const selectedMarket = useMarketStore(state => state.selectedMarket);
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<{ found: boolean; data?: any; error?: string } | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setResult(null);

    // Simulate API network delay
    setTimeout(() => {
      const cleanQuery = query.trim().toUpperCase();
      
      let foundOem: { brand: string, partNumber: string, matchType: string } | null = null;
      let brcProduct = null;
      
      for (const c of BRAKE_CHAMBERS) {
        if (!c.oemPartNumbers) continue;
        
        // Try exact match first
        const oemMatch = c.oemPartNumbers.find(oem => oem.partNumber.toUpperCase() === cleanQuery);
        if (oemMatch) {
          foundOem = { brand: oemMatch.brand, partNumber: oemMatch.partNumber, matchType: 'Exact' };
          brcProduct = c;
          break;
        }
        
        // Fallback to partial match
        const oemPartialMatch = c.oemPartNumbers.find(oem => oem.partNumber.toUpperCase().includes(cleanQuery) || cleanQuery.includes(oem.partNumber.toUpperCase()));
        if (oemPartialMatch) {
          foundOem = { brand: oemPartialMatch.brand, partNumber: oemPartialMatch.partNumber, matchType: 'Equivalent' };
          brcProduct = c;
          break;
        }
      }

      if (brcProduct && foundOem) {
        setResult({
          found: true,
          data: { oemBrand: foundOem.brand, oemPart: foundOem.partNumber, matchType: foundOem.matchType, brcProduct }
        });
      } else {
        setResult({ found: false });
      }
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-navy-900 mb-2">Interchange Search Demo</h2>
        <p className="text-slate-500 mb-6 text-sm">
          Try searching for real Bendix/Haldex parts like: <code className="bg-slate-100 px-2 py-1 rounded text-navy-800 font-mono">NT3030STD-WC</code> or <code className="bg-slate-100 px-2 py-1 rounded text-navy-800 font-mono">GC3030</code>
        </p>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter OEM Part Number (e.g. NT3030STD-WC)" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all font-mono uppercase" 
            />
          </div>
          <button 
            type="submit"
            disabled={isSearching || !query.trim()}
            className="bg-navy-900 text-white font-bold px-10 py-4 rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
          >
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              'Search'
            )}
          </button>
        </form>

        {/* Results Area */}
        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {result.found && result.data ? (
              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-2 rounded-full text-green-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 text-lg">Cross-Reference Found!</h3>
                    <p className="text-green-700 text-sm">
                      {result.data.oemBrand} <span className="font-mono font-bold">{result.data.oemPart}</span> crosses to:
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-green-100 p-4 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 bg-slate-50 rounded-md flex-shrink-0 flex items-center justify-center text-slate-400 border border-slate-100">
                     <img src={result.data.brcProduct.galleryUrls[0]} alt="BRC Product" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-600 mb-2">
                      {result.data.matchType} Match
                    </div>
                    <h4 className="font-bold text-navy-900 text-lg mb-1">{result.data.brcProduct.name}</h4>
                    <p className="text-slate-500 text-sm mb-3">BRC Internal ID: <span className="font-mono">{result.data.brcProduct.slug}</span></p>
                  </div>
                  <Link 
                    href={`/${result.data.brcProduct.category === 'Spring Brake' ? 'spring-brakes' : 'service-chambers'}/${result.data.brcProduct.slug}`}
                    className="flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-navy-800 transition-colors w-full sm:w-auto justify-center"
                  >
                    View Product <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full text-amber-600 flex-shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 text-lg mb-1">No direct cross-reference found</h3>
                  {result.error ? (
                    <p className="text-amber-800 text-sm mb-4 font-bold bg-amber-100 p-2 rounded">
                      Debug Error: {result.error} (Tried looking up: {query})
                    </p>
                  ) : (
                    <p className="text-amber-800 text-sm mb-4">
                      We could not find an automatic match for "<span className="font-mono font-bold uppercase">{query}</span>" in our database.
                    </p>
                  )}
                  <p className="text-amber-900 text-sm font-medium bg-amber-100/50 p-3 rounded-lg border border-amber-200/50">
                    <strong>Don't worry!</strong> Our engineers can cross-reference this manually. Please contact our factory with this part number and we will provide the exact BRC equivalent.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
