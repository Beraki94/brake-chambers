import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from './src/lib/data';
import fs from 'fs';

const urls = [
  '/',
  '/contact',
  '/products',
  '/oem-cross-reference',
  '/oem-cross-reference/part-search',
  '/oem-cross-reference/database',
  '/applications',
  '/technical-resources',
  '/capabilities'
];

for (const p of BRAKE_CHAMBERS) {
  let catSlug = '';
  if (p.category === 'Spring Brake') catSlug = 'spring-brakes';
  else if (p.category === 'Service Brake') catSlug = 'service-chambers';
  else if (p.category === 'Air Disc Actuator') catSlug = 'air-disc-actuators';
  urls.push('/' + catSlug + '/' + p.slug);
}
for (const p of BRAKE_ACCESSORIES) {
  urls.push('/chamber-parts-kits/' + p.slug);
}

const brands = new Set();
const oemParts = new Set();
for (const p of BRAKE_CHAMBERS) {
  if (p.oemPartNumbers) {
    for (const oem of p.oemPartNumbers) {
      brands.add(oem.brand);
      oemParts.add('/oem-cross-reference/' + oem.brand.toLowerCase() + '/' + oem.partNumber);
    }
  }
}
for (const brand of brands) {
  urls.push('/oem-cross-reference/' + (brand as string).toLowerCase());
}
for (const part of oemParts) {
  urls.push(part as string);
}

const apps = ['commercial-linehaul', 'heavy-duty-freight', 'regional-delivery', 'refuse-sanitation', 'off-highway-mining', 'agricultural-transport', 'transit-coach-bus', 'school-buses', 'shuttle-fleets'];
for (const app of apps) {
  urls.push('/applications/' + app);
}

const tech = ['installation', 'maintenance', 'troubleshooting', 'caging', 'size-charts', 'stroke-length', 'pushrod', 'port-threads', 'cvsa', 'fmvss-121', 'spring-brake-safety', 'warranty', 'cad-models', 'material-specs', 'video-tutorials', 'whitepapers'];
for (const t of tech) {
  urls.push('/technical-resources/' + t);
}

const caps = ['production-process', 'facility-overview', 'materials', 'iso-certifications', 'testing-laboratory', 'regulatory-compliance', 'custom-engineering', 'rapid-prototyping', 'recent-innovations', 'contract-manufacturing', 'fleet-inquiries'];
for (const c of caps) {
  urls.push('/capabilities/' + c);
}

// Convert to markdown list format
const markdownContent = "# All Project URLs\n\n" + urls.map(u => `- [${u}](${u})`).join('\n');
fs.writeFileSync('all_urls_clean.md', markdownContent);
