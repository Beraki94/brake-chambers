import React from 'react';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import BrakeRandDClient from '@/features/manufacturing/components/BrakeRandDClient';

export const metadata: Metadata = {
  title: 'Brake R&D — Engineering & Innovation | BRC Brake Chambers',
  description: 'Inside BRC\'s brake chamber R&D division: CAD design, FEA simulation, rapid prototyping, and metallurgical innovation for next-generation heavy-duty spring brake and air disc brake actuators.',
};

export default function BrakeRandDPage() {
  return (
    <main>
      <BrakeRandDClient />
      <BreadcrumbSchema items={[
        { name: 'Manufacturing', item: '/manufacturing' },
        { name: 'Brake R&D' }
      ]} />
    </main>
  );
}
