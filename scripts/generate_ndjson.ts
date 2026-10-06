import * as fs from 'fs';
import { TECHNICAL_RESOURCES_DATA, SEO_DATA } from '../src/lib/technicalResourcesData';

const documents: any[] = [];

for (const [slug, resource] of Object.entries(TECHNICAL_RESOURCES_DATA)) {
  const seo = SEO_DATA[slug] || {};
  
  const doc: any = {
    _id: `technicalResource-${slug}`,
    _type: 'technicalResource',
    title: resource.title,
    slug: {
      _type: 'slug',
      current: slug
    },
    category: resource.category,
    description: resource.description,
    imageSrc: resource.imageSrc,
    seo: {
      _type: 'seo',
      metaTitle: seo.metaTitle || '',
      metaDescription: seo.metaDescription || '',
      keywords: seo.keywords || ''
    },
    sections: (resource.sections || []).map((section: any, index: number) => {
      const formattedSection: any = {
        _type: 'section',
        _key: `section-${index}`,
        title: section.title,
        content: section.content || undefined,
      };

      if (section.bullets && section.bullets.length > 0) {
        formattedSection.bullets = section.bullets;
      }

      if (section.steps && section.steps.length > 0) {
        formattedSection.steps = section.steps.map((step: any, sIdx: number) => ({
          _type: 'object',
          _key: `step-${sIdx}`,
          title: step.title,
          desc: step.desc,
        }));
      }

      if (section.table && section.table.rows) {
        formattedSection.table = {
          _type: 'object',
          headers: section.table.headers,
          rows: section.table.rows.map((row: any, rIdx: number) => ({
            _type: 'object',
            _key: `row-${rIdx}`,
            cells: row,
          }))
        };
      }

      if (section.faqs && section.faqs.length > 0) {
        formattedSection.faqs = section.faqs.map((faq: any, fIdx: number) => ({
          _type: 'object',
          _key: `faq-${fIdx}`,
          question: faq.question || faq.q,
          answer: faq.answer || faq.a,
        }));
      }

      return formattedSection;
    })
  };

  if (resource.alert) {
    doc.alert = {
      _type: 'object',
      type: resource.alert.type,
      title: resource.alert.title || '',
      message: resource.alert.message || '',
    };
  }

  if (resource.download) {
    doc.download = {
      _type: 'object',
      name: resource.download.name,
      size: resource.download.size,
    };
  }

  documents.push(doc);
}

const ndjson = documents.map(doc => JSON.stringify(doc)).join('\n');
fs.writeFileSync('technical-resources-export.ndjson', ndjson);
console.log('Successfully generated technical-resources-export.ndjson');
