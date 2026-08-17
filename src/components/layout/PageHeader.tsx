import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PageHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
  imageSrc?: string;
  breadcrumbs?: { label: string; href?: string }[];
  fullColorBackground?: boolean;
}

export default function PageHeader({ badge, title, description, children, imageSrc = '/images/engineering_blueprint.png', breadcrumbs, fullColorBackground = false }: PageHeaderProps) {
  return (
    <section className="relative pt-6 md:pt-10 lg:pt-12 pb-24 md:pb-32 border-b border-navy-800 overflow-hidden px-4 sm:px-6 lg:px-8 bg-navy-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Header Background"
          fill
          className={`object-cover opacity-40 ${fullColorBackground ? '' : 'mix-blend-luminosity grayscale'}`}
          priority
        />
        {/* Dark Gradient Overlay to ensure text readability */}
        <div className={`absolute inset-0 ${fullColorBackground ? 'bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950' : 'bg-gradient-to-b md:bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/40 opacity-90'}`}></div>
      </div>

      {/* Blueprint Grid Overlay (Static) */}
      <div
        className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Dynamic Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-amber-500 opacity-10 rounded-full blur-[80px] md:blur-[120px] -mr-20 -mt-20 md:-mr-40 md:-mt-40 mix-blend-screen pointer-events-none z-10"></div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-20">
        
        {/* TOP LEFT BREADCRUMB - Standardized Position */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-12 md:mb-16 mt-2">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy-300 font-medium">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <li><span className="text-navy-600">/</span></li>}
                  {crumb.href ? (
                    <li><Link href={crumb.href} className="hover:text-amber-400 transition-colors">{crumb.label}</Link></li>
                  ) : (
                    <li className="text-white" aria-current={idx === breadcrumbs.length - 1 ? 'page' : undefined}>
                      {crumb.label}
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        {/* Left-Aligned Hero Content */}
        <div className="max-w-4xl text-left">
          {badge && (
            <div className="inline-block px-3 py-1 mb-4 md:px-4 md:py-1.5 md:mb-6 rounded-full bg-gradient-to-r from-navy-800 to-navy-900 border border-navy-700 text-amber-400 text-[10px] md:text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-navy-950 whitespace-nowrap">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-4 md:mb-6 tracking-tight drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-base md:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl font-light text-navy-100">
            {description}
          </p>
          
          {children}
        </div>
      </div>
    </section>
  );
}
