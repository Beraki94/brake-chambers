import { Brand, Market, BrakeChamber, BrakeAccessory, AccessoryCategory, ChamberCategory } from '../types';

export const MARKETS: Market[] = [
  { countryName: 'English', code: 'en', isActive: true, flag: '🇺🇸' },
  { countryName: 'Español', code: 'es', isActive: true, flag: '🇪🇸' },
  { countryName: 'العربية', code: 'ar', isActive: true, flag: '🇦🇪' },
  { countryName: '中文', code: 'zh-CN', isActive: true, flag: '🇨🇳' },
  { countryName: 'Français', code: 'fr', isActive: true, flag: '🇫🇷' },
  { countryName: 'Deutsch', code: 'de', isActive: true, flag: '🇩🇪' },
];

export const BRANDS: Brand[] = [
  { slug: 'brc', name: 'BRC', country: 'China' },
  { slug: 'generic', name: 'Generic', country: 'China' },
];

const seenChamberSlugs = new Set<string>();

const createChamber = (id: string, name: string, type: string, category: ChamberCategory, strokeSize: string, priceUSD: number, overrides?: Partial<BrakeChamber['specifications']> & Partial<Pick<BrakeChamber, 'crossReferenceBrands' | 'strokeInch' | 'pushRodLengthInch' | 'application' | 'oemPartNumbers' | 'moq' | 'palletQuantity' | 'dutySpec' | 'mountType' | 'modelDesignation' | 'brakingMethod' | 'hiddenSearchTags' | 'galleryUrls'>>): BrakeChamber => {
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
    modelDesignation: overrides?.modelDesignation,
    brakingMethod: overrides?.brakingMethod,
    strokeSize: strokeSize,
    strokeInch: overrides?.strokeInch || (strokeSize === 'Long Stroke' ? '3 in' : '2-1/2 in'),
    pushRodLengthInch: overrides?.pushRodLengthInch || '8 in',
    dutySpec: overrides?.dutySpec,
    mountType: overrides?.mountType,
    application: overrides?.application || 'S-Cam Brake',
    crossReferenceBrands: overrides?.crossReferenceBrands || ['Bendix', 'Haldex', 'MGM', 'Meritor', 'Wabco', 'Knorr-Bremse', 'TSE', 'Provia'],
    oemPartNumbers: overrides?.oemPartNumbers,
    hiddenSearchTags: overrides?.hiddenSearchTags,
    material: 'Steel',
    priceUSD: priceUSD,
    includedItems: ['Clevis', 'Nuts', 'Washers'],
    description: `<p>High quality ${strokeSize.toLowerCase()} ${category.toLowerCase()} directly from the factory. Tested for 1 million cycles.</p>`,
    specifications: {
      maxOperatingPressure: overrides?.maxOperatingPressure || '150 psi',
      operatingTemperature: overrides?.operatingTemperature || '-40°C to +80°C',
      pushRodLength: overrides?.pushRodLength || '8.0 inches',
      portSize: overrides?.portSize || '3/8" NPT',
      weight: overrides?.weight || '8.5 lbs',
      strokeMetric: overrides?.strokeMetric,
      pushrodLengthMetric: overrides?.pushrodLengthMetric,
      mountingBoltSpacing: overrides?.mountingBoltSpacing,
      mountingStudThread: overrides?.mountingStudThread,
      mountingStudLength: overrides?.mountingStudLength,
      clevisPinDiameter: overrides?.clevisPinDiameter,
      yokeClevisGapWidth: overrides?.yokeClevisGapWidth,
      inletPortThreadSize: overrides?.inletPortThreadSize,
    },
    galleryUrls: overrides?.galleryUrls || (category === 'Spring Brake' ? ['/products/spring-brake.png'] : category === 'Service Brake' ? ['/products/service-brake.png'] : ['/products/air-disc-actuator.png']),
    stock: Math.floor(Math.random() * 500) + 100,
    publishedAt: '2024-02-01T00:00:00Z',
    moq: overrides?.moq || 50,
    palletQuantity: overrides?.palletQuantity || 120,
  };
};

