const fs = require('fs');
const path = require('path');

const generatePageContent = (title, desc, categoryStr, baseFilter, seoParagraph, features, faqs) => {
  const featuresJsx = features && features.length > 0 ? `
      {/* Key Features Section */}
      <div className="mt-16 mb-8 border-t border-slate-200 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-navy-900">Why Choose BRC for ${title}?</h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Engineered for absolute reliability and performance in the most demanding conditions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${features.map(f => `
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 border border-amber-200">
              <span className="text-amber-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">${f.title}</h3>
            <p className="text-slate-600 leading-relaxed">${f.desc}</p>
          </div>
          `).join('')}
        </div>
      </div>
  ` : '';

  const faqJsx = faqs && faqs.length > 0 ? `
      {/* FAQ Section */}
      <div className="mt-16 mb-12 bg-navy-50 rounded-3xl p-8 lg:p-12 border border-navy-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            ${faqs.map(q => `
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-navy-900 mb-2">${q.q}</h3>
              <p className="text-slate-600">${q.a}</p>
            </div>
            `).join('')}
          </div>
        </div>
      </div>
  ` : '';

  return `
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';
import ProductListCard from '@/components/ProductListCard';
import FacetedSidebar from '@/components/FacetedSidebar';
import { Truck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '${title} | BRC Manufacturer',
  description: '${desc}',
};

export default async function SubCategoryPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  // Fix Turbopack await bug by falling back if undefined
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base category filter
  let products = ${baseFilter};

  // Apply Faceted Filters from Sidebar
  if (searchParams) {
    const applyFilter = (key: string, paramVal: string | string[] | undefined, filterFn: (p: any, val: string) => boolean) => {
      if (!paramVal) return;
      const values = Array.isArray(paramVal) ? paramVal : [paramVal];
      products = products.filter(p => values.some(v => filterFn(p, v)));
    };

    applyFilter('brand', searchParams.brand, (p, v) => p.crossReferenceBrands?.includes(v) || p.brandSlug === v.toLowerCase());
    applyFilter('strokeInch', searchParams.strokeInch, (p, v) => p.strokeInch === v);
    applyFilter('pushRodLength', searchParams.pushRodLength, (p, v) => p.pushRodLengthInch === v);
    applyFilter('application', searchParams.application, (p, v) => p.application === v);
    
    // Support the technical model filters inside the intent-based pages
    applyFilter('model', searchParams.model, (p, v) => p.type && p.type.includes(v.replace('T','')));
    applyFilter('filter', searchParams.filter, (p, v) => p.category === v);
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-slate-500">
          <li><Link href="/" className="hover:text-navy-900 transition-colors">Home</Link></li>
          <li><span className="text-slate-300">/</span></li>
          <li><Link href="/${categoryStr}" className="hover:text-navy-900 transition-colors capitalize">${categoryStr.replace(/-/g, ' ')}</Link></li>
          <li><span className="text-slate-300">/</span></li>
          <li className="text-navy-900 font-semibold" aria-current="page">${title}</li>
        </ol>
      </nav>

      {/* SEO Hero Header */}
      <div className="mb-8 rounded-3xl bg-navy-900 relative overflow-hidden shadow-2xl p-8 sm:p-12 border border-navy-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">${title}</h1>
            <div className="text-navy-100 text-base sm:text-lg leading-relaxed space-y-4">
              ${seoParagraph.map(p => `<p>${p}</p>`).join('\\n              ')}
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl text-center w-72 flex-shrink-0">
             <div className="bg-amber-500/20 p-3 rounded-full mb-4 border border-amber-500/30">
               <Truck size={24} className="text-amber-400" />
             </div>
             <h4 className="font-extrabold text-white text-lg mb-2">Direct OEM Supply</h4>
             <p className="text-sm mb-6 text-navy-200 leading-relaxed">Factory-direct pricing on bulk orders for fleets and distributors.</p>
             <Link href="/quote" className="w-full bg-amber-500 text-navy-900 font-extrabold px-6 py-3 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2">
               Request Wholesale Quote
             </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <FacetedSidebar baseCategory="${categoryStr}" />
          </div>
        </div>

        <div className="flex-grow">
          <div className="bg-navy-900 p-4 rounded-xl shadow-md flex justify-between items-center mb-6 text-sm text-white">
            <div className="font-bold tracking-wide">Showing {products.length} Products</div>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              {products.map(product => (
                <ProductListCard key={product.slug} product={product} categoryPath="${categoryStr}" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-navy-900 mb-3">No matching products found</h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">We may still manufacture this specification. Contact our engineering team for custom requirements.</p>
              <Link href="/quote" className="inline-block bg-navy-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-navy-800 transition-colors">
                Contact Sales
              </Link>
            </div>
          )}

          ${featuresJsx}
          ${faqJsx}

        </div>
      </div>
    </div>
  );
}
`;
};

