const fs = require('fs');

const updates = [
  {
    file: 'src/features/products/components/ProductsClient.tsx',
    tag: 'PageHeader',
    badge: `Heavy-Duty Components`,
    title: `Commercial Brake Chamber Catalog — Spring, Service & ADB`,
    desc: `Browse BRC's full range of OEM-grade brake chambers and replacement parts for trucks, trailers, and commercial fleets. Spring brakes, service chambers, air disc actuators, piggyback kits, and hardware — all with technical specs and direct OEM cross-reference.`
  },
  {
    file: 'src/features/applications/components/ApplicationsClient.tsx',
    tag: 'PageHeader',
    badge: `By Vehicle & Industry`,
    title: `Brake Chambers by Application — Trucks, Trailers, Transit & Off-Highway`,
    desc: `Find the right BRC brake chamber for your operating environment. Heavy-duty trucks, commercial trailers, transit buses, refuse vehicles, and off-highway equipment — each application page recommends the exact spring, service, or ADB chamber for the job.`
  },
  {
    file: 'src/app/service-brake-chambers/page.tsx',
    tag: 'ProductListingLayout',
    badge: `Primary Braking`,
    title: `Service Brake Chambers — OEM Replacements for Steer & Drive Axles`,
    desc: `Factory-direct service brake chambers engineered for steer axle, drive axle, and trailer applications. Direct fit, form, and function replacement for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO. Manufactured to IATF 16949 standards. Request factory pricing.`
  },
  {
    file: 'src/app/spring-brake-chambers/page.tsx',
    tag: 'ProductListingLayout',
    badge: `Emergency & Parking`,
    title: `Spring Brake Chambers — Heavy-Duty OEM Replacements`,
    desc: `Factory-direct spring brake chambers (combination and double diaphragm) for heavy-duty trucks, trailers, and transit buses. Direct replacement for Bendix, Haldex, Meritor, Knorr-Bremse, and WABCO. Type 20/24, 24/24, 30/30, and 24/30 available. Manufactured to IATF 16949 standards.`
  },
  {
    file: 'src/app/air-disc-brake-actuators/page.tsx',
    tag: 'ProductListingLayout',
    badge: `Disc Brake Systems`,
    title: `Air Disc Brake Actuators (ADB) — High-Output Technology`,
    desc: `Next-generation air disc brake actuators delivering superior clamping force, reduced brake fade, and longer pad life. Direct replacement for Bendix, Haldex, Meritor, and WABCO. HOT Technology inside. Manufactured to IATF 16949 standards. Factory-direct pricing.`
  },
  {
    file: 'src/app/parts-and-kits/page.tsx',
    tag: 'ProductListingLayout',
    badge: `Maintenance & Repair`,
    title: `Brake Chamber Parts & Kits — Diaphragms, Caging Bolts & Hardware`,
    desc: `Factory-direct replacement parts for commercial brake chambers. Repair kits, rubber diaphragms, caging bolts, clevis pins, and mounting hardware — all precision-manufactured to OEM specifications. In-stock and ready to ship worldwide.`
  },
  {
    file: 'src/features/manufacturing/components/ManufacturingClient.tsx',
    tag: 'PageHeader',
    badge: `Inside the Factory`,
    title: `Brake Chamber Manufacturing — Inside Our Factory`,
    desc: `Take a virtual tour of our 50,000 sqm brake chamber factory in Zhejiang, China. See how we cast, machine, assemble, and test every chamber to IATF 16949 standards. Vertically integrated. Export-ready.`
  },
  {
    file: 'src/features/oem/components/OEMCrossReferenceClient.tsx',
    tag: 'PageHeader',
    badge: `Cross-Reference Tool`,
    title: `OEM Brake Chamber Cross-Reference — Find Direct Replacements`,
    desc: `Search by Bendix, Haldex, Meritor, Knorr-Bremse, WABCO, SORL, or MGM part number and get the exact BRC equivalent in seconds. Verified fit, form, and function. Live database updated weekly.`
  },
  {
    file: 'src/features/technical-resources/components/TechnicalResourcesClient.tsx',
    tag: 'PageHeader',
    badge: `Engineering Support`,
    title: `Brake Chamber Technical Resources — Guides, Specs & Data Sheets`,
    desc: `Access BRC's technical library — installation procedures, sizing specifications, caging guides, torque specs, and chamber selection tools. Everything engineers, technicians, and fleet managers need to spec and install BRC brake chambers correctly.`
  },
  {
    file: 'src/app/shipping/page.tsx',
    tag: 'PageHeader',
    badge: `Supply Chain & Logistics`,
    title: `Brake Chamber Shipping & Global Logistics — FCL, LCL, Door-to-Door`,
    desc: `From our factory floor to your destination port or warehouse. BRC handles EXW, FOB, CIF, and DDP terms for brake chamber shipments worldwide. FCL, LCL, and door-to-door container logistics.`
  },
  {
    file: 'src/app/quote/page.tsx',
    tag: 'PageHeader',
    badge: `Wholesale Pricing`,
    title: `Request a Brake Chamber Quote — Factory-Direct Wholesale Pricing`,
    desc: `Get factory-direct pricing on BRC brake chambers for your fleet or distribution business. Container pricing, sample orders, and private-label options available. Response within 24 hours.`
  },
  {
    file: 'src/features/distributors/components/DistributorsClient.tsx',
    tag: 'PageHeader',
    badge: `Global Network & Portal`,
    title: `Become a BRC Brake Chamber Distributor — Global Partner Network`,
    desc: `Join BRC's global network of authorized brake chamber distributors. Access wholesale pricing, private-label programs, marketing support, and priority factory logistics. Apply to become a distributor or log in to the partner portal.`
  },
  {
    file: 'src/features/blog/components/BlogClient.tsx',
    tag: 'PageHeader',
    badge: `Brake Chamber Insights`,
    title: `Brake Chamber Blog — Technical Guides, Industry News & Updates`,
    desc: `Technical bulletins, installation guides, cross-reference updates, and industry news from BRC Brake Chambers. Written for fleet managers, technicians, and distributors who spec, install, and sell commercial brake chambers.`
  },
  {
    file: 'src/features/contact/components/ContactClient.tsx',
    tag: 'PageHeader',
    badge: `Customer Support`,
    title: `Contact BRC — Brake Chamber Sales & Technical Support`,
    desc: `Ready to equip your fleet with world-class brake chambers? Our OEM and wholesale team can assist with technical specs, cross-referencing, sample orders, and bulk quotes. Response within 24 hours.`
  },
  {
    file: 'src/features/company/components/CompanyClient.tsx',
    tag: 'PageHeader',
    badge: `About BRC`,
    title: `Built by Engineers. Trusted by Fleets.`,
    desc: `Deep engineering, vertically integrated brake chamber manufacturing, and uncompromising quality control. Welcome to BRC Brake Chambers — where every commercial brake chamber is designed, tested, and built in our own factory operating to IATF 16949 standards in Zhejiang, China.`
  }
];

for (const update of updates) {
  if (!fs.existsSync(update.file)) {
    console.error('File not found: ' + update.file);
    continue;
  }
  
  let content = fs.readFileSync(update.file, 'utf8');
  
  // The matching logic using Regex
  const componentRegex = new RegExp(`(<${update.tag}[\\s\\S]*?)\\/>`);
  
  const match = content.match(componentRegex);
  if (match) {
    let props = match[1];
    
    // Replace Badge
    props = props.replace(/\\s+badge=({[\\s\\S]*?}|["'][\\s\\S]*?["'])/, '');
    props += `\n        badge="${update.badge}"`;
    
    // Replace Title
    props = props.replace(/\\s+title=({[\\s\\S]*?}|["'][\\s\\S]*?["'])/, '');
    props += `\n        title="${update.title}"`;
    
    // Replace Description
    props = props.replace(/\\s+description=({[\\s\\S]*?}|["'][\\s\\S]*?["'])/, '');
    props += `\n        description="${update.desc}"`;
    
    const newComponent = `${props}\n      />`;
    content = content.replace(componentRegex, newComponent);
    fs.writeFileSync(update.file, content, 'utf8');
    console.log('Updated: ' + update.file);
  } else {
    console.log('Component not found in: ' + update.file);
  }
}
