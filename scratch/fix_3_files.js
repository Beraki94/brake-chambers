const fs = require('fs');

const updates = [
  {
    file: 'src/features/products/components/ProductsClient.tsx',
    badge: 'Heavy-Duty Components',
    title: 'Commercial Brake Chamber Catalog — Spring, Service & ADB',
    desc: `Browse BRC's full range of OEM-grade brake chambers and replacement parts for trucks, trailers, and commercial fleets. Spring brakes, service chambers, air disc actuators, piggyback kits, and hardware — all with technical specs and direct OEM cross-reference.`
  },
  {
    file: 'src/features/technical-resources/components/TechnicalResourcesClient.tsx',
    badge: 'Engineering Support',
    title: 'Brake Chamber Technical Resources — Guides, Specs & Data Sheets',
    desc: `Access BRC's technical library — installation procedures, sizing specifications, caging guides, torque specs, and chamber selection tools. Everything engineers, technicians, and fleet managers need to spec and install BRC brake chambers correctly.`
  },
  {
    file: 'src/features/distributors/components/DistributorsClient.tsx',
    badge: 'Global Network & Portal',
    title: 'Become a BRC Brake Chamber Distributor — Global Partner Network',
    desc: `Join BRC's global network of authorized brake chamber distributors. Access wholesale pricing, private-label programs, marketing support, and priority factory logistics. Apply to become a distributor or log in to the partner portal.`
  }
];

for (const update of updates) {
  let content = fs.readFileSync(update.file, 'utf8');
  content = content.replace(/badge="[^"]*"/, `badge="${update.badge}"`);
  content = content.replace(/title="[^"]*"/, `title="${update.title}"`);
  content = content.replace(/description="[^"]*"/, `description="${update.desc}"`);
  fs.writeFileSync(update.file, content, 'utf8');
  console.log('Fixed ' + update.file);
}
