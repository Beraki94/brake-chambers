import { Brand, Market, BrakeChamber, BrakeAccessory, AccessoryCategory, ChamberCategory } from '../types';

export const MARKETS: Market[] = [
  { countryName: 'English', code: 'en', isActive: true },
  { countryName: 'Español (Spanish)', code: 'es', isActive: true },
  { countryName: 'العربية (Arabic)', code: 'ar', isActive: true },
  { countryName: '中文 (Chinese)', code: 'zh', isActive: true },
  { countryName: 'Français (French)', code: 'fr', isActive: true },
  { countryName: 'Deutsch (German)', code: 'de', isActive: true },
];

export const BRANDS: Brand[] = [
  { slug: 'brc', name: 'BRC', country: 'China' },
  { slug: 'generic', name: 'Generic', country: 'China' },
];

const seenChamberSlugs = new Set<string>();

const createChamber = (id: string, name: string, type: string, category: ChamberCategory, strokeSize: string, priceUSD: number, overrides?: Partial<BrakeChamber['specifications']> & Partial<Pick<BrakeChamber, 'crossReferenceBrands' | 'strokeInch' | 'pushRodLengthInch' | 'application' | 'oemPartNumbers' | 'moq' | 'palletQuantity' | 'dutySpec' | 'mountType'>>): BrakeChamber => {
  const parts = [
    type,
    overrides?.dutySpec,
    overrides?.strokeInch ? overrides.strokeInch.replace(/ /g, '') : (strokeSize === 'Long Stroke' ? '3in' : '2-12in'),
    overrides?.mountType
  ].filter(Boolean);

  let newSlug = parts.map(p => p!.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')).join('-');
  newSlug = newSlug.replace(/-+/g, '-').replace(/^-|-$/g, '');

  if (seenChamberSlugs.has(newSlug)) {
    throw new Error('SLUG COLLISION DETECTED for ' + newSlug + '. Please add distinguishing attributes like dutySpec or mountType for product ID: ' + id);
  }
  seenChamberSlugs.add(newSlug);

  return {
    slug: newSlug,
    name: name,
    brandSlug: 'brc',
    category: category,
    type: type,
    strokeSize: strokeSize,
    strokeInch: overrides?.strokeInch || (strokeSize === 'Long Stroke' ? '3 in' : '2-1/2 in'),
    pushRodLengthInch: overrides?.pushRodLengthInch || '8 in',
    dutySpec: overrides?.dutySpec,
    mountType: overrides?.mountType,
    application: overrides?.application || 'S-Cam Brake',
    crossReferenceBrands: overrides?.crossReferenceBrands || ['Bendix', 'Haldex', 'MGM', 'Meritor', 'Wabco'],
    oemPartNumbers: overrides?.oemPartNumbers,
    material: 'Steel',
    priceUSD: priceUSD,
    includedItems: ['Clevis', 'Nuts', 'Washers'],
    description: `<p>High quality ${strokeSize.toLowerCase()} ${category.toLowerCase()} directly from the factory. Tested for 1 million cycles.</p>`,
    specifications: {
      maxOperatingPressure: overrides?.maxOperatingPressure || '150 psi',
      operatingTemperature: overrides?.operatingTemperature || '-40°C to +80°C',
      pushRodLength: overrides?.pushRodLength || '8.0 inches',
      portSize: overrides?.portSize || '3/8" NPT',
      weight: overrides?.weight || '8.5 lbs'
    },
    galleryUrls: category === 'Spring Brake' ? ['/products/spring-brake.png'] : category === 'Service Brake' ? ['/products/service-brake.png'] : ['/products/air-disc-actuator.png'],
    stock: Math.floor(Math.random() * 500) + 100,
    publishedAt: '2024-02-01T00:00:00Z',
    moq: overrides?.moq || 50,
    palletQuantity: overrides?.palletQuantity || 120,
  };
};

export const BRAKE_CHAMBERS: BrakeChamber[] = [
  createChamber('1', 'Type 30/30 Spring Brake (Standard)', 'Type 30/30', 'Spring Brake', 'Standard', 35.00, { 
    weight: '18 lbs',
    oemPartNumbers: [
      { brand: 'Bendix', partNumber: '800021', notes: 'Direct Replacement' },
      { brand: 'Meritor', partNumber: 'R873030' },
      { brand: 'Haldex', partNumber: 'GC3030' },
      { brand: 'MGM', partNumber: '3230051' }
    ]
  }),
  createChamber('2', 'Type 30/30 Spring Brake (Long Stroke)', 'Type 30/30', 'Spring Brake', 'Long Stroke', 38.00, { 
    weight: '19 lbs',
    oemPartNumbers: [
      { brand: 'Bendix', partNumber: 'NT3030STD-120' },
      { brand: 'Meritor', partNumber: 'R873030LS' },
      { brand: 'Haldex', partNumber: 'GC3030L' }
    ]
  }),
  createChamber('3', 'Type 24/30 Spring Brake (Standard)', 'Type 24/30', 'Spring Brake', 'Standard', 33.00, { weight: '17 lbs' }),
  createChamber('4', 'Type 24/30 Spring Brake (Long Stroke)', 'Type 24/30', 'Spring Brake', 'Long Stroke', 36.00, { weight: '18 lbs' }),
  createChamber('5', 'Type 20/24 Spring Brake', 'Type 20/24', 'Spring Brake', 'Standard', 30.00, { weight: '15 lbs' }),
  ...Array.from({ length: 25 }).map((_, i) => createChamber(`sb${i+6}`, `Type 30/30 Spring Brake Variant ${i+6}`, 'Type 30/30', 'Spring Brake', 'Standard', 35.00, { dutySpec: `variant-${i+6}` })),

  createChamber('6', 'Type 30 Service Chamber', 'Type 30', 'Service Brake', 'Standard', 15.00, { weight: '8 lbs' }),
  createChamber('7', 'Type 30 Service Chamber (Long Stroke)', 'Type 30', 'Service Brake', 'Long Stroke', 16.50, { weight: '8.5 lbs' }),
  createChamber('8', 'Type 24 Service Chamber', 'Type 24', 'Service Brake', 'Standard', 14.00, { weight: '7 lbs' }),
  createChamber('9', 'Type 20 Service Chamber', 'Type 20', 'Service Brake', 'Standard', 13.00, { weight: '6 lbs' }),
  createChamber('10', 'Type 16 Service Chamber', 'Type 16', 'Service Brake', 'Standard', 12.00, { weight: '5 lbs' }),
  ...Array.from({ length: 25 }).map((_, i) => createChamber(`srv${i+11}`, `Type 30 Service Chamber Variant ${i+11}`, 'Type 30', 'Service Brake', 'Standard', 15.00, { dutySpec: `variant-${i+11}` })),

  createChamber('adb1', 'Type 16 Air Disc Actuator', 'Type 16', 'Air Disc Actuator', 'Standard', 45.00, { weight: '12 lbs', application: 'Disc', dutySpec: 'adb' }),
  createChamber('adb2', 'Type 18/24 Air Disc Actuator', 'Type 18/24', 'Air Disc Actuator', 'Standard', 55.00, { weight: '16 lbs', application: 'Disc', dutySpec: 'adb' }),
  createChamber('adb3', 'Type 20/24 Air Disc Actuator', 'Type 20/24', 'Air Disc Actuator', 'Standard', 58.00, { weight: '17 lbs', application: 'Disc', dutySpec: 'adb' }),
  createChamber('adb4', 'Type 24/24 Air Disc Actuator', 'Type 24/24', 'Air Disc Actuator', 'Standard', 62.00, { weight: '18 lbs', application: 'Disc', dutySpec: 'adb' }),
  createChamber('adb5', 'Type 24/30 Air Disc Actuator', 'Type 24/30', 'Air Disc Actuator', 'Standard', 68.00, { weight: '20 lbs', application: 'Disc', dutySpec: 'adb' }),
];

const seenAccessorySlugs = new Set<string>();

const createAccessory = (id: string, name: string, category: AccessoryCategory, priceUSD: number, features: string[]): BrakeAccessory => {
  const newSlug = `${category}-${name}`.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (seenAccessorySlugs.has(newSlug)) {
    throw new Error('SLUG COLLISION DETECTED for accessory: ' + newSlug);
  }
  seenAccessorySlugs.add(newSlug);

  return {
    slug: newSlug,
    name: name,
    brandSlug: 'generic',
    category: category,
    priceUSD: priceUSD,
    description: `<p>High quality ${category.toLowerCase()} perfect for wholesale bulk orders.</p>`,
    features: features,
    galleryUrls: ['/products/chamber-parts-kit.png'],
    stock: Math.floor(Math.random() * 1000) + 200,
    publishedAt: '2024-03-05T00:00:00Z',
  };
};

export const BRAKE_ACCESSORIES: BrakeAccessory[] = [
  createAccessory('a1', 'Type 30 Rubber Diaphragm', 'Diaphragm', 2.50, ['High temp resistance', 'OEM Spec', 'Heavy Duty']),
  createAccessory('a2', 'Type 24 Rubber Diaphragm', 'Diaphragm', 2.20, ['High temp resistance', 'OEM Spec', 'Heavy Duty']),
  createAccessory('a3', 'Standard Caging Bolt', 'Caging Bolt', 1.50, ['Hardened Steel', 'Corrosion Resistant']),
  createAccessory('a4', 'Type 30 Clamp Band', 'Clamp Band', 3.00, ['Stainless Steel Options', 'Secure Fit']),
  createAccessory('a5', 'Automatic Slack Adjuster (5.5" / 1.5" - 28 Spline)', 'Slack Adjuster', 25.00, ['Self-adjusting', 'Durable']),
  createAccessory('a6', 'Manual Slack Adjuster', 'Slack Adjuster', 12.00, ['Forged Steel', 'Grease Fitting Included']),
  ...Array.from({ length: 24 }).map((_, i) => createAccessory(`a${i+7}`, `Accessory Variant ${i+7}`, 'Diaphragm', 2.50, ['Heavy Duty'])),
];
