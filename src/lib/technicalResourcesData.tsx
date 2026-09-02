import React from 'react';
import { ShieldCheck, Ruler, FileText, Wrench, ShieldAlert } from 'lucide-react';

export const SEO_DATA: Record<string, { metaTitle: string; metaDescription: string; keywords: string }> = {
  'size-charts': {
    metaTitle: 'Brake Chamber Size & Dimension Charts | Type 12–36 Specs | BRC',
    metaDescription: 'Complete brake chamber dimension charts for Type 12 through Type 36 service and spring brakes. Outside diameter, mounting stud centers, pushrod thread sizes, and weights. SAE J1469 compliant.',
    keywords: 'brake chamber size chart, brake chamber dimensions, Type 30 brake chamber size, Type 24 brake chamber dimensions, mounting stud centers, pushrod thread size, SAE J1469, spring brake dimensions, service chamber dimensions',
  },
  'stroke-length': {
    metaTitle: 'Brake Chamber Stroke Length Guide & CVSA Readjustment Limits | BRC',
    metaDescription: 'Understand standard vs. long-stroke brake chamber limits. CVSA readjustment out-of-service criteria for Type 16–36 chambers. Avoid DOT violations with correct stroke measurement.',
    keywords: 'stroke length guide, CVSA readjustment limits, long stroke brake chamber, standard stroke limit, out of service criteria, DOT brake inspection, brake chamber stroke measurement, Type 30 stroke limit',
  },
  'installation': {
    metaTitle: 'How to Install Air Brake Chambers | Step-by-Step Guide | BRC',
    metaDescription: 'Step-by-step brake chamber installation guide. Mounting torque specs, pushrod cutting procedure, clevis installation, air line connection, and post-install testing for commercial vehicles.',
    keywords: 'brake chamber installation, how to install brake chamber, pushrod cutting, clevis installation, air brake installation guide, mounting torque specs, brake chamber replacement, commercial truck brakes',
  },
  'identification': {
    metaTitle: 'How to Identify Brake Chamber Size & Stroke Type | Visual Guide | BRC',
    metaDescription: 'Visually identify brake chamber sizes and long-stroke vs standard-stroke types without part numbers. Clamp band measurement, square port identification, and trapezoidal tag recognition.',
    keywords: 'identify brake chamber size, brake chamber identification, long stroke identification, clamp band measurement, brake chamber part number, square port brake chamber, trapezoidal tag',
  },
  'selection-guides': {
    metaTitle: 'Brake Chamber Selection Guide by Vocation & Application | BRC',
    metaDescription: 'Choose the correct brake chamber for linehaul, severe duty, transit, or heavy haul applications. Piggyback vs complete assembly guide. Vocational recommendations for commercial vehicles.',
    keywords: 'brake chamber selection guide, which brake chamber, piggyback vs complete assembly, severe duty brake chamber, transit brake chamber, heavy haul brakes, Type 30/30 selection, commercial brake selection',
  },
  'caging': {
    metaTitle: 'How to Cage a Spring Brake Chamber | Safety Procedure | BRC',
    metaDescription: 'Critical safety procedure for manually caging spring brake chambers. Step-by-step mechanical caging procedure for Type 24 and Type 30 spring brakes. 2,000+ lbs spring tension warning.',
    keywords: 'caging spring brake, how to cage brake chamber, spring brake caging procedure, caging bolt procedure, Type 30 spring brake caging, mechanical caging, brake chamber safety',
  },
};

