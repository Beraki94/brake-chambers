"use client";

import React from 'react';
import { useMarketStore } from '../store/market';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  isBulk?: boolean;
  className?: string;
}

export default function WhatsAppButton({ isBulk = false, className = '' }: WhatsAppButtonProps) {
  const selectedMarket = useMarketStore(state => state.selectedMarket);
  
  const MY_WHATSAPP_NUMBER = '861234567890'; // Replace with actual number
  
  let messageText = '';
  
  if (isBulk) {
    messageText = `I'm interested in bulk pricing for wholesale brake chambers. Please contact me. Market: ${selectedMarket.countryName}`;
  } else {
    messageText = `Hi, I'm interested in buying from BRC Brake Chambers.`;
  }
  
  const encodedText = encodeURIComponent(messageText);
  const href = `https://api.whatsapp.com/send?phone=${MY_WHATSAPP_NUMBER}&text=${encodedText}`;

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold transition-all ${
        isBulk 
          ? 'bg-navy-900 text-white hover:bg-navy-800' 
          : 'bg-slate-500 text-white hover:bg-slate-600'
      } ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {isBulk ? 'Bulk Order Inquiry' : 'Buy Now'}
    </a>
  );
}
