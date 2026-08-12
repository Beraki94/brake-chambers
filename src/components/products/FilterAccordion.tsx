import React from 'react';

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function FilterAccordion({ title, children }: FilterAccordionProps) {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden group mb-2 lg:mb-0">
      {/* Mobile View (Accordion) */}
      <details className="lg:hidden group">
        <summary className="bg-navy-900 text-white font-bold py-3 px-4 rounded-lg text-sm flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden group-open:rounded-b-none">
          <span>{title}</span>
          <span className="text-slate-400 transition-transform group-open:rotate-90">&gt;</span>
        </summary>
        <div className="border border-t-0 border-gray-100 rounded-b-md bg-white">
          {children}
        </div>
      </details>

      {/* Desktop View (Always Open) */}
      <div className="hidden lg:block">
        <div className="bg-navy-900 text-white font-bold py-2.5 px-4 rounded-t-lg text-sm flex justify-between items-center">
          <span>{title}</span>
          <span className="text-slate-400">&gt;</span>
        </div>
        <div className="border border-t-0 border-gray-100 rounded-b-md bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
