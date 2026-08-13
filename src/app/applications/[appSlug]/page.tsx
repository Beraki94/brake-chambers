import React from 'react';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ShieldAlert, Cpu, PenTool, Wrench, PackagePlus, HardHat, Cog, AlertTriangle, ArrowLeft, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const APPLICATION_DATA: Record<string, any> = {
  'commercial-linehaul': {
    title: 'Commercial Linehaul Applications',
    desc: 'Engineered for extreme mileage, fuel efficiency, and long-term reliability on the open highway.',
    keywords: ['commercial linehaul air brakes', 'linehaul truck brake chambers', 'class 8 truck brakes', 'highway truck air brakes', 'long haul fleet brakes'],
    faqs: [
      { q: 'What is the recommended replacement interval for linehaul brake chambers?', a: 'For maximum safety on the open highway, we recommend inspecting linehaul chambers every 25,000 miles and replacing standard units every 3-4 years depending on operating environment.' },
      { q: 'Do you offer sealed chambers for winter driving?', a: 'Yes, our corrosion-resistant line features advanced powder coating and fully sealed breathing designs to prevent internal rust from winter road salts.' }
    ],
    bgStyle: 'from-blue-900 to-navy-950',
    accent: 'text-blue-500',
    challenge: {
      title: 'The Endurance Challenge',
      desc: 'Linehaul trucks demand maximum uptime. Operating at highway speeds for extended periods subjects brakes to continuous vibration and thermal cycling. The primary goal is reducing maintenance intervals while ensuring failsafe performance across vast distances.'
    },
    technologies: [
      { name: 'Extended Life Diaphragms', desc: 'Premium rubber compounds formulated to resist fatigue over millions of highway miles.', icon: <Cog className="w-6 h-6" /> },
      { name: 'Corrosion-Resistant Housing', desc: 'Advanced powder coating prevents rust from winter road salts and chemical de-icers.', icon: <ShieldAlert className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Standard Type 30/30 Spring Brakes', desc: 'The backbone of linehaul stopping power.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Air Disc Brake Actuators', desc: 'For modern fleets optimizing for shorter stopping distances.', link: '/air-disc-actuators/type-20-24-air-disc-actuators' }
    ]
  },
  'heavy-duty-freight': {
    title: 'Heavy-Duty Commercial Freight Solutions',
    desc: 'The backbone of the global supply chain demands absolute reliability and extreme mileage endurance.',
    keywords: ['heavy duty freight brakes', 'commercial freight air brakes', 'class 8 freight brake chambers', 'heavy duty truck air brakes'],
    faqs: [
      { q: 'How do your chambers handle continuous heavy payloads?', a: 'Our heavy-duty chambers utilize 8-gauge steel housings and high-tensile power springs designed specifically to prevent fatigue under continuous maximum-capacity payloads.' },
      { q: 'Are these compatible with standard ABS systems?', a: 'Yes, all our commercial freight chambers are fully compatible with modern ABS and stability control systems without any modification.' }
    ],
    bgStyle: 'from-blue-900 to-navy-950',
    accent: 'text-blue-500',
    challenge: {
      title: 'The Over-The-Road Challenge',
      desc: 'Class 8 commercial vehicles log hundreds of thousands of miles annually across varied climates and load weights. The primary challenge is fatigue—specifically, the repeated vibration and exposure to corrosive road salts that degrade standard brake housings and weaken power springs.'
    },
    technologies: [
      { name: '8-Gauge Steel Housings', desc: 'Resists rock strikes and vibration fatigue better than standard 9-gauge competitors.', icon: <ShieldAlert className="w-6 h-6" /> },
      { name: 'Epoxy-Coated Springs', desc: 'Prevents the microscopic rust pitting that leads to premature spring snapping.', icon: <Cog className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Long Stroke Spring Brake', desc: 'The industry standard for drive axles, providing massive holding power.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Type 20 Steer Axle Chamber', desc: 'Compact footprint with rapid response for steer axle modulation.', link: '/service-chambers/type-20-steer-axle-brake-chambers' },
      { name: 'Truck Air Disc Actuators', desc: 'For modern fleets transitioning to ADB systems for shorter stopping distances.', link: '/air-disc-actuators/type-24-24-adb-chambers' }
    ]
  },
  'regional-delivery': {
    title: 'Regional Delivery Solutions',
    desc: 'Optimized for the high-frequency stop-and-go cycles of urban and suburban distribution networks.',
    keywords: ['regional delivery truck brakes', 'box truck air brakes', 'delivery fleet brake chambers', 'medium duty truck brakes', 'stop and go brakes'],
    faqs: [
      { q: 'Why do regional delivery trucks experience more brake wear?', a: 'Regional delivery involves constant stop-and-go traffic, meaning the brake chambers compress and release exponentially more times per day than a linehaul truck, accelerating center seal wear.' },
      { q: 'Can I replace just the parking spring section?', a: 'Yes, for fast yard maintenance, we highly recommend our pre-caged piggyback kits which allow mechanics to swap the power spring without dismounting the entire housing.' }
    ],
    bgStyle: 'from-blue-900 to-navy-950',
    accent: 'text-blue-500',
    challenge: {
      title: 'The Stop-and-Go Challenge',
      desc: 'Regional delivery vehicles experience significantly more braking cycles per mile than linehaul trucks. This frequent actuation accelerates wear on pushrods, return springs, and center seals, requiring chambers built for high-cycle endurance rather than just static highway rolling.'
    },
    technologies: [
      { name: 'Reinforced Center Seals', desc: 'Prevents air leakage between the parking and service chambers during frequent actuation.', icon: <Wrench className="w-6 h-6" /> },
      { name: 'High-Tensile Return Springs', desc: 'Engineered to maintain tension over millions of rapid compression cycles.', icon: <Cog className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Type 24/30 Spring Brakes', desc: 'Ideal for medium-duty delivery chassis requiring reliable stopping power.', link: '/spring-brakes/24-30-24-24-spring-brakes' },
      { name: 'Piggyback Kits', desc: 'Enables quick yard maintenance without fully replacing the chamber housing.', link: '/chamber-parts-kits/type-30-30-piggyback-kits' }
    ]
  },
  'refuse-sanitation': {
    title: 'Refuse & Sanitation Trucks',
    desc: 'Engineered for the most punishing high-cycle braking environments in the commercial sector.',
    keywords: ['refuse truck air brakes', 'garbage truck brake chambers', 'sanitation truck brakes', 'high temp brake chambers', 'severe duty air brakes'],
    faqs: [
      { q: 'Do you make chambers that can withstand landfill debris?', a: 'Absolutely. Our severe-duty chambers feature double-plated steel housings to resist heavy rock strikes and reinforced dust booting to keep abrasive landfill mud out of the pushrod mechanism.' },
      { q: 'How do you handle the extreme heat of refuse collection?', a: 'Refuse trucks generate massive radiant heat from 1,000+ stops a day. We use high-temp elastomers and advanced rubber compounds that maintain their integrity under conditions that would melt standard diaphragms.' }
    ],
    bgStyle: 'from-primary-900 to-navy-950',
    accent: 'text-primary-500',
    challenge: {
      title: 'The High-Cycle Heat Challenge',
      desc: 'Refuse vehicles are the ultimate test of a brake chamber. Executing over 1,000 stops per day in urban environments generates massive heat, causing standard diaphragms to melt or fatigue. Additionally, navigating landfills exposes the undercarriage to debris strikes and abrasive mud.'
    },
    technologies: [
      { name: 'High-Temp Elastomers', desc: 'Specialized rubber compounds that maintain integrity even under extreme radiant heat from the drum.', icon: <AlertTriangle className="w-6 h-6" /> },
      { name: 'Reinforced Dust Booting', desc: 'Prevents abrasive landfill dust from entering the housing and scoring the push rod.', icon: <HardHat className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Severe-Duty Spring Brakes', desc: 'Built with double-plated housings to survive rock and debris strikes.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'High-Temp Air Disc Actuators', desc: 'Designed to handle the extreme heat generation of frequent-stop operations.', link: '/air-disc-actuators/type-24-30-air-disc-brake-actuators' }
    ]
  },
  'off-highway-mining': {
    title: 'Off-Highway & Mining',
    desc: 'Surviving in environments where pavement ends and extreme payloads begin.',
    keywords: ['mining truck air brakes', 'off highway brake chambers', 'heavy construction air brakes', 'severe duty parking brakes', 'dump truck brake chambers'],
    faqs: [
      { q: 'Are these chambers suited for steep unpaved grades?', a: 'Yes, our Type 30/30 and 36/36 severe-duty spring brakes provide the massive clamping force required to hold fully loaded mining and construction vehicles on severe inclines.' },
      { q: 'How do you prevent mud from entering the chamber?', a: 'Our off-highway units feature fully sealed internal breathing mechanisms rather than exposed weep holes, preventing mud and slurry from infiltrating the spring housing.' }
    ],
    bgStyle: 'from-primary-900 to-navy-950',
    accent: 'text-primary-500',
    challenge: {
      title: 'The Extreme Environment Challenge',
      desc: 'Mining, logging, and heavy construction equipment operates in the harshest conditions on Earth. Massive asymmetrical loads on steep, unpaved grades require extreme parking brake clamping force. The chambers are constantly bombarded by rocks, deep mud, and corrosive elements.'
    },
    technologies: [
      { name: 'Double-Plated Steel', desc: 'Extra thick dual-layer steel construction specifically to resist heavy rock strikes.', icon: <HardHat className="w-6 h-6" /> },
      { name: 'Fully Sealed Breathing', desc: 'Internal breathing mechanisms that prevent mud and slurry from entering the chamber.', icon: <ShieldAlert className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Spring Brakes', desc: 'Massive holding power for steep grade parking with heavy payloads.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Mounting Hardware', desc: 'Heavy-gauge caging bolts and clevises that won\'t shear under load.', link: '/chamber-parts-kits/clevis-pins-slack-adjuster-hardware' }
    ]
  },
  'agricultural-transport': {
    title: 'Agricultural Transport Solutions',
    desc: 'Built to withstand seasonal extreme loads, unpaved terrain, and heavy dust environments.',
    keywords: ['agricultural truck brakes', 'grain trailer air brakes', 'farm equipment brake chambers', 'hopper bottom trailer brakes'],
    faqs: [
      { q: 'Do these chambers corrode during winter storage?', a: 'Our agricultural chambers feature weather-sealed housings and advanced epoxy coatings designed specifically to prevent internal corrosion during long off-season dormancy periods.' },
      { q: 'Can they handle the twist of soft field terrain?', a: 'Yes, we utilize welded clevis designs and heavy-duty pushrods to withstand the immense torsional forces generated when maneuvering fully loaded grain trailers through soft fields.' }
    ],
    bgStyle: 'from-primary-900 to-navy-950',
    accent: 'text-primary-500',
    challenge: {
      title: 'The Harvest Season Challenge',
      desc: 'Agricultural transport features unique operational extremes: months of dormancy followed by intense, non-stop usage during harvest. Equipment operates in highly abrasive dust, mud, and corrosive fertilizer environments while hauling maximum payloads from field to processor.'
    },
    technologies: [
      { name: 'Weather-Sealed Housings', desc: 'Prevents internal corrosion during long off-season storage periods.', icon: <ShieldAlert className="w-6 h-6" /> },
      { name: 'Heavy-Duty Pushrods', desc: 'Machined to withstand the immense torsional forces of maneuvering fully loaded trailers in soft fields.', icon: <Wrench className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Long Stroke Spring Brakes', desc: 'Provides the extra pushrod travel necessary for heavy agricultural loads.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Welded Clevis Chambers', desc: 'Ensures absolute rigidity in high-stress field conditions.', link: '/service-chambers/welded-clevis-brake-chambers' }
    ]
  },
  'transit-coach-bus': {
    title: 'Transit & Coach Buses',
    desc: 'Precision modulation and failsafe reliability for passenger transport.',
    keywords: ['transit bus air brakes', 'coach bus brake chambers', 'city bus brake actuators', 'passenger transport air brakes'],
    faqs: [
      { q: 'How do you ensure smooth braking for passengers?', a: 'We use precision-machined push rods and linear response diaphragms that eliminate binding. This ensures perfectly smooth, predictable pressure application to prevent harsh jerking motions.' },
      { q: 'Are these rated for the high cycle count of city transit?', a: 'Yes. City transit buses stop thousands of times a day. We use high-tensile return springs specifically engineered to withstand millions of compression cycles without losing tension.' }
    ],
    bgStyle: 'from-success-900 to-navy-950',
    accent: 'text-success-500',
    challenge: {
      title: 'The Smooth Modulation Challenge',
      desc: 'When transporting passengers, harsh or unpredictable braking is unacceptable. Transit buses require highly sensitive service chambers that provide smooth, linear force modulation. Furthermore, the frequent stops subject the return springs to massive cycle fatigue.'
    },
    technologies: [
      { name: 'Precision-Machined Push Rods', desc: 'Ensures zero-bind operation for perfectly smooth brake pad engagement.', icon: <Cpu className="w-6 h-6" /> },
      { name: 'High-Tensile Return Springs', desc: 'Designed to withstand millions of compression cycles without losing tension.', icon: <Cog className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Transit Service Chambers', desc: 'Specialized for high-frequency urban stop-and-go driving.', link: '/service-chambers/type-12-16-24-service-chambers' },
      { name: 'Steer Axle Chambers', desc: 'Rapid response Type 20/24 chambers for precise driver control.', link: '/service-chambers/type-20-steer-axle-brake-chambers' }
    ]
  },
  'school-buses': {
    title: 'School Bus Braking Systems',
    desc: 'Uncompromising safety, strict DOT compliance, and consistent reliability for student transport.',
    keywords: ['school bus air brakes', 'school bus brake chambers', 'DOT compliant bus brakes', 'type 24/30 bus brakes', 'failsafe spring brakes'],
    faqs: [
      { q: 'Are your school bus chambers DOT compliant?', a: 'Yes, all our chambers meet or exceed FMVSS 121 regulations, providing guaranteed immediate mechanical lock-up in the event of air loss for ultimate student safety.' },
      { q: 'How do you prevent improper maintenance?', a: 'We utilize tamper-evident construction on the sealed parking spring housing, ensuring chambers are not improperly modified by untrained personnel.' }
    ],
    bgStyle: 'from-success-900 to-navy-950',
    accent: 'text-success-500',
    challenge: {
      title: 'The Ultimate Safety Challenge',
      desc: 'School buses carry the most valuable cargo in the world. Braking systems must be completely failsafe, highly responsive, and strictly compliant with federal and state regulations. The stop-and-go nature of residential routes also demands exceptional component durability.'
    },
    technologies: [
      { name: 'Failsafe Spring Design', desc: 'Engineered to guarantee immediate mechanical lock-up in the event of air loss.', icon: <ShieldAlert className="w-6 h-6" /> },
      { name: 'Tamper-Evident Construction', desc: 'Ensures chambers are not improperly modified, maintaining strict fleet safety compliance.', icon: <Wrench className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Type 24/30 Spring Brakes', desc: 'The trusted standard for school bus drive axles.', link: '/spring-brakes/24-30-24-24-spring-brakes' },
      { name: 'Premium Replacement Diaphragms', desc: 'Essential for maintaining peak safety during routine fleet inspections.', link: '/chamber-parts-kits/brake-chamber-diaphragms' }
    ]
  },
  'shuttle-fleets': {
    title: 'Shuttle & Paratransit Fleets',
    desc: 'Quiet operation, smooth engagement, and dependable service for medium-duty transport.',
    keywords: ['shuttle bus air brakes', 'paratransit brake chambers', 'airport shuttle brakes', 'medium duty passenger brakes'],
    faqs: [
      { q: 'Can you eliminate brake rattle on smaller shuttles?', a: 'Yes, our shuttle-specific chambers utilize internal noise-dampening materials designed to eliminate spring rattle and operational noise that passengers find disruptive.' },
      { q: 'What size chambers do shuttles typically use?', a: 'Most medium-duty paratransit and airport shuttles utilize Type 16 or Type 24 service chambers, or appropriately sized Air Disc Brake (ADB) actuators for a more car-like feel.' }
    ],
    bgStyle: 'from-success-900 to-navy-950',
    accent: 'text-success-500',
    challenge: {
      title: 'The Passenger Comfort Challenge',
      desc: 'Airport shuttles and paratransit vehicles require braking that is not only safe but virtually imperceptible to passengers. Systems must prevent the harsh jerking motions associated with heavy-duty commercial brakes while operating in constant, congested traffic.'
    },
    technologies: [
      { name: 'Linear Response Diaphragms', desc: 'Engineered specifically for smooth, predictable pressure application.', icon: <Cpu className="w-6 h-6" /> },
      { name: 'Noise-Dampening Materials', desc: 'Internal components designed to eliminate spring rattle and operational noise.', icon: <Cog className="w-6 h-6" /> }
    ],
    recommendedPackage: [
      { name: 'Air Disc Brake Actuators', desc: 'Provides the smoothest, most car-like braking feel for shuttle chassis.', link: '/air-disc-actuators/type-16-18-adb-actuators' },
      { name: 'Type 16/24 Service Chambers', desc: 'Perfectly sized for medium-duty shuttle applications.', link: '/service-chambers/type-12-16-24-service-chambers' }
    ]
  },
};

export async function generateMetadata(props: { params: Promise<{ appSlug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { appSlug } = params;
  const data = APPLICATION_DATA[appSlug];

  if (!data) return { title: 'Application Not Found' };

  return {
    title: `${data.title} Air Brake Solutions | BRC Engineering`,
    description: data.desc,
    keywords: data.keywords,
    openGraph: {
      title: `${data.title} Air Brake Solutions | BRC Engineering`,
      description: data.desc,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} Air Brake Solutions | BRC Engineering`,
      description: data.desc,
    }
  };
}

export default async function ApplicationPage(props: { params: Promise<{ appSlug: string }> }) {
  const params = await props.params;
  const { appSlug } = params;
  const data = APPLICATION_DATA[appSlug];

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <PageHeader
        badge="Application Engineering"
        title={data.title}
        description={data.desc}
      >
        <div className="mt-8 flex justify-center">
          <nav aria-label="Breadcrumb" className="inline-block bg-navy-900/60 backdrop-blur-md border border-navy-700 px-6 py-2 rounded-full shadow-lg">
            <ol className="flex items-center space-x-2 text-sm text-navy-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li><Link href="/applications" className="hover:text-white transition-colors">Applications</Link></li>
              <li><span className="text-navy-600">/</span></li>
              <li className="text-primary-400 font-semibold" aria-current="page">{data.title}</li>
            </ol>
          </nav>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content Area */}
          <div className="flex-grow space-y-16">

            {/* The Challenge */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-100 mt-1">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">{data.challenge.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">{data.challenge.desc}</p>
                </div>
              </div>
            </div>

            {/* BRC Technology Solutions */}
            <div>
              <h2 className="text-3xl font-extrabold text-navy-900 mb-8 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-primary-500" /> BRC Technology Solutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.technologies.map((tech: any, idx: number) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 ${data.accent}`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{tech.name}</h3>
                    <p className="text-slate-600 leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            {data.faqs && data.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-8 flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary-500" /> Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {data.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.q}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose BRC Banner */}
            <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-navy-800 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-success-500 opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 relative z-10">Why Choose BRC Engineering?</h2>
               <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                 <div className="flex gap-4">
                   <CheckCircle2 className="w-6 h-6 text-success-400 shrink-0" />
                   <div>
                     <h3 className="font-bold text-white mb-1">Direct Factory Pricing</h3>
                     <p className="text-navy-200 text-sm leading-relaxed">Bypass distributor markups by working directly with an ISO 9001:2015 certified manufacturer.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <CheckCircle2 className="w-6 h-6 text-success-400 shrink-0" />
                   <div>
                     <h3 className="font-bold text-white mb-1">100% End-of-Line Testing</h3>
                     <p className="text-navy-200 text-sm leading-relaxed">Every chamber is pressure tested for leaks and function before it leaves our facility.</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>

          {/* Right Sidebar - Other Applications & Recommended Package */}
          <div className="w-full lg:w-96 flex-shrink-0 space-y-8">
            
            {/* All Applications Navigation */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-navy-900 mb-6 font-heading">Explore Applications</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">Commercial & Freight</h4>
                  <ul className="space-y-2">
                    <li><Link href="/applications/commercial-linehaul" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Commercial Linehaul <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                    <li><Link href="/applications/heavy-duty-freight" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Heavy-Duty Freight <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                    <li><Link href="/applications/regional-delivery" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Regional Delivery <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">Severe-Duty</h4>
                  <ul className="space-y-2">
                    <li><Link href="/applications/refuse-sanitation" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Refuse & Sanitation Trucks <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                    <li><Link href="/applications/off-highway-mining" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Off-Highway & Mining <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                    <li><Link href="/applications/agricultural-transport" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Agricultural Transport <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">Passenger & Transit</h4>
                  <ul className="space-y-2">
                    <li><Link href="/applications/transit-coach-bus" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Transit & Coach Buses <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                    <li><Link href="/applications/school-buses" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">School Buses <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                    <li><Link href="/applications/shuttle-fleets" className="text-navy-700 hover:text-primary-600 transition-colors text-sm font-semibold flex items-center justify-between group">Shuttle Fleets <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" /></Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">Custom Needs</h4>
                  <ul className="space-y-2">
                    <li><Link href="/quote" className="text-primary-500 hover:text-primary-400 transition-colors text-sm font-bold flex items-center justify-between group mt-2">Request Custom Quote <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sticky top-24 bg-navy-900 rounded-3xl p-8 shadow-xl border border-navy-800 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <PackagePlus className="w-8 h-8 text-primary-400" />
                <h3 className="text-2xl font-bold">Recommended Fleet Package</h3>
              </div>
              <p className="text-navy-200 text-sm mb-8 relative z-10">
                For maximum safety and ROI, BRC engineers recommend equipping your fleet with this combination of specialized brake components.
              </p>

              <div className="space-y-4 relative z-10 mb-8">
                {data.recommendedPackage.map((item: any, idx: number) => (
                  <Link key={idx} href={item.link} className="block bg-navy-800/80 hover:bg-navy-800 border border-navy-700 p-4 rounded-xl transition-colors group">
                    <h4 className="font-bold text-white group-hover:text-primary-400 transition-colors mb-1">{item.name}</h4>
                    <p className="text-xs text-navy-300">{item.desc}</p>
                  </Link>
                ))}
              </div>

              <div className="relative z-10 pt-6 border-t border-navy-800">
                <h4 className="font-bold text-lg mb-2">Need a custom solution?</h4>
                <p className="text-sm text-navy-200 mb-4">Our engineers can design and manufacture a custom air brake actuator for your specific chassis.</p>
                <Link href="/quote" className="w-full block text-center bg-primary-500 text-navy-900 font-extrabold px-6 py-3 rounded-xl hover:bg-primary-400 transition-colors">
                  Contact Engineering
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `https://brcengineering.com/applications/${appSlug}`,
              "name": `${data.title} Air Brake Solutions | BRC Engineering`,
              "description": data.desc,
              "url": `https://brcengineering.com/applications/${appSlug}`,
              "keywords": data.keywords?.join(', '),
              "isPartOf": {
                "@type": "WebSite",
                "name": "BRC Engineering",
                "url": "https://brcengineering.com/"
              }
            },
            ...(data.faqs ? [{
              "@type": "FAQPage",
              "mainEntity": data.faqs.map((faq: any) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }] : [])
          ]
        })
      }} />
      <BreadcrumbSchema items={[{ name: 'Applications', item: '/applications' }, { name: data.title }]} />
    </div>
  );
}
