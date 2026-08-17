import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { APPLICATION_DATA } from '@/data/applicationsData';
import ApplicationDetailClient from '@/components/page-clients/ApplicationDetailClient';

export async function generateMetadata(props: { params: Promise<{ appSlug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const data = APPLICATION_DATA[params.appSlug];
  
  if (!data) {
    return {
      title: 'Application Not Found',
    };
  }

  return {
    title: `${data.title} | BRC Air Brake Chambers`,
    description: data.desc,
    keywords: data.keywords.join(', '),
    openGraph: {
      title: `${data.title} | BRC Air Brake Chambers`,
      description: data.desc,
      type: 'website',
      images: [
        {
          url: data.heroImage || '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: data.title,
        }
      ]
    }
  };
}

export function generateStaticParams() {
  return Object.keys(APPLICATION_DATA).map((slug) => ({
    appSlug: slug,
  }));
}

export default async function ApplicationPage(props: { params: Promise<{ appSlug: string }> }) {
  const params = await props.params;
  const { appSlug } = params;
  
  const data = APPLICATION_DATA[appSlug];
  
  if (!data) {
    notFound();
  }

  return (
    <>
      <ApplicationDetailClient appSlug={appSlug} />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": data.title,
            "description": data.desc,
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": data.faqs.map((faq: any) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          })
        }}
      />
    </>
  );
}
