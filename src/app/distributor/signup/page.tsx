import React from 'react';
import Link from 'next/link';
import { Building2, User, Mail, Phone, Briefcase, FileText, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply for Distributor Account | BRC Brake Chambers',
  description: 'Apply to become a BRC Brake Chambers distributor and get access to exclusive pricing and portal features.',
};

export default function DistributorSignup() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 font-heading">
            Partner with BRC
          </h2>
          <p className="mt-2 text-slate-600">
            Apply for a distributor account to access wholesale pricing, order tracking, and technical resources.
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-6" action="#" method="POST">
            
            <div className="pb-4 border-b border-slate-100">
              <h3 className="text-lg font-medium text-navy-900 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-navy-500" />
                Company Information
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="company-name" className="block text-sm font-medium text-slate-700">
                  Company Name
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    required
                    className="block w-full pl-10 py-3 border-slate-200 rounded-xl focus:ring-navy-500 focus:border-navy-500 sm:text-sm bg-slate-50 border transition-colors hover:bg-white"
                    placeholder="Acme Truck Parts LLC"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tax-id" className="block text-sm font-medium text-slate-700">
                  Tax ID / VAT Number
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="tax-id"
                    id="tax-id"
                    required
                    className="block w-full pl-10 py-3 border-slate-200 rounded-xl focus:ring-navy-500 focus:border-navy-500 sm:text-sm bg-slate-50 border transition-colors hover:bg-white"
                    placeholder="XX-XXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-slate-700">
                  Website <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-sm pointer-events-none">
                    https://
                  </span>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="block w-full pl-16 py-3 border-slate-200 rounded-xl focus:ring-navy-500 focus:border-navy-500 sm:text-sm bg-slate-50 border transition-colors hover:bg-white"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 pb-4 border-b border-slate-100">
              <h3 className="text-lg font-medium text-navy-900 flex items-center">
                <User className="w-5 h-5 mr-2 text-navy-500" />
                Primary Contact
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="full-name" className="block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    className="block w-full pl-10 py-3 border-slate-200 rounded-xl focus:ring-navy-500 focus:border-navy-500 sm:text-sm bg-slate-50 border transition-colors hover:bg-white"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 py-3 border-slate-200 rounded-xl focus:ring-navy-500 focus:border-navy-500 sm:text-sm bg-slate-50 border transition-colors hover:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="block w-full pl-10 py-3 border-slate-200 rounded-xl focus:ring-navy-500 focus:border-navy-500 sm:text-sm bg-slate-50 border transition-colors hover:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-navy-600 focus:ring-navy-500 border-slate-300 rounded cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-slate-700 cursor-pointer">
                    I agree to the terms and conditions
                  </label>
                  <p className="text-slate-500">
                    By applying, you agree to our <Link href="/terms" className="text-navy-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-navy-600 hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-navy-900 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-all group"
              >
                Submit Application
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/distributor/login" className="font-medium text-navy-600 hover:text-navy-500 transition-colors">
                Sign in to the portal
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
