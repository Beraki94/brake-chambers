const fs = require('fs');

const content = `import React from 'react';
import { ShieldCheck, Ruler, FileText, Wrench, ShieldAlert } from 'lucide-react';

export const SEO_DATA: Record<string, { metaTitle: string; metaDescription: string; keywords: string }> = {
  'size-charts': {
    metaTitle: 'Brake Chamber Size Chart - Type 12 Through Type 36 Dimensions | BRC',
    metaDescription: 'Complete brake chamber size and dimension charts. OD, mounting stud centers, push-rod thread, and weight for Type 12 through Type 36. SAE J1469 compliant.',
    keywords: 'brake chamber size chart, brake chamber dimensions, Type 30 brake chamber size, Type 24 brake chamber dimensions, mounting stud centers, pushrod thread size, SAE J1469, spring brake dimensions, service chamber dimensions',
  },
  'stroke-length': {
    metaTitle: 'Brake Chamber Stroke Length Guide & CVSA Readjustment Limits | BRC',
    metaDescription: 'Understand standard vs. long-stroke brake chamber limits. CVSA readjustment out-of-service criteria for Type 16-36 chambers. Avoid DOT violations with correct stroke measurement.',
    keywords: 'stroke length guide, CVSA readjustment limits, long stroke brake chamber, standard stroke limit, out of service criteria, DOT brake inspection, brake chamber stroke measurement, Type 30 stroke limit',
  },
  'installation': {
    metaTitle: 'Brake Chamber Installation Guide - Step-by-Step Procedures | BRC',
    metaDescription: 'Complete brake chamber installation guide. Pre-installation diagnostics, push-rod cutting formulas, torque specs, and safe uncaging procedures. Free PDF download.',
    keywords: 'brake chamber installation, how to install brake chamber, pushrod cutting, clevis installation, air brake installation guide, mounting torque specs, brake chamber replacement, commercial truck brakes',
  },
  'identification': {
    metaTitle: 'How to Identify Brake Chamber Size & Stroke Type | Visual Guide | BRC',
    metaDescription: 'Visually identify brake chamber sizes and long-stroke vs standard-stroke types without part numbers. Clamp band measurement, square port identification, and trapezoidal tag recognition.',
    keywords: 'identify brake chamber size, brake chamber identification, long stroke identification, clamp band measurement, brake chamber part number, square port brake chamber, trapezoidal tag',
  },
  'selection-guides': {
    metaTitle: 'Brake Chamber Selection Guide - Choose by Vocation | BRC',
    metaDescription: "Match the right brake chamber to your fleet's vocation. Linehaul, severe-duty, transit, and heavy haul selection guidance with piggyback vs. assembly comparison.",
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
    title: 'Brake Chamber Size & Dimension Charts - Type 12 through Type 36',
    category: 'Specifications & Sizing',
    description: 'Complete dimension tables for BRC spring brake and service brake chambers. Includes outside diameter, mounting stud centers, push-rod thread, and approximate weight - verified to SAE J1469 compliance standards.',
    icon: <Ruler className="w-6 h-6 text-emerald-500" aria-hidden="true" />,
    alert: {
      type: 'info',
      title: 'SAE J1469 COMPLIANCE',
      message: "All BRC brake chamber dimensions adhere to SAE J1469 interchangeability standards - the same protocol used by Bendix, Haldex, Meritor, and Knorr-Bremse. Chambers that don't meet this standard can cause bracket fatigue, push-rod binding, and premature failure."
    },
    sections: [
      {
        title: 'Spring Brake Chamber Dimensions (Type 20/24 to Type 30/30)',
        content: 'Accurate dimensions prevent installation failures on tandem axle setups. This chart covers double-diaphragm spring brake chambers (combination service + parking). Compare outside diameter (OD), mounting stud centers, push-rod thread, and approximate weight before ordering. All dimensions verified to SAE J1469.',
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
        title: 'Important Note on Stroke Type',
        content: "NOTE: Type 30/30 LS refers to Long Stroke. Confirm your existing chamber's stroke length before ordering - long-stroke chambers are not interchangeable with standard-stroke chambers on the same slack adjuster."
      },
      {
        title: 'Service Brake Chamber Dimensions (Type 12 to Type 30)',
        content: 'Service brake chambers are single-diaphragm chambers used on steer axles, drive axles, trailer axles, and lift axle applications where a parking spring is not required. Compare outside diameter (OD), mounting stud centers, and push-rod thread before ordering.',
        table: {
          headers: ['Type Size', 'Outside Diameter (OD)', 'Mounting Stud Centers', 'Pushrod Thread', 'Approx. Weight'],
          rows: [
            ['Type 12', '5.7" (145mm)', '4.75" (120.7mm)', '5/8-11 UNC', '8.8 lbs'],
            ['Type 16', '6.4" (162mm)', '4.75" (120.7mm)', '5/8-11 UNC', '10.6 lbs'],
            ['Type 20', '6.8" (173mm)', '4.75" (120.7mm)', '5/8-11 UNC', '12.4 lbs'],
            ['Type 24', '7.1" (180mm)', '4.75" (120.7mm)', '5/8-11 UNC', '14.1 lbs'],
            ['Type 30', '8.2" (208mm)', '4.75" (120.7mm)', '5/8-11 UNC', '16.8 lbs'],
          ]
        }
      },
      {
        title: 'Brake Chamber Size & Dimension FAQs',
        content: 'Common questions from technicians and fleet managers about brake chamber dimensions.',
        faqs: [
          { question: 'Why are push-rod threads usually 5/8-11 UNC?', answer: '5/8-11 UNC is the standard push-rod thread size across most North American commercial vehicle brake chambers. It provides adequate clamping force for clevis attachment while remaining compatible with standard clevis yokes. Some European and Japanese applications use metric threads - verify your specific application.' },
          { question: 'Does a larger OD mean more braking power?', answer: 'Not directly. Braking force is determined by the effective diaphragm area (the type number, e.g., Type 30), not the housing outside diameter. Two chambers with the same type number but different ODs deliver the same braking force. OD affects clearance and mounting, not power output.' },
          { question: 'Can I use a Type 30 service chamber in place of a Type 24?', answer: 'No, and you should not try. Type numbers correspond to specific effective diaphragm areas. Substituting a different type changes the force delivered to the slack adjuster, which affects braking balance across the axle. Always match the OEM type number.' },
          { question: 'Are Type 30/30 and Type 30/30 LS interchangeable?', answer: "No. Standard-stroke and long-stroke chambers have different push-rod travel. Installing the wrong stroke will prevent correct slack adjuster operation. Verify your existing chamber's stroke before ordering." },
          { question: 'Do BRC chamber dimensions match Bendix, Haldex, and Meritor?', answer: "Yes. All BRC chambers are dimensioned to SAE J1469 interchangeability standards, so outside diameter, stud centers, and push-rod thread match the OEM part numbers you're replacing. Use our OEM cross-reference tool for a direct part-number match." },
          { question: 'Where can I find the weight of a specific brake chamber?', answer: 'Both dimension tables on this page include an approximate weight column. For exact shipping weights, contact our team.' }
        ]
      }
    ],
    download: { name: 'Full Dimension Catalog PDF', size: '~1.5 MB' }
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
          'Faulty Automatic Slack Adjuster (ASA): The ASA may be failing to take up the slack dynamically. Do not manually adjust an ASA to fix a stroke issue - diagnose the root cause.',
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
    title: 'Brake Chamber Installation Guide - Step-by-Step Procedures',
    category: 'Installation & Maint.',
    description: 'Complete installation instructions for standard and long-stroke air brake chambers. Includes pre-installation diagnostics, push-rod cutting formulas, torque specifications, and safe uncaging procedures.',
    icon: <Wrench className="w-6 h-6 text-blue-500" aria-hidden="true" />,
    alert: {
      type: 'danger',
      title: 'CRITICAL SAFETY WARNING',
      message: 'Always chock the vehicle wheels and release the parking brake before beginning any work on the brake system. If replacing a spring brake chamber, you must manually cage the power spring before removing the chamber from the mounting bracket. Failure to cage the spring can result in serious injury.'
    },
    sections: [
      {
        title: 'Pre-Installation Diagnostics & Preparation',
        content: 'Before swapping a brake chamber, confirm the diagnosis. A leaking air line or faulty dash valve can mimic a ruptured diaphragm. Once confirmed, complete these preparation steps:',
        bullets: [
          'Exhaust the air system completely to 0 psi before beginning work.',
          'Inspect the mounting bracket on the axle for cracks, bending, or severe rust. A bent bracket will cause push-rod binding.',
          'Verify the replacement brake chamber matches the size and stroke type of the old chamber.',
          'Ensure the slack adjuster operates freely, is properly lubricated, and the clevis pin holes are not wallowed out.'
        ]
      },
      {
        title: 'Step-by-Step Brake Chamber Installation Procedure',
        steps: [
          {
            title: 'Mount the Chamber',
            desc: 'Insert the mounting studs through the bracket holes. Install lock washers and nuts. Torque mounting nuts to 100-115 ft-lbs (135-155 Nm) for standard 5/8-11 threads. Do not over-torque - excessive torque can pull the studs out of the non-pressure housing.'
          },
          {
            title: 'Calculate & Cut the Push-Rod',
            desc: 'With the slack adjuster manually adjusted to its fully released position, measure the required push-rod length. Critical rule: the angle between the push-rod and the slack adjuster arm must be exactly 90 degrees when the brake is applied at half stroke. Cut the push-rod to this exact length using a square cut. Do not use a torch - heat will weaken the metal.'
          },
          {
            title: 'Install the Clevis',
            desc: 'Thread the jam nut onto the push-rod, followed by the clevis. Ensure at least 1/2 inch of thread engagement inside the clevis body to prevent thread pull-out. Install the clevis pin and secure it with a new cotter pin. Tighten the jam nut against the clevis to 40-50 ft-lbs.'
          },
          {
            title: 'Connect Air Lines',
            desc: 'Apply liquid thread sealant to the air fittings (do not apply to the first two threads - this prevents sealant from entering the air system). Connect the service air line (Port 11) and the emergency/parking air line (Port 12). Torque fittings to 20-25 ft-lbs.'
          },
          {
            title: 'Uncage and Test',
            desc: 'Apply system air pressure (100+ psi) to the parking brake port to compress the power spring pneumatically. Remove the caging bolt from the rear housing. Apply anti-seize and store it in the side pocket. Perform a leak-down test with soapy water and verify proper stroke length.'
          }
        ]
      },
      {
        title: 'Brake Chamber Installation FAQs',
        content: 'Common questions from technicians installing BRC brake chambers.',
        faqs: [
          { question: 'What happens if I cut the push-rod too short?', answer: 'A push-rod that is too short cannot achieve the 90-degree angle at half stroke, which means the slack adjuster cannot properly actuate the brake. The brake will either not apply fully or will over-stroke, causing poor braking performance and premature chamber wear. The push-rod must be replaced if cut too short.' },
          { question: "Why shouldn't I use a torch to cut the push-rod?", answer: 'A torch introduces heat into the metal, which can alter the steel\'s hardness and create a weak point. Under braking loads, this weakened section can bend or fail. Always use a hacksaw, cutoff wheel, or band saw for a square, cool cut.' },
          { question: 'What torque should I use on the mounting nuts?', answer: 'For standard 5/8-11 mounting studs, torque to 100-115 ft-lbs (135-155 Nm). Do not over-torque - excessive torque can pull the studs out of the non-pressure housing. Use a calibrated torque wrench.' },
          { question: 'How much push-rod should be inside the clevis?', answer: 'At least 1/2 inch of thread engagement inside the clevis body. Less than this risks thread pull-out under braking load. If the push-rod cannot reach 1/2 inch engagement, the rod is too short.' },
          { question: 'Do I need to install a new clevis pin?', answer: 'Always install a new clevis pin and cotter pin. Reusing old pins can cause fitment issues from wallowed-out holes or fatigue cracks. New pins are inexpensive - always replace them.' },
          { question: 'What pressure should I use to uncage the spring?', answer: 'Apply 100+ psi to the parking brake port to fully compress the power spring pneumatically before removing the caging bolt. Never attempt to remove the caging bolt without air pressure applied.' }
        ]
      }
    ],
    download: { name: 'Complete Installation Manual PDF', size: '~2.4 MB' }
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
    title: 'Brake Chamber Selection Guide - Choose by Vocation',
    category: 'Specifications & Sizing',
    description: 'A step-by-step guide to choosing the correct brake chamber series for your specific vocation - linehaul, severe-duty, transit, or heavy haul. Match the chamber to the operating environment to extend service life and reduce maintenance cost.',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" aria-hidden="true" />,
    sections: [
      {
        title: 'Brake Chamber Selection by Vocation',
        content: "Different operating environments require different brake chamber specifications. This table helps you match the chamber to your fleet's vocation.",
        table: {
          headers: ['Application / Vocation', 'Recommended Chamber Type', 'Key Features'],
          rows: [
            ['Standard Linehaul (Dry Van, Reefer)', 'Spring Brake, Standard Stroke', 'Cost-effective, reliable, standard 3-year service life, lightweight design.'],
            ['Severe Duty (Dump, Logging, Refuse)', 'Spring Brake, Sealed Housing', 'Prevents internal contamination, heavy-duty housing, epoxy-coated springs for corrosion resistance.'],
            ['Transit & Coach', 'Service Chamber or ADB Actuator, Long Stroke', 'Increased reserve stroke for frequent stop-and-go, heavy load capacity, quiet operation.'],
            ['Heavy Haul (Lowboy, Multi-Axle)', 'Type 30/30 HD or Type 36 Spring Brake', 'Maximum braking force, reinforced mounting studs, thick-gauge steel housing.']
          ]
        }
      },
      {
        title: 'Piggyback vs. Complete Spring Brake Assembly',
        content: 'When a spring brake chamber fails, you have two replacement options: replace the entire assembly (service housing + piggyback) or replace only the piggyback (the rear spring section). Choosing correctly saves labor hours and prevents return visits to the shop.',
        bullets: [
          'Use a Piggyback When: The mounting bracket, push-rod, clevis, and center section (service housing) are all in good, rust-free condition. Piggyback replacement saves installation time because you don\'t have to re-cut a push-rod or remove the clevis pin.',
          'Use a Complete Assembly When: The chamber has been in service for several years, the push-rod is heavily corroded, the service diaphragm has ruptured, or the mounting studs show signs of fatigue. Replacing the entire assembly is safer and more reliable in these conditions.'
        ]
      },
      {
        title: 'Brake Chamber Selection FAQs',
        content: 'Common questions from fleet managers and technicians choosing the right brake chamber.',
        faqs: [
          { question: 'Is a sealed chamber worth the extra cost?', answer: 'Yes, for severe-duty applications. Sealed chambers use a sealed housing that prevents dust, mud, and moisture from entering the internal chamber. In dump, logging, refuse, and construction environments, this can double or triple service life compared to standard chambers. For linehaul duty, standard chambers are typically sufficient.' },
          { question: 'What is a welded clevis assembly?', answer: 'A welded clevis assembly is a spring brake chamber where the clevis is factory-welded to the push-rod rather than threaded and jam-nutted. Welded clevis chambers are common on original equipment and eliminate the risk of clevis thread pull-out. They are not field-adjustable - the push-rod length is fixed.' },
          { question: 'Should I use standard or long-stroke chambers?', answer: 'Use long-stroke chambers for transit, coach, and severe stop-and-go applications where brake shoe wear is rapid. Long-stroke chambers provide additional reserve push-rod travel, which keeps the slack adjuster in the proper operating range as shoes wear. Standard-stroke is sufficient for linehaul duty.' },
          { question: 'When should I upgrade from Type 30/30 to Type 36?', answer: 'Upgrade to Type 36 for lowboy, multi-axle, and heavy haul applications where the loaded weight exceeds typical linehaul duty. Type 36 chambers deliver higher clamping force, but also require higher air pressure and larger slack adjusters.' },
          { question: 'Can I mix different chamber types on the same axle?', answer: 'No. Both sides of an axle should have the same chamber type, stroke, and manufacturer. Mixing chamber types on the same axle causes imbalanced braking, uneven shoe wear, and potential brake pull.' },
          { question: 'How do I choose a chamber for a mixed-fleet operation?', answer: 'For mixed fleets, standardize on one or two chamber types used across most vehicles in the fleet. This reduces parts inventory, simplifies training, and allows mechanics to work faster. If your fleet spans both linehaul and severe-duty vocations, use sealed chambers as your universal choice.' }
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
            desc: 'Insert the caging bolt through the hole. Push it in fully, then turn it 1/4 turn clockwise. Pull back on the bolt-you should feel the T-bar securely lock into the slotted pressure plate inside the housing.'
          },
          {
            title: 'Compress the Spring',
            desc: 'Install the washer and nut onto the threaded bolt. Using a hand wrench (DO NOT use an impact wrench), tighten the nut. Continue tightening until the spring is fully compressed and the pushrod retracts fully. Do not over-torque (max 35 ft-lbs), or you will strip the pressure plate.'
          }
        ]
      },
      {
        title: 'Troubleshooting Caging Issues',
        content: "Sometimes caging doesn't go smoothly. Here are common issues and solutions:",
        bullets: [
          "Bolt Won't Turn: If the bolt binds while tightening, the internal spring may be broken and wedged. Stop immediately. Do not force it.",
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
`;

fs.writeFileSync('src/lib/technicalResourcesData.tsx', content, 'utf-8');
console.log('Successfully updated technicalResourcesData.tsx');
