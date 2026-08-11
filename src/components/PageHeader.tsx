import React from 'react';

interface PageHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHeader({ badge, title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-navy-950 relative pt-20 pb-36 border-b border-navy-800 overflow-hidden text-center px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -ml-40 -mb-40 mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto max-w-3xl relative z-10">
        {badge && (
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-navy-900 border border-navy-700 shadow-xl shadow-navy-950 text-amber-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
            {badge}
          </div>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
          {title}
        </h1>
        <p className="text-navy-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
