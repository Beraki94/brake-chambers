const fs = require('fs');

let homeContent = fs.readFileSync('src/features/home/components/HomeClient.tsx', 'utf8');

// SECTION 1
homeContent = homeContent.replace(
  'title="Primary Product Categories"',
  'title="Commercial Brake Chamber Types — Spring, Service, ADB & Parts"'
);
homeContent = homeContent.replace(
  'description="Explore our comprehensive range of commercial vehicle brake solutions."',
  'description="Explore BRC\'s complete range of aftermarket brake chambers for trucks, trailers, and commercial fleets. Every category is manufactured to IATF 16949 standards and cross-referenced against Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO part numbers."'
);
homeContent = homeContent.replace(
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">Heavy-duty tandem units managing both service braking and parking brake functions for traditional S-cam drum axles. Engineered to outlast OEM standards with advanced corrosion-resistant e-coating.</div>',
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">Heavy-duty combination spring brake chambers managing both service and parking brake functions. Precision-machined internal bore delivers consistent mechanical advantage across millions of cycles. Available in Type 20/24, 24/24, 30/30, and 24/30.</div>'
);
homeContent = homeContent.replace(
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">Type 20/24 — Type 24/30 — Type 30/30 — Type 36/36</div>',
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">Type 20/24 · Type 24/24 · Type 30/30 · Type 24/30</div>'
);
homeContent = homeContent.replace(
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">Compact, highly durable chambers engineered for precision pneumatic response on drum brake systems. Designed for fast actuation and extended service life on steer and drive axles.</div>',
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">Factory-direct service brake chambers engineered for precise pneumatic response on drum brake systems. Available for steer axle, drive axle, and trailer applications. Manufactured to IATF 16949 standards and pressure-tested before shipment.</div>'
);
homeContent = homeContent.replace(
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">Size 9 — Size 12 — Size 16 — Size 20 — Size 24 — Size 30 — Size 36</div>',
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">Size 9 · Size 12 · Size 16 · Size 20 · Size 24 · Size 30</div>'
);
homeContent = homeContent.replace(
  '<h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Air Disc Brake (ADB) Chambers</h3>',
  '<h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Air Disc Brake (ADB) Actuators</h3>'
);
homeContent = homeContent.replace(
  '<p className="text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">High-Output Technology · Direct-Clamping</p>',
  '<p className="text-amber-600 font-bold text-[11px] tracking-widest uppercase bg-amber-50 px-2.5 py-1 inline-block rounded-md mt-1 border border-amber-100">High-Output Technology · Severe-Duty Rated</p>'
);
homeContent = homeContent.replace(
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">Next-generation disc-specific chambers delivering superior clamping force, reduced brake fade, and shorter pushrods. Ideal for severe-duty trucks, transit buses, and off-highway applications.</div>',
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">Next-generation air disc brake actuators delivering superior clamping force, reduced brake fade, and longer pad life. Built with our proprietary HOT Technology for high-mileage, high-temperature, and severe-duty applications.</div>'
);
homeContent = homeContent.replace(
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">HOT Technology — Severe-Duty Rated — Corrosion-Resistant Housing</div>',
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">HOT Technology · Severe-Duty Rated</div>'
);
homeContent = homeContent.replace(
  'Explore ADB Chambers <ArrowRight',
  'Explore ADB Actuators <ArrowRight'
);
homeContent = homeContent.replace(
  '<h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Piggybacks & Replacement Parts</h3>',
  '<h3 className="text-2xl font-extrabold text-navy-900 mb-1 group-hover:text-amber-600 transition-colors">Brake Chamber Parts & Kits</h3>'
);
homeContent = homeContent.replace(
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">Genuine aftermarket repair components to extend chamber life without replacing the entire unit. Includes piggyback kits, diaphragms, caging bolts, clamp bands, and mounting hardware.</div>',
  '<div className="text-slate-500 text-sm max-w-md leading-relaxed mb-4">OEM-spec brake chamber repair components to extend the service life of your existing chambers. Includes piggyback kits, rubber diaphragms, caging bolts, clevis pins, and mounting hardware. In-stock and ready to ship worldwide.</div>'
);
homeContent = homeContent.replace(
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">OEM-Spec Components — In-Stock Ready to Ship — Bulk Pricing Available</div>',
  '<div className="text-navy-900 font-bold text-[11px] uppercase tracking-widest mb-6">OEM-Spec · In-Stock · Ready to Ship</div>'
);
homeContent = homeContent.replace(
  'Explore Parts & Kits <ArrowRight',
  'Explore Brake Chamber Parts <ArrowRight'
);

