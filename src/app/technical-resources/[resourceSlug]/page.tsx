import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ShieldCheck, Ruler, FileText, Download, AlertTriangle, CheckCircle2, Settings, Wrench, ChevronRight, Video, FileCog, ShieldAlert, Cpu } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const TECHNICAL_RESOURCES_DATA: Record<string, any> = {
  // Installation & Maint.
  'installation': {
    title: 'Installation Guides',
    category: 'Installation & Maint.',
    description: 'Step-by-step installation instructions for standard and long-stroke air brake chambers.',
    icon: <Wrench className="w-6 h-6 text-blue-500" />,
    content: 'Proper installation is critical to the performance and safety of air brake chambers. Our comprehensive guides cover torquing specifications, mounting bracket alignment, and air line routing.',
    bullets: [
      'Pre-installation inspection checklist',
      'Mounting stud torque specifications (typically 100-115 ft-lbs for 5/8-11 studs)',
      'Air line connection and testing protocols',
      'Pushrod cutting and clevis attachment procedures'
    ],
    download: { name: 'Complete Installation Manual', size: '2.4 MB' }
  },
  'maintenance': {
    title: 'Maintenance Schedules',
    category: 'Installation & Maint.',
    description: 'Recommended preventive maintenance intervals to maximize fleet uptime and safety.',
    icon: <Settings className="w-6 h-6 text-blue-500" />,
    content: 'Routine maintenance prevents catastrophic failures on the road. BRC recommends a strict inspection schedule based on mileage and operating environment.',
    bullets: [
      'Daily pre-trip visual inspections (check for physical damage or loose hardware)',
      'Monthly operational checks (leak down tests, stroke measurement)',
      'Annual detailed inspections (checking for internal contamination, corrosion)',
      'Replacement intervals for severe duty vs. standard linehaul'
    ]
  },
  'troubleshooting': {
    title: 'Troubleshooting Guides',
    category: 'Installation & Maint.',
    description: 'Diagnose common pneumatic and mechanical issues in heavy-duty brake systems.',
    icon: <AlertTriangle className="w-6 h-6 text-primary-500" />,
    content: 'Quickly identify the root cause of brake drag, slow release times, air leaks, or uneven braking force across axles.',
    bullets: [
      'Diagnosing service chamber air leaks (center seal vs. diaphragm)',
      'Identifying causes of slow brake release (crimped lines, weak return springs)',
      'Troubleshooting parking brake failures to engage',
      'Isolating ABS valve issues from mechanical chamber faults'
    ],
    download: { name: 'Diagnostic Flowchart', size: '1.2 MB' }
  },
  'caging': {
    title: 'Safe Caging Procedures',
    category: 'Installation & Maint.',
    description: 'Critical safety procedures for manually caging spring brake chambers during maintenance.',
    icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
    content: 'WARNING: Spring brake chambers contain a tightly coiled power spring under extreme tension. Improper caging can result in serious injury or death. Always follow strict mechanical caging procedures before attempting to remove or service a chamber.',
    bullets: [
      'Always chock vehicle wheels before releasing parking brakes',
      'Locate the caging bolt and nut in the side pocket of the chamber',
      'Remove dust plug and insert the caging bolt into the rear housing',
      'Engage the T-slot securely into the pressure plate',
      'Tighten the nut to manually compress the power spring (do not over-torque)'
    ],
    download: { name: 'Caging Safety Poster', size: '3.1 MB' }
  },

  // Specifications & Sizing
  'size-charts': {
    title: 'Size & Dimension Charts',
    category: 'Specifications & Sizing',
    description: 'Comprehensive dimension tables for Type 12 through Type 36 service and spring brakes.',
    icon: <Ruler className="w-6 h-6 text-success-500" />,
    content: 'Ensure proper fitment by verifying the exact outside diameter (OD), overall length, and stud spacing for all BRC chamber sizes. All dimensions strictly adhere to industry standard SAE J1469 protocols.',
    bullets: [
      'Type 20/24 dimensions and pushrod thread specs',
      'Type 30/30 standard vs. long-stroke (LS) dimensions',
      'Piggyback kit dimensions for quick yard maintenance',
      'Air disc brake (ADB) actuator sizing'
    ],
    download: { name: 'Full Dimension Catalog', size: '5.5 MB' }
  },
  'stroke-length': {
    title: 'Stroke Length Guide',
    category: 'Specifications & Sizing',
    description: 'Understanding standard vs. long-stroke limits and legal DOT out-of-service criteria.',
    icon: <Ruler className="w-6 h-6 text-success-500" />,
    content: 'Stroke length determines the operating limit of your brakes. BRC produces both standard and long-stroke chambers. It is critical to match the stroke type to your slack adjusters and vehicle specifications.',
    bullets: [
      'Standard Stroke limits (e.g., 2.0" limit for Type 30)',
      'Long-Stroke limits (e.g., 2.5" limit for Type 30 LS)',
      'Identifying LS chambers (square ports, trapezoidal tags, custom embossing)',
      'Calculating reserve stroke for DOT compliance'
    ]
  },
  'pushrod': {
    title: 'Pushrod Calculations',
    category: 'Specifications & Sizing',
    description: 'Formulas and guides for cutting pushrods to the exact length required for your chassis.',
    icon: <FileCog className="w-6 h-6 text-success-500" />,
    content: 'Incorrect pushrod length alters the angle of the slack adjuster, significantly reducing braking force and causing premature wear. Follow our calculation guides to ensure a perfect 90-degree angle upon brake application.',
    bullets: [
      'Measuring from the mounting face to the center of the clevis pin',
      'Thread engagement minimums for structural integrity',
      'Welded clevis vs. threaded clevis considerations',
      'Tools required for safe and accurate cutting'
    ]
  },
  'port-threads': {
    title: 'Air Port Thread Sizes',
    category: 'Specifications & Sizing',
    description: 'Standardization guide for NPTF and metric pneumatic port threads.',
    icon: <Settings className="w-6 h-6 text-success-500" />,
    content: 'Avoid cross-threading and air leaks by correctly identifying the pneumatic port threads on your chambers. We offer various thread standards depending on the geographic market and OEM requirement.',
    bullets: [
      'Standard 3/8-18 NPTF ports (North American standard)',
      'M16x1.5 metric ports (European and global standard)',
      'M22 port configurations for specific transit applications',
      'Recommended Teflon tape/sealant application practices'
    ]
  },

  // Safety & Compliance
  'cvsa': {
    title: 'CVSA Out-of-Service Criteria',
    category: 'Safety & Compliance',
    description: 'Guide to the Commercial Vehicle Safety Alliance (CVSA) brake inspection standards.',
    icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
    content: 'Brake violations are the leading cause of CVSA Out-of-Service (OOS) orders. Stay compliant by understanding exactly what inspectors look for during roadside Level I inspections.',
    bullets: [
      '20% defective brake rule explanation',
      'Stroke measurement procedures and limits',
      'Criteria for cracked housings, missing dust plugs, or loose hardware',
      'Audible air leak thresholds'
    ]
  },
  'fmvss-121': {
    title: 'FMVSS 121 Standards',
    category: 'Safety & Compliance',
    description: 'Federal Motor Vehicle Safety Standard 121 compliance overview for air brake systems.',
    icon: <FileText className="w-6 h-6 text-purple-500" />,
    content: 'FMVSS 121 governs the performance and safety requirements for air-braked vehicles in the United States. All BRC chambers are tested and certified to meet or exceed these rigorous federal standards.',
    bullets: [
      'Pneumatic timing and volumetric requirements',
      'Emergency braking system actuation times',
      'Parking brake holding force mandates on 20% grades',
      'Anti-lock braking system (ABS) compatibility'
    ]
  },
  'spring-brake-safety': {
    title: 'Spring Brake Safety Warnings',
    category: 'Safety & Compliance',
    description: 'Critical warnings regarding the handling and disposal of spring brake chambers.',
    icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
    content: 'Due to the immense stored energy in the parking power spring, spring brakes are inherently dangerous if tampered with. BRC employs tamper-evident crimped housings to prevent unauthorized disassembly.',
    bullets: [
      'Never attempt to cut open or un-crimp the rear housing',
      'Disarming procedures for scrap and disposal (via gas torch or specialized cages)',
      'Identifying signs of structural fatigue or imminent failure',
      'Proper handling during transit to prevent denting the pressure vessel'
    ]
  },
  'warranty': {
    title: 'Warranty Information',
    category: 'Safety & Compliance',
    description: 'Details on BRC\'s comprehensive warranty coverage for commercial fleets and OEMs.',
    icon: <CheckCircle2 className="w-6 h-6 text-purple-500" />,
    content: 'We stand behind our manufacturing. BRC offers industry-leading warranties against defects in materials and workmanship, ensuring your fleet operations remain uninterrupted and cost-effective.',
    bullets: [
      'Standard 3-year / 300,000-mile warranty for linehaul applications',
      '1-year severe duty warranty (refuse, off-highway)',
      'Claims process and RMA documentation',
      'Conditions that void warranty (improper cutting, tampering, unauthorized modifications)'
    ],
    download: { name: 'Full Warranty Policy PDF', size: '400 KB' }
  },

  // Engineering & Training
  'cad-models': {
    title: 'CAD Models & 3D Files',
    category: 'Engineering & Training',
    description: 'Downloadable STEP and IGES files for chassis engineers and suspension designers.',
    icon: <Cpu className="w-6 h-6 text-primary-500" />,
    content: 'Integrate BRC actuators directly into your digital twin. We provide highly accurate 3D CAD models of our entire product line to assist OEMs with clearance testing and bracket design.',
    bullets: [
      'Type 16 through Type 36 3D models',
      'Air Disc Brake (ADB) actuator models',
      'Custom pushrod length configurator models',
      'Mounting envelope and dynamic clearance zones'
    ],
    download: { name: 'Request CAD Library Access', size: 'Portal Link' }
  },
  'material-specs': {
    title: 'Material Specifications',
    category: 'Engineering & Training',
    description: 'Metallurgical data and rubber compound properties used in BRC chambers.',
    icon: <FileCog className="w-6 h-6 text-primary-500" />,
    content: 'Our durability stems from our materials. Review the exact metallurgical specifications of our housings and the chemical properties of our synthetic elastomers.',
    bullets: [
      '8-gauge and 9-gauge steel housing tensile strengths',
      'Epoxy-coated power spring fatigue resistance data',
      'Diaphragm ozone and cold-weather resistance (-40°C to +80°C)',
      'Corrosion salt-spray test results (ASTM B117)'
    ]
  },
  'video-tutorials': {
    title: 'Video Training Library',
    category: 'Engineering & Training',
    description: 'Visual step-by-step guides for mechanics and fleet maintenance managers.',
    icon: <Video className="w-6 h-6 text-primary-500" />,
    content: 'Sometimes it is easier to watch a professional. Our video library covers everything from basic pushrod cutting to advanced diagnostic techniques, designed specifically for shop mechanics.',
    bullets: [
      'How to safely cage a spring brake (2 min)',
      'Installing a piggyback kit to save time (5 min)',
      'Measuring stroke length for DOT compliance (3 min)',
      'Diagnosing internal air leaks (4 min)'
    ]
  },
  'whitepapers': {
    title: 'Engineering Whitepapers',
    category: 'Engineering & Training',
    description: 'In-depth research on braking dynamics, thermal efficiency, and next-gen actuators.',
    icon: <FileText className="w-6 h-6 text-primary-500" />,
    content: 'Stay ahead of industry trends. Our R&D team regularly publishes whitepapers on the future of commercial vehicle braking, including smart sensors, weight reduction, and thermal management.',
    bullets: [
      'The Impact of High-Temp Elastomers in Refuse Applications',
      'Transitioning to Air Disc Brakes: ROI Analysis for Fleets',
      'Preventing Internal Corrosion: The Role of Sealed Breathing',
      'Next-Gen E-Mobility: Actuators for Electric Commercial Vehicles'
    ],
    download: { name: 'Download Whitepaper Bundle', size: '8.2 MB' }
  }
};

