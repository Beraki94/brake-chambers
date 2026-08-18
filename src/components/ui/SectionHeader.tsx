import React from 'react';

export interface SectionHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  accentColor?: 'amber' | 'red' | 'navy' | 'slate' | 'emerald';
  className?: string;
  asH1?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  theme = 'light',
  accentColor = 'amber',
  className = '',
  asH1 = false
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  // Badge Text Color Maps
  const badgeColorClasses = {
    amber: isDark ? 'text-amber-400' : 'text-amber-600',
    red: isDark ? 'text-red-400' : 'text-red-600',
    navy: isDark ? 'text-navy-300' : 'text-navy-600',
    slate: isDark ? 'text-slate-400' : 'text-slate-500',
    emerald: isDark ? 'text-emerald-400' : 'text-emerald-600',
  };
  
  // Badge BG Maps (matching home page)
  const badgeBgClasses = {
    amber: isDark ? 'bg-navy-900 border-navy-700 shadow-navy-950/50' : 'bg-amber-50 border-amber-100 shadow-sm',
    red: isDark ? 'bg-navy-900 border-navy-700 shadow-navy-950/50' : 'bg-red-50 border-red-100 shadow-sm',
    navy: isDark ? 'bg-navy-900 border-navy-700 shadow-navy-950/50' : 'bg-navy-50 border-navy-100 shadow-sm',
    slate: isDark ? 'bg-navy-900 border-navy-700 shadow-navy-950/50' : 'bg-slate-100 border-slate-200 shadow-sm',
    emerald: isDark ? 'bg-navy-900 border-navy-700 shadow-navy-950/50' : 'bg-emerald-50 border-emerald-100 shadow-sm',
  };

  return (
    <div className={`${isCenter ? 'flex flex-col items-center text-center mx-auto' : 'flex flex-col items-start text-left'} max-w-3xl mb-14 md:mb-16 ${className}`}>
      
      {/* Eyebrow Badge - Matches Home Page design exactly */}
      {badge && (
        <div className={`inline-block px-3 py-1 mb-3 md:mb-4 rounded-full border text-[11px] font-bold uppercase tracking-widest
          ${badgeBgClasses[accentColor]} ${badgeColorClasses[accentColor]}`}
        >
          {badge}
        </div>
      )}

      {/* Main Title - Matches Home Page design exactly */}
      {asH1 ? (
        <h1 className={`text-3xl md:text-5xl font-extrabold mb-4 tracking-tight pb-2
          ${isDark ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-700'}`}
        >
          {title}
        </h1>
      ) : (
        <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 tracking-tight pb-2
          ${isDark ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-700'}`}
        >
          {title}
        </h2>
      )}

      {/* Subtitle / Description - Matches Home Page typography */}
      {description && (
        <div className={`text-sm md:text-base leading-relaxed font-light
          ${isCenter && 'mx-auto max-w-2xl'} 
          ${isDark ? 'text-navy-200' : 'text-slate-600'}`}
        >
          {description}
        </div>
      )}
    </div>
  );
}
