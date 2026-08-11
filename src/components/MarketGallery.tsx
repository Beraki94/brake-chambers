import React from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

export default function MarketGallery() {
  const images = [
    {
      url: 'https://placehold.co/800x600/1e293b/ffffff?text=Huaqiangbei+Market',
      title: 'Huaqiangbei Market (Shenzhen)',
      description: 'The global heart of electronics hardware in Shenzhen, China.'
    },
    {
      url: 'https://placehold.co/800x600/0f172a/ffffff?text=Guangzhou+Electronics+Hub',
      title: 'Guangzhou Electronics Hub',
      description: 'Our secondary sourcing center for diverse accessory and parts supply.'
    },
    {
      url: 'https://placehold.co/800x600/334155/ffffff?text=Inside+the+Stalls',
      title: 'Direct Sourcing Stalls',
      description: 'Our team negotiates directly at the source to cut out middlemen.'
    },
    {
      url: 'https://placehold.co/800x600/475569/ffffff?text=Quality+Control+Lab',
      title: '40-Point Testing Facility',
      description: 'Where every device from the markets is rigorously tested and graded.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-navy-50 p-8 md:p-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-full text-slate-600 mb-4">
          <Camera className="w-6 h-6" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-navy-900 mb-4">Inside Our Sourcing Hub</h2>
        <p className="text-navy-600 max-w-2xl mx-auto">
          We don't just dropship. We have boots on the ground in Shenzhen's Huaqiangbei and Guangzhou's electronics hubs, ensuring you get the best authentic supply, firsthand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-navy-50 cursor-pointer">
            {/* Replace img with next/image in production if you have real URLs */}
            <img 
              src={image.url} 
              alt={image.title} 
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            {/* Text Content */}
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
