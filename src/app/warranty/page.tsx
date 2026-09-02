import React from 'react';
import WarrantyClient from '@/features/warranty/components/WarrantyClient';

export const metadata = {
  title: 'Warranty | BRC Brake Chambers',
  description: 'Factory warranty information for our commercial vehicle air brakes.',
};

export default function WarrantyPage() {
  return <WarrantyClient />;
}
