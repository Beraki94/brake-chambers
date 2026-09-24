import React from 'react';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ContactClient from '@/features/contact/components/ContactClient';

export const metadata = {
  title: 'Contact BRC - Brake Chamber Sales & Technical Support',
  description: 'Contact BRC Brake Chambers for technical support, OEM cross-referencing, sample orders, or wholesale pricing. Response within 24 hours. Zhejiang, China.',
};

export default function ContactPage() {
  return (
    <>
      <ContactClient />
      <BreadcrumbSchema items={[{ name: 'Contact Us' }]} />
    </>
  );
}

