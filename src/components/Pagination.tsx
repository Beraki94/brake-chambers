"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  if (totalPages <= 1) return null;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-8">
      {/* Prev Button */}
      {currentPage > 1 ? (
        <Link 
          href={createPageURL(currentPage - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-navy-900 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
      ) : (
        <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 text-slate-300 cursor-not-allowed bg-white/50">
          <ChevronLeft className="w-5 h-5" />
        </div>
      )}

      {/* Page Numbers */}
      {pages.map(page => {
        const isActive = page === currentPage;
        return (
          <Link
            key={page}
            href={createPageURL(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
              isActive 
                ? 'bg-amber-500 text-navy-900 shadow-md border-amber-500 shadow-amber-500/20' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-navy-900'
            }`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link 
          href={createPageURL(currentPage + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-navy-900 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      ) : (
        <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-100 text-slate-300 cursor-not-allowed bg-white/50">
          <ChevronRight className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}
