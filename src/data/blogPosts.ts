export type BlogPostCategory = 'Product Release' | 'Certification' | 'Logistics Notice' | 'Technical Guide' | 'Company News';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogPostCategory;
  date: string;
  imageUrl: string;
  readTime: string;
}

const mockHtmlContent = `
<p>In the heavy-duty commercial vehicle industry, precision, reliability, and safety are paramount. BRC Brake Chambers is committed to maintaining the highest possible standards across our global manufacturing footprint.</p>
<h2>Commitment to Quality</h2>
<p>This recent milestone reinforces our dedication to continuous improvement. The audit evaluated our entire quality management system, covering product design, manufacturing processes, testing procedures, and customer satisfaction metrics.</p>
<ul>
  <li><strong>Zero Non-Conformances:</strong> A testament to our rigorous internal auditing and the dedication of our engineering and floor staff.</li>
  <li><strong>Process Optimization:</strong> We have implemented new automated tracking systems to trace raw materials from source to finished chamber.</li>
  <li><strong>Global Standardization:</strong> All secondary facilities are currently aligning with these updated procedures to ensure uniform quality worldwide.</li>
</ul>
<p>Fleet managers depend on our actuators to perform flawlessly under extreme conditions. This recertification guarantees that every chamber leaving our facility is built to a globally recognized standard of excellence.</p>
`;

export const blogPosts: BlogPost[] = [
  {
    id: 'iso-9001-2015-recertification',
    slug: 'iso-9001-2015-recertification',
    title: 'ISO 9001:2015 Recertification Completed',
    excerpt: 'Our main manufacturing facility has successfully completed its annual ISO 9001:2015 audit with zero non-conformances.',
    content: mockHtmlContent,
    category: 'Certification',
    date: 'August 12, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read'
  },
  {
    id: 'launch-ultralife-vct-series',
    slug: 'launch-ultralife-vct-series',
    title: 'Launch of the UltraLife+ VCT Series',
    excerpt: 'Introducing the new standard in variable clocking chambers, offering fleet managers 40% reduction in installation time.',
    content: mockHtmlContent.replace('This recent milestone', 'The UltraLife+ VCT Series').replace('Zero Non-Conformances', 'Variable Clocking Technology'),
    category: 'Product Release',
    date: 'July 28, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: 'expanded-emea-distribution',
    slug: 'expanded-emea-distribution',
    title: 'Expanded EMEA Distribution Network',
    excerpt: 'To better serve our European partners, we have opened a new automated fulfillment center in Germany.',
    content: mockHtmlContent.replace('This recent milestone', 'Our new EMEA distribution center'),
    category: 'Logistics Notice',
    date: 'July 05, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    readTime: '2 min read'
  },
  {
    id: 'diagnosing-air-leaks-spring-brakes',
    slug: 'diagnosing-air-leaks-spring-brakes',
    title: 'Diagnosing Air Leaks in Combination Spring Brakes',
    excerpt: 'A comprehensive technical guide to identifying, isolating, and resolving common air leak issues in heavy-duty drum braking systems.',
    content: mockHtmlContent.replace('Commitment to Quality', 'Common Leak Points'),
    category: 'Technical Guide',
    date: 'June 18, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read'
  },
  {
    id: 'transitioning-to-air-disc-brakes',
    slug: 'transitioning-to-air-disc-brakes',
    title: 'Why Fleets Are Transitioning to Air Disc Brakes',
    excerpt: 'Analyzing the long-term ROI, maintenance benefits, and stopping distance improvements associated with ADB adoption in North America.',
    content: mockHtmlContent.replace('Commitment to Quality', 'ADB vs Drum Brakes'),
    category: 'Technical Guide',
    date: 'May 30, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 'brc-attends-commercial-vehicle-safety-alliance',
    slug: 'brc-attends-commercial-vehicle-safety-alliance',
    title: 'BRC Brake Chambers at the CVSA Annual Conference',
    excerpt: 'Join our engineering team at the upcoming Commercial Vehicle Safety Alliance conference to discuss the future of automated braking diagnostics.',
    content: mockHtmlContent.replace('Commitment to Quality', 'Event Details'),
    category: 'Company News',
    date: 'May 12, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80',
    readTime: '2 min read'
  }
];
