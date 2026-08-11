import React from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Factory, ShieldCheck, FlaskConical, ArrowRight, Settings, Target, CheckCircle2, Search, ArrowLeft } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const CAPABILITIES_DATA: Record<string, {
  title: string;
  category: 'Manufacturing' | 'Quality Assurance' | 'R&D and Engineering' | 'B2B Partnerships';
  description: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  benefits: string[];
}> = {
  // Manufacturing
  'production-process': {
    title: 'Production Process',
    category: 'Manufacturing',
    description: 'Our state-of-the-art lean manufacturing lines combine advanced robotics with skilled craftsmanship.',
    icon: <Factory className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          At BRC, our production process is designed for absolute precision and scalability. By integrating automated robotic welding, 5-axis CNC machining, and computer-controlled stamping, we achieve incredibly tight tolerances—down to <strong>0.001mm</strong>—on every single brake chamber that comes off the line.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Each assembly cell is organized using lean manufacturing principles. Automated torque drivers secure the non-pressure housing clamps to exactly 110 ft-lbs, eliminating the human error that leads to premature diaphragm failure.
        </p>
      </>
    ),
    benefits: ['Robotic precision welding', '0.001mm machining tolerance', 'Automated torque verification']
  },
  'facility-overview': {
    title: 'Facility Overview',
    category: 'B2B Partnerships',
    description: 'Take a look inside our ISO-certified manufacturing facilities dedicated to commercial vehicle safety.',
    icon: <Factory className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Our global manufacturing footprint spans over 500,000 square feet of dedicated production space. Designed specifically for heavy-duty commercial air brake systems, our facilities house everything from raw material processing to final assembly and packaging.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          We maintain strict environmental controls to prevent contamination during assembly, particularly for sensitive components like the main power springs and rubber diaphragms.
        </p>
      </>
    ),
    benefits: ['500,000+ sq ft of production space', 'Climate-controlled assembly', 'Vertically integrated']
  },
  'materials': {
    title: 'Material Sourcing',
    category: 'Manufacturing',
    description: 'We source only premium-grade steel, advanced polymers, and specialized rubber compounds for our components.',
    icon: <Settings className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          A brake chamber is only as strong as the materials used to build it. That is why BRC exclusively sources <strong>8-gauge structural steel</strong> for our pressure housings. This thickness prevents the "flexing" under pressure that plagues cheaper imported chambers.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Our diaphragms are constructed from a proprietary nylon-reinforced neoprene blend, tested to maintain flexibility from <strong>-40°C to +80°C</strong>. Finally, our power springs are formed from specialized high-tensile alloy steel and undergo shot-peening and epoxy coating, passing 1,000-hour ASTM B117 salt spray tests with zero corrosion.
        </p>
      </>
    ),
    benefits: ['8-gauge structural steel', 'Nylon-reinforced neoprene (-40°C)', 'Epoxy-coated alloy springs (1000hr salt spray)']
  },

  // Quality Assurance
  'iso-certifications': {
    title: 'ISO Certifications',
    category: 'Quality Assurance',
    description: 'Our operations are fully certified to ISO 9001:2015 standards, ensuring consistent, repeatable quality.',
    icon: <ShieldCheck className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Quality is not just a buzzword; it is a certified commitment. BRC facilities are proudly <strong>ISO 9001:2015 certified</strong> (Certificate No. 19385-QA), meaning our quality management systems are audited and verified by independent global authorities.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          From incoming raw material inspection via spectrographic analysis to final product sign-off, every step of our process is documented. We utilize advanced CMM (Coordinate Measuring Machine) inspections to verify dimensional accuracy for perfect OEM fitment.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors">
             <ShieldCheck className="w-4 h-4" /> Download ISO 9001:2015 Certificate (PDF)
          </a>
        </div>
      </>
    ),
    benefits: ['ISO 9001:2015 Certified', 'CMM Dimensional Auditing', 'Spectrographic Material Verification']
  },
  'testing-laboratory': {
    title: 'Testing Laboratory',
    category: 'Quality Assurance',
    description: 'In-house destructive and non-destructive testing capabilities to validate performance under extreme conditions.',
    icon: <Target className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Before any new product design hits the road, it must survive our internal testing laboratory. We subject our chambers to <strong>1,000,000-cycle endurance tests</strong> to validate the integrity of the diaphragm and return spring under repetitive load.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Every single production run is subjected to <strong>100% end-of-line testing</strong>. This includes automated pneumatic pressure holding tests at 150 PSI. If a chamber leaks even 0.01 PSI over a 60-second window, it is automatically rejected by the robotic QA gate.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors">
             <Target className="w-4 h-4" /> View Lab Test Data Sample
          </a>
        </div>
      </>
    ),
    benefits: ['1-Million Cycle Testing', '100% End-of-Line Leak Testing', '150 PSI Burst Pressure Validation']
  },
  'regulatory-compliance': {
    title: 'Regulatory Compliance',
    category: 'Quality Assurance',
    description: 'Meeting and exceeding SAE, FMVSS 121, and global commercial vehicle safety standards.',
    icon: <ShieldCheck className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Our engineering and compliance teams actively monitor the regulatory landscape to ensure every BRC product meets the stringent requirements of FMVSS 121 (Federal Motor Vehicle Safety Standards) and SAE J1469.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Whether you are operating in North America, Europe, or beyond, you can trust that our chambers provide the certified stopping power required by law.
        </p>
      </>
    ),
    benefits: ['FMVSS 121 Compliant', 'SAE J1469 Approved', 'Global Safety Standards']
  },

  // R&D and Engineering
  'custom-engineering': {
    title: 'Custom Engineering',
    category: 'R&D and Engineering',
    description: 'Collaborate with our engineering team to design custom brake actuators for specialized applications.',
    icon: <FlaskConical className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Not every application fits a standard mold. For OEMs building specialized transit buses, severe-duty mining trucks, or agricultural equipment, our in-house engineering team can develop custom brake actuation solutions.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          We handle everything from altered stroke lengths and custom mounting hardware to unique port orientations and specialized environmental coatings.
        </p>
      </>
    ),
    benefits: ['Application-specific design', 'Custom strokes & mounting', 'Specialized coatings']
  },
  'rapid-prototyping': {
    title: 'Rapid Prototyping',
    category: 'R&D and Engineering',
    description: 'Accelerate your go-to-market strategy with our in-house 3D printing and CNC prototyping capabilities.',
    icon: <Settings className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Speed is critical in OEM development. Our rapid prototyping division utilizes industrial 3D printers and 5-axis CNC machines to turn digital CAD models into physical, testable prototypes in a matter of days.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          This allows your engineering team to verify fitment and basic functionality on the chassis before committing to expensive production tooling.
        </p>
      </>
    ),
    benefits: ['Fast turnaround times', 'Physical fitment verification', 'Reduced tooling risk']
  },
  'recent-innovations': {
    title: 'Recent Innovations',
    category: 'R&D and Engineering',
    description: 'Discover how BRC is pushing the boundaries of commercial vehicle braking technology.',
    icon: <FlaskConical className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          At BRC, innovation never stops. Our recent R&D efforts have yielded significant advancements in weight reduction, utilizing high-strength composite materials for non-pressure housings to increase payload capacity.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          We are also actively developing integrated sensor technologies for real-time stroke monitoring, paving the way for the next generation of smart commercial vehicles.
        </p>
      </>
    ),
    benefits: ['Weight reduction technologies', 'Advanced composite housings', 'Smart sensor integration']
  },

  // B2B Partnerships
  'contract-manufacturing': {
    title: 'Contract & OEM Manufacturing',
    category: 'B2B Partnerships',
    description: 'White-label production of premium air brake components for industry leaders.',
    icon: <Factory className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Major brands and axle manufacturers need reliable production partners capable of scaling output without compromising strict brand quality standards. BRC serves as the backend manufacturer for several major aftermarket brands and axle OEMs, offering full white-label packaging and branding.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Our automated assembly lines and 100% pneumatic testing protocols (leak and cycle tests) ensure absolute zero-defect consistency across batches of tens of thousands of units, protecting your brand reputation.
        </p>
      </>
    ),
    benefits: ['Automated Assembly Lines', '100% Pneumatic Testing', 'White Label Packaging']
  },
  'fleet-inquiries': {
    title: 'Fleet Volume Orders',
    category: 'B2B Partnerships',
    description: 'Direct-from-manufacturer supply chain solutions for large commercial fleets.',
    icon: <Settings className="w-8 h-8" />,
    content: (
      <>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Large fleets face constant pressure to reduce operating costs while maintaining perfect safety records. Relying on middlemen distributors inflates parts budgets. Fleets need a direct line to a manufacturer that can guarantee volume availability, consistent quality, and factory pricing.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          We bypass the traditional distributor network to offer factory-direct volume pricing to major logistics and commercial fleets. Our engineering team can take your current parts list (Bendix, Haldex, Meritor) and instantly map it to our exact aftermarket equivalents.
        </p>
      </>
    ),
    benefits: ['Volume Fleet Pricing', 'Cross-Reference Database', 'Container-Level Logistics']
  }
};