// SECTION 2
homeContent = homeContent.replace(
  'title={<>Inside Our <span className="text-amber-500">50,000 sqm</span> Manufacturing Hub.</>}',
  'title={<>Inside Our <span className="text-amber-500">50,000 sqm</span> Brake Chamber Factory</>}'
);
homeContent = homeContent.replace(
  'description="By partnering directly with our operating to IATF 16949 standards factory in Zhejiang, China, you gain a vertically integrated manufacturing ally. We eliminate middleman markups and manage the entire lifecycle, delivering absolute OEM-quality precision backed by global logistical scale."',
  'description="BRC operates a vertically integrated brake chamber factory in Zhejiang, China — operating to IATF 16949 standards. By sourcing direct, you eliminate middleman markups and manage the full production lifecycle, from raw material to export-ready container."'
);
homeContent = homeContent.replace(
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">50,000 Sqm Manufacturing Facility:</strong> State-of-the-art infrastructure guaranteeing high-volume production and consistent supply.</span>',
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">50,000 Sqm Factory:</strong> State-of-the-art production infrastructure for high-volume brake chamber output and consistent supply.</span>'
);
homeContent = homeContent.replace(
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">Global Certifications:</strong> Tier-1 quality systems operating to IATF 16949 standards.</span>',
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">IATF 16949 Standards:</strong> Tier-1 automotive quality systems audited to global standards.</span>'
);
homeContent = homeContent.replace(
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">High-Volume Capacity:</strong> Fully automated assembly lines scaling to 1M+ units annually.</span>',
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">1M+ Units / Year:</strong> Fully automated assembly lines scaling to meet container-level demand.</span>'
);
homeContent = homeContent.replace(
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">Rigorous R&D:</strong> In-house metallurgical engineering and stress-testing labs.</span>',
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">In-House R&D:</strong> Metallurgical engineering and stress-testing labs on the factory floor.</span>'
);
homeContent = homeContent.replace(
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">Seamless Logistics:</strong> Turnkey ocean-freight shipping and customs compliance.</span>',
  '<span className="text-slate-600 text-sm md:text-base leading-relaxed"><strong className="text-navy-900">Export Logistics:</strong> Turnkey ocean freight, customs compliance, and door-to-door delivery.</span>'
);
homeContent = homeContent.replace(
  'Take a Virtual Tour <ChevronRight',
  'See the brake chamber manufacturing process <ChevronRight'
);

// SECTION 3
homeContent = homeContent.replace(
  'badge="Direct Aftermarket Replacements"',
  'badge="OEM-Compatible Aftermarket"'
);
homeContent = homeContent.replace(
  'title="Engineered as a Direct Match — Not a Generic Substitute"',
  'title="Engineered as a Direct OEM Replacement"'
);
homeContent = homeContent.replace(
  'description="We manufacture aftermarket brake chambers to match the exact fit, form, and performance of leading OEM brands — so swapping to our parts doesn\'t mean swapping your specs."',
  'description="BRC brake chambers are manufactured to match the exact fit, form, and function of leading OEM brands. Swapping to BRC doesn\'t mean swapping your specs — it means sourcing the same performance at factory-direct pricing."'
);

