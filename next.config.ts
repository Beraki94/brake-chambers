/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  async redirects() {
    return [
      // Explicit manual mappings for the first 10 items
      { source: '/type-3030-standard-1', destination: '/spring-brakes/type-3030-2-12in', permanent: true },
      { source: '/type-3030-long-stroke-2', destination: '/spring-brakes/type-3030-3in', permanent: true },
      { source: '/type-2430-standard-3', destination: '/spring-brakes/type-2430-2-12in', permanent: true },
      { source: '/type-2430-long-stroke-4', destination: '/spring-brakes/type-2430-3in', permanent: true },
      { source: '/type-2024-standard-5', destination: '/spring-brakes/type-2024-2-12in', permanent: true },
      { source: '/type-30-standard-6', destination: '/service-chambers/type-30-2-12in', permanent: true },
      { source: '/type-30-long-stroke-7', destination: '/service-chambers/type-30-3in', permanent: true },
      { source: '/type-24-standard-8', destination: '/service-chambers/type-24-2-12in', permanent: true },
      { source: '/type-20-standard-9', destination: '/service-chambers/type-20-2-12in', permanent: true },
      { source: '/type-16-standard-10', destination: '/service-chambers/type-16-2-12in', permanent: true },
      
      // Consolidation Redirects
      { source: '/oem-cross-reference/interchange', destination: '/oem-cross-reference/part-search', permanent: true },
      { source: '/quality-assurance', destination: '/capabilities', permanent: true },
      
      // Suspended redirects to access application links (KEPT COMMENTED OUT FOR DEV)
      // { source: '/applications/fleet-inquiries', destination: '/capabilities/fleet-inquiries', permanent: true },
      // { source: '/applications/contract-manufacturing', destination: '/capabilities/contract-manufacturing', permanent: true },
      // { source: '/applications/custom-engineering', destination: '/capabilities/custom-engineering', permanent: true },
      
      // Accessories
      { source: '/diaphragm-type-30-rubber-diaphragm-a1', destination: '/chamber-parts-kits/diaphragm-type-30-rubber-diaphragm', permanent: true },
      { source: '/diaphragm-type-24-rubber-diaphragm-a2', destination: '/chamber-parts-kits/diaphragm-type-24-rubber-diaphragm', permanent: true },
    ];
  },
};

export default nextConfig;