export const BRAKE_CHAMBERS: BrakeChamber[] = [
  createChamber('t16-single', 'Type 16 Single Diaphragm Air Brake Chamber (75mm Stroke)', 'Type 16', 'Service Brake', 'Standard', 22.00, {
    modelDesignation: 'T16',
    brakingMethod: 'Single Diaphragm',
    weight: '6 lbs',
    strokeMetric: '75 mm',
    pushrodLengthMetric: '190 mm',
    mountingBoltSpacing: '76.2 mm',
    mountingStudThread: '2-M12×1.5',
    mountingStudLength: '31 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hiddenSearchTags: ['423.104.900.0', '4231049000', '423 104 900 0', 'T16BrakeChamber', 'Type 16 air chamber', 'Single diaphragm T16'],
    galleryUrls: ['/products/brc-brakechambers-v2.jpg', '/products/brc-brakechambers-drawing-v2.jpg'],
    oemPartNumbers: [
      { brand: 'Wabco', partNumber: '423.104.900.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t20-single', 'Type 20 Single Diaphragm Air Brake Chamber (75mm Stroke)', 'Type 20', 'Service Brake', 'Standard', 24.00, {
    modelDesignation: 'T20',
    brakingMethod: 'Single Diaphragm',
    weight: '7 lbs',
    strokeMetric: '75 mm',
    pushrodLengthMetric: '190 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hiddenSearchTags: ['423.105.900.0', '4231059000', '423 105 900 0', 'T20BrakeChamber', 'Type 20 air chamber', 'Single diaphragm T20'],
    galleryUrls: ['/products/brc-brakechambers-v2.jpg', '/products/brc-brakechambers-drawing-v2.jpg'],
    oemPartNumbers: [
      { brand: 'Wabco', partNumber: '423.105.900.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t24-single', 'Type 24 Single Diaphragm Air Brake Chamber (75mm Stroke)', 'Type 24', 'Service Brake', 'Standard', 26.00, {
    modelDesignation: 'T24',
    brakingMethod: 'Single Diaphragm',
    weight: '8 lbs',
    strokeMetric: '75 mm',
    pushrodLengthMetric: '190 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hiddenSearchTags: ['423.106.900.0', '4231069000', '423 106 900 0', 'T24BrakeChamber', 'Type 24 air chamber', 'Single diaphragm T24'],
    galleryUrls: ['/products/brc-brakechambers-v2.jpg', '/products/brc-brakechambers-drawing-v2.jpg'],
    oemPartNumbers: [
      { brand: 'Wabco', partNumber: '423.106.900.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t30-single', 'Type 30 Single Diaphragm Air Brake Chamber (75mm Stroke)', 'Type 30', 'Service Brake', 'Standard', 28.00, {
    modelDesignation: 'T30',
    brakingMethod: 'Single Diaphragm',
    weight: '9 lbs',
    strokeMetric: '75 mm',
    pushrodLengthMetric: '190 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hiddenSearchTags: ['423.107.900.0', '4231079000', '423 107 900 0', 'T30BrakeChamber', 'Type 30 air chamber', 'Single diaphragm T30'],
    galleryUrls: ['/products/brc-brakechambers-v2.jpg', '/products/brc-brakechambers-drawing-v2.jpg'],
    oemPartNumbers: [
      { brand: 'Wabco', partNumber: '423.107.900.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t20-mgm', 'Type 20 Single Diaphragm Air Brake Chamber (MGM Style)', 'Type 20', 'Service Brake', 'Standard', 24.00, {
    modelDesignation: 'T20',
    mountType: 'MGM Style',
    brakingMethod: 'Single Diaphragm',
    weight: '7 lbs',
    strokeMetric: '57 mm',
    pushrodLengthMetric: '200 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8”-11UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: 'Z3/8" NPTF',
    hiddenSearchTags: ['1420001', 'T20MGMChamber', 'Type 20 MGM', 'American Standard Brake Chamber'],
    galleryUrls: ['/products/brc-brakechambers-2.jpg', '/products/brc-brakechambers-drawing-2.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '1420001', notes: 'Direct Match' }
    ]
  }),
  createChamber('t24-mgm', 'Type 24 Single Diaphragm Air Brake Chamber (MGM Style)', 'Type 24', 'Service Brake', 'Standard', 26.00, {
    modelDesignation: 'T24',
    mountType: 'MGM Style',
    brakingMethod: 'Single Diaphragm',
    weight: '8 lbs',
    strokeMetric: '64 mm',
    pushrodLengthMetric: '200 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8”-11UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: 'Z3/8" NPTF',
    hiddenSearchTags: ['1427001', 'T24MGMChamber', 'Type 24 MGM', 'American Standard Brake Chamber'],
    galleryUrls: ['/products/brc-brakechambers-2.jpg', '/products/brc-brakechambers-drawing-2.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '1427001', notes: 'Direct Match' }
    ]
  }),
  createChamber('t30-mgm', 'Type 30 Single Diaphragm Air Brake Chamber (MGM Style)', 'Type 30', 'Service Brake', 'Standard', 28.00, {
    modelDesignation: 'T30',
    mountType: 'MGM Style',
    brakingMethod: 'Single Diaphragm',
    weight: '9 lbs',
    strokeMetric: '64 mm',
    pushrodLengthMetric: '200 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8”-11UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: 'Z3/8" NPTF',
    hiddenSearchTags: ['1430001', 'T30MGMChamber', 'Type 30 MGM', 'American Standard Brake Chamber'],
    galleryUrls: ['/products/brc-brakechambers-2.jpg', '/products/brc-brakechambers-drawing-2.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '1430001', notes: 'Direct Match' }
    ]
  }),
  createChamber('t36-mgm', 'Type 36 Single Diaphragm Air Brake Chamber (MGM Style)', 'Type 36', 'Service Brake', 'Standard', 32.00, {
    modelDesignation: 'T36',
    mountType: 'MGM Style',
    brakingMethod: 'Single Diaphragm',
    weight: '11 lbs',
    strokeMetric: '76 mm',
    pushrodLengthMetric: '200 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8”-11UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: 'Z3/8" NPTF',
    hiddenSearchTags: ['1436001', 'T36MGMChamber', 'Type 36 MGM', 'American Standard Brake Chamber'],
    galleryUrls: ['/products/brc-brakechambers-2.jpg', '/products/brc-brakechambers-drawing-2.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '1436001', notes: 'Direct Match' }
    ]
  }),
  createChamber('t16-short', 'Type 16 Short-Stroke Single Diaphragm Brake Chamber (15mm Pushrod)', 'Type 16', 'Service Brake', 'Standard', 22.00, {
    modelDesignation: 'T16',
    mountType: 'Short-Stroke',
    brakingMethod: 'Single Diaphragm',
    weight: '6.5 lbs',
    strokeMetric: '57 mm',
    pushrodLengthMetric: '15 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    inletPortThreadSize: '2-M16×1.5',
    sphericalRadius: 'SR8',
    hiddenSearchTags: ['423.104.020.0', '4231040200', 'T16ShortStroke', 'Stub Pushrod Air Pot', 'Type 16 short'],
    galleryUrls: ['/products/brc-brakechambers-3.jpg', '/products/brc-brakechambers-drawing-3.jpg'],
    oemPartNumbers: [
      { brand: 'Wabco', partNumber: '423.104.020.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t20-short', 'Type 20 Short-Stroke Single Diaphragm Brake Chamber (15mm Pushrod)', 'Type 20', 'Service Brake', 'Standard', 24.00, {
    modelDesignation: 'T20',
    mountType: 'Short-Stroke',
    brakingMethod: 'Single Diaphragm',
    weight: '7 lbs',
    strokeMetric: '60 mm',
    pushrodLengthMetric: '15 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    inletPortThreadSize: '2-M16×1.5',
    sphericalRadius: 'SR8',
    hiddenSearchTags: ['423.505.000.0', '4235050000', 'T20ShortStroke', 'Stub Pushrod Air Pot', 'Type 20 short'],
    galleryUrls: ['/products/brc-brakechambers-3.jpg', '/products/brc-brakechambers-drawing-3.jpg'],
    oemPartNumbers: [
      { brand: 'Wabco', partNumber: '423.505.000.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t24-short', 'Type 24 Short-Stroke Single Diaphragm Brake Chamber (15mm Pushrod)', 'Type 24', 'Service Brake', 'Standard', 26.00, {
    modelDesignation: 'T24',
    mountType: 'Short-Stroke',
    brakingMethod: 'Single Diaphragm',
    weight: '8 lbs',
    strokeMetric: '64 mm',
    pushrodLengthMetric: '15 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    inletPortThreadSize: '2-M16×1.5',
    sphericalRadius: 'SR8',
    hiddenSearchTags: ['423.506.001.0', '4235060010', 'T24ShortStroke', 'Stub Pushrod Air Pot', 'Type 24 short'],
    galleryUrls: ['/products/brc-brakechambers-3.jpg', '/products/brc-brakechambers-drawing-3.jpg'],
    oemPartNumbers: [
      { brand: 'Wabco', partNumber: '423.506.001.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t24-flange', 'Type 24 Japanese Style 4-Bolt Flange Brake Chamber', 'Type 24', 'Service Brake', 'Standard', 26.00, {
    modelDesignation: 'T24',
    mountType: 'Japanese Flange',
    brakingMethod: 'Single Diaphragm',
    weight: '8 lbs',
    strokeMetric: '60 mm',
    boltCircleDiameter: 'φ87.5',
    flangeHoleConfiguration: '4-φ10.5',
    pilotDiameter: 'φ55',
    inletPortThreadSize: '1/4" NPT',
    pushrodLengthMetric: '215 mm',
    hiddenSearchTags: ['47830-3380', 'T24FlangeChamber', 'Hino Style Service Chamber', 'Type 24 flange'],
    galleryUrls: ['/products/brc-brakechambers-4.jpg', '/products/brc-brakechambers-drawing-4.jpg'],
    oemPartNumbers: [
      { brand: 'Hino/Isuzu', partNumber: '47830-3380', notes: 'Direct Match' }
    ]
  }),
  createChamber('t30-flange', 'Type 30 Japanese Style 4-Bolt Flange Brake Chamber', 'Type 30', 'Service Brake', 'Standard', 28.00, {
    modelDesignation: 'T30',
    mountType: 'Japanese Flange',
    brakingMethod: 'Single Diaphragm',
    weight: '9 lbs',
    strokeMetric: '60 mm',
    boltCircleDiameter: 'φ87.5',
    flangeHoleConfiguration: '4-φ10.5',
    pilotDiameter: 'φ55',
    inletPortThreadSize: '1/4" NPT',
    pushrodLengthMetric: '215 mm',
    hiddenSearchTags: ['47830-3170', '47830-3180', 'T30FlangeChamber', 'Hino Style Service Chamber', 'Type 30 flange'],
    galleryUrls: ['/products/brc-brakechambers-4.jpg', '/products/brc-brakechambers-drawing-4.jpg'],
    oemPartNumbers: [
      { brand: 'Hino/Isuzu', partNumber: '47830-3170/3180', notes: 'Direct Match' }
    ]
  }),
  createChamber('ram1620', 'RAM1620 Air-Hydraulic Combination Brake Actuator', 'RAM 16/20', 'Service Brake', 'Standard', 30.00, {
    modelDesignation: 'RAM1620',
    mountType: 'Air-Hydraulic RAM',
    brakingMethod: 'Air-Hydraulic Combination',
    weight: '9 lbs',
    strokeMetric: '75 mm',
    mountingBoltSpacing: '76.2 mm',
    mountingStudThread: '2-M12×1.5',
    mountingStudLength: '32 mm',
    clevisPinDiameter: '12.5 mm',
    yokeClevisGapWidth: '12.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hydraulicPortSize: 'G3/8"',
    hiddenSearchTags: ['RAM1620', 'Air Hydraulic Brake Actuator', 'RAM Brake Cylinder', 'Diaphragm Oil Cylinder'],
    galleryUrls: ['/products/brc-brakechambers-5.jpg', '/products/brc-brakechambers-drawing-5.jpg']
  }),
  createChamber('ram2025', 'RAM2025 Air-Hydraulic Combination Brake Actuator', 'RAM 20/25', 'Service Brake', 'Standard', 34.00, {
    modelDesignation: 'RAM2025',
    mountType: 'Air-Hydraulic RAM',
    brakingMethod: 'Air-Hydraulic Combination',
    weight: '10.5 lbs',
    strokeMetric: '75 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '40 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hydraulicPortSize: 'G3/8"',
    hiddenSearchTags: ['RAM2025', 'Air Hydraulic Brake Actuator', 'RAM Brake Cylinder', 'Diaphragm Oil Cylinder'],
    galleryUrls: ['/products/brc-brakechambers-5.jpg', '/products/brc-brakechambers-drawing-5.jpg']
  }),
  createChamber('ram2425', 'RAM2425 Air-Hydraulic Combination Brake Actuator', 'RAM 24/25', 'Service Brake', 'Standard', 36.00, {
    modelDesignation: 'RAM2425',
    mountType: 'Air-Hydraulic RAM',
    brakingMethod: 'Air-Hydraulic Combination',
    weight: '11 lbs',
    strokeMetric: '75 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '40 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hydraulicPortSize: 'G3/8"',
    hiddenSearchTags: ['RAM2425', 'Air Hydraulic Brake Actuator', 'RAM Brake Cylinder', 'Diaphragm Oil Cylinder'],
    galleryUrls: ['/products/brc-brakechambers-5.jpg', '/products/brc-brakechambers-drawing-5.jpg']
  }),
  createChamber('ram2030', 'RAM2030 Air-Hydraulic Combination Brake Actuator', 'RAM 20/30', 'Service Brake', 'Standard', 38.00, {
    modelDesignation: 'RAM2030',
    mountType: 'Air-Hydraulic RAM',
    brakingMethod: 'Air-Hydraulic Combination',
    weight: '12 lbs',
    strokeMetric: '75 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '40 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hydraulicPortSize: 'G3/8"',
    hiddenSearchTags: ['RAM2030', 'Air Hydraulic Brake Actuator', 'RAM Brake Cylinder', 'Diaphragm Oil Cylinder'],
    galleryUrls: ['/products/brc-brakechambers-5.jpg', '/products/brc-brakechambers-drawing-5.jpg']
  }),
  createChamber('ram2430', 'RAM2430 Air-Hydraulic Combination Brake Actuator', 'RAM 24/30', 'Service Brake', 'Standard', 42.00, {
    modelDesignation: 'RAM2430',
    mountType: 'Air-Hydraulic RAM',
    brakingMethod: 'Air-Hydraulic Combination',
    weight: '13 lbs',
    strokeMetric: '75 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '40 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-M16×1.5',
    hydraulicPortSize: 'G3/8"',
    hiddenSearchTags: ['RAM2430', 'Air Hydraulic Brake Actuator', 'RAM Brake Cylinder', 'Diaphragm Oil Cylinder'],
    galleryUrls: ['/products/brc-brakechambers-5.jpg', '/products/brc-brakechambers-drawing-5.jpg']
  }),
  createChamber('t2024-short', 'Type 20/24 Short-Rod Double Diaphragm Spring Brake Chamber', 'Type 20/24', 'Spring Brake', 'Standard', 45.00, {
    modelDesignation: 'T20/24',
    mountType: 'Short-Rod',
    brakingMethod: 'Double Diaphragm',
    weight: '16 lbs',
    strokeMetric: '60 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '37 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '15 mm',
    inletPortThreadSize: '2-M16×1.5',
    pushrodLengthMetric: '42 mm',
    hiddenSearchTags: ['S03055A', 'T2024HLM', '20/24 Brake Cylinder', 'Double Diaphragm Brake Chamber'],
    galleryUrls: ['/products/brc-brakechambers-6.jpg', '/products/brc-brakechambers-drawing-6.jpg'],
    oemPartNumbers: [
      { brand: 'Generic/Unbranded', partNumber: 'S03055A', notes: 'Original No Variant A' },
      { brand: 'Generic/Unbranded', partNumber: 'T2024HLM', notes: 'Original No Variant B' }
    ]
  }),
  createChamber('t2424-short', 'Type 24/24 Short-Rod Double Diaphragm Spring Brake Chamber', 'Type 24/24', 'Spring Brake', 'Standard', 48.00, {
    modelDesignation: 'T24/24',
    mountType: 'Short-Rod',
    brakingMethod: 'Double Diaphragm',
    weight: '17 lbs',
    strokeMetric: '60 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '37 mm',
    clevisPinDiameter: '14 mm',
    yokeClevisGapWidth: '15 mm',
    inletPortThreadSize: '2-M16×1.5',
    pushrodLengthMetric: '42 mm',
    hiddenSearchTags: ['S03037F', 'T2424HLM', '24/24 Emergency Air Pot', 'Double Diaphragm Brake Chamber'],
    galleryUrls: ['/products/brc-brakechambers-6.jpg', '/products/brc-brakechambers-drawing-6.jpg'],
    oemPartNumbers: [
      { brand: 'Generic/Unbranded', partNumber: 'S03037F', notes: 'Original No Variant A' },
      { brand: 'Generic/Unbranded', partNumber: 'T2424HLM', notes: 'Original No Variant B' }
    ]
  }),
  createChamber('t2424-mgm-spring', 'Type 24/24 Double Diaphragm Spring Brake Chamber (MGM Style)', 'Type 24/24', 'Spring Brake', 'Standard', 45.00, {
    modelDesignation: 'T24/24',
    mountType: 'MGM Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '17 lbs',
    strokeMetric: '64 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8-11" UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12.5 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-3/8" NPT',
    pushrodLengthMetric: '200 mm',
    hiddenSearchTags: ['3427051', '2424MGMSpring', 'MGM Spring Brake Canister', '24/24 Long Stroke Air Pot'],
    galleryUrls: ['/products/brc-brakechambers-7.jpg', '/products/brc-brakechambers-battery-7.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '3427051', notes: 'Direct Match' }
    ]
  }),
  createChamber('t2430-mgm-spring', 'Type 24/30 Double Diaphragm Spring Brake Chamber (MGM Style)', 'Type 24/30', 'Spring Brake', 'Standard', 48.00, {
    modelDesignation: 'T24/30',
    mountType: 'MGM Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '18 lbs',
    strokeMetric: '64 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8-11" UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12.5 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-3/8" NPT',
    pushrodLengthMetric: '200 mm',
    hiddenSearchTags: ['3429051', '2430MGMSpring', 'MGM Spring Brake Canister', 'Double Diaphragm Chamber'],
    galleryUrls: ['/products/brc-brakechambers-7.jpg', '/products/brc-brakechambers-battery-7.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '3429051', notes: 'Direct Match' }
    ]
  }),
  createChamber('t3030-mgm-spring', 'Type 30/30 Double Diaphragm Spring Brake Chamber (MGM Style)', 'Type 30/30', 'Spring Brake', 'Standard', 50.00, {
    modelDesignation: 'T30/30',
    mountType: 'MGM Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '20 lbs',
    strokeMetric: '64 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8-11" UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12.5 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-3/8" NPT',
    pushrodLengthMetric: '200 mm',
    hiddenSearchTags: ['3430051', '3030MGMSpring', '30/30 Spring Brake Pot', 'MGM Spring Brake Canister'],
    galleryUrls: ['/products/brc-brakechambers-7.jpg', '/products/brc-brakechambers-battery-7.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '3430051', notes: 'Direct Match' }
    ]
  }),
  createChamber('t3036-mgm-spring', 'Type 30/36 Double Diaphragm Spring Brake Chamber (MGM Style)', 'Type 30/36', 'Spring Brake', 'Standard', 55.00, {
    modelDesignation: 'T30/36',
    mountType: 'MGM Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '22 lbs',
    strokeMetric: '64 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8-11" UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12.5 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-3/8" NPT',
    pushrodLengthMetric: '200 mm',
    hiddenSearchTags: ['3433051', '3036MGMSpring', 'MGM Spring Brake Canister', 'Double Diaphragm Chamber'],
    galleryUrls: ['/products/brc-brakechambers-7.jpg', '/products/brc-brakechambers-battery-7.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '3433051', notes: 'Direct Match' }
    ]
  }),
  createChamber('t3636-mgm-spring', 'Type 36/36 Double Diaphragm Spring Brake Chamber (MGM Style)', 'Type 36/36', 'Spring Brake', 'Standard', 60.00, {
    modelDesignation: 'T36/36',
    mountType: 'MGM Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '24 lbs',
    strokeMetric: '76 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-5/8-11" UNC',
    mountingStudLength: '38 mm',
    clevisPinDiameter: '12.5 mm',
    yokeClevisGapWidth: '14.5 mm',
    inletPortThreadSize: '2-3/8" NPT',
    pushrodLengthMetric: '200 mm',
    hiddenSearchTags: ['3437051', '3636MGMSpring', 'MGM Spring Brake Canister', 'Double Diaphragm Chamber'],
    galleryUrls: ['/products/brc-brakechambers-7.jpg', '/products/brc-brakechambers-battery-7.jpg'],
    oemPartNumbers: [
      { brand: 'MGM', partNumber: '3437051', notes: 'Direct Match' }
    ]
  }),
  createChamber('t1624-short-stroke-spring', 'Type 16/24 Short-Stroke Double Diaphragm Spring Brake Chamber (15mm Pushrod)', 'Type 16/24', 'Spring Brake', 'Standard', 42.00, {
    modelDesignation: 'T16/24',
    mountType: 'Short-Stroke Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '15 lbs',
    strokeMetric: '57 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    sphericalRadius: 'SR8',
    inletPortThreadSize: '2-M16×1.5',
    pushrodLengthMetric: '15 mm',
    hiddenSearchTags: ['925.384.001.0', '9253840010', '1624ShortStrokeSpring', 'Short Stroke Spring Brake', 'Metric Stub Rod Maxibrake'],
    galleryUrls: ['/products/brc-brakechambers-8.jpg', '/products/brc-brakechambers-drawing-8.jpg'],
    oemPartNumbers: [
      { brand: 'Generic/Unbranded', partNumber: '925.384.001.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t2024-short-stroke-spring', 'Type 20/24 Short-Stroke Double Diaphragm Spring Brake Chamber (15mm Pushrod)', 'Type 20/24', 'Spring Brake', 'Standard', 45.00, {
    modelDesignation: 'T20/24',
    mountType: 'Short-Stroke Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '16 lbs',
    strokeMetric: '57 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '2-M16×1.5',
    mountingStudLength: '38 mm',
    sphericalRadius: 'SR8',
    inletPortThreadSize: '2-M16×1.5',
    pushrodLengthMetric: '15 mm',
    hiddenSearchTags: ['925.380.002.0', '9253800020', '2024ShortStrokeSpring', 'Short Stroke Spring Brake', 'SR8 Spherical Double Diaphragm'],
    galleryUrls: ['/products/brc-brakechambers-8.jpg', '/products/brc-brakechambers-drawing-8.jpg'],
    oemPartNumbers: [
      { brand: 'Generic/Unbranded', partNumber: '925.380.002.0', notes: 'Direct Match' }
    ]
  }),
  createChamber('t2024-japanese-flange-spring', 'Type 20/24 Japanese Style 4-Bolt Flange Double Diaphragm Spring Brake', 'Type 20/24', 'Spring Brake', 'Standard', 48.00, {
    modelDesignation: 'T20/24',
    mountType: 'Japanese Flange Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '16.5 lbs',
    strokeMetric: '57 mm',
    pilotDiameter: 'φ55',
    flangeHoleConfiguration: '4-φ10.5',
    flangeDimension: '80 mm',
    clevisPinDiameter: '36 mm',
    yokeClevisGapWidth: '20 mm',
    inletPortThreadSize: 'Z1/4"',
    bodyLength: '340 mm',
    hiddenSearchTags: ['47850-4081', '47850-4091', 'Hino Maxibrake Chamber', 'Japanese Flange Spring Brake'],
    galleryUrls: ['/products/brc-brakechambers-9.jpg', '/products/brc-brakechambers-drawing-9.jpg'],
    oemPartNumbers: [
      { brand: 'Hino/Isuzu', partNumber: '47850-4081', notes: 'Original No Variant A' },
      { brand: 'Hino/Isuzu', partNumber: '47850-4091', notes: 'Original No Variant B' }
    ]
  }),
  createChamber('t2424-japanese-flange-spring', 'Type 24/24 Japanese Style 4-Bolt Flange Double Diaphragm Spring Brake', 'Type 24/24', 'Spring Brake', 'Standard', 52.00, {
    modelDesignation: 'T24/24',
    mountType: 'Japanese Flange Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '17.5 lbs',
    strokeMetric: '57 mm',
    pilotDiameter: 'φ55',
    flangeHoleConfiguration: '4-φ10.5',
    flangeDimension: '80 mm',
    clevisPinDiameter: '36 mm',
    yokeClevisGapWidth: '20 mm',
    inletPortThreadSize: 'S Z3/8" - P Z1/4"',
    bodyLength: '340 mm',
    hiddenSearchTags: ['47850-4001', '47850-4011', '4 Bolt Flange Parking Brake Pot', '47850 Air Canister'],
    galleryUrls: ['/products/brc-brakechambers-9.jpg', '/products/brc-brakechambers-drawing-9.jpg'],
    oemPartNumbers: [
      { brand: 'Hino/Isuzu', partNumber: '47850-4001', notes: 'Original No Variant A' },
      { brand: 'Hino/Isuzu', partNumber: '47850-4011', notes: 'Original No Variant B' }
    ]
  }),
  createChamber('t2430-japanese-flange-spring', 'Type 24/30 Japanese Style 4-Bolt Flange Double Diaphragm Spring Brake', 'Type 24/30', 'Spring Brake', 'Standard', 55.00, {
    modelDesignation: 'T24/30',
    mountType: 'Japanese Flange Spring',
    brakingMethod: 'Double Diaphragm',
    weight: '19 lbs',
    strokeMetric: '76 mm',
    pilotDiameter: 'φ55',
    flangeHoleConfiguration: '4-φ10.5',
    flangeDimension: '80 mm',
    clevisPinDiameter: '36 mm',
    yokeClevisGapWidth: '20 mm',
    inletPortThreadSize: 'Z3/8"',
    bodyLength: '380 mm',
    hiddenSearchTags: ['47850-3931', 'Hino Maxibrake Chamber', 'Japanese Flange Spring Brake', '47850 Air Canister'],
    galleryUrls: ['/products/brc-brakechambers-9.jpg', '/products/brc-brakechambers-drawing-9.jpg'],
    oemPartNumbers: [
      { brand: 'Hino/Isuzu', partNumber: '47850-3931', notes: 'Direct Match' }
    ]
  }),
  createChamber('ud340-rear', 'Nissan Diesel UD340 Rear Piston-Diaphragm Brake Actuator', 'UD340 Rear', 'Service Brake', 'Standard', 65.00, {
    modelDesignation: 'UD340',
    mountType: 'Nissan UD Piston-Diaphragm',
    brakingMethod: 'Piston + Diaphragm',
    weight: '18 lbs',
    strokeMetric: '60 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '4-M16×1.5',
    mountingStudLength: '37 mm',
    clevisPinDiameter: '12 mm',
    yokeClevisGapWidth: '12 mm',
    inletPortThreadSize: '3-M16×1.5',
    bodyOffset: '50 mm',
    hiddenSearchTags: ['44320-90165', '44320-90166', 'Nissan UD Brake Chamber', '44320 Brake Pot'],
    galleryUrls: ['/products/brc-brakechambers-10.jpg', '/products/brc-brakechambers-drawing-10.jpg'],
    oemPartNumbers: [
      { brand: 'Nissan UD', partNumber: '44320-90165', notes: 'Original No Variant A' },
      { brand: 'Nissan UD', partNumber: '44320-90166', notes: 'Original No Variant B' }
    ]
  }),
  createChamber('cw520-rear', 'Nissan Diesel CW520 Rear Piston-Diaphragm Brake Actuator', 'CW520 Rear', 'Service Brake', 'Standard', 70.00, {
    modelDesignation: 'CW520',
    mountType: 'Nissan UD Piston-Diaphragm',
    brakingMethod: 'Piston + Diaphragm',
    weight: '20 lbs',
    strokeMetric: '60 mm',
    mountingBoltSpacing: '120.7 mm',
    mountingStudThread: '4-M16×1.5',
    mountingStudLength: '37 mm',
    clevisPinDiameter: '12 mm',
    yokeClevisGapWidth: '12 mm',
    inletPortThreadSize: '3-1/4" NPT',
    bodyOffset: '240 mm',
    hiddenSearchTags: ['44320-90268', 'CW520 Rear Air Chamber', 'Piston Diaphragm Brake Cylinder'],
    galleryUrls: ['/products/brc-brakechambers-10.jpg', '/products/brc-brakechambers-drawing-10.jpg'],
    oemPartNumbers: [
      { brand: 'Nissan UD', partNumber: '44320-90268', notes: 'Direct Match' }
    ]
  }),
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
