import { MetadataRoute } from 'next';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.brcbrakechambers.com';

  // Base routes
  const routes = [
    '',
    '/contact',
    '/quote',
    '/our-story',
    '/distributors',
    '/privacy',
    '/terms',
    '/warranty',
    '/shipping',
    '/blog',
    '/applications',
    '/technical-resources',
    
    // Manufacturing Hub
    '/manufacturing',
    '/manufacturing/process',
    '/manufacturing/material-sourcing',
    '/manufacturing/quality-assurance',
    '/manufacturing/research-development',
    '/manufacturing/custom-oem',
    '/manufacturing/private-label',
    '/manufacturing/high-volume-orders',
    
    // Top-level categories
    '/spring-brake-chambers',
    '/service-brake-chambers',
    '/air-disc-brake-actuators',
    '/parts-and-kits',
    
    // OEM Hub
    '/oem-cross-reference',
    '/oem-cross-reference/bulk-inquiries',
    '/oem-cross-reference/database',
    '/oem-cross-reference/request',
    '/oem-cross-reference/visual-guide',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Spring Brakes Categories
  const springBrakeCategories = [
    'commercial-trailer',
    'heavy-duty-truck',
    'oem-replacement',
    'severe-duty'
  ].map((slug) => ({
    url: `${baseUrl}/spring-brake-chambers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Service Chambers Categories
  const serviceChamberCategories = [
    'drive-axle',
    'steer-axle',
    'trailer-axle',
    'transit-bus'
  ].map((slug) => ({
    url: `${baseUrl}/service-brake-chambers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));
  
  // ADB Categories
  const adbCategories = [
    'high-temp-adb',
    'trailer-adb',
    'truck-adb'
  ].map((slug) => ({
    url: `${baseUrl}/air-disc-brake-actuators/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Chamber Parts Categories
  const partCategories = [
    'mounting-hardware',
    'repair-kits',
    'replacement-rubber'
  ].map((slug) => ({
    url: `${baseUrl}/parts-and-kits/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Products - Spring Brakes
  const springBrakes = BRAKE_CHAMBERS.filter(c => c.category === 'Spring Brake').map((product) => ({
    url: `${baseUrl}/spring-brake-chambers/${product.slug}`,
    lastModified: new Date(product.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Products - Service Chambers
  const serviceChambers = BRAKE_CHAMBERS.filter(c => c.category === 'Service Brake').map((product) => ({
    url: `${baseUrl}/service-brake-chambers/${product.slug}`,
    lastModified: new Date(product.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Products - Accessories
  const accessories = BRAKE_ACCESSORIES.map((product) => ({
    url: `${baseUrl}/parts-and-kits/${product.slug}`,
    lastModified: new Date(product.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // OEM Cross Reference Granular Hubs
  const oemBrands = ['bendix', 'meritor', 'haldex', 'wabco', 'zf-wabco', 'knorr-bremse', 'sorl', 'mgm', 'automann', 'dexter', 'tse', 'tse-brakes'];
  const oemCategories = [
    '', // Main hub
    '-spring-brake-chambers',
    '-service-brake-chambers',
    '-air-disc-brake-actuators'
  ];
  
  const oemCrossReferenceHubs = oemBrands.flatMap(brand => 
    oemCategories.map(cat => ({
      url: `${baseUrl}/oem-cross-reference/${brand}${cat}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: cat === '' ? 0.9 : 0.8,
    }))
  );

  // Technical Resource Pages
  const technicalResources = [
    'installation',
    'caging',
    'size-charts',
    'stroke-length',
    'selection-guides',
    'identification',
  ].map((slug) => ({
    url: `${baseUrl}/technical-resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...routes,
    ...springBrakeCategories,
    ...serviceChamberCategories,
    ...adbCategories,
    ...partCategories,
    ...springBrakes,
    ...serviceChambers,
    ...accessories,
    ...oemCrossReferenceHubs,
    ...technicalResources,
  ];
}
