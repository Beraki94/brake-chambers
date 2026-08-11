import React from 'react';
import { Truck } from 'lucide-react';

export default function ShippingGallery() {
  const images = [
    {
      url: 'https://placehold.co/800x600/1e293b/ffffff?text=Wholesale+Packaging',
      title: 'Bulk Export Packaging',
      description: 'Secure, padded wholesale packaging to ensure zero damage in transit.'
    },
    {
      url: 'https://placehold.co/800x600/0f172a/ffffff?text=Warehouse+Logistics',
      title: 'Warehouse Logistics',
      description: 'Our staging area where bulk orders are prepared and verified before dispatch.'
    },
    {
      url: 'https://placehold.co/800x600/334155/ffffff?text=Air+Freight+Loading',
      title: 'Air Freight Loading',
      description: 'Express cargo boarding for rapid 3-7 day global delivery.'
    },
    {
      url: 'https://placehold.co/800x600/475569/ffffff?text=Secure+Delivery',
      title: 'Final Mile Delivery',
      description: 'Safe, tracked arrival directly to your retail store or warehouse.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-navy-50 p-8 md:p-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-full text-slate-600 mb-4">
          <Truck className="w-6 h-6" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">The Journey to Your Door</h2>
        <p className="text-navy-600 max-w-2xl mx-auto">
          See exactly how we handle, pack, and ship your wholesale orders from our logistics hub to your doorstep with total security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-navy-50 cursor-pointer">
            <img 
              src={image.url} 
              alt={image.title} 
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
              <p className="text-navy-100 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  );
}
