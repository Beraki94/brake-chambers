import React from 'react';
import WarrantyClient from '@/features/warranty/components/WarrantyClient';

export const metadata = {
  title: 'Brake Chamber Warranty - 1-Year Limited Factory Guarantee | BRC',
  description: 'Every BRC brake chamber carries a 1-year limited warranty against manufacturing defects. Claims processed within 24 hours. Full terms and conditions.',
};

export default function WarrantyPage() {
  return <WarrantyClient />;
}
