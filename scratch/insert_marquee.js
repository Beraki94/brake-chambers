const fs = require('fs');

// 1. OEMCrossReferenceClient.tsx
let oemClient = fs.readFileSync('src/features/oem/components/OEMCrossReferenceClient.tsx', 'utf8');
if (!oemClient.includes('CrossReferenceMarquee')) {
  oemClient = oemClient.replace(
    "import OEMSearchForm from './OEMSearchForm';",
    "import OEMSearchForm from './OEMSearchForm';\nimport CrossReferenceMarquee from '@/components/ui/CrossReferenceMarquee';"
  );
  
  const target = "{/* SECTION 10 — RELATED RESOURCES */}";
  oemClient = oemClient.replace(
    target,
    "{/* NEW CROSS REF MARQUEE */}\n      <CrossReferenceMarquee />\n\n      " + target
  );
  fs.writeFileSync('src/features/oem/components/OEMCrossReferenceClient.tsx', oemClient);
  console.log('Updated OEMCrossReferenceClient.tsx');
}

// 2. [brandSlug]/page.tsx
let brandPage = fs.readFileSync('src/app/oem-cross-reference/[brandSlug]/page.tsx', 'utf8');
if (!brandPage.includes('CrossReferenceMarquee')) {
  brandPage = brandPage.replace(
    "import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';",
    "import GlobalFAQAccordion from '@/components/ui/GlobalFAQAccordion';\nimport CrossReferenceMarquee from '@/components/ui/CrossReferenceMarquee';"
  );
  
  brandPage = brandPage.replace(
    "{/* JSON-LD Schema */}",
    "<CrossReferenceMarquee filterBrand={brandInfo.name} />\n\n        {/* JSON-LD Schema */}"
  );
  fs.writeFileSync('src/app/oem-cross-reference/[brandSlug]/page.tsx', brandPage);
  console.log('Updated [brandSlug]/page.tsx');
}

// 3. [brandSlug]/[partNumber]/page.tsx
let partPage = fs.readFileSync('src/app/oem-cross-reference/[brandSlug]/[partNumber]/page.tsx', 'utf8');
if (!partPage.includes('CrossReferenceMarquee')) {
  partPage = partPage.replace(
    "import PageHeader from '@/components/layout/PageHeader';",
    "import PageHeader from '@/components/layout/PageHeader';\nimport CrossReferenceMarquee from '@/components/ui/CrossReferenceMarquee';"
  );
  
  partPage = partPage.replace(
    "    </div>\n  );\n}\n",
    "      <div className='mt-16'>\n        <CrossReferenceMarquee />\n      </div>\n    </div>\n  );\n}\n"
  );
  fs.writeFileSync('src/app/oem-cross-reference/[brandSlug]/[partNumber]/page.tsx', partPage);
  console.log('Updated [brandSlug]/[partNumber]/page.tsx');
}
