import React from 'react';
import { ShieldAlert, Cpu, PenTool, Wrench, PackagePlus, HardHat, Cog, AlertTriangle, Factory, Activity } from 'lucide-react';

export const APPLICATION_DATA: Record<string, any> = {
  'long-haul-semi': {
    title: 'Long-Haul Semi Trucks',
    desc: 'Engineered for extreme mileage endurance, thermal cycling, and long-term highway reliability.',
    keywords: ['commercial linehaul air brakes', 'linehaul truck brake chambers', 'class 8 truck brakes', 'highway truck air brakes', 'long haul fleet brakes'],
    faqs: [
      { q: 'What is the recommended replacement interval for your linehaul chambers?', a: 'Thanks to our extended-life diaphragms and epoxy-coated springs, our chambers safely exceed the standard 3-year replacement cycle. However, for maximum safety, we recommend proactive visual inspections every 25,000 miles.' },
      { q: 'Do you offer sealed models for winter driving across the northern routes?', a: 'Yes. We offer fully sealed breather tube configurations that prevent corrosive liquid road salts and chemical de-icers from being drawn into the spring housing during release.' }
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
      title: 'The Highway Endurance Challenge',
      desc: 'Long-haul linehaul trucks demand absolute uptime across millions of miles. Operating at sustained highway speeds exposes the brake system to continuous high-frequency vibration and severe thermal cycling from long mountain descents. Standard commercial brake chambers fail prematurely under this fatigue—power springs snap from micro-vibrations, and center seals degrade rapidly from constant pushrod friction, resulting in catastrophic air leaks and costly roadside DOT violations.'
    },
    technologies: [
      { name: 'Extended Life Elastomer Diaphragms', desc: 'Our factory formulates premium rubber compounds engineered specifically to resist thermal fatigue and maintain elasticity over millions of highway miles.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Epoxy-Coated Power Springs', desc: 'We utilize an advanced epoxy coating process that prevents microscopic rust pitting—the primary cause of power spring snapping during sustained highway vibration.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Precision-Machined Pushrods', desc: 'Center pushrods are centerless-ground to an ultra-smooth finish, virtually eliminating center seal drag and preventing the slow air leaks that plague standard chambers.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Standard Spring Brakes', desc: 'The trusted backbone of linehaul stopping power, offering reliable mechanical lock-up and consistent highway service braking.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Air Disc Brake Actuators', desc: 'Optimized for modern Class 8 fleets transitioning to ADB systems for dramatically shorter stopping distances and improved driver safety.', link: '/air-disc-brake-actuators/type-20-24-air-disc-brake-actuator' }
    ]
  },
  'heavy-duty-trailer': {
    title: 'Heavy-Duty Trailer Axles',
    desc: 'The backbone of the global supply chain demands absolute reliability, extreme payload capacity, and unmatched corrosion resistance.',
    keywords: ['heavy duty freight brakes', 'commercial freight air brakes', 'class 8 freight brake chambers', 'heavy duty truck air brakes'],
    faqs: [
      { q: 'Are your trailer chambers compatible with modern ABS and roll-stability systems?', a: 'Yes. All of our commercial trailer chambers are precision-calibrated to respond instantly to the micro-adjustments demanded by modern ABS, EBS, and electronic roll-stability control systems.' },
      { q: 'Can you supply large-scale trailer manufacturers (OEMs)?', a: 'Absolutely. We currently partner with major trailer manufacturers globally, providing just-in-time palletized shipping and exact spec-matching directly from our automated assembly lines.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Over-The-Road Freight Challenge',
      desc: 'Commercial freight trailers are subjected to the highest payload stresses in the transportation industry. When hauling maximum weight capacities across varied climates, the brake chambers are directly exposed to corrosive road salts, freezing temperatures, and constant road debris. The primary point of failure for trailer axles is housing fatigue—standard 9-gauge steel housings flex under heavy braking pressure, cracking around the mounting studs, while corrosive elements destroy the internal return springs.'
    },
    technologies: [
      { name: '8-Gauge Steel Housings', desc: 'We upgrade standard industry specs by stamping our trailer housings from heavy 8-gauge steel, eliminating flex-cracking around the mounting studs during emergency stops.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Multi-Stage E-Coating', desc: 'Every steel component undergoes a rigorous multi-stage electro-deposition coating process to provide a barrier against highly corrosive winter road salts and chemical de-icers.', icon: <Cog className="w-8 h-8" /> },
      { name: 'High-Tensile Power Springs', desc: 'Engineered with specialized steel alloys to provide massive, unyielding parking brake clamping force for fully loaded 80,000 lb trailers.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Long Stroke Spring Brakes', desc: 'Provides the extra pushrod travel necessary to maintain braking efficiency as trailer brake shoes wear down over long hauls.', link: '/spring-brake-chambers/30-30-long-stroke-brake-chambers' },
      { name: 'Type 30 Service Chambers', desc: 'High-volume, heavy-duty service chambers engineered for immediate response on multi-axle trailer configurations.', link: '/service-brake-chambers/type-30-service-brake-chambers' }
    ]
  },
  'medium-duty-trucks': {
    title: 'Medium-Duty Box Trucks',
    desc: 'Optimized for the high-frequency stop-and-go cycles of urban and suburban distribution networks.',
    keywords: ['regional delivery truck brakes', 'box truck air brakes', 'delivery fleet brake chambers', 'medium duty truck brakes', 'stop and go brakes'],
    faqs: [
      { q: 'Why do regional delivery trucks experience more brake chamber wear than linehaul trucks?', a: 'It comes down to cycles. A linehaul truck might apply the brakes 50 times in a 500-mile trip. A box truck might apply the brakes 500 times in a 50-mile city route. This 10x increase in mechanical cycling rapidly destroys standard seals and return springs.' },
      { q: 'Can I replace just the parking spring section in the yard?', a: 'Yes. We highly recommend our pre-caged piggyback kits for urban fleets. They allow your mechanics to safely and quickly replace the parking brake section without disconnecting the pushrod from the slack adjuster.' }
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
      title: 'The Stop-and-Go Urban Challenge',
      desc: 'Regional delivery and last-mile distribution vehicles face a unique operational hazard: extreme actuation frequency. A medium-duty box truck navigating urban routes can easily execute 300 to 500 stops in a single day. This relentless cycling places immense friction on the pushrod and center seal, accelerating wear exponentially compared to highway trucks. Standard center seals quickly blow out under this high-cycle abuse, allowing air to leak between the parking and service sections, paralyzing the delivery vehicle in congested traffic.'
    },
    technologies: [
      { name: 'Reinforced Center Seals', desc: 'Our factory utilizes proprietary heavy-duty center seal rings designed specifically to withstand the intense, repetitive friction of urban stop-and-go driving without losing pressure integrity.', icon: <Wrench className="w-8 h-8" /> },
      { name: 'High-Cycle Return Springs', desc: 'Engineered from specialized spring steel designed to compress and release thousands of times a week without suffering tension fatigue or snapping.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Rapid-Release Valving', desc: 'Internal air porting is precision-machined to ensure immediate air exhaust, preventing brake drag and improving fleet fuel efficiency in city traffic.', icon: <Cpu className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 24/30 Spring Brakes', desc: 'The ideal size configuration for medium-duty chassis, balancing compact installation with reliable stopping power.', link: '/spring-brake-chambers/24-30-24-24-spring-brakes' },
      { name: 'Pre-Caged Piggyback Kits', desc: 'Enables fleet mechanics to rapidly swap the power spring section without dismounting the entire housing, getting delivery trucks back on route faster.', link: '/parts-and-kits/type-30-30-piggyback-kits' }
    ]
  },
  'garbage-refuse': {
    title: 'Garbage & Waste Trucks',
    desc: 'Engineered for the most punishing high-cycle, high-heat braking environments in the commercial sector.',
    keywords: ['refuse truck air brakes', 'garbage truck brake chambers', 'sanitation truck brakes', 'high temp brake chambers', 'severe duty air brakes'],
    faqs: [
      { q: 'Do you make chambers that can actually withstand landfill debris?', a: 'Absolutely. Our severe-duty line is specifically engineered for off-highway abuse. The heavy-gauge steel housing deflects rock strikes, while the sealed breathing system prevents toxic landfill leachate from corroding the internal power spring.' },
      { q: 'How do you handle the extreme radiant heat of refuse collection?', a: 'Standard diaphragms fail around 200°F. We utilize proprietary high-temperature elastomer blends in our severe-duty chambers that maintain their flexibility and air-seal integrity even under extreme, sustained thermal soak from the drum.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The High-Cycle Heat Challenge',
      desc: 'Refuse and sanitation vehicles are the ultimate torture test for an air brake chamber. Executing over 1,000 heavy stops per day in residential neighborhoods generates massive, sustained radiant heat from the brake drums. This thermal soak literally melts standard rubber diaphragms. Furthermore, navigating active landfills exposes the chassis to severe rock strikes, highly abrasive mud, and corrosive leachate that easily penetrates and destroys standard commercial brake housings.'
    },
    technologies: [
      { name: 'High-Temp Elastomers', desc: 'Our factory utilizes specialized, extreme-temperature rubber compounds for diaphragms and O-rings, maintaining structural integrity under radiant heat conditions that would melt standard brakes.', icon: <AlertTriangle className="w-8 h-8" /> },
      { name: 'Double-Plated Steel Housings', desc: 'We construct our refuse chambers with extra-thick, dual-layer steel housings specifically to resist deformation and puncture from heavy rock and debris strikes in landfill environments.', icon: <HardHat className="w-8 h-8" /> },
      { name: 'Reinforced Dust Booting', desc: 'Heavy-duty neoprene dust boots securely seal the pushrod exit, preventing abrasive landfill slurry and glass dust from entering the housing and scoring the internal mechanisms.', icon: <ShieldAlert className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Severe-Duty Spring Brakes', desc: 'Built with double-plated housings and high-temp internals to survive the brutal daily cycle of municipal waste collection.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'High-Temp Air Disc Actuators', desc: 'Specifically designed to handle the extreme heat generation of frequent-stop operations utilizing modern Air Disc Brakes.', link: '/air-disc-brake-actuators/type-24-30-air-disc-brake-actuators' }
    ]
  },
  'mining-construction': {
    title: 'Mining & Construction Equipment',
    desc: 'Surviving in environments where the pavement ends and extreme payloads begin.',
    keywords: ['mining truck air brakes', 'off highway brake chambers', 'heavy construction air brakes', 'severe duty parking brakes', 'dump truck brake chambers'],
    faqs: [
      { q: 'Are these chambers rated for holding payloads on steep unpaved grades?', a: 'Yes. Our Type 30/30 and 36/36 severe-duty spring brakes utilize high-tensile alloy power springs that provide the massive clamping force required to hold fully loaded mining vehicles on severe inclines.' },
      { q: 'How do you prevent mud from packing into the chamber and seizing the spring?', a: 'Standard chambers use open weep holes that inhale mud. Our severe-duty off-highway units feature a fully sealed internal breather tube system that routes clean air between the chambers, keeping mud and slurry entirely locked out.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Extreme Environment Challenge',
      desc: 'Mining, logging, and heavy civil construction equipment operate in the most hostile mechanical environments on Earth. Vehicles carry massive, asymmetrical payloads up and down steep, unpaved grades, requiring absolute parking brake clamping force. The brake chambers are constantly submerged in deep mud, slurry, and acidic mine water, while being bombarded by boulders. Standard chambers fail immediately—exposed weep holes allow mud to pack into the spring housing, seizing the brake, while thin steel housings are crushed by rock strikes.'
    },
    technologies: [
      { name: 'Fully Sealed Breathing Mechanisms', desc: 'We eliminate traditional exposed weep holes, utilizing a closed-loop internal breathing tube system that prevents mud, slurry, and acidic water from infiltrating the spring housing.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Extra-Thick 8-Gauge Steel', desc: 'Our off-highway chambers are stamped from heavy 8-gauge steel, providing superior armor against direct rock strikes and preventing mounting stud tear-out under heavy vibration.', icon: <HardHat className="w-8 h-8" /> },
      { name: 'Heavy-Duty Welded Clevis', desc: 'Eliminates the weak point of threaded pushrods by utilizing a permanently welded clevis, providing absolute rigidity against lateral chassis twisting on uneven terrain.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 36/36 Severe-Duty Spring Brakes', desc: 'Delivers the massive holding power and mechanical clamping force required for parking fully loaded mining dump trucks on steep inclines.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Welded Clevis Service Chambers', desc: 'Engineered for front axles navigating deep ruts and uneven terrain, completely eliminating threaded pushrod snapping.', link: '/service-brake-chambers/welded-clevis-brake-chambers' }
    ]
  },
  'ag-trailers': {
    title: 'Agricultural Trailers',
    desc: 'Engineered for intense harvest payloads, highly corrosive fertilizer environments, and extreme off-road torsional strain.',
    keywords: ['agricultural truck brakes', 'grain trailer air brakes', 'farm equipment brake chambers', 'hopper bottom trailer brakes'],
    faqs: [
      { q: 'How do your brake chambers survive extended winter dormancy without seizing?', a: 'Our factory integrates specialized moisture-resistant barrier coatings on all internal steel components and utilizes reinforced rubber compounds that resist dry-rot. This guarantees that when harvest season begins, the spring brakes actuate and release flawlessly without internal rust lock-up or seal tearing.' },
      { q: 'Can you handle high-volume bulk orders for agricultural equipment manufacturers (OEMs)?', a: 'Yes. As a primary manufacturer, we supply Tier-1 agricultural OEMs and aftermarket wholesale distributors with palletized container shipments. We offer exact specification cross-referencing, private-label packaging, and custom pushrod lengths directly from our automated production lines.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Harvest Season Challenge',
      desc: 'Agricultural transport exposes air brake chambers to a unique destructive cycle: months of static winter dormancy followed by non-stop, maximum-capacity harvest hauling. Standard commercial chambers fail quickly under these extremes. Highly corrosive chemical fertilizers, livestock waste, and abrasive field dust easily penetrate standard housings, causing rapid internal rust and center seal failure. Furthermore, navigating fully loaded grain hopper trailers through soft, rutted fields generates massive lateral twisting forces that bend standard pushrods and fatigue standard return springs, resulting in catastrophic air pressure leaks far from paved roads.'
    },
    technologies: [
      { name: 'Dacromet-Plated Power Springs', desc: 'Our factory utilizes advanced Dacromet plating and industrial epoxy coatings on all internal power springs, establishing an impenetrable barrier against highly corrosive agricultural chemicals and preventing moisture pitting during seasonal dormancy.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Welded Clevis & Heavy-Gauge Pushrods', desc: 'We engineer our agricultural actuators with oversized, high-tensile steel pushrods and permanently welded clevis assemblies to withstand the extreme lateral shear forces generated when maneuvering 80,000+ lb trailers in deep mud.', icon: <Wrench className="w-8 h-8" /> },
      { name: 'Weather-Sealed Housings & Reinforced Diaphragms', desc: 'Double O-ring center seals, premium reinforced neoprene diaphragms, and specialized dust booting prevent abrasive harvest debris and corrosive slurry from compromising the pushrod mechanism.', icon: <Cog className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Long Stroke Spring Brakes', desc: 'Provides the extended pushrod travel and massive mechanical parking brake clamping force required for holding max-weight grain trailers safely on unpaved field inclines.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Welded Clevis Service Chambers', desc: 'Eliminates threaded rod failure points entirely, offering absolute mechanical rigidity against the violent lateral twisting forces of off-road farm navigation.', link: '/service-brake-chambers/welded-clevis-brake-chambers' }
    ]
  },
  'transit-buses': {
    title: 'City Bus & Transit Coach',
    desc: 'Precision modulation, whisper-quiet operation, and fail-safe reliability for passenger transport fleets.',
    keywords: ['transit bus air brakes', 'coach bus brake chambers', 'city bus brake actuators', 'passenger transport air brakes'],
    faqs: [
      { q: 'How do you ensure smooth braking to prevent passengers from jerking forward?', a: 'We achieve this through a combination of precision-machined pushrods and linear response diaphragms that eliminate mechanical binding. This gives the bus driver perfectly smooth, predictable control over the air application.' },
      { q: 'Are these rated for the high cycle count of municipal city transit?', a: 'Yes. City transit buses stop thousands of times a day. We use high-tensile return springs specifically engineered to withstand millions of compression cycles without losing tension or snapping.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Smooth Modulation Challenge',
      desc: 'When transporting passengers, harsh, jerky, or unpredictable braking is entirely unacceptable. City transit buses require highly sensitive service chambers that provide smooth, linear force modulation for the driver. Furthermore, the constant stop-and-go nature of city bus routes subjects the return springs and pushrods to massive cycle fatigue, while \'brake rattle\' from loose internal springs creates a noisy, disruptive environment for passengers.'
    },
    technologies: [
      { name: 'Linear Response Diaphragms', desc: 'Our factory utilizes custom-molded diaphragms designed to provide perfectly linear resistance, eliminating the sudden \'grabbing\' effect and ensuring smooth, predictable pressure application.', icon: <Cpu className="w-8 h-8" /> },
      { name: 'Precision-Machined Pushrods', desc: 'We centerless-grind our pushrods to microscopic tolerances, ensuring zero-bind operation for perfectly smooth brake pad engagement and release.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Noise-Dampening Architecture', desc: 'Internal components are seated with specialized dampening materials to eliminate spring rattle and operational noise, ensuring a quiet ride for passengers.', icon: <ShieldAlert className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 16/24 Service Chambers', desc: 'The perfect size configuration for precise driver modulation on municipal transit axles.', link: '/service-brake-chambers/type-12-16-24-service-chambers' },
      { name: 'Air Disc Brake Actuators', desc: 'Provides the smoothest, most car-like braking feel for modern coach buses equipped with ADB systems.', link: '/air-disc-brake-actuators/type-20-24-air-disc-brake-actuator' }
    ]
  },
  'school-buses': {
    title: 'School Bus Fleets',
    desc: 'Uncompromising safety, strict DOT compliance, and consistent reliability for student transport fleets.',
    keywords: ['school bus air brakes', 'school bus brake chambers', 'DOT compliant bus brakes', 'type 24/30 bus brakes', 'failsafe spring brakes'],
    faqs: [
      { q: 'Are your school bus chambers fully DOT compliant?', a: 'Yes, all of our chambers meet or exceed FMVSS 121 regulations, providing guaranteed immediate mechanical lock-up in the event of air loss for ultimate student safety.' },
      { q: 'How do you prevent improper maintenance injuries?', a: 'The power spring inside a brake chamber is under lethal pressure. We utilize tamper-evident, permanently crimped construction on the sealed parking spring housing, ensuring chambers cannot be dangerously opened by untrained staff.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1559556158-6c8f615e4492?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Ultimate Safety Challenge',
      desc: 'School buses carry the most valuable cargo in the world, making brake failure an unacceptable risk. Braking systems must be completely failsafe, highly responsive, and strictly compliant with federal FMVSS 121 regulations. Standard chambers pose a risk if improperly maintained or if internal springs fatigue and fail to deploy during an air loss emergency. The stop-and-go nature of residential routes also demands exceptional component durability without sacrificing safety.'
    },
    technologies: [
      { name: 'Failsafe Spring Design', desc: 'Our power springs are engineered and tested to guarantee immediate, aggressive mechanical lock-up in the event of sudden air pressure loss, ensuring the bus stops safely.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Tamper-Evident Construction', desc: 'We utilize permanently crimped, tamper-evident housings for the parking spring chamber, ensuring they cannot be improperly modified or dangerously opened by untrained personnel.', icon: <Wrench className="w-8 h-8" /> },
      { name: 'DOT/FMVSS 121 Compliant Engineering', desc: 'Every chamber is rigorously batch-tested at our factory to meet and exceed all federal safety guidelines for commercial passenger braking response times.', icon: <Activity className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 24/30 Spring Brakes', desc: 'The trusted standard for school bus drive axles, providing massive emergency stopping power.', link: '/spring-brake-chambers/24-30-24-24-spring-brakes' },
      { name: 'Type 20 Steer Axle Chambers', desc: 'Rapid response service chambers for precise driver control and immediate stopping distances in residential zones.', link: '/service-brake-chambers/type-20-steer-axle-brake-chambers' }
    ]
  },
  'shuttle-vans': {
    title: 'Shuttle & Delivery Vans',
    desc: 'Quiet operation, smooth engagement, and dependable service for medium-duty passenger transport.',
    keywords: ['shuttle bus air brakes', 'paratransit brake chambers', 'airport shuttle brakes', 'medium duty passenger brakes'],
    faqs: [
      { q: 'Can your chambers eliminate the loud brake rattle on our smaller shuttles?', a: 'Yes. Our shuttle-specific chambers utilize internal noise-dampening seating materials designed to eliminate the spring rattle and operational noise that passengers find highly disruptive.' },
      { q: 'What size chambers do shuttles typically use?', a: 'Most medium-duty paratransit and airport shuttles utilize Type 16 or Type 20 service chambers, or appropriately sized Air Disc Brake (ADB) actuators for a much smoother, car-like feel.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Passenger Comfort Challenge',
      desc: 'Medium-duty airport shuttles and paratransit vehicles require braking that is not only safe but virtually imperceptible to passengers. Systems must prevent the harsh jerking motions associated with heavy-duty commercial brakes. However, applying heavy-duty air brake systems to lighter chassis often results in aggressive over-braking and severe spring rattle over bumps, creating an uncomfortable and noisy ride for passengers.'
    },
    technologies: [
      { name: 'Linear Response Diaphragms', desc: 'Engineered specifically for lighter chassis, providing smooth, car-like pressure application without the aggressive \'grabbing\' of heavy-duty truck brakes.', icon: <Cpu className="w-8 h-8" /> },
      { name: 'Noise-Dampening Materials', desc: 'We utilize internal elastomeric dampeners designed to eliminate spring rattle and operational metal-on-metal noise.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Compact Footprint Design', desc: 'Designed with a minimized housing profile to fit seamlessly within the tight clearance constraints of van cutaway chassis.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Air Disc Brake Actuators', desc: 'Provides the smoothest, most car-like braking feel for paratransit and airport shuttle chassis.', link: '/air-disc-brake-actuators/type-16-18-adb-actuators' },
      { name: 'Type 16 Service Chambers', desc: 'Perfectly sized for medium-duty shuttle applications, offering precise modulation without over-braking.', link: '/service-brake-chambers/type-12-16-24-service-chambers' }
    ]
  },
  'bulk-wholesale': {
    title: 'High Volume & Container Orders',
    desc: 'Direct-from-factory procurement for large-scale fleets and distributors seeking to standardize their air brake systems.',
    keywords: ['fleet volume orders', 'bulk brake chambers', 'commercial fleet air brakes', 'fleet direct pricing'],
    faqs: [
      { q: 'What is the minimum order volume for fleet direct pricing?', a: 'Our factory-direct pricing programs typically begin for fleets operating 50+ power units, or for distributors ordering in pallet-level or full-container quantities.' },
      { q: 'Can you match our current OEM specifications exactly?', a: 'Yes. We maintain a massive database of OEM specifications and provide exact aftermarket cross-references for all major applications, ensuring seamless fleet standardization.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Standardization & Scaling Challenge',
      desc: 'Managing a massive commercial fleet or distribution network requires absolute standardization to simplify inventory, reduce mechanic training time, and ensure consistent safety performance across thousands of vehicles. Relying on mixed aftermarket brands leads to unpredictable failure rates, warranty headaches, and inflated middleman markups that erode fleet profitability. The challenge is finding a primary manufacturer capable of delivering exact-match OEM quality at massive scale without supply chain interruptions.'
    },
    technologies: [
      { name: 'Exact OEM Cross-Referencing', desc: 'Our engineering team provides seamless, exact-match cross-referencing for all major OEM applications, ensuring your mechanics experience zero fitment issues.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Palletized Container Logistics', desc: 'We optimize logistics for high-volume container or LTL freight, shipping directly from our factory floor to your distribution terminals.', icon: <PackagePlus className="w-8 h-8" /> },
      { name: 'Standardized Fleet Warranties', desc: 'We bypass the middlemen to offer streamlined, direct-to-factory warranty processing for bulk fleet accounts, eliminating bureaucratic delays.', icon: <ShieldAlert className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Standard Type 30/30 Spring Brakes', desc: 'The most common standard for Class 8 fleet drives. Ready for high-volume palletized distribution.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Fleet Piggyback Kits', desc: 'Bulk packaged parking spring sections for rapid, cost-effective fleet yard maintenance.', link: '/parts-and-kits/type-30-30-piggyback-kits' }
    ]
  },
  'custom-manufacturing': {
    title: 'Custom OEM Manufacturing',
    desc: 'Collaborative engineering to design, prototype, and manufacture specialized air brake actuators for unique chassis applications.',
    keywords: ['custom air brakes', 'custom brake actuators', 'engineered brake chambers', 'specialty vehicle brakes'],
    faqs: [
      { q: 'How long does a custom actuator prototype take to produce?', a: 'Depending on the complexity of the custom housing or pushrod requirements, initial prototypes can typically be engineered, machined, and delivered within 6 to 8 weeks.' },
      { q: 'Do you provide 3D CAD files for chassis integration?', a: 'Yes. Our engineering team works directly with yours, providing full STEP/CAD models of the custom chamber for seamless integration into your digital vehicle designs.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Specialized Chassis Challenge',
      desc: 'Standard off-the-shelf brake chambers do not fit specialized military, vocational, or custom commercial chassis. Engineers designing new off-highway vehicles or specialty trailers often encounter extreme clearance constraints, requiring unique mounting angles, non-standard stroke lengths, or specialized air porting. Forcing a standard chamber into a custom chassis leads to dangerous pushrod binding, air line crimping, and immediate mechanical failure.'
    },
    technologies: [
      { name: 'Variable Clocking & Port Alignment', desc: 'We engineer custom housings with infinite port angle alignment options to clear tight chassis constraints and prevent air line crimping.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Custom Pushrod & Clevis Design', desc: 'We machine custom pushrod lengths and integrate welded clevis configurations to perfectly match your proprietary slack adjuster geometry.', icon: <Wrench className="w-8 h-8" /> },
      { name: 'Rapid CNC Prototyping', desc: 'Our in-house engineering lab utilizes advanced CNC machining and 3D CAD modeling to rapidly iterate and deliver physical prototypes within weeks, not months.', icon: <PenTool className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Welded Clevis Options', desc: 'Custom pushrod lengths and welded clevis configurations engineered specifically for your chassis geometry.', link: '/service-brake-chambers/welded-clevis-brake-chambers' },
      { name: 'Engineering Consultation', desc: 'Schedule a direct technical meeting with our engineering team to review your CAD files and clearance requirements.', link: '/quote' }
    ]
  },
  'private-label': {
    title: 'Private Label & White Label',
    desc: 'White-label manufacturing and high-volume automated production for aftermarket brands and global OEMs.',
    keywords: ['brake chamber contract manufacturing', 'white label air brakes', 'OEM brake supplier', 'air brake factory'],
    faqs: [
      { q: 'Can you manufacture completely proprietary designs exclusively for our brand?', a: 'Yes. We offer confidential contract manufacturing. We will tool and produce your proprietary actuator designs under strict NDAs, ensuring your IP remains completely protected.' },
      { q: 'What quality control certifications does your factory hold?', a: 'Our manufacturing campus is fully IATF 16949 compliant, ensuring top-tier automotive quality control and traceability on every single unit that leaves our line.' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1565011500332-9c16262b9a7c?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Scaling & Capital Challenge',
      desc: 'Scaling production for a new or rapidly expanding aftermarket brake brand requires massive capital investment. Building automated assembly lines, acquiring heavy steel stamping presses, and outfitting IATF 16949-certified testing laboratories takes years and millions of dollars. Attempting to source from unreliable overseas brokers leads to devastating quality control issues, brand-damaging recalls, and IP theft. The challenge is finding a proven, primary manufacturer capable of scaling your brand with perfect consistency.'
    },
    technologies: [
      { name: 'IATF 16949 Automated Assembly', desc: 'Our state-of-the-art automated production lines are capable of producing over 1,000,000 units annually with zero-defect consistency for your brand.', icon: <Factory className="w-8 h-8" /> },
      { name: 'In-House 1M Cycle Testing', desc: 'We protect your brand reputation by rigorously lab-testing every batch on our 1-million cycle dynamometers to guarantee extreme lifecycle performance.', icon: <Activity className="w-8 h-8" /> },
      { name: 'Strict NDA & Confidentiality', desc: 'We offer completely confidential contract manufacturing, producing your proprietary designs and branding under strict Non-Disclosure Agreements.', icon: <ShieldAlert className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Standard Type 30/30 Production', desc: 'High-volume, automated production lines ready to stamp and package the industry\'s most popular chamber under your logo.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Custom Packaging Solutions', desc: 'We provide end-to-end retail and wholesale packaging solutions featuring your brand\'s colors, barcodes, and part numbers.', link: '/quote' }
    ]
  }
};
