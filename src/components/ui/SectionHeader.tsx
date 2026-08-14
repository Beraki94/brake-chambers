import React from 'react';

export interface SectionHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  accentColor?: 'amber' | 'red' | 'navy' | 'slate' | 'emerald';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  theme = 'light',
  accentColor = 'amber',
  className = ''
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  const badgeColorClasses = {
    amber: isDark ? 'text-amber-400' : 'text-amber-500',
    red: isDark ? 'text-red-400' : 'text-red-600',
    navy: isDark ? 'text-navy-300' : 'text-navy-900',
    slate: isDark ? 'text-slate-300' : 'text-slate-500',
    emerald: isDark ? 'text-emerald-400' : 'text-emerald-500',
  };

  return (
    <div className={`${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl mb-12 md:mb-16 ${className}`}>
      
      {/* Eyebrow Badge */}
      {badge && (
        <div className={`inline-block px-4 py-1.5 mb-5 md:mb-6 rounded-full border shadow-lg text-[11px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md
          ${isDark 
            ? 'bg-navy-900 border-navy-700 shadow-navy-950/50' 
            : 'bg-white border-slate-200 shadow-slate-200/50'}
          ${badgeColorClasses[accentColor]}`}
        >
          {badge}
        </div>
      )}

      {/* Main Title */}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 font-heading tracking-tight leading-tight
        ${isDark ? 'text-white drop-shadow-md' : 'text-navy-950'}`}
      >
        {title}
      </h2>

      {/* Subtitle / Description */}
      {description && (
        <div className={`text-base sm:text-lg leading-relaxed
          ${isCenter && 'mx-auto max-w-2xl'} 
          ${isDark ? 'text-navy-300 font-light' : 'text-slate-600'}`}
        >
          {description}
        </div>
      )}
    </div>
  );
}
