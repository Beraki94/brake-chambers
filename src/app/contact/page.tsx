import React from 'react';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import ContactClient from '@/components/page-clients/ContactClient';

export const metadata = {
  title: 'Contact Us | BRC Brake Chambers',
  description: 'Get in touch with our global sales and technical support team.',
};

export default function ContactPage() {
  return (
    <>
      <ContactClient />
      <BreadcrumbSchema items={[{ name: 'Contact Us' }]} />
    </>
  );
}