// SECTION 4
homeContent = homeContent.replace(
  'title={<>High Output Technology <span className="text-emerald-500">(HOT)</span><br /><span className="text-xl md:text-2xl text-navy-200 mt-3 block">Redefining Air Disc Performance</span></>}',
  'title={<>High Output Technology <span className="text-emerald-500">(HOT)</span><br /><span className="text-xl md:text-2xl text-navy-200 mt-3 block">for Air Disc Brake Actuators</span></>}'
);
homeContent = homeContent.replace(
  'description="Traditional air disc brake actuators lose clamping force as internal friction builds over time. Our patented High Output Technology (HOT) corrects this by maximizing mechanical advantage through a proprietary internal mechanism. The result: unprecedented stopping power consistency and uncompromised safety."',
  'description="Standard air disc actuators lose clamping force as internal friction builds over time. BRC\'s patented HOT Technology corrects this through a proprietary internal mechanism that maintains mechanical advantage over millions of cycles — delivering consistent stopping performance under heavy loads."'
);
homeContent = homeContent.replace(
  '<p className="text-navy-200 text-xs md:text-sm leading-relaxed">Overcomes internal friction to maintain peak stopping power over millions of cycles.</p>',
  '<p className="text-navy-200 text-xs md:text-sm leading-relaxed">Overcomes friction loss to maintain peak stopping power across the actuator\'s full service life.</p>'
);
homeContent = homeContent.replace(
  '<p className="text-navy-200 text-xs md:text-sm leading-relaxed">Advanced mechanical advantage ensures reliable performance even under heavy loads.</p>',
  '<p className="text-navy-200 text-xs md:text-sm leading-relaxed">Mechanical design maintains reliable performance even under sustained heavy loads and high heat.</p>'
);
homeContent = homeContent.replace(
  '<h3 className="text-amber-400 font-bold mb-1.5 text-sm md:text-base">Patented Engineering</h3>',
  '<h3 className="text-amber-400 font-bold mb-1.5 text-sm md:text-base">Patented Internal Design</h3>'
);
homeContent = homeContent.replace(
  '<p className="text-navy-200 text-xs md:text-sm leading-relaxed">Proprietary internal mechanics not available in standard aftermarket actuators.</p>',
  '<p className="text-navy-200 text-xs md:text-sm leading-relaxed">BRC-exclusive mechanics not available in standard aftermarket actuators.</p>'
);
homeContent = homeContent.replace(
  'Download Tech Specs <ArrowRight',
  'Download brake chamber tech sheets <ArrowRight'
);

// SECTION 5
homeContent = homeContent.replace(
  'badge="Digital Ecosystem"',
  'badge="B2B Support Tools"'
);
homeContent = homeContent.replace(
  'title="Smart Tools for Distributors & Fleets"',
  'title="Cross-Reference, Training & Warranty — All Online"'
);
homeContent = homeContent.replace(
  'description="Streamline cross-referencing, technician training, and warranty claims—without picking up the phone."',
  'description="Self-service tools built for brake chamber distributors, fleet managers, and shop technicians. No phone calls. No waiting on email replies."'
);
homeContent = homeContent.replace(
  '<p className="text-navy-300 text-sm md:text-base mb-8 leading-relaxed font-light text-left">Type in a Bendix, Knorr-Bremse, ZF/WABCO, Haldex, SORL, or MGM part number and get the matching BRC equivalent in seconds. Eliminate manual cross-referencing errors and procurement delays.</p>',
  '<p className="text-navy-300 text-sm md:text-base mb-8 leading-relaxed font-light text-left">Enter a Bendix, Knorr-Bremse, ZF/WABCO, Haldex, SORL, or MGM part number and get the matching BRC brake chamber in seconds. No account required.</p>'
);
homeContent = homeContent.replace(
  '<h3 className="text-xl font-extrabold text-white mb-3">On-Demand Installation Training</h3>',
  '<h3 className="text-xl font-extrabold text-white mb-3">On-Demand Brake Chamber Training</h3>'
);
homeContent = homeContent.replace(
  '<p className="text-navy-300 text-sm md:text-base mb-8 leading-relaxed font-light text-left">Short, high-quality video courses covering correct installation, torque specifications, and common failure diagnosis. Built for shop-floor training.</p>',
  '<p className="text-navy-300 text-sm md:text-base mb-8 leading-relaxed font-light text-left">Short video courses covering installation, torque specifications, and common failure diagnosis. Built for shop-floor training so your team gets it right the first time.</p>'
);
homeContent = homeContent.replace(
  'View Video Courses <ArrowRight',
  'View Training Courses <ArrowRight'
);
homeContent = homeContent.replace(
  '<p className="text-navy-300 text-sm md:text-base mb-0 leading-relaxed font-light text-left max-w-xl">Submit warranty claims online with photo uploads. Our QA engineering team reviews and responds within 24 hours.</p>',
  '<p className="text-navy-300 text-sm md:text-base mb-0 leading-relaxed font-light text-left max-w-xl">Submit brake chamber warranty claims online with photo uploads. Our QA team reviews and responds within 24 hours — no back-and-forth emails.</p>'
);

