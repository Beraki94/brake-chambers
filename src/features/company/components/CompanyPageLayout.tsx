"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';

interface CompanyPageLayoutProps {
  title: string;
  badge?: string;
  description: string;
  children: React.ReactNode;
}

export default function CompanyPageLayout({ title, badge, description, children }: CompanyPageLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        badge={badge || "Company"}
        title={title}
        description={description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manufacturing', href: '/manufacturing' },
          { label: title }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px] py-8 lg:py-12">
        <main className="w-full max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
