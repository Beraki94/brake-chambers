import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { getProducts } from '@/sanity/queries';
import ProductListingLayout from '@/features/products/components/ProductListingLayout';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';
import SectionHeader from '@/components/ui/SectionHeader';
import { Disc, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Air Disc Brake Actuators (ADB): High-Output Technology | BRC',
  description: 'Next-generation air disc brake actuators with HOT Technology. Superior clamping force, reduced brake fade. Direct replacements for Bendix, Haldex, Meritor & WABCO. Factory-direct pricing.',
  keywords: ['Air Disc Actuators', 'ADB Actuators', 'Type 20/24 ADB', 'Commercial Air Brakes', 'Bendix ADB22X Replacement'],
};

export default async function AirDiscActuatorsPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const BRAKE_CHAMBERS = await getProducts();
  const searchParams = props.searchParams ? await props.searchParams : undefined;
  
  // Base Filter for ADB Actuators
  let products = BRAKE_CHAMBERS.filter(c => c.category === 'Air Disc Actuator');

  // Legacy basic filters for main page
  if (searchParams?.filter) {
    const filter = searchParams.filter as string;
    if (filter === 'Standard') {
      products = products.filter(c => c.strokeSize === 'Standard');
    }
  }

  const seoContent = (
    <>
      <section className="mb-16">
        <SectionHeader
          badge="Technical Overview"
          title="What Is an Air Disc Brake Actuator?"
          align="left"
          accentColor="amber"
          className="!mb-8"
        />
        <div className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl">
          <p className="mb-4">
            An air disc brake actuator (sometimes called an ADB chamber or air disc chamber) is a pneumatic device that converts air pressure into linear mechanical force to activate disc brake calipers. Unlike traditional S-cam drum brake chambers, which use a rotating S-cam to push brake shoes outward, an ADB actuator pushes a piston or lever directly against the brake caliper.
          </p>
          <p className="mb-6">
            This direct-force design delivers faster response, more consistent pad pressure, and shorter stopping distances than drum brakes. Air disc brakes are now standard equipment on most new heavy-duty trucks and transit buses.
          </p>
          <Link href="/technical-resources" className="text-amber-600 font-bold hover:underline inline-flex items-center">
            See our brake chamber technical resources <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      <section className="mb-16 bg-slate-50 p-8 rounded-3xl border border-slate-100">
        <SectionHeader
          badge="Product Range"
          title="Air Disc Brake Actuator Types We Manufacture"
          align="center"
          accentColor="amber"
          className="!mb-6"
        />
        <div className="text-slate-600 leading-relaxed text-sm md:text-base max-w-4xl mx-auto space-y-4 text-center">
          <p>
            BRC manufactures a full range of commercial air disc brake actuators. Every model is a direct OEM replacement for Bendix, Haldex, Meritor, and WABCO part numbers.
          </p>
          <div className="pt-4">
            <Link href="/products" className="text-amber-600 font-bold hover:underline inline-flex items-center">
              View all ADB actuator specs <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto">
        <SectionHeader
          badge="Common Questions"
          title="Air Disc Brake Actuator FAQs"
          description="Common questions from fleet managers and distributors about air disc brake actuators."
          align="center"
          accentColor="amber"
        />
        <GlobalFAQAccordion faqs={[
          {
            q: 'What is the difference between an air disc brake actuator and a spring brake chamber?',
            a: 'An air disc brake actuator is designed specifically for air disc brake systems. It pushes a piston or lever directly against the brake caliper. A spring brake chamber is designed for S-cam drum brake systems, it uses a rotating S-cam to push brake shoes outward. The two are not interchangeable.'
          },
          {
            q: 'Can I replace a standard drum brake chamber with an ADB actuator?',
            a: 'No. Air disc brake actuators and drum brake chambers are mechanically incompatible. If your vehicle has drum brakes, it uses drum chambers. If it has disc brakes, it uses ADB actuators. You cannot substitute one for the other.'
          },
          {
            q: 'What is HOT Technology?',
            a: 'HOT (High Output Technology) is BRC\'s proprietary internal mechanism that maintains consistent clamping force as friction builds over time. Standard ADB actuators lose clamping force as internal friction increases. HOT Technology corrects this by maximizing mechanical advantage through a proprietary internal design, delivering consistent stopping power over millions of cycles.'
          },
          {
            q: 'Are your ADB actuators compatible with Bendix ADB22X calipers?',
            a: 'Yes. BRC ADB actuators are engineered as direct replacements for Bendix ADB22X, Meritor EX+, and WABCO PAN/MAX caliper systems. Use our OEM cross-reference tool to confirm the exact part number match for your vehicle.'
          },
          {
            q: 'Do ADB actuators require different air pressure than drum chambers?',
            a: 'No. Air disc brake actuators and drum brake chambers operate on the same air system pressure (typically 100 to 120 PSI). The difference is in the internal mechanism and caliper interface, not the air supply.'
          },
          {
            q: 'What is the service life of an air disc brake actuator?',
            a: 'Under normal commercial vehicle duty, BRC ADB actuators are designed to deliver the same service life as the OEM actuator they replace, typically 500,000 to 1,000,000 miles depending on application, duty cycle, and maintenance. Actual lifespan depends on route type, load weight, and braking frequency.'
          }
        ]} />
        <div className="mt-8 text-center">
          <Link href="/technical-resources" className="text-amber-600 font-bold hover:underline inline-flex items-center">
            See all brake chamber technical resources <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      <Script id="adb-actuators-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Air Disc Brake Actuators (ADB): High-Output Technology",
          "description": "Next-generation air disc brake actuators with HOT Technology. Superior clamping force, reduced brake fade. Direct replacements for Bendix, Haldex, Meritor & WABCO.",
          "url": "https://www.brcbrakechambers.com/air-disc-brake-actuators",
          "manufacturer": {
            "@type": "Organization",
            "name": "BRC Brake Chambers"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the difference between an air disc brake actuator and a spring brake chamber?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An air disc brake actuator is designed specifically for air disc brake systems. It pushes a piston or lever directly against the brake caliper. A spring brake chamber is designed for S-cam drum brake systems, it uses a rotating S-cam to push brake shoes outward. The two are not interchangeable."
              }
            },
            {
              "@type": "Question",
              "name": "Can I replace a standard drum brake chamber with an ADB actuator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Air disc brake actuators and drum brake chambers are mechanically incompatible. If your vehicle has drum brakes, it uses drum chambers. If it has disc brakes, it uses ADB actuators. You cannot substitute one for the other."
              }
            },
            {
              "@type": "Question",
              "name": "What is HOT Technology?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "HOT (High Output Technology) is BRC's proprietary internal mechanism that maintains consistent clamping force as friction builds over time. Standard ADB actuators lose clamping force as internal friction increases. HOT Technology corrects this by maximizing mechanical advantage through a proprietary internal design, delivering consistent stopping power over millions of cycles."
              }
            },
            {
              "@type": "Question",
              "name": "Are your ADB actuators compatible with Bendix ADB22X calipers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. BRC ADB actuators are engineered as direct replacements for Bendix ADB22X, Meritor EX+, and WABCO PAN/MAX caliper systems. Use our OEM cross-reference tool to confirm the exact part number match for your vehicle."
              }
            },
            {
              "@type": "Question",
              "name": "Do ADB actuators require different air pressure than drum chambers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Air disc brake actuators and drum brake chambers operate on the same air system pressure (typically 100 to 120 PSI). The difference is in the internal mechanism and caliper interface, not the air supply."
              }
            },
            {
              "@type": "Question",
              "name": "What is the service life of an air disc brake actuator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Under normal commercial vehicle duty, BRC ADB actuators are designed to deliver the same service life as the OEM actuator they replace, typically 500,000 to 1,000,000 miles depending on application, duty cycle, and maintenance. Actual lifespan depends on route type, load weight, and braking frequency."
              }
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.brcbrakechambers.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Air Disc Actuators",
              "item": "https://www.brcbrakechambers.com/air-disc-brake-actuators"
            }
          ]
        }
      ]) }} />
    </>
  );

  return (
    <ProductListingLayout
      badge="Disc Brake Systems"
      badgeIcon={Disc}
      title="Air Disc Brake Actuators (ADB): High-Output Technology"
      description="Next-generation air disc brake actuators delivering superior clamping force, reduced brake fade, and longer pad life. Direct replacement for Bendix, Haldex, Meritor, and WABCO. HOT Technology inside. Factory-direct pricing."
      baseCategory="air-disc-brake-actuators"
      products={products}
      searchParams={searchParams}
      visualizerType="adp"
      seoText={seoContent}
      breadcrumbs={[{ label: 'Air Disc Actuators' }]}
    />
  );
}
