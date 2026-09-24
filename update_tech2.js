const fs = require('fs');

const targetFile = 'src/features/technical-resources/components/TechnicalResourcesClient.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

const newCategories = `  const categories = [
    {
      id: 'installation',
      title: 'Installation & Maintenance',
      icon: <Wrench className="w-7 h-7 text-amber-500" />,
      accent: 'amber',
      desc: 'Each guide contains detailed specifications, step-by-step procedures, and reference tables for technicians, engineers, and fleet managers.',
      items: [
        {
          title: 'Installation Guides',
          subtitle: 'Step-by-step mounting, push-rod cutting, and air line connection procedures.',
          slug: 'installation',
          icon: <Wrench className="w-5 h-5" />,
        },
        {
          title: 'Safe Caging Procedures',
          subtitle: 'Critical safety procedures for manually caging spring brakes during maintenance.',
          slug: 'caging',
          icon: <Shield className="w-5 h-5" />,
        }
      ],
    },
    {
      id: 'specifications',
      title: 'Specifications & Sizing',
      icon: <FileArchive className="w-7 h-7 text-navy-500" />,
      accent: 'navy',
      desc: 'Detailed size charts, stroke length guides, and thread specifications for precise component matching.',
      items: [
        {
          title: 'Size & Dimension Charts',
          subtitle: 'OD, mounting stud centers, push-rod lengths, and thread weights for Type 12 through Type 36.',
          slug: 'size-charts',
          icon: <Ruler className="w-5 h-5" />,
        },
        {
          title: 'Stroke Length Guide',
          subtitle: 'Standard vs. long-stroke limits and CVSA out-of-service readjustment criteria.',
          slug: 'stroke-length',
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: 'Chamber Selection Guides',
          subtitle: 'Choose the correct chamber by vocation: linehaul, severe-duty, transit, or heavy haul.',
          slug: 'selection-guides',
          icon: <BookOpen className="w-5 h-5" />,
        },
        {
          title: 'Visual Identification Guide',
          subtitle: 'How to identify chamber sizes and stroke types without part numbers.',
          slug: 'identification',
          icon: <Eye className="w-5 h-5" />,
        },
      ],
    }
  ];`;

// Replace categories array
content = content.replace(/  const categories = \[\s*\{[\s\S]*?\];\s*return/g, newCategories + '\n\n  return');

// Remove Video Training section entirely
// The video training section is marked by {/* SECTION 2: VIDEO TRAINING BANNER */}
// and ends right before {/* SECTION 3: LIBRARY CATEGORIES */}
content = content.replace(/\{\/\* SECTION 2: VIDEO TRAINING BANNER \*\/\}[\s\S]*?\{\/\* SECTION 3: LIBRARY CATEGORIES \*\/\}/, '{/* SECTION 2: LIBRARY CATEGORIES */}');

fs.writeFileSync(targetFile, content);
console.log('Successfully updated TechnicalResourcesClient.tsx');
