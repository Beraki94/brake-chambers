import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ShieldCheck, Ruler, FileText, Download, AlertTriangle, CheckCircle2, Settings, Wrench, ChevronRight, FileCog, ShieldAlert, AlertOctagon, Info } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';

// SEO-specific data for each resource page
import { SEO_DATA, TECHNICAL_RESOURCES_DATA } from '@/lib/technicalResourcesData';
import Card from '@/components/ui/Card';

export async function generateMetadata(props: { params: Promise<{ resourceSlug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { resourceSlug } = params;
  const data = TECHNICAL_RESOURCES_DATA[resourceSlug];
  const seo = SEO_DATA[resourceSlug];
  
  if (!data) return { title: 'Resource Not Found' };
  
  return {
    title: seo?.metaTitle || `${data.title} | Technical Resources | BRC`,
    description: seo?.metaDescription || data.description,
    keywords: seo?.keywords,
    alternates: {
      canonical: `https://brcengineering.com/technical-resources/${resourceSlug}`,
    },
    openGraph: {
      title: seo?.metaTitle || `${data.title} | BRC Engineering`,
      description: seo?.metaDescription || data.description,
      url: `https://brcengineering.com/technical-resources/${resourceSlug}`,
      type: 'article',
    },
  };
}

// Pre-render all resource pages at build time for SEO
export async function generateStaticParams() {
  return Object.keys(TECHNICAL_RESOURCES_DATA).map((slug) => ({
    resourceSlug: slug,
  }));
}

export default async function TechnicalResourcePage(props: { params: Promise<{ resourceSlug: string }> }) {

  const params = await props.params;
  const { resourceSlug } = params;
  const seo = SEO_DATA[resourceSlug];
  const data = TECHNICAL_RESOURCES_DATA[resourceSlug];

  if (!data) {
    notFound();
  }

  // Find other items in the same category for the sidebar navigation
  const relatedItems = Object.entries(TECHNICAL_RESOURCES_DATA)
    .filter(([slug, item]) => item.category === data.category && slug !== resourceSlug)
    .map(([slug, item]) => ({ slug, ...item }));


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": seo?.metaTitle || data.title,
    "description": seo?.metaDescription || data.description,
    "url": `https://brcengineering.com/technical-resources/${resourceSlug}`,
    "author": {
      "@type": "Organization",
      "name": "BRC Brake Chambers",
      "url": "https://brcengineering.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BRC Brake Chambers",
      "url": "https://brcengineering.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://brcengineering.com/technical-resources/${resourceSlug}`
    },
    "about": {
      "@type": "Thing",
      "name": "Commercial Vehicle Brake Chambers"
    },
    "datePublished": "2024-01-15T08:00:00Z",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
    <Script
      id={`tech-resource-${resourceSlug}-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <BreadcrumbSchema items={[
      { name: 'Technical Resources', item: '/technical-resources' },
      { name: data.title }
    ]} />
    <div className="bg-slate-50 min-h-screen pb-16">

      <PageHeader
        badge="Engineering Documentation"
        title={data.title}
        description={data.description}
        imageSrc={data.imageSrc}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Technical Resources', href: '/technical-resources' },
          { label: data.title }
        ]}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1920px] -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Main Content Area */}
          <div className="flex-grow space-y-10">
            
            {/* Main Content Card */}
            <Card padding="lg" className="] sm: lg: -slate-100 relative overflow-hidden">
              
              {/* Optional Alert Box */}
              {data.alert && (
                <div className={`mb-10 p-6 rounded-2xl border flex gap-4 
                  ${data.alert.type === 'danger' ? 'bg-red-50 border-red-200' : ''}
                  ${data.alert.type === 'warning' ? 'bg-amber-50 border-amber-200' : ''}
                  ${data.alert.type === 'info' ? 'bg-blue-50 border-blue-200' : ''}
                `}>
                  <div className={`shrink-0 mt-1
                    ${data.alert.type === 'danger' ? 'text-red-600' : ''}
                    ${data.alert.type === 'warning' ? 'text-amber-600' : ''}
                    ${data.alert.type === 'info' ? 'text-blue-600' : ''}
                  `}>
                    {data.alert.type === 'danger' && <AlertOctagon className="w-8 h-8" aria-hidden="true" />}
                    {data.alert.type === 'warning' && <AlertTriangle className="w-8 h-8" aria-hidden="true" />}
                    {data.alert.type === 'info' && <Info className="w-8 h-8" aria-hidden="true" />}
                  </div>
                  <div>
                    <h4 className={`text-lg font-black tracking-tight mb-2 uppercase
                      ${data.alert.type === 'danger' ? 'text-red-900' : ''}
                      ${data.alert.type === 'warning' ? 'text-amber-900' : ''}
                      ${data.alert.type === 'info' ? 'text-blue-900' : ''}
                    `}>{data.alert.title}</h4>
                    <p className={`font-medium leading-relaxed
                      ${data.alert.type === 'danger' ? 'text-red-800' : ''}
                      ${data.alert.type === 'warning' ? 'text-amber-800' : ''}
                      ${data.alert.type === 'info' ? 'text-blue-800' : ''}
                    `}>{data.alert.message}</p>
                  </div>
                </div>
              )}

              {/* Dynamic Sections */}
              <div className="space-y-12">
                {data.sections.map((section: any, sIdx: number) => (
                  <div key={sIdx}>
                    <h2 className="text-2xl font-bold text-navy-900 mb-6 font-heading tracking-tight">{section.title}</h2>
                    
                    {section.content && (
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">{section.content}</p>
                    )}

                    {/* Render Bullets */}
                    {section.bullets && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {section.bullets.map((bullet: string, bIdx: number) => (
                          <li key={bIdx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-slate-700 leading-relaxed font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Render Numbered Steps */}
                    {section.steps && (
                      <div className="space-y-6 mt-8">
                        {section.steps.map((step: any, stepIdx: number) => (
                          <div key={stepIdx} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-navy-200 transition-colors">
                            <div className="absolute top-0 left-0 w-2 h-full bg-navy-100 group-hover:bg-amber-500 transition-colors"></div>
                            <div className="w-12 h-12 shrink-0 bg-navy-900 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-inner">
                              {stepIdx + 1}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Render Tables */}
                    {section.table && (
                      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-navy-900 text-white">
                                {section.table.headers.map((header: string, hIdx: number) => (
                                  <th key={hIdx} className="p-4 font-bold text-sm tracking-wide">{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {section.table.rows.map((row: string[], rIdx: number) => (
                                <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                                  {row.map((cell: string, cIdx: number) => (
                                    <td key={cIdx} className={`p-4 text-sm ${cIdx === 0 ? 'font-bold text-navy-900' : 'text-slate-600'}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Render FAQs */}
                    {section.faqs && (
                      <div className="mt-8">
                        <GlobalFAQAccordion 
                          faqs={section.faqs.map((f: any) => ({ q: f.question, a: f.answer }))} 
                          theme="light" 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Optional Download CTA */}
            {data.download && (
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-[2rem] p-8 lg:p-10 shadow-xl border border-navy-800 text-white flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-20 -mt-20 z-0"></div>
                <div className="relative z-10 text-center sm:text-left">
                  <h3 className="text-2xl font-bold mb-2">Download Offline Copy</h3>
                  <p className="text-navy-200 text-lg">{data.download.name} ({data.download.size})</p>
                </div>
                <button className="relative z-10 shrink-0 bg-amber-500 hover:bg-amber-400 text-navy-900 font-black px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 hover:-translate-y-1 shadow-lg shadow-amber-500/20 uppercase tracking-widest text-sm">
                  <Download className="w-5 h-5" aria-hidden="true" /> Download PDF
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-6">
            
            {/* Related Topics Sidebar */}
            {relatedItems.length > 0 && (
              <Card padding="md" className="-slate-100 lg:sticky lg:top-24">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2 bg-navy-50 text-navy-500 rounded-lg">
                    {data.icon}
                  </div>
                  <h3 className="text-base font-black text-navy-900 uppercase tracking-widest">
                    More in Category
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {relatedItems.map((item) => (
                    <Link 
                      key={item.slug} 
                      href={`/technical-resources/${item.slug}`}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                    >
                      <span className="text-[15px] font-bold text-slate-600 group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-navy-900 text-white font-bold px-4 py-3 rounded-xl hover:bg-navy-800 transition-all hover:shadow-md uppercase tracking-wider text-xs">
                    Contact Engineering <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            )}
            
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