// SECTION 6
homeContent = homeContent.replace(
  'badge="Global Export Process"',
  'badge="How to Order Wholesale"'
);
homeContent = homeContent.replace(
  'title="Source from China in 3 Simple Steps"',
  'title="Source Brake Chambers from China in 3 Steps"'
);
homeContent = homeContent.replace(
  'description="From initial sample evaluation to recurring container deliveries, BRC makes importing aftermarket parts scalable, predictable, and secure."',
  'description="From sample evaluation to direct container shipping, BRC makes importing aftermarket brake chambers scalable, predictable, and secure."'
);
homeContent = homeContent.replace(
  '<h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">Request a Catalog & Quote</h3>',
  '<h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">Request Catalog & Pricing</h3>'
);
homeContent = homeContent.replace(
  '<p className="text-slate-500 text-sm leading-relaxed mb-6">Tell us your market and requirements. We provide a full wholesale catalog and customized factory-direct pricing for your volume needs.</p>',
  '<p className="text-slate-500 text-sm leading-relaxed mb-6">Tell us your brake chamber requirements. We send a full wholesale catalog with factory-direct pricing — so you know exactly what you\'re buying and at what cost.</p>'
);
homeContent = homeContent.replace(
  '<p className="text-slate-500 text-sm leading-relaxed mb-6">Order evaluation samples directly from our factory for your QA and engineering team to test. Zero technical risk before committing to container volume.</p>',
  '<p className="text-slate-500 text-sm leading-relaxed mb-6">Order brake chamber samples directly from our factory for your engineering team to approve. Zero technical risk before committing to volume.</p>'
);
homeContent = homeContent.replace(
  '<h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">Scale to Container Freight</h3>',
  '<h3 className="text-xl font-extrabold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">Scale to Container Orders</h3>'
);
homeContent = homeContent.replace(
  '<p className="text-slate-500 text-sm leading-relaxed mb-6">Once approved, we scale production. We manage all Incoterms, container loading (FCL/LCL), and seamless delivery to your destination port or warehouse.</p>',
  '<p className="text-slate-500 text-sm leading-relaxed mb-6">Once approved, we produce and stage your order for container shipping. We handle Incoterms, FCL/LCL, and direct delivery to your port or 3PL warehouse.</p>'
);

// SECTION 7
homeContent = homeContent.replace(
  'badge="Bypass the Middleman"',
  'badge="Factory-Direct Contact"'
);
homeContent = homeContent.replace(
  'title="Deal Directly With Our Factory"',
  'title="Work Directly With Our Factory in China"'
);
homeContent = homeContent.replace(
  'description="Connect directly with our export engineering team in Zhejiang. We communicate fluently in English, quote in USD, and manage your order from first inquiry to final container delivery. No trading companies. No markups."',
  'description="Connect with our export engineering team in Zhejiang. We respond in English, quote in USD, and manage your brake chamber order from first inquiry to final container. No trading companies. No hidden markups."'
);


fs.writeFileSync('src/features/home/components/HomeClient.tsx', homeContent);

let footerContent = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footerContent = footerContent.replace(
  'Global manufacturer of premium aftermarket commercial air brake chambers. We supply spring brakes manufactured to IATF 16949 standards, service chambers, air disc actuators, and exact OEM cross-reference replacement parts for heavy-duty trucks, trailers, and transit fleets worldwide.',
  'Global manufacturer of aftermarket brake chambers for heavy-duty commercial vehicles. BRC supplies spring brakes, service chambers, air disc actuators, and OEM cross-reference replacement parts to fleets, distributors, and importers in 30+ countries. Operating to IATF 16949 standards.'
);
fs.writeFileSync('src/components/layout/Footer.tsx', footerContent);

console.log("Done");
