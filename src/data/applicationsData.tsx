import React from 'react';
import { ShieldAlert, Cpu, PenTool, Wrench, PackagePlus, HardHat, Cog, AlertTriangle, Factory, Activity } from 'lucide-react';

export const APPLICATION_DATA: Record<string, any> = {
  'commercial-linehaul': {
    title: 'Commercial Linehaul Applications',
    desc: 'Engineered for extreme mileage, fuel efficiency, and long-term reliability on the open highway.',
    keywords: ['commercial linehaul air brakes', 'linehaul truck brake chambers', 'class 8 truck brakes', 'highway truck air brakes', 'long haul fleet brakes'],
    faqs: [
      { q: 'What is the recommended replacement interval for linehaul brake chambers?', a: 'For maximum safety on the open highway, we recommend inspecting linehaul chambers every 25,000 miles and replacing standard units every 3-4 years depending on operating environment.' },
      { q: 'Do you offer sealed chambers for winter driving?', a: 'Yes, our corrosion-resistant line features advanced powder coating and fully sealed breathing designs to prevent internal rust from winter road salts.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Thermal cycling & sustained vibration' },
      { label: 'Operating Environment', value: 'Open Highway / Interstate' },
      { label: 'Annual Mileage', value: '100,000+ miles' },
      { label: 'Key Requirement', value: 'Long-term reliability & corrosion resistance' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Endurance Challenge',
      desc: 'Linehaul trucks demand maximum uptime. Operating at highway speeds for extended periods subjects brakes to continuous vibration and thermal cycling. The primary goal is reducing maintenance intervals while ensuring failsafe performance across vast distances.'
    },
    technologies: [
      { name: 'Extended Life Diaphragms', desc: 'Premium rubber compounds formulated to resist fatigue over millions of highway miles.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Corrosion-Resistant Housing', desc: 'Advanced powder coating prevents rust from winter road salts and chemical de-icers.', icon: <ShieldAlert className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Standard Type 30/30 Spring Brakes', desc: 'The backbone of linehaul stopping power.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Air Disc Brake Actuators', desc: 'For modern fleets optimizing for shorter stopping distances.', link: '/air-disc-brake-actuator/type-20-24-air-disc-brake-actuator' }
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
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Over-The-Road Challenge',
      desc: 'Class 8 commercial vehicles log hundreds of thousands of miles annually across varied climates and load weights. The primary challenge is fatigue—specifically, the repeated vibration and exposure to corrosive road salts that degrade standard brake housings and weaken power springs.'
    },
    technologies: [
      { name: '8-Gauge Steel Housings', desc: 'Resists rock strikes and vibration fatigue better than standard 9-gauge competitors.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Epoxy-Coated Springs', desc: 'Prevents the microscopic rust pitting that leads to premature spring snapping.', icon: <Cog className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Long Stroke Spring Brake', desc: 'The industry standard for drive axles, providing massive holding power.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Type 20 Steer Axle Chamber', desc: 'Compact footprint with rapid response for steer axle modulation.', link: '/service-chambers/type-20-steer-axle-brake-chambers' },
      { name: 'Truck Air Disc Actuators', desc: 'For modern fleets transitioning to ADB systems for shorter stopping distances.', link: '/air-disc-brake-actuator/type-24-24-adb-chambers' }
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
    specs: [
      { label: 'Primary Stressor', value: 'High-frequency actuation' },
      { label: 'Operating Environment', value: 'Urban / Suburban Routes' },
      { label: 'Braking Cycles', value: '300+ stops per day' },
      { label: 'Key Requirement', value: 'Center seal integrity & rapid release' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Stop-and-Go Challenge',
      desc: 'Regional delivery vehicles experience significantly more braking cycles per mile than linehaul trucks. This frequent actuation accelerates wear on pushrods, return springs, and center seals, requiring chambers built for high-cycle endurance rather than just static highway rolling.'
    },
    technologies: [
      { name: 'Reinforced Center Seals', desc: 'Prevents air leakage between the parking and service chambers during frequent actuation.', icon: <Wrench className="w-8 h-8" /> },
      { name: 'High-Tensile Return Springs', desc: 'Engineered to maintain tension over millions of rapid compression cycles.', icon: <Cog className="w-8 h-8" /> }
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
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The High-Cycle Heat Challenge',
      desc: 'Refuse vehicles are the ultimate test of a brake chamber. Executing over 1,000 stops per day in urban environments generates massive heat, causing standard diaphragms to melt or fatigue. Additionally, navigating landfills exposes the undercarriage to debris strikes and abrasive mud.'
    },
    technologies: [
      { name: 'High-Temp Elastomers', desc: 'Specialized rubber compounds that maintain integrity even under extreme radiant heat from the drum.', icon: <AlertTriangle className="w-8 h-8" /> },
      { name: 'Reinforced Dust Booting', desc: 'Prevents abrasive landfill dust from entering the housing and scoring the push rod.', icon: <HardHat className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Severe-Duty Spring Brakes', desc: 'Built with double-plated housings to survive rock and debris strikes.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'High-Temp Air Disc Actuators', desc: 'Designed to handle the extreme heat generation of frequent-stop operations.', link: '/air-disc-brake-actuator/type-24-30-air-disc-brake-actuators' }
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
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Extreme Environment Challenge',
      desc: 'Mining, logging, and heavy construction equipment operates in the harshest conditions on Earth. Massive asymmetrical loads on steep, unpaved grades require extreme parking brake clamping force. The chambers are constantly bombarded by rocks, deep mud, and corrosive elements.'
    },
    technologies: [
      { name: 'Double-Plated Steel', desc: 'Extra thick dual-layer steel construction specifically to resist heavy rock strikes.', icon: <HardHat className="w-8 h-8" /> },
      { name: 'Fully Sealed Breathing', desc: 'Internal breathing mechanisms that prevent mud and slurry from entering the chamber.', icon: <ShieldAlert className="w-8 h-8" /> }
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
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Harvest Season Challenge',
      desc: 'Agricultural transport features unique operational extremes: months of dormancy followed by intense, non-stop usage during harvest. Equipment operates in highly abrasive dust, mud, and corrosive fertilizer environments while hauling maximum payloads from field to processor.'
    },
    technologies: [
      { name: 'Weather-Sealed Housings', desc: 'Prevents internal corrosion during long off-season storage periods.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Heavy-Duty Pushrods', desc: 'Machined to withstand the immense torsional forces of maneuvering fully loaded trailers in soft fields.', icon: <Wrench className="w-8 h-8" /> }
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
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Smooth Modulation Challenge',
      desc: 'When transporting passengers, harsh or unpredictable braking is unacceptable. Transit buses require highly sensitive service chambers that provide smooth, linear force modulation. Furthermore, the frequent stops subject the return springs to massive cycle fatigue.'
    },
    technologies: [
      { name: 'Precision-Machined Push Rods', desc: 'Ensures zero-bind operation for perfectly smooth brake pad engagement.', icon: <Cpu className="w-8 h-8" /> },
      { name: 'High-Tensile Return Springs', desc: 'Designed to withstand millions of compression cycles without losing tension.', icon: <Cog className="w-8 h-8" /> }
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
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1559556158-6c8f615e4492?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Ultimate Safety Challenge',
      desc: 'School buses carry the most valuable cargo in the world. Braking systems must be completely failsafe, highly responsive, and strictly compliant with federal and state regulations. The stop-and-go nature of residential routes also demands exceptional component durability.'
    },
    technologies: [
      { name: 'Failsafe Spring Design', desc: 'Engineered to guarantee immediate mechanical lock-up in the event of air loss.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Tamper-Evident Construction', desc: 'Ensures chambers are not improperly modified, maintaining strict fleet safety compliance.', icon: <Wrench className="w-8 h-8" /> }
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
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Passenger Comfort Challenge',
      desc: 'Airport shuttles and paratransit vehicles require braking that is not only safe but virtually imperceptible to passengers. Systems must prevent the harsh jerking motions associated with heavy-duty commercial brakes while operating in constant, congested traffic.'
    },
    technologies: [
      { name: 'Linear Response Diaphragms', desc: 'Engineered specifically for smooth, predictable pressure application.', icon: <Cpu className="w-8 h-8" /> },
      { name: 'Noise-Dampening Materials', desc: 'Internal components designed to eliminate spring rattle and operational noise.', icon: <Cog className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Air Disc Brake Actuators', desc: 'Provides the smoothest, most car-like braking feel for shuttle chassis.', link: '/air-disc-brake-actuator/type-16-18-adb-actuators' },
      { name: 'Type 16/24 Service Chambers', desc: 'Perfectly sized for medium-duty shuttle applications.', link: '/service-chambers/type-12-16-24-service-chambers' }
    ]
  },
  'fleet-inquiries': {
    title: 'Fleet Volume Orders',
    desc: 'Direct-from-factory procurement for large-scale fleets seeking to standardize their air brake systems.',
    keywords: ['fleet volume orders', 'bulk brake chambers', 'commercial fleet air brakes', 'fleet direct pricing'],
    faqs: [
      { q: 'What is the minimum volume for fleet direct pricing?', a: 'Fleet direct pricing programs typically start for fleets operating 50+ power units or ordering pallet quantities.' },
      { q: 'Can you match our current OEM specifications?', a: 'Yes, we provide exact aftermarket cross-references for all major OEM applications ensuring seamless fleet standardization.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Standardization Challenge',
      desc: 'Managing a large fleet requires standardized components to simplify inventory, reduce mechanic training time, and ensure consistent safety performance across all vehicles.'
    },
    technologies: [
      { name: 'Palletized Shipping', desc: 'Optimized logistics for high-volume container or LTL freight direct to your terminal.', icon: <PackagePlus className="w-8 h-8" /> },
      { name: 'Standardized Warranties', desc: 'Streamlined warranty processing for bulk fleet accounts.', icon: <ShieldAlert className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Spring Brakes', desc: 'The most common standard for Class 8 fleet drives.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Contact Sales', desc: 'Request a custom fleet volume quote.', link: '/quote' }
    ]
  },
  'custom-engineering': {
    title: 'Custom Engineering Solutions',
    desc: 'Collaborative engineering to design specialized air brake actuators for unique chassis or vocational applications.',
    keywords: ['custom air brakes', 'custom brake actuators', 'engineered brake chambers', 'specialty vehicle brakes'],
    faqs: [
      { q: 'How long does a custom prototype take?', a: 'Depending on the complexity, initial prototypes can typically be engineered and manufactured within 6-8 weeks.' },
      { q: 'Do you provide CAD files for integration?', a: 'Yes, our engineering team works directly with yours, providing full 3D CAD models for integration into your vehicle designs.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Specialized Chassis Challenge',
      desc: 'Standard off-the-shelf brake chambers don\'t always fit specialized military, vocational, or custom chassis. Off-highway vehicles often need unique mounting angles, extreme stroke lengths, or specialized porting.'
    },
    technologies: [
      { name: 'Variable Clocking Technology', desc: 'Infinite port angle alignment for tight chassis clearances.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Rapid Prototyping', desc: 'In-house CNC machining and testing for fast iteration.', icon: <PenTool className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Welded Clevis Options', desc: 'Custom pushrod lengths and welded clevis configurations.', link: '/service-chambers/welded-clevis-brake-chambers' },
      { name: 'Engineering Consultation', desc: 'Schedule a meeting with our technical team.', link: '/quote' }
    ]
  },
  'contract-manufacturing': {
    title: 'Contract Manufacturing',
    desc: 'White-label manufacturing and high-volume production for aftermarket brands and OEMs.',
    keywords: ['brake chamber contract manufacturing', 'white label air brakes', 'OEM brake supplier', 'air brake factory'],
    faqs: [
      { q: 'Can you manufacture to our proprietary designs?', a: 'Yes, we offer completely confidential contract manufacturing, producing your proprietary designs under strict NDAs.' },
      { q: 'What quality certifications do you hold?', a: 'Our manufacturing campus is ISO 9001:2015 and TS16949 certified, ensuring top-tier automotive quality control.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1565011500332-9c16262b9a7c?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Scalability Challenge',
      desc: 'Scaling production for a new or expanding brand requires massive capital investment in tooling, automated lines, and testing facilities. Partnering with a proven manufacturer eliminates these barriers.'
    },
    technologies: [
      { name: 'Automated Assembly Lines', desc: 'Capable of producing over 1,000,000 units annually with perfect consistency.', icon: <Factory className="w-8 h-8" /> },
      { name: 'In-House 1M Cycle Testing', desc: 'Rigorously lab testing every batch to guarantee extreme lifecycle performance.', icon: <Activity className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Standard Type 30/30', desc: 'High-volume production ready for your branding.', link: '/spring-brakes/30-30-air-brake-chambers' },
      { name: 'Request Production Quote', desc: 'Start a conversation about contract manufacturing.', link: '/quote' }
    ]
  }
};