const pages = [
  {
    path: 'spring-brakes/heavy-duty-truck',
    title: 'Heavy-Duty Truck Spring Brakes',
    desc: 'Premium spring brakes engineered specifically for Class 8 heavy-duty commercial trucks. ISO 9001 certified OEM replacements.',
    cat: 'spring-brakes',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake')",
    seoParagraph: [
      "Our Heavy-Duty Truck Spring Brakes are engineered specifically for Class 8 commercial vehicles that demand absolute reliability. Designed as direct aftermarket replacements for major OEM brands like Bendix, Meritor, and Haldex, these chambers deliver uncompromising stopping power.",
      "Manufactured under strict ISO 9001 quality standards, BRC heavy-duty chambers feature enhanced corrosion resistance, premium nylon-reinforced diaphragms, and 8-gauge heavy steel housings to withstand millions of cycles in harsh over-the-road environments."
    ],
    features: [
      { title: "OEM Exact Fit", desc: "Guaranteed drop-in replacements for standard Class 8 truck air brake systems." },
      { title: "Maximum Durability", desc: "Constructed with epoxy-coated return springs and heavy-duty steel housings." },
      { title: "Tested Reliability", desc: "Every unit undergoes strict pressure and cycle testing before leaving our facility." }
    ],
    faqs: [
      { q: "What sizes are most common for Class 8 heavy-duty trucks?", a: "Type 30/30 (T3030) is the industry standard for drive axles on Class 8 heavy-duty trucks. We offer both standard and long-stroke (3-inch) variants." },
      { q: "Are these direct replacements for Bendix or Meritor?", a: "Yes, our chambers are designed to match or exceed OEM specifications and cross-reference perfectly with major brand part numbers." }
    ]
  },
  {
    path: 'spring-brakes/commercial-trailer',
    title: 'Commercial Trailer Spring Brakes',
    desc: 'Durable spring brake chambers optimized for semi-trailers and commercial hauling.',
    cat: 'spring-brakes',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake')",
    seoParagraph: [
      "Commercial trailers face unique braking challenges, from varied load weights to extreme weather exposure. Our Trailer Spring Brakes are built to provide consistent, fade-resistant parking and emergency braking across all trailer axles.",
      "With a focus on fleet longevity, these chambers incorporate advanced sealing technology to prevent moisture and road chemical intrusion, ensuring your trailer fleet stays on the road and out of the shop."
    ],
    features: [
      { title: "Weather-Sealed Design", desc: "Advanced crimping and sealing prevents moisture intrusion and inner corrosion." },
      { title: "High-Strength Clevis", desc: "Available with welded or threaded clevis options to match any trailer slack adjuster." },
      { title: "Fleet Ready", desc: "Available in bulk quantities for large trailer fleet maintenance programs." }
    ],
    faqs: [
      { q: "Do you offer bulk pricing for trailer fleets?", a: "Yes, we specialize in direct-to-fleet bulk orders and pallet pricing. Please use the Request Wholesale Quote button for fleet pricing." }
    ]
  },
  {
    path: 'spring-brakes/severe-duty',
    title: 'Severe-Duty & Off-Highway',
    desc: 'Rugged spring brake chambers designed for construction, mining, and extreme off-highway applications.',
    cat: 'spring-brakes',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake' && (c.description?.toLowerCase().includes('heavy') || c.strokeSize === 'Long Stroke'))",
    seoParagraph: [
      "When the pavement ends, the demands on your braking system multiply. BRC Severe-Duty and Off-Highway Spring Brakes are heavily reinforced to survive in mining, logging, construction, and refuse applications.",
      "Featuring double-plated housings, extreme-temperature diaphragms, and specialized protective dust boots, these chambers are designed to shrug off heavy impacts, mud, and continuous heavy-load braking cycles."
    ],
    features: [
      { title: "Double-Plated Housing", desc: "Extra thick steel construction to resist rock strikes and heavy impacts." },
      { title: "Extreme Temp Diaphragms", desc: "Specially formulated rubber compounds that maintain flexibility in extreme cold and resist degradation in high heat." },
      { title: "Sealed Dust Protection", desc: "Enhanced booting and filtration to keep abrasive dust and mud out of the chamber." }
    ],
    faqs: []
  },
  {
    path: 'spring-brakes/oem-replacement',
    title: 'OEM Replacement Spring Brakes',
    desc: 'Direct-fit OEM replacement spring brake chambers matching OEM specs and performance.',
    cat: 'spring-brakes',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake')",
    seoParagraph: [
      "Why pay premium dealership markups when you can source direct from the manufacturer? Our OEM Replacement Spring Brakes are built to the exact dimensional and performance specifications of the industry's leading brands.",
      "We supply aftermarket distributors, repair shops, and fleets with high-quality alternatives that cross-reference perfectly with Bendix, Meritor, Haldex, and Wabco part numbers, ensuring a perfect fit every time."
    ],
    features: [],
    faqs: []
  },

  // Service Chambers
  {
    path: 'service-chambers/steer-axle',
    title: 'Steer Axle Service Chambers',
    desc: 'High-response service chambers engineered for precision braking on steer axles (Typically Type 20/24).',
    cat: 'service-chambers',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake' && (c.type.includes('20') || c.type.includes('24')))",
    seoParagraph: [
      "Steer axle braking requires precise modulation and rapid response. Our Steer Axle Service Chambers (typically Type 20 and Type 24) are engineered for smooth, predictable brake application to maintain vehicle control during critical stops.",
      "Built with high-tensile strength return springs and precision-machined push rods, these service chambers provide the instant response necessary for safe heavy-duty truck handling."
    ],
    features: [
      { title: "Rapid Response", desc: "Precision engineered for instant air-to-mechanical energy transfer." },
      { title: "Compact Design", desc: "Optimized housing size to fit tight steer axle clearances without sacrificing power." },
      { title: "Corrosion Resistant", desc: "Epoxy coated interiors prevent rust flakes from damaging the diaphragm." }
    ],
    faqs: [
      { q: "What is the most common steer axle chamber size?", a: "Type 20 and Type 24 service chambers are the most common sizes utilized on heavy-duty truck steer axles." }
    ]
  },
  {
    path: 'service-chambers/drive-axle',
    title: 'Drive Axle Service Chambers',
    desc: 'Maximum stopping power service chambers designed for drive axles (Typically Type 30).',
    cat: 'service-chambers',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake' && c.type.includes('30'))",
    seoParagraph: [
      "The drive axles handle the majority of a commercial vehicle's stopping requirements. Our Drive Axle Service Chambers (typically Type 30) are built to deliver massive, consistent braking force.",
      "Featuring heavy-gauge steel construction and reinforced mounting studs, these chambers can withstand the severe torsional forces generated during heavy payload braking."
    ],
    features: [],
    faqs: []
  },
  {
    path: 'service-chambers/trailer-axle',
    title: 'Trailer Axle Service Chambers',
    desc: 'Reliable service chambers for commercial trailer axle configurations.',
    cat: 'service-chambers',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake')",
    seoParagraph: [
      "Designed specifically for the harsh environment of commercial trailers, these service chambers provide reliable, everyday stopping power for flatbeds, dry vans, and refrigerated trailers.",
      "Available with various push-rod lengths and clevis configurations to match any trailer slack adjuster setup."
    ],
    features: [],
    faqs: []
  },
  {
    path: 'service-chambers/transit-bus',
    title: 'Transit & Bus Service Chambers',
    desc: 'Specialized service chambers designed for the frequent stop-and-go cycles of transit buses.',
    cat: 'service-chambers',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake')",
    seoParagraph: [
      "Transit buses experience incredibly high-frequency braking cycles in urban environments. Our Transit Service Chambers are built with upgraded diaphragms and springs designed specifically to resist fatigue in high-cycle, stop-and-go applications."
    ],
    features: [],
    faqs: []
  },

  // Air Disc Actuators
  {
    path: 'air-disc-actuators/truck-adb',
    title: 'Truck Air Disc Actuators',
    desc: 'Advanced air disc brake actuators for heavy-duty truck applications.',
    cat: 'air-disc-actuators',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Air Disc Brake' || c.name.toLowerCase().includes('disc'))",
    seoParagraph: [
      "As the industry shifts toward air disc brakes for their superior stopping distance and fade resistance, you need actuators that can match that performance. Our Truck Air Disc Actuators provide linear, high-efficiency force output required by modern ADB calipers.",
      "Designed as direct replacements for Bendix ADB22X and Meritor EX+ systems, these actuators feature internal breathing systems to prevent contamination and specialized push rods for disc brake mechanics."
    ],
    features: [
      { title: "Linear Force Output", desc: "Provides the consistent mechanical force required for smooth disc brake pad engagement." },
      { title: "Internal Breathing", desc: "Sealed design breathes internally to prevent external moisture and road salt from entering." },
      { title: "Direct Caliper Fit", desc: "Engineered to mount perfectly to industry-standard air disc brake calipers." }
    ],
    faqs: []
  },
  {
    path: 'air-disc-actuators/trailer-adb',
    title: 'Trailer Air Disc Actuators',
    desc: 'Trailer-optimized air disc actuators ensuring stable, fade-resistant stopping power.',
    cat: 'air-disc-actuators',
    filter: "BRAKE_CHAMBERS.filter(c => c.category === 'Air Disc Brake' || c.name.toLowerCase().includes('disc'))",
    seoParagraph: [
      "Trailer air disc brakes offer incredible stability and reduced stopping distances. Our Trailer ADB Actuators are optimized for trailer axle mounting, featuring enhanced environmental protection against the severe road spray that trailers endure."
    ],
    features: [],
    faqs: []
  },
  {
    path: 'air-disc-actuators/high-temp-adb',
    title: 'High-Temperature ADB Actuators',
    desc: 'Extreme temperature resistant air disc actuators for severe braking environments.',
    cat: 'air-disc-actuators',
    filter: "BRAKE_CHAMBERS.filter(c => (c.category === 'Air Disc Brake' || c.name.toLowerCase().includes('disc')) && c.name.toLowerCase().includes('heavy'))",
    seoParagraph: [
      "Air disc brakes run hotter than traditional drum brakes. For mountainous terrain or heavy-haul applications, our High-Temperature ADB Actuators feature specialized heat-shielding and advanced high-temp elastomers to prevent heat degradation and maintain performance."
    ],
    features: [],
    faqs: []
  },

  // Parts & Kits
  {
    path: 'chamber-parts-kits/repair-kits',
    title: 'Brake Chamber Repair Kits',
    desc: 'Complete repair and piggyback kits for fast and safe field maintenance.',
    cat: 'chamber-parts-kits',
    filter: "BRAKE_CHAMBERS.filter(c => c.name.toLowerCase().includes('piggyback') || c.category === 'Hardware Kit')",
    seoParagraph: [
      "Reduce downtime and save money with our comprehensive Brake Chamber Repair Kits. Instead of replacing the entire assembly, our Piggyback Kits allow for quick, safe replacement of the spring brake portion in the field.",
      "Each kit includes all necessary hardware, pre-caged springs for safety, and detailed instructions to get your vehicle back on the road rapidly."
    ],
    features: [
      { title: "Cost-Effective", desc: "Repairing rather than replacing the entire unit saves significant maintenance costs." },
      { title: "Pre-Caged Safety", desc: "Power springs are pre-caged at the factory to ensure safe installation by technicians." },
      { title: "Complete Hardware", desc: "Kits include fresh clamp bands, diaphragms, and bolts for a complete seal." }
    ],
    faqs: [
      { q: "What is a piggyback kit?", a: "A piggyback kit contains the parking/emergency spring brake portion of a combination chamber. It allows you to replace just the failed spring section while retaining the existing service chamber housing and push rod." }
    ]
  },
  {
    path: 'chamber-parts-kits/replacement-rubber',
    title: 'Replacement Rubber Diaphragms',
    desc: 'Premium nylon-reinforced neoprene replacement diaphragms.',
    cat: 'chamber-parts-kits',
    filter: "BRAKE_ACCESSORIES.filter(a => a.category === 'Diaphragm')",
    seoParagraph: [
      "The diaphragm is the heart of the brake chamber. Our Replacement Rubber Diaphragms are molded from premium neoprene and reinforced with high-strength nylon fabric to resist tearing and fatigue even at extreme temperatures."
    ],
    features: [],
    faqs: []
  },
  {
    path: 'chamber-parts-kits/mounting-hardware',
    title: 'Mounting Hardware & Brackets',
    desc: 'Caging bolts, clamp bands, straight and threaded clevises for secure installation.',
    cat: 'chamber-parts-kits',
    filter: "BRAKE_ACCESSORIES.filter(a => ['Caging Bolt', 'Clamp Band', 'Slack Adjuster'].includes(a.category))",
    seoParagraph: [
      "Don't compromise a new brake chamber installation by reusing fatigued hardware. We manufacture a full line of heavy-duty caging bolts, heavy-gauge steel clamp bands, and forged clevis assemblies to ensure a secure, safe installation."
    ],
    features: [],
    faqs: []
  }
];

// Target directory is src/app directly
const targetBaseDir = path.join(__dirname, 'src', 'app');

pages.forEach(page => {
  const fullDir = path.join(targetBaseDir, page.path);
  // Ensure dir exists
  fs.mkdirSync(fullDir, { recursive: true });
  fs.writeFileSync(
    path.join(fullDir, 'page.tsx'),
    generatePageContent(page.title, page.desc, page.cat, page.filter, page.seoParagraph, page.features, page.faqs)
  );
  console.log('Updated/Created: ' + page.path);
});
