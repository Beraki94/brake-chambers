import React from 'react';
import { ShieldAlert, Cpu, PenTool, Wrench, PackagePlus, HardHat, Cog, AlertTriangle, Factory, Activity, Flame, Droplets, ThermometerSnowflake, Zap, CheckCircle2, Lock, Settings, ShieldCheck } from 'lucide-react';

export const APPLICATION_DATA: Record<string, any> = {
  'long-haul-semi': {
    title: 'Long-Haul Semi Trucks',
    desc: 'We manufacture the industry’s most durable highway brake chambers, engineered specifically to survive extreme thermal cycling and sustained vibration. Buy factory-direct replacements that are 100% compatible with all Class 8 platforms.',
    keywords: ['commercial linehaul air brakes', 'linehaul truck brake chambers', 'class 8 truck brakes', 'highway truck air brakes', 'long haul fleet brakes'],
    faqs: [
      { q: 'Will these chambers mount to our mixed fleet of Freightliner and Peterbilt trucks?', a: 'Yes. Because we are a primary manufacturer, we build our chambers to universally match OEM geometry. They serve as exact drop-in replacements for Bendix, Haldex, and Meritor units across all major truck brands.' },
      { q: 'How does your factory ensure these won\'t fail on long mountain descents?', a: 'Our chambers are built to endure brutal thermal soak. We use proprietary high-heat elastomer diaphragms that refuse to degrade under extreme temperatures, ensuring consistent braking force when your drivers need it most.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Thermal Soak & Sustained Vibration' },
      { label: 'Operating Environment', value: 'Open Highway / Interstate' },
      { label: 'Braking Cycles', value: 'High Speed / High Heat' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all major truck OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Highway Endurance Challenge',
      desc: 'Long-haul linehaul trucks demand absolute uptime across millions of miles. Operating at sustained highway speeds exposes the brake system to continuous high-frequency vibration and severe thermal cycling from long mountain descents. Standard aftermarket brake chambers fail prematurely here—power springs snap from micro-vibrations, and center seals melt from constant drum heat, resulting in catastrophic air leaks and costly roadside DOT violations.'
    },
    technologies: [
      { name: 'Thermal-Resistant Elastomers', desc: 'Our factory formulates premium rubber compounds engineered specifically to resist thermal fatigue and maintain elasticity during prolonged highway braking.', icon: <Flame className="w-8 h-8" /> },
      { name: 'Epoxy-Coated Power Springs', desc: 'We utilize an advanced epoxy coating process that prevents microscopic rust pitting—the primary cause of power spring snapping during sustained highway vibration.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Universal Fleet Fitment', desc: 'Engineered for seamless integration. Standard stud spacing, exact pushrod lengths, and universally accepted air port threads guarantee drop-in fitment across your entire Class 8 fleet.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Standard Spring Brakes', desc: 'The trusted backbone of linehaul stopping power, offering reliable mechanical lock-up and consistent highway service braking.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Air Disc Brake Actuators', desc: 'Optimized for modern Class 8 fleets transitioning to ADB systems for dramatically shorter stopping distances.', link: '/air-disc-brake-actuators/type-20-24-air-disc-brake-actuator' }
    ],
    cta: {
      heading: 'Outfit Your Linehaul Fleet Factory-Direct',
      subheading: 'Stop paying middleman markups for standard chambers. Connect directly with our engineering team to spec highway-rated, 100% compatible brake chambers for your entire linehaul fleet.'
    }
  },
  'heavy-duty-trailer': {
    title: 'Heavy-Duty Trailer Axles',
    desc: 'BRC manufactures heavy-duty trailer brake chambers built to withstand massive payload forces and severe corrosion. Get factory-direct pricing on chambers that perfectly replace all OEM trailer equipment.',
    keywords: ['heavy duty freight brakes', 'commercial freight air brakes', 'class 8 freight brake chambers', 'heavy duty truck air brakes'],
    faqs: [
      { q: 'Are these compatible with my existing Great Dane and Utility trailers?', a: 'Absolutely. We manufacture our trailer chambers to standard industry specs (like 4.75" stud spacing), ensuring a perfect drop-in fit for Great Dane, Utility, Vanguard, and all other major trailer brands.' },
      { q: 'How do you prevent the housing from cracking under heavy payload braking?', a: 'Unlike competitors who use thinner metals to cut costs, our factory stamps trailer chamber housings from ultra-rigid 8-gauge steel, eliminating flex-cracking around the mounting studs entirely.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Housing Flex & Road Salt Corrosion' },
      { label: 'Operating Environment', value: 'High-Payload Freight Routes' },
      { label: 'Annual Mileage', value: '100,000+ miles' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all major trailer OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Over-The-Road Freight Challenge',
      desc: 'Commercial freight trailers are subjected to the highest payload stresses in the transportation industry. When hauling maximum 80,000 lb capacities across varied climates, the brake chambers are directly exposed to corrosive road salts, freezing temperatures, and constant road debris. The primary point of failure for trailer axles is housing fatigue—standard 9-gauge steel housings flex under heavy braking pressure, cracking around the mounting studs, while corrosive elements destroy the internal return springs.'
    },
    technologies: [
      { name: '8-Gauge Steel Housings', desc: 'We stamp our trailer housings from heavy 8-gauge steel, eliminating the flex-cracking that destroys standard chambers during emergency stops under full payload.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Multi-Stage E-Coating', desc: 'Every steel component undergoes a rigorous electro-deposition coating process in our factory to provide an impenetrable barrier against highly corrosive winter road salts.', icon: <Droplets className="w-8 h-8" /> },
      { name: 'Universal Trailer Match', desc: 'Designed with standard industry mounting templates to serve as an exact, no-modification replacement for Bendix, Haldex, or Meritor chambers on any commercial trailer axle.', icon: <CheckCircle2 className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Long Stroke Spring Brakes', desc: 'Provides the extra pushrod travel necessary to maintain braking efficiency as trailer brake shoes wear down over long hauls.', link: '/spring-brake-chambers/30-30-long-stroke-brake-chambers' },
      { name: 'Type 30 Service Chambers', desc: 'High-volume, heavy-duty service chambers engineered for immediate response on multi-axle trailer configurations.', link: '/service-brake-chambers/type-30-service-brake-chambers' }
    ],
    cta: {
      heading: 'Outfit Your Trailer Fleet Factory-Direct',
      subheading: 'Eliminate downtime and distributor markups. Connect directly with our manufacturing team to spec corrosion-resistant, 100% compatible brake chambers for your entire trailer fleet.'
    }
  },
  'medium-duty-trucks': {
    title: 'Medium-Duty Box Trucks',
    desc: 'Our factory produces high-cycle brake chambers designed specifically to survive the relentless stop-and-go demands of urban delivery. Buy direct and replace any OEM box truck chamber with 100% compatibility.',
    keywords: ['regional delivery truck brakes', 'box truck air brakes', 'delivery fleet brake chambers', 'medium duty truck brakes', 'stop and go brakes'],
    faqs: [
      { q: 'Will these chambers fit my Isuzu and Hino delivery trucks?', a: 'Yes. BRC manufactures universal-fit chambers that serve as exact drop-in replacements for standard pneumatic brake systems across Isuzu, Hino, Freightliner M2, and International medium-duty trucks.' },
      { q: 'Why do our delivery trucks blow center seals so frequently?', a: 'Delivery routes require hundreds of brake applications per day. Standard chambers aren\'t built for that cycle volume. We manufacture our chambers with heavy-duty center seal rings specifically to survive extreme actuation friction.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'High-Frequency Actuation' },
      { label: 'Operating Environment', value: 'Urban / Suburban Routes' },
      { label: 'Braking Cycles', value: '300+ stops per day' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all medium-duty OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Stop-and-Go Urban Challenge',
      desc: 'Regional delivery and last-mile distribution vehicles face a unique operational hazard: extreme actuation frequency. A medium-duty box truck navigating urban routes can easily execute 300 to 500 stops in a single day. This relentless cycling places immense friction on the pushrod and center seal, accelerating wear exponentially compared to highway trucks. Standard center seals quickly blow out under this high-cycle abuse, allowing air to leak between sections and paralyzing the vehicle.'
    },
    technologies: [
      { name: 'High-Friction Center Seals', desc: 'Our factory utilizes proprietary heavy-duty center seal rings designed specifically to withstand the intense, repetitive friction of urban stop-and-go driving without losing pressure integrity.', icon: <Wrench className="w-8 h-8" /> },
      { name: 'High-Cycle Return Springs', desc: 'Engineered from specialized spring steel designed to compress and release thousands of times a week without suffering tension fatigue or snapping.', icon: <Activity className="w-8 h-8" /> },
      { name: 'OEM Universal Integration', desc: 'Manufactured to exact pneumatic and structural standards to guarantee a perfect drop-in fit for all medium-duty delivery chassis.', icon: <ShieldCheck className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 24/30 Spring Brakes', desc: 'The ideal size configuration for medium-duty chassis, balancing compact installation with reliable stopping power.', link: '/spring-brake-chambers/24-30-24-24-spring-brakes' },
      { name: 'Pre-Caged Piggyback Kits', desc: 'Enables fleet mechanics to rapidly swap the power spring section without dismounting the entire housing.', link: '/parts-and-kits/type-30-30-piggyback-kits' }
    ],
    cta: {
      heading: 'Outfit Your Delivery Fleet Factory-Direct',
      subheading: 'Stop paying middleman markups for standard chambers that blow seals. Connect directly with our manufacturing team to spec high-cycle, 100% compatible brake chambers for your delivery fleet.'
    }
  },
  'garbage-refuse': {
    title: 'Garbage & Waste Trucks',
    desc: 'We manufacture the industry’s most resilient severe-duty brake chambers, engineered specifically to survive the corrosive, high-heat environment of waste management. 100% compatible drop-in replacements for all refuse vehicles.',
    keywords: ['refuse truck air brakes', 'garbage truck brake chambers', 'severe duty air brakes', 'waste management truck brakes', 'high temp brake chambers', 'drop-in replacement brake chambers'],
    faqs: [
      { q: 'Can these chambers actually withstand landfill debris and liquid leachate?', a: 'Absolutely. We engineer our severe-duty housings from extra-thick 8-gauge steel to deflect heavy rock strikes. Additionally, our fully sealed breathing systems prevent toxic landfill leachate from being drawn into the housing.' },
      { q: 'Will these fit our mixed fleet of Mack and Autocar refuse trucks?', a: 'Yes. As a primary manufacturer, we build our chambers to exact universal OEM specifications, making them a 100% compatible drop-in replacement for Mack, Autocar, Peterbilt, and any system originally running Bendix or Meritor.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Extreme Radiant Heat & Corrosive Debris' },
      { label: 'Operating Environment', value: 'Urban Routes & Landfill Sites' },
      { label: 'Braking Cycles', value: '1,000+ stops per day' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all major refuse OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Waste Management Challenge',
      desc: 'Refuse collection is arguably the most brutal environment for commercial air brakes. Garbage trucks execute over 1,000 violent stop-and-go cycles a day, generating massive radiant heat from the brake drums that literally melts standard rubber diaphragms. When these trucks enter landfills, the chambers are battered by solid debris and submerged in highly acidic liquid leachate. Standard aftermarket chambers fail rapidly here—their thin housings dent, diaphragms rupture, and springs snap.'
    },
    technologies: [
      { name: 'High-Temp Elastomer Diaphragms', desc: 'Our factory formulates proprietary high-temperature rubber compounds that refuse to degrade. They maintain perfect elasticity even under extreme, sustained thermal soak from continuous urban braking.', icon: <Flame className="w-8 h-8" /> },
      { name: 'Sealed & Vented Architecture', desc: 'We manufacture our severe-duty models with advanced sealed breathing tubes. This engineered airflow prevents acidic landfill sludge from infiltrating the housing, protecting the internal power spring.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Universal Fleet Fitment', desc: 'Engineered in our facilities to bypass middleman compatibility issues. Our pushrods and mounting studs match exact OEM geometry, ensuring fast, bolt-on installation across your entire mixed fleet.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Severe-Duty Sealed Brakes', desc: 'The ultimate defense against landfill environments, featuring a sealed housing and high-temp diaphragms.', link: '/spring-brake-chambers/30-30-sealed-brake-chambers' },
      { name: 'Heavy-Duty Piggyback Kits', desc: 'Factory-direct replacement spring sections that allow your mechanics to service trucks faster and get them back on route.', link: '/parts-and-kits/type-30-30-piggyback-kits' }
    ],
    cta: {
      heading: 'Outfit Your Refuse Fleet Factory-Direct',
      subheading: 'Stop paying middleman markups for standard chambers that fail in the landfill. Connect directly with our engineering team to spec severe-duty, 100% compatible brake chambers for your waste management fleet.'
    }
  },
  'mining-construction': {
    title: 'Mining & Construction Equipment',
    desc: 'BRC manufactures ultra-heavy-duty brake chambers built to survive the abrasive dust, mud, and punishing impacts of off-highway mining sites. Buy factory-direct components that universally replace all heavy equipment OEMs.',
    keywords: ['off highway brake chambers', 'mining truck air brakes', 'construction equipment brakes', 'severe duty brake chambers', 'heavy duty off road brakes'],
    faqs: [
      { q: 'Will fine mining dust destroy the internal center seals?', a: 'Not ours. We manufacture our off-highway chambers with integrated dust shields and advanced wiper seals on the pushrod to aggressively block abrasive particulate from entering the internal mechanism.' },
      { q: 'Are these compatible with specialized vocational chassis like Kenworth C500 or Western Star?', a: 'Yes. We manufacture to universal heavy-duty pneumatic standards. Our chambers provide an exact drop-in fit for severe-duty vocational trucks across all major off-highway brands.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Abrasive Dust & Impact Shocks' },
      { label: 'Operating Environment', value: 'Off-Highway / Quarries' },
      { label: 'Braking Cycles', value: 'Steep Grades / Heavy Load' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all vocational OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1579435471441-157989504c55?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Off-Highway Hazard Challenge',
      desc: 'Mining and construction sites are unforgiving. Off-highway dump trucks and heavy equipment navigate deep mud, sharp rocks, and clouds of abrasive silica dust while hauling massive payloads down steep grades. Standard brake chambers are completely outmatched here. The abrasive dust acts like sandpaper on moving parts, shredding standard center seals in weeks, while flying rocks easily puncture standard 11-gauge steel housings. When air pressure is lost on a quarry grade, the results are catastrophic.'
    },
    technologies: [
      { name: 'Impact-Resistant 8-Gauge Steel', desc: 'Our factory stamps these housings from ultra-thick 8-gauge steel. This creates a virtual armor shell capable of deflecting high-velocity rock strikes that would easily crush a standard aftermarket chamber.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Particulate Defense Seals', desc: 'We manufacture our pushrod seals with aggressive wiper ridges designed to actively scrape away caked mud and silica dust, preserving the pressure integrity of the chamber in dirty environments.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Vocational Universal Match', desc: 'Engineered for fast field repairs. Our chambers match standard OEM mounting dimensions, allowing your on-site mechanics to perform quick drop-in replacements on any heavy vocational truck.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 36/36 Heavy-Duty Spring Brakes', desc: 'Massive clamping force engineered specifically for ultra-heavy payloads on steep quarry grades.', link: '/spring-brake-chambers/36-36-spring-brakes' },
      { name: 'Type 36 Service Chambers', desc: 'Oversized service chambers delivering maximum pneumatic response for extreme off-highway applications.', link: '/service-brake-chambers/type-36-service-brake-chambers' }
    ],
    cta: {
      heading: 'Outfit Your Vocational Fleet Factory-Direct',
      subheading: 'Stop replacing cheap chambers that break on the site. Connect directly with our manufacturing team to spec armored, 100% compatible brake chambers for your heavy equipment fleet.'
    }
  },
  'ag-trailers': {
    title: 'Agricultural Trailers',
    desc: 'Our factory produces rugged, corrosion-resistant brake chambers designed for the mud, fertilizers, and extreme seasonal loads of the agricultural sector. 100% drop-in compatible with all farm trailer axles.',
    keywords: ['agricultural trailer brakes', 'farm equipment air brakes', 'grain hopper brake chambers', 'livestock trailer brakes', 'corrosion resistant brake chambers'],
    faqs: [
      { q: 'Will these chambers resist corrosion from harsh chemical fertilizers and livestock waste?', a: 'Yes. We protect all internal and external steel components with a multi-stage E-coating and heavy epoxy finish specifically designed to withstand highly acidic organic waste and chemical fertilizers.' },
      { q: 'Do these fit standard hopper bottoms and livestock trailers?', a: 'Absolutely. We manufacture these to universal axle standards, ensuring they are a perfect, immediate drop-in replacement for Wilson, Timpte, Merritt, and any other trailer running standard pneumatic brakes.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Chemical Corrosion & Seasonal Overload' },
      { label: 'Operating Environment', value: 'Farms, Feedlots, Dirt Roads' },
      { label: 'Braking Cycles', value: 'Sporadic Extreme Load' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all ag trailer OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1595844730298-b960fad9744a?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Agricultural Environment Challenge',
      desc: 'Agricultural hauling—whether grain hoppers, livestock trailers, or heavy machinery transport—involves unique chemical and operational hazards. These trailers navigate deeply rutted dirt roads and are constantly exposed to highly acidic livestock waste, corrosive chemical fertilizers, and deep mud. Furthermore, ag trailers often sit idle for months during the off-season, allowing standard untreated springs to rust and seize. When harvest season hits, these weakened standard chambers fail immediately under heavy seasonal payloads.'
    },
    technologies: [
      { name: 'Anti-Corrosion Epoxy Shielding', desc: 'Our factory utilizes a heavy epoxy coating on all internal power springs. This prevents the chemical rust and seizing that occurs when standard ag trailers sit idle during the off-season.', icon: <Droplets className="w-8 h-8" /> },
      { name: 'Debris-Tolerant Housings', desc: 'Stamped from premium 8-gauge steel, our housings resist denting from heavy clods of frozen mud and field debris kicked up by tractor tires on unpaved roads.', icon: <ShieldAlert className="w-8 h-8" /> },
      { name: 'Universal Trailer Fit', desc: 'Manufactured to precise industry standard measurements, allowing farm mechanics to easily bolt these on as direct drop-in replacements for any agricultural trailer axle.', icon: <Settings className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Standard Spring Brakes', desc: 'The robust, corrosion-resistant standard for grain hoppers and heavy livestock transport.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Type 30 Service Chambers', desc: 'Reliable service braking for multi-axle farm equipment that sees heavy seasonal use.', link: '/service-brake-chambers/type-30-service-brake-chambers' }
    ],
    cta: {
      heading: 'Outfit Your Ag Fleet Factory-Direct',
      subheading: 'Don\'t let a seized brake ruin harvest season. Connect directly with our manufacturing team to spec corrosion-proof, 100% compatible brake chambers for your agricultural trailers.'
    }
  },
  'transit-buses': {
    title: 'City Bus & Transit Coach',
    desc: 'BRC manufactures ultra-smooth, high-cycle brake chambers designed for passenger comfort and urban reliability. Buy factory-direct and instantly replace any OEM transit bus chamber with 100% compatibility.',
    keywords: ['transit bus air brakes', 'city bus brake chambers', 'passenger coach brakes', 'smooth air brakes', 'high cycle brake chambers'],
    faqs: [
      { q: 'How does your factory ensure braking is smooth enough for standing passengers?', a: 'We manufacture our diaphragms for perfectly linear resistance and utilize precision centerless-ground pushrods. This eliminates the sudden mechanical "grabbing" that causes jerky stops in standard chambers.' },
      { q: 'Are these compatible with New Flyer and Gillig transit buses?', a: 'Yes. We engineer our transit chambers to exact OEM mounting and stroke specifications, making them a seamless drop-in replacement for New Flyer, Gillig, Nova Bus, and all major municipal fleets.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Cycle Fatigue & Jerky Actuation' },
      { label: 'Operating Environment', value: 'Congested City Grids' },
      { label: 'Braking Cycles', value: 'Continuous Stop-and-Go' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all transit OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Passenger Transit Challenge',
      desc: 'City transit buses operate in a grueling, continuous stop-and-go loop, but unlike freight, they are hauling human beings. Harsh, jerky, or unpredictable braking is entirely unacceptable as it endangers standing passengers. The constant cycling subjects standard return springs to massive fatigue, while "brake rattle" from cheap internal components creates a noisy, disruptive ride. Standard aftermarket chambers often bind or stick, resulting in abrupt stops that trigger passenger complaints and safety liabilities.'
    },
    technologies: [
      { name: 'Linear Response Diaphragms', desc: 'Our factory utilizes custom-molded diaphragms designed to provide perfectly linear resistance, eliminating the sudden "grabbing" effect and ensuring incredibly smooth, predictable pressure application.', icon: <Activity className="w-8 h-8" /> },
      { name: 'Vibration-Dampened Springs', desc: 'We manufacture our high-cycle return springs to exact tolerances to eliminate internal housing rattle, ensuring a quiet, premium ride experience for city transit passengers.', icon: <Cog className="w-8 h-8" /> },
      { name: 'Municipal OEM Match', desc: 'Engineered specifically for municipal fleet standardization. Our chambers provide a 100% exact drop-in fit for all major transit bus pneumatic systems, streamlining your maintenance bays.', icon: <CheckCircle2 className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Air Disc Brake Actuators', desc: 'The preferred choice for modern transit buses, offering incredibly smooth modulation and vastly shorter stopping distances in city traffic.', link: '/air-disc-brake-actuators/type-20-24-air-disc-brake-actuator' },
      { name: 'Type 24 Service Chambers', desc: 'Compact, high-response service chambers perfect for the rapid actuation demands of urban transit.', link: '/service-brake-chambers/type-24-service-brake-chambers' }
    ],
    cta: {
      heading: 'Outfit Your Municipal Fleet Factory-Direct',
      subheading: 'Stop paying distributor markups for jerky, rattling chambers. Connect directly with our manufacturing team to spec ultra-smooth, 100% compatible brake chambers for your entire transit fleet.'
    }
  },
  'school-buses': {
    title: 'School Bus Fleets',
    desc: 'We manufacture reliable, rapid-response brake chambers engineered specifically for student transport safety. Buy factory-direct drop-in replacements that are 100% compatible with all school bus chassis.',
    keywords: ['school bus air brakes', 'student transport brake chambers', 'blue bird bus brakes', 'thomas built bus brakes', 'reliable air brake chambers'],
    faqs: [
      { q: 'Will these chambers fit our Blue Bird and Thomas Built buses?', a: 'Yes. BRC manufactures universal-fit chambers that serve as exact drop-in replacements for standard pneumatic systems across Blue Bird, Thomas Built, and IC Bus fleets.' },
      { q: 'How does your manufacturing process prioritize student safety?', a: 'Every chamber we build undergoes rigorous 1-million cycle endurance testing and strict leak-down analysis in our factory before shipping, guaranteeing flawless response during emergency stops.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Frequent Stops & Idling' },
      { label: 'Operating Environment', value: 'Suburban / Rural Routes' },
      { label: 'Braking Cycles', value: 'Moderate Frequency' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all school bus OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Student Transport Challenge',
      desc: 'School buses carry the most precious cargo on the road, demanding absolute, zero-failure reliability from their braking systems. Operating on fixed routes with frequent, predictable stops, these vehicles require rapid brake response to navigate around unpredictable student pedestrian traffic. Furthermore, school bus fleets operate on strict municipal budgets, meaning maintenance directors cannot afford the high failure rates or inflated prices of standard aftermarket parts. Safety and budget efficiency must perfectly align.'
    },
    technologies: [
      { name: 'Rapid-Exhaust Valving', desc: 'Our factory machines internal air ports to maximize airflow, ensuring immediate brake release and application. This provides drivers with critical split-second control in school zones.', icon: <Zap className="w-8 h-8" /> },
      { name: 'Zero-Leak Center Seals', desc: 'We utilize a proprietary double-lip center seal design that virtually eliminates air crossover, ensuring the emergency parking brake remains completely isolated from the service brake system.', icon: <Lock className="w-8 h-8" /> },
      { name: 'Universal District Fitment', desc: 'Engineered for seamless fleet standardization. Our chambers match exact OEM specifications, serving as an immediate drop-in replacement across mixed school district fleets.', icon: <ShieldCheck className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 30/30 Standard Spring Brakes', desc: 'The dependable standard for full-size school bus rear axles, providing fail-safe mechanical parking capabilities.', link: '/spring-brake-chambers/30-30-air-brake-chambers' },
      { name: 'Type 20 Service Chambers', desc: 'Precision steer-axle chambers designed for fast, controllable stopping power in suburban environments.', link: '/service-brake-chambers/type-20-service-brake-chambers' }
    ],
    cta: {
      heading: 'Outfit Your District Fleet Factory-Direct',
      subheading: 'Maximize your district\'s safety budget. Connect directly with our manufacturing team to spec reliable, 100% compatible brake chambers for your entire school bus fleet.'
    }
  },
  'shuttle-vans': {
    title: 'Shuttle & Delivery Vans',
    desc: 'Our factory produces compact, high-performance brake chambers designed for the tight clearances of heavy-duty shuttle and delivery vans. Get factory-direct, 100% compatible drop-in replacements.',
    keywords: ['commercial van air brakes', 'shuttle bus brake chambers', 'heavy duty van brakes', 'compact air brake chambers', 'delivery van air brakes'],
    faqs: [
      { q: 'Are these compact enough for the tight axles on commercial cutaway vans?', a: 'Yes. We manufacture specific smaller-profile chamber sizes (like Type 12 and Type 16) designed specifically to clear the suspension components on heavy-duty commercial van chassis.' },
      { q: 'Will these fit Ford and Chevy commercial cutaway chassis?', a: 'Absolutely. We build to universal pneumatic standards, meaning our chambers are exact drop-in replacements for any commercial van or shuttle utilizing an air brake system conversion.' }
    ],
    specs: [
      { label: 'Primary Stressor', value: 'Tight Clearances & Urban Traffic' },
      { label: 'Operating Environment', value: 'Airports & City Centers' },
      { label: 'Braking Cycles', value: 'High Frequency' },
      { label: 'Compatibility', value: '100% Drop-in replacement for all commercial van OEMs' }
    ],
    bgStyle: 'from-navy-900 to-navy-950',
    accent: 'text-amber-500',
    heroImage: 'https://images.unsplash.com/photo-1580659359145-6677464177eb?auto=format&fit=crop&w=2000&q=80',
    challenge: {
      title: 'The Commercial Cutaway Challenge',
      desc: 'Heavy-duty shuttle buses, airport transports, and large delivery vans built on commercial cutaway chassis face a unique spatial challenge. They require the heavy-duty stopping power of a full pneumatic air brake system, but must fit those components into the much tighter axle and suspension clearances of a van chassis. Standard bulky chambers frequently rub against suspension components, causing housing fatigue and failure. They need immense stopping power in a highly constrained footprint.'
    },
    technologies: [
      { name: 'Compact Profile Housings', desc: 'Our factory engineers smaller-size service chambers (Types 9, 12, and 16) with optimized housing profiles to ensure zero interference with tight commercial van suspension components.', icon: <PackagePlus className="w-8 h-8" /> },
      { name: 'High-Tensile Diaphragms', desc: 'Despite their compact footprint, we manufacture these chambers using high-strength nylon-reinforced diaphragms to deliver maximum pneumatic force output for heavy passenger loads.', icon: <Activity className="w-8 h-8" /> },
      { name: 'Cutaway Universal Fit', desc: 'Designed to match the exact mounting bolt patterns of major commercial cutaway air brake conversions, allowing for fast, drop-in replacements by your mechanics.', icon: <Wrench className="w-8 h-8" /> }
    ],
    recommendedPackage: [
      { name: 'Type 16 Service Chambers', desc: 'The perfect balance of compact size and powerful service braking force for heavy shuttle vans.', link: '/service-brake-chambers/type-16-service-brake-chambers' },
      { name: 'Type 12 Service Chambers', desc: 'Ultra-compact service chambers engineered specifically for the tightest steer-axle clearances.', link: '/service-brake-chambers/type-12-service-brake-chambers' }
    ],
    cta: {
      heading: 'Outfit Your Shuttle Fleet Factory-Direct',
      subheading: 'Stop fighting with bulky, incompatible parts. Connect directly with our manufacturing team to spec compact, 100% compatible brake chambers for your commercial van fleet.'
    }
  }
};