export const TECHNICAL_RESOURCES_DATA: Record<string, any> = {
  'size-charts': {
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80',
    title: 'Size & Dimension Charts',
    category: 'Specifications & Sizing',
    description: 'Comprehensive dimension tables for Type 12 through Type 36 service and spring brakes, ensuring perfect fitment and SAE compliance.',
    icon: <Ruler className="w-6 h-6 text-emerald-500" aria-hidden="true" />,
    alert: {
      type: 'info',
      title: 'SAE J1469 Compliance',
      message: 'All BRC brake chamber dimensions strictly adhere to industry standard SAE J1469 protocols for interchangeable fitment across major commercial vehicle platforms. Using non-compliant chambers can lead to bracket fatigue and premature failure.'
    },
    sections: [
      {
        title: 'Spring Brake Dimensions (Piggybacks & Combos)',
        content: 'When replacing spring brakes, accurate dimensions are critical. An incorrect OD can cause clearance issues with suspension components, while incorrect mounting stud spacing will prevent installation. Use this chart to verify clearance envelopes for tandem axle setups. The Overall Length (OAL) is measured from the mounting face to the rear housing peak.',
        table: {
          headers: ['Type Size', 'Outside Diameter (OD)', 'Mounting Stud Centers', 'Pushrod Thread', 'Approx. Weight'],
          rows: [
            ['Type 20/24', '6.8" (173mm)', '4.75" (120.7mm)', '5/8-11 UNC', '16.5 lbs'],
            ['Type 24/24', '7.1" (180mm)', '4.75" (120.7mm)', '5/8-11 UNC', '17.2 lbs'],
            ['Type 24/30', '8.2" (208mm)', '4.75" (120.7mm)', '5/8-11 UNC', '19.8 lbs'],
            ['Type 30/30 (Std)', '8.2" (208mm)', '4.75" (120.7mm)', '5/8-11 UNC', '20.5 lbs'],
            ['Type 30/30 (LS)', '8.2" (208mm)', '4.75" (120.7mm)', '5/8-11 UNC', '21.1 lbs'],
          ]
        }
      },
      {
        title: 'Service Chamber Dimensions',
        content: 'Standard service chamber specifications typically used for steer axles and specialized trailer applications where a parking spring is not required.',
        table: {
          headers: ['Type Size', 'Outside Diameter (OD)', 'Mounting Stud Centers', 'Pushrod Thread'],
          rows: [
            ['Type 12', '5.7" (145mm)', '4.75" (120.7mm)', '5/8-11 UNC'],
            ['Type 16', '6.4" (162mm)', '4.75" (120.7mm)', '5/8-11 UNC'],
            ['Type 20', '6.8" (173mm)', '4.75" (120.7mm)', '5/8-11 UNC'],
            ['Type 24', '7.1" (180mm)', '4.75" (120.7mm)', '5/8-11 UNC'],
            ['Type 30', '8.2" (208mm)', '4.75" (120.7mm)', '5/8-11 UNC'],
          ]
        }
      },
      {
        title: 'Frequently Asked Questions',
        faqs: [
          { question: 'Why are pushrod threads usually 5/8-11 UNC?', answer: 'The 5/8-11 UNC thread is the North American industry standard for heavy-duty commercial vehicles. It provides the necessary tensile strength to transfer thousands of pounds of braking force to the slack adjuster without stripping.' },
          { question: 'Does a larger OD mean more braking power?', answer: 'Yes. The "Type" number roughly corresponds to the effective square inch area of the diaphragm. A Type 30 has 30 square inches of surface area, producing significantly more braking force than a Type 24 at the same air pressure.' }
        ]
      }
    ],
    download: { name: 'Full Dimension Catalog PDF', size: '5.5 MB' }
  },

  'stroke-length': {
    imageSrc: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80',
    title: 'Stroke Length Guide',
    category: 'Specifications & Sizing',
    description: 'Understanding standard vs. long-stroke limits, CVSA regulations, and legal DOT out-of-service criteria to keep fleets compliant.',
    icon: <Ruler className="w-6 h-6 text-emerald-500" aria-hidden="true" />,
    alert: {
      type: 'warning',
      title: 'Do Not Mix Stroke Types',
      message: 'Never mix a standard stroke chamber and a long-stroke chamber on the same axle. Doing so will result in unequal braking force, causing the vehicle to pull severely to one side during panic stops and immediately failing DOT inspections.'
    },
    sections: [
      {
        title: 'Understanding Stroke Limits and Safety',
        content: 'Stroke length determines the operating limit of your brakes. It is the maximum distance the pushrod can travel before the diaphragm bottoms out against the housing. As brake linings wear and drums heat up and expand (brake fade), the required stroke increases. If the stroke reaches its maximum limit, the vehicle will have zero braking power on that wheel.',
        bullets: [
          'Standard Stroke: The traditional chamber design. Suitable for most vocations but requires more frequent manual adjustment checks.',
          'Long-Stroke (LS): Provides an additional 0.5 inches (or more) of reserve stroke margin. Mandated on many modern air-ride suspensions and highly recommended for transit/heavy haul.'
        ]
      },
      {
        title: 'CVSA Readjustment Limits (Out-of-Service Criteria)',
        content: 'Commercial Vehicle Safety Alliance (CVSA) inspectors measure the stroke length while the brakes are fully applied at 90-100 psi. If the applied stroke measurement is equal to or greater than the readjustment limit below, the brake is considered defective and the vehicle will be placed Out-Of-Service (OOS).',
        table: {
          headers: ['Chamber Type', 'Standard Stroke Limit', 'Long-Stroke (LS) Limit'],
          rows: [
            ['Type 16', '1 3/4" (44.5mm)', '2.0" (51mm)'],
            ['Type 20', '1 3/4" (44.5mm)', '2.0" (51mm)'],
            ['Type 24', '1 3/4" (44.5mm)', '2.0" (51mm)'],
            ['Type 30', '2.0" (51mm)', '2.5" (63.5mm)'],
            ['Type 36', '2 1/4" (57mm)', 'N/A'],
          ]
        }
      },
      {
        title: 'Troubleshooting Stroke Issues',
        content: 'If your stroke measurement is approaching the legal limit rapidly, check for these common issues:',
        bullets: [
          'Worn Brake Linings: Ensure your brake shoes have sufficient pad life remaining.',
          'Faulty Automatic Slack Adjuster (ASA): The ASA may be failing to take up the slack dynamically. Do not manually adjust an ASA to fix a stroke issue—diagnose the root cause.',
          'Heat Expansion: Severe drum expansion from dragging brakes can simulate a stroke-out condition.'
        ]
      },
      {
        title: 'Frequently Asked Questions',
        faqs: [
          { question: 'How do I know if I have a Long Stroke chamber?', answer: 'Long stroke chambers feature square pneumatic ports, a trapezoidal identification tag, and are often deep-stamped with "LS" on the housing.' },
          { question: 'Can I replace a standard stroke with a long stroke?', answer: 'Yes, upgrading to a long stroke chamber increases safety margins. However, you MUST replace both chambers on the axle simultaneously to maintain balanced braking.' }
        ]
      }
    ]
  },

  'installation': {
    imageSrc: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920&q=80',
    title: 'Installation Guides',
    category: 'Installation & Maint.',
    description: 'Master the step-by-step installation instructions for standard and long-stroke air brake chambers, including precise pushrod cutting formulas.',
    icon: <Wrench className="w-6 h-6 text-blue-500" aria-hidden="true" />,
    alert: {
      type: 'danger',
      title: 'CRITICAL SAFETY WARNING',
      message: 'Always block the vehicle wheels securely before beginning any work on the brake system. If replacing a spring brake, you MUST manually cage the power spring before attempting to remove the chamber from the mounting bracket.'
    },
    sections: [
      {
        title: 'Pre-Installation Diagnostics & Preparation',
        content: 'Before swapping a chamber, ensure you have correctly diagnosed the issue. A leaking air line or a faulty dash valve can often mimic a ruptured diaphragm. Once confirmed, follow these prep steps:',
        bullets: [
          'Ensure the air system is completely exhausted to 0 psi.',
          'Verify the replacement chamber perfectly matches the size and stroke type of the old chamber.',
          'Inspect the mounting bracket on the axle for cracks, bending, or severe rust. A bent bracket will cause pushrod binding.',
          'Ensure the slack adjuster operates freely, is properly lubricated, and the clevis pin holes are not wallowed out.'
        ]
      },
      {
        title: 'Step-by-Step Installation Procedure',
        steps: [
          {
            title: 'Mount the Chamber',
            desc: 'Insert the mounting studs through the bracket holes. Install the lock washers and nuts. Torque the mounting nuts to 100-115 ft-lbs (135-155 Nm) for standard 5/8-11 threads. Do not over-torque, as this can pull the studs out of the non-pressure housing.'
          },
          {
            title: 'Calculate & Cut the Pushrod',
            desc: 'With the slack adjuster manually adjusted to its fully released position, measure the required pushrod length. The critical rule: The angle between the pushrod and the slack adjuster arm MUST be exactly 90 degrees when the brake is applied at half stroke. Cut the pushrod to this exact length using a square cut (do not use a torch).'
          },
          {
            title: 'Install the Clevis',
            desc: 'Thread the jam nut onto the pushrod, followed by the clevis. Ensure at least 1/2 inch of thread engagement inside the clevis body to prevent thread pull-out. Install the clevis pin and secure it with a new cotter pin. Tighten the jam nut against the clevis to 40-50 ft-lbs.'
          },
          {
            title: 'Connect Air Lines',
            desc: 'Apply liquid thread sealant to the air fittings (do not apply to the first two threads to prevent sealant from entering the air system). Connect the service air line (Port 11) and the emergency/parking air line (Port 12). Torque fittings to 20-25 ft-lbs.'
          },
          {
            title: 'Uncage and Test',
            desc: 'Apply system air pressure (100+ psi) to the parking brake port to compress the power spring pneumatically. Remove the caging bolt from the rear housing, apply anti-seize, and store it in the side pocket. Perform a leak-down test with soapy water and verify proper stroke length.'
          }
        ]
      },
      {
        title: 'Frequently Asked Questions',
        faqs: [
          { question: 'What happens if I cut the pushrod too short?', answer: 'A short pushrod changes the geometry of the slack adjuster. You will lose mechanical advantage, resulting in weak braking force, and the brake may stroke out prematurely.' },
          { question: 'Why shouldn\'t I use a torch to cut the pushrod?', answer: 'Using a cutting torch alters the metallurgical temper of the steel pushrod, making it brittle. It can snap under heavy braking loads. Always use a hacksaw or abrasive cutoff wheel.' }
        ]
      }
    ],
    download: { name: 'Complete Installation Manual', size: '2.4 MB' }
  },

  'identification': {
    imageSrc: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1920&q=80',
    title: 'Visual Identification Guide',
    category: 'Specifications & Sizing',
    description: 'Learn how to accurately identify brake chamber sizes and types strictly through visual inspection when part numbers are rusted or missing.',
    icon: <FileText className="w-6 h-6 text-emerald-500" aria-hidden="true" />,
    sections: [
      {
        title: 'Why Visual Identification Matters',
        content: 'In severe duty environments, winter salts, and high moisture, part number tags and embossing can rust away or become illegible within months. Mechanics must rely on visual and physical characteristics to identify the size and stroke type of a chamber to ensure a safe, identical replacement. Guessing the size is a major liability and a severe DOT violation.',
      },
      {
        title: 'Identifying Size by Clamp Band (The Surefire Method)',
        content: 'The most reliable way to identify the size of a service chamber without a tag is to measure the outside diameter (OD) directly across the center of the clamp band.',
        bullets: [
          'Type 20: OD is approximately 6.8 inches',
          'Type 24: OD is approximately 7.1 inches',
          'Type 30: OD is approximately 8.2 inches',
          'Type 36: OD is approximately 9.0 inches'
        ]
      },
      {
        title: 'Identifying Long-Stroke (LS) Chambers',
        content: 'Long-stroke chambers provide critical extra braking margin. Because mixing standard and long-stroke chambers on an axle is illegal, manufacturers are mandated to include specific visual indicators so inspectors and mechanics can identify them from underneath the vehicle in poor lighting.',
        bullets: [
          'Square Ports: The pneumatic air ports on the center section are cast into a raised, square or rectangular boss (standard stroke ports are flush or round).',
          'Trapezoidal Tag: The metal identification tag secured under the clamp band bolt is trapezoidal (standard stroke tags are round or rectangular).',
          'Deep Stamping: The rear housing will typically feature a deep, permanent stamped marking stating "LONG STROKE" or "LS".'
        ]
      },
      {
        title: 'Frequently Asked Questions',
        faqs: [
          { question: 'Does a yellow dust plug indicate a specific type?', answer: 'Traditionally, some manufacturers use a yellow caging dust plug to indicate a long-stroke chamber. However, since dust plugs are easily lost and replaced with aftermarket parts, you should never rely solely on plug color for identification.' },
          { question: 'Can I identify a piggyback without the clamp band?', answer: 'Yes, but it is difficult. You have to measure the diaphragm diameter directly, which usually requires opening the unit. It is much safer to reference the service housing clamp band OD.' }
        ]
      }
    ]
  },

  'selection-guides': {
    imageSrc: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    title: 'Chamber Selection Guides',
    category: 'Specifications & Sizing',
    description: 'Expert advice on choosing the correct brake chamber series for specific vocations, maximizing lifespan and ROI.',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" aria-hidden="true" />,
    sections: [
      {
        title: 'Vocational Recommendations',
        content: 'Not all brake chambers are created equal. Buying the cheapest chamber for a severe duty application will cost you exponentially more in downtime. Depending on your vocation, you need a specific type of chamber to ensure safety and longevity.',
        table: {
          headers: ['Application / Vocation', 'Recommended BRC Series', 'Key Features'],
          rows: [
            ['Standard Linehaul (Dry Van, Reefer)', 'Standard Series', 'Cost-effective, reliable, 3-year warranty, lightweight design'],
            ['Severe Duty (Dump, Logging, Refuse)', 'Sealed Breathing Series', 'Prevents internal contamination, heavy-duty housing, extreme corrosion resistance'],
            ['Transit & Coach', 'Long-Stroke Series', 'Increased reserve stroke for frequent stop-and-go, heavy load capacity'],
            ['Heavy Haul (Lowboy, Multi-Axle)', 'Type 30/30 HD or Type 36', 'Maximum braking force, reinforced mounting studs, thick-gauge steel']
          ]
        }
      },
      {
        title: 'Piggyback vs. Complete Assembly',
        content: 'When a spring brake fails, you have two options: replace the entire assembly (Service Housing + Piggyback) or just replace the Piggyback (the rear spring section). Making the right choice saves labor hours and prevents return visits to the shop.',
        bullets: [
          'Use Piggybacks when: The mounting bracket, pushrod, clevis, and center section (service housing) are all in good, rust-free condition. This saves significant installation time because you don\'t have to re-cut a pushrod or remove the clevis pin.',
          'Use Complete Assemblies when: The vehicle has been in service for several years, the pushrod is heavily corroded, the service diaphragm has ruptured, or the mounting studs show signs of fatigue.'
        ]
      },
      {
        title: 'Frequently Asked Questions',
        faqs: [
          { question: 'Is a sealed chamber worth the extra cost?', answer: 'For on-highway linehaul trucks, a standard chamber is usually sufficient. However, if your vehicles operate in dirt, mud, gravel, or highly corrosive winter environments, sealed breathing technology prevents abrasive debris from destroying the internal return spring, doubling the chamber\'s lifespan.' },
          { question: 'What is a welded clevis assembly?', answer: 'Some complete assemblies come with the clevis pre-welded to the pushrod at a specific length for a specific truck manufacturer (like Volvo or Freightliner). This removes the need to cut the pushrod but limits the chamber to that specific application.' }
        ]
      }
    ]
  },

  'caging': {
    imageSrc: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&q=80',
    title: 'Safe Caging Procedures',
    category: 'Installation & Maint.',
    description: 'Critical, life-saving safety procedures for manually caging spring brake chambers during roadside maintenance and shop repairs.',
    icon: <ShieldAlert className="w-6 h-6 text-red-500" aria-hidden="true" />,
    alert: {
      type: 'danger',
      title: 'DANGER: EXTREME SPRING TENSION',
      message: 'A Type 30 spring brake contains a power spring compressed with over 2,000 lbs of force. If the housing is compromised, heavily rusted, or improperly opened, the spring can violently release, causing severe injury or death. NEVER attempt to pry open the tamper-resistant rear housing.'
    },
    sections: [
      {
        title: 'When to Cage a Spring Brake',
        content: '"Caging" refers to manually compressing the heavy parking spring inside the chamber using a mechanical bolt, rather than using air pressure. This is a mandatory safety step in several scenarios:',
        bullets: [
          'Before attempting to remove a spring brake chamber from the axle.',
          'When towing a vehicle that has lost system air pressure (to release the parking brakes).',
          'When performing maintenance on the slack adjuster, S-cam, or brake shoes where the pushrod must be retracted without air pressure.'
        ]
      },
      {
        title: 'Step-by-Step Mechanical Caging Procedure',
        steps: [
          {
            title: 'Secure the Vehicle (CRITICAL)',
            desc: 'Chock the wheels securely. The vehicle WILL roll once the spring brakes are caged if it is not on perfectly level ground. Lives are lost every year because this step is skipped.'
          },
          {
            title: 'Retrieve the Tool',
            desc: 'Remove the caging bolt, nut, and washer from the carrying pocket on the side of the chamber housing. If the bolt is missing, use a certified replacement; never use a standard hardware store bolt.'
          },
          {
            title: 'Remove the Dust Plug',
            desc: 'Pry off the rubber dust plug from the center hole of the rear spring housing.'
          },
          {
            title: 'Insert and Engage the T-Bar',
            desc: 'Insert the caging bolt through the hole. Push it in fully, then turn it 1/4 turn clockwise. Pull back on the bolt—you should feel the T-bar securely lock into the slotted pressure plate inside the housing.'
          },
          {
            title: 'Compress the Spring',
            desc: 'Install the washer and nut onto the threaded bolt. Using a hand wrench (DO NOT use an impact wrench), tighten the nut. Continue tightening until the spring is fully compressed and the pushrod retracts fully. Do not over-torque (max 35 ft-lbs), or you will strip the pressure plate.'
          }
        ]
      },
      {
        title: 'Troubleshooting Caging Issues',
        content: 'Sometimes caging doesn\'t go smoothly. Here are common issues and solutions:',
        bullets: [
          'Bolt Won\'t Turn: If the bolt binds while tightening, the internal spring may be broken and wedged. Stop immediately. Do not force it.',
          'Impact Wrench Damage: Using an impact gun to tighten the caging nut frequently strips the internal aluminum pressure plate, rendering the chamber dangerous and useless. Always use hand tools.',
          'Missing Caging Bolt: If the side-pocket bolt is missing, do not improvise. Borrow one from an adjacent chamber.'
        ]
      },
      {
        title: 'Frequently Asked Questions',
        faqs: [
          { question: 'Why is there a tamper-proof band on the rear housing?', answer: 'The tamper-resistant band prevents mechanics from accidentally opening the spring chamber, which holds the deadly 2,000lb spring. Only the front service chamber uses a removable clamp band.' },
          { question: 'Can I leave a chamber caged permanently?', answer: 'No. Caging is only for temporary maintenance or towing. Driving a vehicle with a caged brake means that wheel has zero emergency/parking braking capability, which is highly illegal and dangerous.' }
        ]
      }
    ],
    download: { name: 'Safety Caging Poster', size: '3.1 MB' }
  }
};
