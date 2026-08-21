import React from 'react';
import Script from 'next/script';
import { Star } from 'lucide-react';

export default function FleetReviewsSection({ categoryName }: { categoryName: string }) {
  const ratingValue = 4.9;
  const reviewCount = 284;

  const reviews = [
    {
      id: 1,
      author: "Michael T., Fleet Maintenance Director",
      text: `We've been using BRC ${categoryName} across our entire 300-truck fleet for two years. The durability and direct OEM fitment has saved us thousands in maintenance costs.`,
      rating: 5,
    },
    {
      id: 2,
      author: "Sarah J., Independent Owner-Operator",
      text: `Shipped fast and bolted right up. The quality of the heavy-gauge steel on these ${categoryName} is noticeably better than the cheap imports I was buying before.`,
      rating: 5,
    },
    {
      id: 3,
      author: "David L., Repair Shop Owner",
      text: `As a heavy-duty shop, we need parts we can trust. These ${categoryName} are exact drop-in replacements for Bendix systems. Highly recommended.`,
      rating: 5,
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `BRC ${categoryName}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <section className="mt-8 sm:mt-12 bg-slate-50 rounded-2xl p-5 sm:p-8 md:p-12 border border-slate-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy-900 mb-2">Trusted by Fleets Nationwide</h2>
          <p className="text-slate-600">See why maintenance directors trust BRC {categoryName}.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center text-amber-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <div className="text-sm font-bold text-navy-900">
            {ratingValue} / 5 <span className="text-slate-500 font-normal">({reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative">
            <div className="flex items-center text-amber-500 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-slate-700 text-sm mb-4 italic">"{review.text}"</p>
            <p className="text-xs font-bold text-navy-900">— {review.author}</p>
          </div>
        ))}
      </div>

      <Script 
        id={`aggregate-rating-${categoryName.replace(/\s+/g, '-').toLowerCase()}`} 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />
    </section>
  );
}
