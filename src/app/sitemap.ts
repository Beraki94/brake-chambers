import { MetadataRoute } from 'next';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.brcbrakechambers.com';

  // Base routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/quote',
    '/company',
    '/company/iatf-certifications',
    '/company/brake-testing-lab',
    '/company/brake-r-and-d',
    '/company/manufacturing-process',
    '/company/production-facility',
    '/company/material-sourcing',
    '/company/leadership',
    '/company/our-story',
    '/spring-brake-chambers',
    '/service-brake-chambers',
    '/air-disc-brake-actuators',
    '/parts-and-kits',
    '/distributors',
    '/oem-cross-reference',
    '/technical-resources',
    '/applications',
    '/privacy',
    '/terms',
    '/warranty',
    '/shipping',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Spring Brakes Categories
  const springBrakeCategories = [
    'type-30-30',
    'type-24-30',
    'standard-stroke',
    'long-stroke',
    'welded-clevis'
  ].map((slug) => ({
    url: `${baseUrl}/spring-brake-chambers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Service Chambers Categories
  const serviceChamberCategories = [
    'type-30',
    'type-24',
    'type-20',
    'type-16'
  ].map((slug) => ({
    url: `${baseUrl}/service-brake-chambers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Chamber Parts Categories
  const partCategories = [
    'diaphragms',
    'caging-bolts',
    'clamp-bands',
    'slack-adjusters'
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

  return [
    ...routes,
    ...springBrakeCategories,
    ...serviceChamberCategories,
    ...partCategories,
    ...springBrakes,
    ...serviceChambers,
    ...accessories,
    ...oemCrossReferenceHubs,
  ];
}
