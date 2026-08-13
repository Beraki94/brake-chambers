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
}

export default function PageHeader({ badge, title, description, children, imageSrc = '/images/engineering_blueprint.png', breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative pt-6 md:pt-10 lg:pt-12 pb-16 sm:pb-24 md:pb-32 border-b border-navy-800 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Header Background"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        {/* Dark Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/90 to-navy-950"></div>
      </div>

      {/* Accent Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px] -mr-40 -mt-40 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -ml-40 -mb-40 mix-blend-screen pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* TOP LEFT BREADCRUMB - Standardized Position */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-12 md:mb-16 mt-2">
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

        {/* Centered Hero Content */}
        <div className="max-w-3xl text-center mx-auto">
          {badge && (
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy-900/80 border border-navy-700 shadow-xl shadow-navy-950 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
              {badge}
            </div>
          )}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight text-balance">
            {title}
          </h1>
          <p className="text-navy-200 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 sm:mb-10 drop-shadow text-pretty">
            {description}
          </p>
          
          {children}
        </div>
      </div>
    </section>
  );
}