export async function generateMetadata(props: { params: Promise<{ resourceSlug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { resourceSlug } = params;
  const data = TECHNICAL_RESOURCES_DATA[resourceSlug];
  
  if (!data) return { title: 'Resource Not Found' };
  
  return {
    title: `${data.title} | Technical Resources | BRC`,
    description: data.description,
  };
}

export default async function TechnicalResourcePage(props: { params: Promise<{ resourceSlug: string }> }) {
  const params = await props.params;
  const { resourceSlug } = params;
  const data = TECHNICAL_RESOURCES_DATA[resourceSlug];

  if (!data) {
    notFound();
  }

  // Find other items in the same category for the sidebar navigation
  const relatedItems = Object.entries(TECHNICAL_RESOURCES_DATA)
    .filter(([slug, item]) => item.category === data.category && slug !== resourceSlug)
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
              <li><Link href="/technical-resources" className="hover:text-white transition-colors">Technical Resources</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-primary-400 font-semibold" aria-current="page">{data.title}</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-grow space-y-12">
            
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 border-b border-slate-100 pb-4">Overview</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                {data.content}
              </p>

              <h3 className="text-xl font-bold text-navy-900 mb-4">Key Information</h3>
              <ul className="space-y-4">
                {data.bullets.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Download CTA */}
            {data.download && (
              <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-3xl p-8 shadow-xl border border-navy-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Related Document</h3>
                  <p className="text-navy-200">{data.download.name} ({data.download.size})</p>
                </div>
                <button className="shrink-0 bg-primary-500 hover:bg-primary-400 text-navy-900 font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" /> Download Now
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-navy-900 mb-6 font-heading border-b border-slate-100 pb-4">
                More in {data.category}
              </h3>
              <div className="space-y-3">
                {relatedItems.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/technical-resources/${item.slug}`}
                    className="group block p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-600 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="font-bold text-navy-900 text-sm mb-2">Need Technical Support?</h4>
                <p className="text-xs text-slate-500 mb-4">Our engineering team is ready to assist with custom calculations and fitment issues.</p>
                <Link href="/contact" className="w-full block text-center bg-navy-900 text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-navy-800 transition-colors">
                  Contact Engineering
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