export async function generateMetadata(props: { params: Promise<{ capSlug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { capSlug } = params;
  const data = CAPABILITIES_DATA[capSlug];
  if (!data) return { title: 'Not Found' };
  return {
    title: `${data.title} | ${data.category} | BRC`,
    description: data.description,
  };
}

export default async function CapabilityPage(props: { params: Promise<{ capSlug: string }> }) {
  const params = await props.params;
  const { capSlug } = params;
  const data = CAPABILITIES_DATA[capSlug];

  if (!data) {
    notFound();
  }

  // Find other items in the same category for the sidebar
  const relatedItems = Object.entries(CAPABILITIES_DATA)
    .filter(([slug, item]) => item.category === data.category && slug !== capSlug)
    .map(([slug, item]) => ({ slug, ...item }));

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      <PageHeader
        badge={data.category}
        title={data.title}
        description={data.description}
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li><Link href="/capabilities" className="hover:text-white transition-colors">Capabilities</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-amber-400 font-semibold" aria-current="page">{data.title}</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center text-amber-500 shrink-0">
                  {data.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-navy-900">Process & Execution</h2>
                  <p className="text-slate-500">How BRC delivers excellence.</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                {data.content}
              </div>

              <div className="mt-12 bg-amber-50 rounded-xl p-8 border border-amber-100">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Key Focus Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <CheckCircle2 className="w-6 h-6 text-amber-600" />
                      <span className="font-bold text-navy-900 text-sm leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="font-bold text-navy-900 text-lg mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                Explore {data.category}
              </h3>
              <ul className="space-y-2">
                {relatedItems.map((item) => (
                  <li key={item.slug}>
                    <Link 
                      href={`/capabilities/${item.slug}`}
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-navy-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-700 group-hover:text-navy-900 transition-colors">
                        {item.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 text-center shadow-xl border border-navy-800">
              <h3 className="text-2xl font-bold text-white mb-3">Partner With Us</h3>
              <p className="text-navy-200 text-sm mb-6">
                Looking for a direct manufacturer for your OEM project or fleet volume needs?
              </p>
              <Link 
                href="/contact" 
                className="block w-full bg-amber-500 text-navy-900 font-bold py-3 px-4 rounded-xl hover:bg-amber-400 transition-colors shadow-lg"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>

        </div>
      </div>
      <BreadcrumbSchema items={[{ name: 'Capabilities', item: '/capabilities' }, { name: data.title }]} />
    </div>
  );
}
