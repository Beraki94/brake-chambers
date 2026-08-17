"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string | React.ReactNode;
}

interface GlobalFAQAccordionProps {
  faqs: FAQItem[];
  theme?: 'light' | 'dark';
}

export default function GlobalFAQAccordion({ faqs, theme = 'light' }: GlobalFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = theme === 'dark';

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        
        return (
          <div 
            key={idx} 
            className={`rounded-2xl transition-all duration-300 overflow-hidden ${
              isDark 
                ? 'bg-navy-800 border border-navy-700 hover:border-navy-600' 
                : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200'
            }`}
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className={`font-bold pr-4 sm:pr-8 text-base sm:text-lg leading-tight ${isDark ? 'text-white' : 'text-navy-900'}`}>
                {faq.q}
              </span>
              <div 
                className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isOpen 
                    ? 'rotate-180 bg-amber-500 text-navy-950 shadow-md shadow-amber-500/20' 
                    : isDark 
                      ? 'bg-navy-900 text-slate-400' 
                      : 'bg-slate-50 text-slate-400 border border-slate-100'
                }`}
              >
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className={`px-4 sm:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
