const fs = require('fs');
const file = './src/components/products/FacetedSidebar.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('const [openSection')) {
    content = content.replace(
        /const searchParams = useSearchParams\(\);/,
        'const searchParams = useSearchParams();\n  const [openSection, setOpenSection] = React.useState<string | null>(null);'
    );
}

content = content.replace(/<FilterAccordion title="([^"]+)">/g, 
  '<FilterAccordion \n        title="$1" \n        isOpen={openSection === "$1"} \n        onToggle={() => setOpenSection(openSection === "$1" ? null : "$1")}\n      >'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated FacetedSidebar.tsx');
