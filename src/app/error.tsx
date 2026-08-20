'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In a real application, you might log this to a service like Sentry
    console.error('Page loading error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center w-full">
      <div className="w-20 h-20 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-red-100/50">
        <AlertTriangle className="w-10 h-10" />
      </div>
      
      <h2 className="text-3xl font-bold font-heading text-navy-900 mb-3 tracking-tight">
        Connection Interrupted
      </h2>
      
      <p className="text-slate-600 mb-8 max-w-md mx-auto text-sm leading-relaxed">
        We encountered an unexpected error while trying to load this content. It might be a temporary delay or a network issue.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
        <button
          onClick={() => reset()}
          className="bg-[#FFB000] hover:bg-[#e59d00] text-navy-950 font-extrabold text-[12px] uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all shadow-md shadow-amber-500/20 active:scale-[0.98] border-2 border-[#FFB000] hover:border-[#e59d00]"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-white hover:bg-slate-50 text-navy-900 font-extrabold text-[12px] uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all border-2 border-navy-200 active:scale-[0.98]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
