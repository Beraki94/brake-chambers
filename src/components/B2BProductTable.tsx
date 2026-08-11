"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrakeChamber } from '@/types';
import { ShieldCheck, Truck, Plus, Check } from 'lucide-react';

export default function B2BProductTable({ products, categoryPath }: { products: BrakeChamber[], categoryPath: string }) {
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleAdd = (slug: string) => {
    setAddedItems(prev => ({ ...prev, [slug]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [slug]: false }));
    }, 2000);
  };

  const handleQtyChange = (slug: string, val: string) => {
    const num = parseInt(val, 10);
    setQuantities(prev => ({ ...prev, [slug]: isNaN(num) ? 0 : num }));
  };

  if (!products || products.length === 0) return null;

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-navy-900 text-white text-xs uppercase tracking-wider">
              <th className="p-4 font-bold border-b border-navy-800 w-16 text-center">Image</th>
              <th className="p-4 font-bold border-b border-navy-800">Part Info</th>
              <th className="p-4 font-bold border-b border-navy-800 hidden md:table-cell">Specifications</th>
              <th className="p-4 font-bold border-b border-navy-800 hidden lg:table-cell">Cross Reference</th>
              <th className="p-4 font-bold border-b border-navy-800 text-center w-24">Order Qty</th>
              <th className="p-4 font-bold border-b border-navy-800 text-right w-32">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product, idx) => {
              const moq = product.moq || 50;
              const qty = quantities[product.slug] !== undefined ? quantities[product.slug] : moq;
              const isAdded = addedItems[product.slug];

              return (
                <tr key={product.slug} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 align-top">
                    <div className="w-16 h-16 bg-white border border-slate-200 rounded-md p-1 relative flex items-center justify-center">
                      <Image 
                        src={product.galleryUrls?.[0] || '/placeholder.png'} 
                        alt={product.name} 
                        width={60} 
                        height={60} 
                        className="object-contain"
                      />
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <Link href={`/${categoryPath}/${product.slug}`} className="block group">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{product.type}</div>
                      <h3 className="font-bold text-navy-900 text-sm md:text-base leading-tight group-hover:text-amber-600 transition-colors mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-navy-600 bg-navy-50 px-2 py-0.5 rounded border border-navy-100 font-mono">
                          SKU: {product.slug.split('-').pop()?.toUpperCase()}
                        </span>
                      </div>
                    </Link>
                  </td>
                  <td className="p-4 align-top hidden md:table-cell w-48">
                    <div className="flex flex-col gap-1.5 text-xs">
                      {product.strokeSize && (
                        <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-1">
                          <span className="text-slate-500 font-medium">Stroke:</span>
                          <span className="font-bold text-navy-900">{product.strokeSize}</span>
                        </div>
                      )}
                      {product.pushRodLengthInch && (
                        <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-1">
                          <span className="text-slate-500 font-medium">Pushrod:</span>
                          <span className="font-bold text-navy-900">{product.pushRodLengthInch}"</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">Pallet Qty:</span>
                        <span className="font-bold text-navy-900">{product.palletQuantity || 120}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-top hidden lg:table-cell w-48">
                    {product.oemPartNumbers && product.oemPartNumbers.length > 0 ? (
                      <div className="flex flex-col gap-1">
                        {product.oemPartNumbers.slice(0, 3).map((oem, i) => (
                          <div key={i} className="text-[11px] font-mono font-medium text-navy-800 flex justify-between bg-white border border-slate-100 rounded px-1.5 py-0.5">
                            <span className="text-slate-400">{oem.brand}</span>
                            <span>{oem.partNumber}</span>
                          </div>
                        ))}
                        {product.oemPartNumbers.length > 3 && (
                          <div className="text-[10px] text-amber-600 font-bold mt-1 text-right">
                            +{product.oemPartNumbers.length - 3} More
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Universal Fit</span>
                    )}
                  </td>
                  <td className="p-4 align-top text-center">
                    <div className="flex flex-col items-center justify-center h-full gap-1 mt-2">
                      <div className="flex items-center border border-slate-300 rounded overflow-hidden shadow-sm">
                        <input 
                          type="number" 
                          value={qty}
                          onChange={(e) => handleQtyChange(product.slug, e.target.value)}
                          className="w-16 text-center text-sm font-bold text-navy-900 py-1.5 outline-none focus:bg-amber-50"
                          min={moq}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium tracking-wide">MOQ: {moq}</span>
                    </div>
                  </td>
                  <td className="p-4 align-top text-right">
                    <div className="flex flex-col items-end justify-center h-full mt-1.5 gap-2">
                      <div className="text-xs font-extrabold text-navy-900 mb-1">
                        Request Quote
                      </div>
                      <button 
                        onClick={() => handleAdd(product.slug)}
                        className={`flex items-center justify-center w-full gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${isAdded ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-amber-500 hover:bg-amber-400 text-navy-900 shadow-amber-500/20'}`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={14} strokeWidth={3} />
                            Added
                          </>
                        ) : (
                          <>
                            <Plus size={14} strokeWidth={3} />
                            Add to RFQ
                          </>
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
