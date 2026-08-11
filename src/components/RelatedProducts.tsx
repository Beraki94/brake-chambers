import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import { BrakeChamber, BrakeAccessory } from '@/types';

interface RelatedProductsProps {
  currentSlug: string;
  category: string;
  isAccessory?: boolean;
}

export default function RelatedProducts({ currentSlug, category, isAccessory = false }: RelatedProductsProps) {
  // Find related products
  let related: (BrakeChamber | BrakeAccessory)[] = [];
  
  if (isAccessory) {
    related = BRAKE_ACCESSORIES.filter(a => a.category === category && a.slug !== currentSlug);
  } else {
    related = BRAKE_CHAMBERS.filter(c => c.category === category && c.slug !== currentSlug);
  }
  
  // Take up to 4 items
  const displayProducts = related.slice(0, 4);

  if (displayProducts.length === 0) return null;

  return (
    <section className="mt-16 mb-8">
      <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6 border-b border-slate-200 pb-4">
        Related {category}s
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => {
          const categoryPath = product.category === 'Spring Brake' ? 'spring-brakes' :
                               product.category === 'Service Brake' ? 'service-chambers' :
                               product.category === 'Air Disc Actuator' ? 'air-disc-actuators' : 'chamber-parts-kits';
          return (
            <Link 
              href={`/${categoryPath}/${product.slug}`} 
              key={product.slug}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col"
            >
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                {product.galleryUrls && product.galleryUrls[0] ? (
                  <Image 
                    src={product.galleryUrls[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm text-slate-500 font-medium">
                    {'type' in product ? product.type : 'Accessory'}
                  </span>
                  <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
