const fs = require('fs');

const updates = [
  {
    file: 'src/features/products/components/ProductsClient.tsx',
    badge: 'Heavy-Duty Components',
    title: 'Commercial Brake Chamber Catalog: Spring, Service & ADB',
    desc: `Browse BRC's full range of OEM-grade brake chambers and replacement parts for trucks, trailers, and commercial fleets. Spring brakes, service chambers, air disc actuators, piggyback kits, and hardware. All include technical specs and direct OEM cross-reference.`
  },
  {
    file: 'src/features/applications/components/ApplicationsClient.tsx',
    badge: 'By Vehicle & Industry',
    title: 'Brake Chambers by Application: Trucks, Trailers, Transit & Off-Highway',
    desc: `Find the right BRC brake chamber for your operating environment. Heavy-duty trucks, commercial trailers, transit buses, refuse vehicles, and off-highway equipment. Each application page recommends the exact spring, service, or ADB chamber for the job.`
  },
  {
    file: 'src/app/service-brake-chambers/page.tsx',
    badge: 'Primary Braking',
    title: 'Service Brake Chambers: OEM Replacements for Steer & Drive Axles',
    desc: `Factory-direct service brake chambers engineered for steer axle, drive axle, and trailer applications. Direct fit, form, and function replacement for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO. Manufactured to IATF 16949 standards. Request factory pricing.`
  },
  {
    file: 'src/app/spring-brake-chambers/page.tsx',
    badge: 'Emergency & Parking',
    title: 'Spring Brake Chambers: Heavy-Duty OEM Replacements',
    desc: `Factory-direct spring brake chambers (combination and double diaphragm) for heavy-duty trucks, trailers, and transit buses. Direct replacement for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO. Type 20/24, 24/24, 30/30, and 24/30 available. Manufactured to IATF 16949 standards.`
  },
  {
    file: 'src/app/air-disc-brake-actuators/page.tsx',
    badge: 'Disc Brake Systems',
    title: 'Air Disc Brake Actuators (ADB): High-Output Technology',
    desc: `Next-generation air disc brake actuators delivering superior clamping force, reduced brake fade, and longer pad life. Direct replacement for Bendix, Haldex, Meritor, and WABCO. HOT Technology inside. Manufactured to IATF 16949 standards. Factory-direct pricing.`
  },
  {
    file: 'src/app/parts-and-kits/page.tsx',
    badge: 'Maintenance & Repair',
    title: 'Brake Chamber Parts & Kits: Diaphragms, Caging Bolts & Hardware',
    desc: `Factory-direct replacement parts for commercial brake chambers. Repair kits, rubber diaphragms, caging bolts, clevis pins, and mounting hardware are all precision-manufactured to OEM specifications. In-stock and ready to ship worldwide.`
  },
  {
    file: 'src/features/manufacturing/components/ManufacturingClient.tsx',
    badge: 'Manufacturing Excellence',
    title: 'Brake Chamber Production: Inside Our Facility',
    desc: `Take a virtual tour of our 50,000 sqm production floor. See firsthand how we cast, machine, assemble, and rigorously test every component to ensure maximum durability and stopping power.`
  },
  {
    file: 'src/features/oem/components/OEMCrossReferenceClient.tsx',
    badge: 'Cross-Reference Tool',
    title: 'OEM Brake Chamber Cross-Reference: Find Direct Replacements',
    desc: `Search by Bendix, Haldex, Meritor, Knorr-Bremse, WABCO, SORL, or MGM part number and get the exact BRC equivalent in seconds. Verified fit, form, and function. Live database updated weekly.`
  },
  {
    file: 'src/features/technical-resources/components/TechnicalResourcesClient.tsx',
    badge: 'Engineering Support',
    title: 'Brake Chamber Technical Resources: Guides, Specs & Data Sheets',
    desc: `Access BRC's technical library: installation procedures, sizing specifications, caging guides, torque specs, and chamber selection tools. Everything engineers, technicians, and fleet managers need to spec and install BRC brake chambers correctly.`
  },
  {
    file: 'src/app/shipping/page.tsx',
    badge: 'Supply Chain & Logistics',
    title: 'Brake Chamber Shipping & Global Logistics: FCL, LCL, Door-to-Door',
    desc: `From our factory floor to your destination port or warehouse. BRC handles EXW, FOB, CIF, and DDP terms for brake chamber shipments worldwide. FCL, LCL, and door-to-door container logistics.`
  },
  {
    file: 'src/app/quote/page.tsx',
    badge: 'Wholesale Pricing',
    title: 'Request a Brake Chamber Quote: Factory-Direct Wholesale Pricing',
    desc: `Get factory-direct pricing on BRC brake chambers for your fleet or distribution business. Container pricing, sample orders, and private-label options available. Response within 24 hours.`
  },
  {
    file: 'src/features/distributors/components/DistributorsClient.tsx',
    badge: 'Global Network & Portal',
    title: 'Become a BRC Brake Chamber Distributor: Global Partner Network',
    desc: `Join BRC's global network of authorized brake chamber distributors. Access wholesale pricing, private-label programs, marketing support, and priority factory logistics. Apply to become a distributor or log in to the partner portal.`
  },
  {
    file: 'src/features/blog/components/BlogClient.tsx',
    badge: 'Brake Chamber Insights',
    title: 'Brake Chamber Blog: Technical Guides, Industry News & Updates',
    desc: `Technical bulletins, installation guides, cross-reference updates, and industry news from BRC Brake Chambers. Written for fleet managers, technicians, and distributors who spec, install, and sell commercial brake chambers.`
  },
  {
    file: 'src/features/contact/components/ContactClient.tsx',
    badge: 'Customer Support',
    title: 'Contact BRC: Brake Chamber Sales & Technical Support',
    desc: `Ready to equip your fleet with world-class brake chambers? Our OEM and wholesale team can assist with technical specs, cross-referencing, sample orders, and bulk quotes. Response within 24 hours.`
  },
  {
    file: 'src/features/company/components/CompanyClient.tsx',
    badge: 'About BRC',
    title: 'Built by Engineers. Trusted by Fleets.',
    desc: `From our humble beginnings to becoming a global OEM-grade supplier, BRC is driven by an uncompromising commitment to commercial vehicle safety. Discover the team and the mission behind our world-class brake chambers.`
  }
];

for (const update of updates) {
  if (fs.existsSync(update.file)) {
    let content = fs.readFileSync(update.file, 'utf8');
    content = content.replace(/badge="[^"]*"/, `badge="${update.badge}"`);
    content = content.replace(/title="[^"]*"/, `title="${update.title}"`);
    content = content.replace(/description="[^"]*"/, `description="${update.desc}"`);
    fs.writeFileSync(update.file, content, 'utf8');
    console.log('Fixed ' + update.file);
  } else {
    console.log('File not found: ' + update.file);
  }
}
