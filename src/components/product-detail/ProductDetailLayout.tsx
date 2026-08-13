"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Truck, Download, ChevronRight, Check } from 'lucide-react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import CategoryPromoBanner from '@/components/products/CategoryPromoBanner';
import ProductSeoBlock from '@/components/products/ProductSeoBlock';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import TechnicalDownloads from '@/components/product-detail/TechnicalDownloads';
import TrendingModelsMarquee from '@/components/shared/TrendingModelsMarquee';

export default function ProductDetailLayout({
  product,
  categoryName,
  categoryPath
}: {
  product: any;
  categoryName: string;
  categoryPath: string;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const isChamber = 'type' in product;

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl">
      <Breadcrumb items={[{ label: categoryName, href: `/${categoryPath}` }, { label: product.name }]} />

      <div className="bg-white rounded-3xl shadow-xl shadow-navy-900/5 border border-navy-50 overflow-hidden flex flex-col lg:flex-row mt-6 relative">
        
        {/* Left: Image Gallery */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-gradient-to-b from-[#F8FAFC] to-white flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-navy-50">
          <div className="relative w-full max-w-lg aspect-square bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden p-4 mb-6 group transition-all duration-300 hover:shadow-md hover:border-slate-200">
            <Image 
              src={product.galleryUrls?.[activeImage] || product.galleryUrls?.[0]} 
              alt={product.name} 
              fill 
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          
          {/* Thumbnails */}
          {product.galleryUrls && product.galleryUrls.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 max-w-full scrollbar-thin scrollbar-thumb-slate-200">
              {product.galleryUrls.map((url: string, idx: number) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === idx ? 'border-primary-500 shadow-md' : 'border-transparent bg-slate-50 opacity-70 hover:opacity-100 shadow-sm'}`}
                >
                  <Image src={url} alt={`Thumbnail ${idx}`} fill className="object-contain p-2" />
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-3 mt-8">
             <span className="flex items-center text-xs font-bold uppercase tracking-wider text-success-700 bg-success-50 px-4 py-2 rounded-full border border-success-100"><Check size={14} className="mr-1.5"/> In Stock</span>
             <span className="flex items-center text-xs font-bold uppercase tracking-wider text-navy-700 bg-navy-50 px-4 py-2 rounded-full border border-navy-100"><ShieldCheck size={14} className="mr-1.5"/> ISO 9001</span>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col relative z-10">
          <div className="inline-flex items-center text-xs text-navy-500 font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-md w-max mb-4">
            {product.type}
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">{product.name}</h1>
          
          {/* Logistics Box */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Wholesale Logistics</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-navy-900">{product.moq || 50}</span>
                <span className="text-xs text-slate-500 font-medium">Minimum Order (Units)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-navy-900">{product.palletQuantity || 120}</span>
                <span className="text-xs text-slate-500 font-medium">Standard Pallet (Units)</span>
              </div>
            </div>
          </div>

          {/* OEM Table */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-6 py-4">
              <h2 className="font-bold text-white flex items-center text-sm tracking-wide uppercase">
                <ShieldCheck size={18} className="mr-2 text-primary-400"/> Direct OEM Cross-Reference
              </h2>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 text-[11px] uppercase font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-3 border-b border-slate-100">Brand</th>
                    <th className="px-6 py-3 border-b border-slate-100">Part Number</th>
                    <th className="px-6 py-3 border-b border-slate-100">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.oemPartNumbers && product.oemPartNumbers.length > 0 ? (
                    product.oemPartNumbers.map((oem: any, idx: number) => (
                      <tr key={idx} className="hover:bg-primary-50/30 transition-colors group">
                        <td className="px-6 py-4 font-semibold text-navy-900">{oem.brand}</td>
                        <td className="px-6 py-4 font-mono font-bold text-navy-700 bg-slate-50/50 group-hover:bg-primary-100/50 group-hover:text-primary-700 transition-colors">{oem.partNumber}</td>
                        <td className="px-6 py-4 text-slate-500 text-xs">{oem.notes || 'Direct Drop-in Replacement'}</td>
                      </tr>
                    ))
                  ) : (
                    product.crossReferenceBrands?.map((brand: string, idx: number) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-navy-900">{brand}</td>
                        <td className="px-6 py-4 font-mono text-slate-400">Match by Specs</td>
                        <td className="px-6 py-4 text-slate-400 text-xs">-</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>


          {/* Sticky CTA */}
          <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 sticky bottom-0 bg-white/80 backdrop-blur-md pb-4 lg:relative lg:bg-transparent lg:pb-0">
            <Link href="/quote" className="flex-1 bg-gradient-to-r from-primary-400 to-primary-500 text-navy-900 text-center font-extrabold py-4 rounded-xl hover:from-primary-500 hover:to-primary-600 transition-all shadow-lg shadow-primary-500/30 uppercase tracking-widest text-sm flex items-center justify-center">
              Submit Bulk RFQ
            </Link>
            <Link href="/distributor/login" className="flex-1 bg-navy-900 text-white text-center font-bold py-4 rounded-xl hover:bg-navy-800 transition-all uppercase tracking-widest text-sm border border-navy-700 flex items-center justify-center">
              Distributor Login
            </Link>
          </div>
        </div>
      </div>
      
      {/* Product-Specific SEO Block */}
      <ProductSeoBlock product={product} />
      
      {/* Product-Specific FAQ (Dynamic based on product) */}
      <section className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
          Frequently Asked Questions about {product.name}
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2 text-sm">What does the {product.name} replace?</h3>
            <p className="text-slate-600 text-sm">
              It is an exact aftermarket replacement for 
              {isChamber && product.oemPartNumbers && product.oemPartNumbers.length > 0 
                ? ` ${product.oemPartNumbers.map((p: any) => p.brand + ' ' + p.partNumber).join(', ')}`
                : ' major OEM brands like Bendix, Meritor, and Haldex'}.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-navy-900 mb-2 text-sm">Is this {isChamber ? product.type : 'component'} covered by warranty?</h3>
            <p className="text-slate-600 text-sm">Yes, all BRC products are rigorously tested in our ISO 9001 facility and backed by a comprehensive industry warranty against manufacturing defects.</p>
          </div>
        </div>
      </section>

      <TechnicalDownloads productName={product.name} />

      <TrendingModelsMarquee />
      
    </div>
  );
}
