import { BRAKE_CHAMBERS } from './src/lib/data';

let count = 0;
const uniqueParts = new Set<string>();
const brands = new Set<string>();
const missingOEMData: string[] = [];

for (const c of BRAKE_CHAMBERS) {
  if (c.oemPartNumbers && c.oemPartNumbers.length > 0) {
    for (const oem of c.oemPartNumbers) {
      count++;
      uniqueParts.add(oem.brand + '|' + oem.partNumber);
      brands.add(oem.brand);
    }
  } else {
    missingOEMData.push(c.slug);
  }
}

console.log('Total OEM references:', count);
console.log('Unique OEM references (Pages to generate):', uniqueParts.size);
console.log('Brands found:', Array.from(brands).join(', '));
console.log('Products missing OEM data:', missingOEMData.length);
