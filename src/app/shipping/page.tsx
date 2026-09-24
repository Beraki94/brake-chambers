import React from 'react';
import type { Metadata } from 'next';
import ShippingClient from '@/features/shipping/components/ShippingClient';

export const metadata: Metadata = {
  title: 'Brake Chamber Shipping From China — FCL, LCL & Global Export | BRC',
  description: 'BRC ships brake chambers from our Zhejiang, China factory to 30+ countries. Ningbo & Shanghai ports. FCL, LCL, door-to-door. EXW, FOB, CIF, DDP. ISPM-15 certified.',
};

export default function ShippingPage() {
  return <ShippingClient />;
}
