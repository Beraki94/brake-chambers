import React from 'react';
import { FileText, Download, ShieldCheck } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';

interface TechnicalDownloadsProps {
  productName: string;
}

export default function TechnicalDownloads({ productName }: TechnicalDownloadsProps) {
  const downloads = [
    {
      title: `${productName} Specification Sheet`,
      type: 'PDF',
      size: '1.2 MB',
      icon: <FileText className="w-6 h-6 text-red-500" />
    },
    {
      title: "Installation & Maintenance Guide",
      type: 'PDF',
      size: '2.4 MB',
      icon: <FileText className="w-6 h-6 text-red-500" />
    },
    {
      title: "DOT & ISO Compliance Certificate",
      type: 'PDF',
      size: '800 KB',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeader
        title="Downloads & Documentation"
        align="left"
        theme="light"
        accentColor="slate"
        plainText={true}
        className="!mb-8"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {downloads.map((doc, idx) => (
          <Card padding="md" hoverEffect="lift" glowColor="amber" className="group flex items-start gap-4 -slate-200 hover:-amber-400 hover: cursor-pointer">
            <div className="flex-shrink-0 mt-1">
              {doc.icon}
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-navy-900 text-sm mb-1 group-hover:text-amber-600 transition-colors">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {doc.type} &bull; {doc.size}
              </p>
            </div>
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <Download className="w-5 h-5 text-amber-500" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
