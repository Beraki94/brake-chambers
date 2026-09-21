import React from 'react';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import PageHeader from '@/components/layout/PageHeader';
import QuoteClient from '@/features/quote/components/QuoteClient';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: 'Global Wholesale RFQ | BRC Brake Chambers',
  description: 'Request a quote for bulk orders, full containers, or OEM partnerships for our heavy-duty commercial air brake chambers.',
};

export default function QuotePage() {
  return (
    <div className="bg-[#F8FAFC] pb-16 md:pb-24 overflow-x-clip">
      <PageHeader
      badge="Wholesale Pricing"
        badgeIcon={Calculator}
      title="Request a Brake Chamber Quote: Factory-Direct Wholesale Pricing"
      description="Get factory-direct pricing on BRC brake chambers for your fleet or distribution business. Container pricing, sample orders, and private-label options available. Response within 24 hours."
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
