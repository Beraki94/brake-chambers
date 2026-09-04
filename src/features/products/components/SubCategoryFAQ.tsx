"use client";

import React from 'react';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import SectionHeader from '@/components/ui/SectionHeader';

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
      a: `Yes, all BRC ${categoryName.toLowerCase()} are engineered as direct aftermarket drop-in replacements for major OEM brands like Bendix, Knorr-Bremse, ZF/WABCO, Meritor, and Haldex. They match standard stroke and mounting specifications perfectly.`
    },
    {
      q: `What kind of warranty do you offer on ${categoryName}?`,
      a: `Every unit is manufactured in our facility operating to IATF 16949 standards and rigorously tested for 1 million cycles. We offer a comprehensive B2B industry warranty against all manufacturing defects.`
    }
  ];

  return (
    <section className="mb-16 mt-16 max-w-4xl mx-auto">
      <SectionHeader
        title={<>Frequently Asked Questions: <span className="text-amber-600">{categoryName}</span></>}
        description={`Find answers to common questions about our ${categoryName.toLowerCase()} and wholesale operations.`}
        align="center"
        theme="light"
        accentColor="slate"
        className="!mb-10"
      />
      <GlobalFAQAccordion faqs={faqs} />
    </section>
  );
}
