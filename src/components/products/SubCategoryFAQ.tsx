"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SubCategoryFAQProps {
  categoryName: string;
}

export default function SubCategoryFAQ({ categoryName }: SubCategoryFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `What are the minimum order quantities for ${categoryName}?`,
      answer: `Our standard MOQ for ${categoryName.toLowerCase()} is 50 units, though we recommend ordering by the pallet (typically 120 units) to maximize your freight efficiency and access our deepest wholesale discounts.`
    },
    {
      question: `Are your ${categoryName} compatible with OEM systems?`,
      answer: `Yes, all BRC ${categoryName.toLowerCase()} are engineered as direct aftermarket drop-in replacements for major OEM brands like Bendix, Meritor, Haldex, and Wabco. They match standard stroke and mounting specifications perfectly.`
    },
    {
      question: `What kind of warranty do you offer on ${categoryName}?`,
      answer: `Every unit is manufactured in our ISO 9001:2015 certified facility and rigorously tested for 1 million cycles. We offer a comprehensive B2B industry warranty against all manufacturing defects.`
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-navy-900 mb-6">
        Frequently Asked Questions: <span className="text-primary-600">{categoryName}</span>
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">
        {faqs.map((faq, index) => (
          <div key={index} className="group">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
            >
              <h3 className="font-bold text-navy-900 pr-8">{faq.question}</h3>
              <ChevronDown 
                className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary-600' : ''}`}
                size={20}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
