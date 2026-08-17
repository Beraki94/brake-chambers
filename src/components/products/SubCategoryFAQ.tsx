"use client";

import React from 'react';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';

interface SubCategoryFAQProps {
  categoryName: string;
}

export default function SubCategoryFAQ({ categoryName }: SubCategoryFAQProps) {
  const faqs = [
    {
      q: `What are the minimum order quantities for ${categoryName}?`,
      a: `Our standard MOQ for ${categoryName.toLowerCase()} is 50 units, though we recommend ordering by the pallet (typically 120 units) to maximize your freight efficiency and access our deepest wholesale discounts.`
    },
    {
      q: `Are your ${categoryName} compatible with OEM systems?`,
      a: `Yes, all BRC ${categoryName.toLowerCase()} are engineered as direct aftermarket drop-in replacements for major OEM brands like Bendix, Meritor, Haldex, and Wabco. They match standard stroke and mounting specifications perfectly.`
    },
    {
      q: `What kind of warranty do you offer on ${categoryName}?`,
      a: `Every unit is manufactured in our ISO 9001:2015 certified facility and rigorously tested for 1 million cycles. We offer a comprehensive B2B industry warranty against all manufacturing defects.`
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-navy-900 mb-6">
        Frequently Asked Questions: <span className="text-amber-600">{categoryName}</span>
      </h2>
      <GlobalFAQAccordion faqs={faqs} />
    </section>
  );
}
