"use client";

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import CompanyRelatedLinks from '@/components/company/CompanyRelatedLinks';

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
          { label: 'Company', href: '/company' },
          { label: title }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-12">
        <div className="w-full">
          {children}
          
          <CompanyRelatedLinks />
        </div>
      </div>
    </div>
  );
}
