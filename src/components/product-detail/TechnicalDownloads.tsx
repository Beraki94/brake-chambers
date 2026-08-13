import React from 'react';
import { FileText, Download, ShieldCheck } from 'lucide-react';

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
      icon: <ShieldCheck className="w-6 h-6 text-success-600" />
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
        Downloads & Documentation
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {downloads.map((doc, idx) => (
          <div 
            key={idx}
            className="group flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-primary-400 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex-shrink-0 mt-1">
              {doc.icon}
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-navy-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {doc.type} &bull; {doc.size}
              </p>
            </div>
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <Download className="w-5 h-5 text-primary-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
