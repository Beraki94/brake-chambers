"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMarketStore } from '../../store/market';
import { BRAKE_CHAMBERS } from '../../lib/data';
import { Search, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

// We will dynamically search BRAKE_CHAMBERS for oemPartNumbers

export default function OEMSearchForm() {
  const router = useRouter();
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
        const oBrandSlug = foundOem.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const oPartNum = foundOem.partNumber.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        router.push(`/oem-cross-reference/${oBrandSlug}/${oPartNum}`);
      } else {
        setResult({ found: false });
        setIsSearching(false);
      }
    }, 800);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
      {/* Decorative background gradients to match the brand identity */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Search className="w-3.5 h-3.5" /> Live Database
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Interchange Search</h2>
          <p className="text-slate-600 text-base">
            Try searching for competitor parts like <code className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-navy-900 font-mono text-sm font-semibold shadow-sm">NT3030STD-WC</code> or <code className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-navy-900 font-mono text-sm font-semibold shadow-sm">GC3030</code>
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="text-slate-400 w-6 h-6 group-focus-within:text-amber-500 transition-colors" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter OEM Part Number..."
              className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl pl-14 pr-6 py-5 text-lg text-navy-900 focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-mono uppercase shadow-inner placeholder-slate-400"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching || !query.trim()}
            className="bg-navy-900 text-white font-bold px-10 py-5 rounded-2xl hover:bg-navy-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center min-w-[180px] text-lg"
          >
            {isSearching ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              'Search Now'
            )}
          </button>
        </form>

        {/* Results Area */}
        {result && !result.found && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
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
          </div>
        )}
      </div>
    </div>
  );
}
