import React from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { Settings, Shield, Wrench, Package } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products | BRC Brake Chambers',
  description: 'Browse our complete catalog of premium commercial vehicle brake chambers, air disc actuators, and replacement parts.',
};

import PageHeader from '@/components/PageHeader';

export default function ProductsPage() {
  const categories = [
    {
      title: 'Spring Brakes',
      slug: 'spring-brakes',
      description: 'High-durability parking and emergency spring brakes including Standard Stroke, Long Stroke, and Welded Clevis configurations.',
      icon: <Settings className="w-8 h-8 text-amber-500" />
    },
    {
      title: 'Service Chambers',
      slug: 'service-chambers',
      description: 'Reliable service chambers for optimal braking performance. Available in Type 20, 24, and 30 sizes.',
      icon: <Shield className="w-8 h-8 text-amber-500" />
    },
    {
      title: 'Air Disc Actuators',
      slug: 'air-disc-actuators',
      description: 'Advanced ADB actuators designed for modern fleets requiring superior stopping power and consistency.',
      icon: <Package className="w-8 h-8 text-amber-500" />
    },
    {
      title: 'Chamber Parts & Kits',
      slug: 'chamber-parts-kits',
      description: 'Premium replacement components, piggyback kits, diaphragms, and hardware for field servicing.',
      icon: <Wrench className="w-8 h-8 text-amber-500" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      <PageHeader
        badge="Products"
        title="Our Product Catalog"
        description="BRC Brake Chambers provides an extensive range of OEM-quality aftermarket brake components. Select a category below to explore our products."
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">Products</li>
            </ol>
          </nav>
        </div>
      </PageHeader>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              href={`/${category.slug}`}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-amber-500 transition-colors">
                {category.title}
              </h2>
              <p className="text-slate-600 text-sm mb-8 flex-grow leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center text-amber-500 font-bold uppercase tracking-wider text-sm mt-auto">
                Explore <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BreadcrumbSchema items={[{ name: 'Products' }]} />
    </main>
  );
}
