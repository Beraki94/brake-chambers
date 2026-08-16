import React from 'react';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import PageHeader from '@/components/layout/PageHeader';
import QuoteClient from '@/components/page-clients/QuoteClient';

export const metadata = {
  title: 'Global Wholesale RFQ | BRC Brake Chambers',
  description: 'Request a quote for bulk orders, full containers, or OEM partnerships for our heavy-duty commercial air brake chambers.',
};

export default function QuotePage() {
  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24">
      <PageHeader
        badge="Wholesale Pricing"
        title="Global Wholesale RFQ"
        description="BRC supplies OEM-quality brake chambers to fleets and distributors worldwide. Fill out the form below for container pricing and factory-direct logistics."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Quote' }
        ]}
      />
      
      <QuoteClient />

      <BreadcrumbSchema items={[{ name: 'Quote' }]} />
    </div>
  );
}
