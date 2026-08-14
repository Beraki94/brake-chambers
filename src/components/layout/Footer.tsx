"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Truck, ShieldCheck } from 'lucide-react';
import { useMarketStore } from '../../store/market';

export default function Footer() {
  const selectedMarket = useMarketStore(state => state.selectedMarket);
  const marketCode = selectedMarket?.code || 'us';

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-navy-800 mt-auto relative overflow-hidden">
      {/* Decorative Scattered Chambers */}
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 pointer-events-none opacity-25 mix-blend-screen z-0">
        <Image 
          src="/products/scattered_chambers_footer.png"
          alt="Brake Chambers"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 relative group flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src="/images/logo-brc.png" alt="BRC" className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-xl md:text-2xl text-white tracking-tight">BRC</span>
                <span className="text-[10px] md:text-xs font-semibold text-navy-300 tracking-wide">Brake Chambers</span>
              </div>
            </Link>
            <p className="text-navy-300 text-sm mb-4 leading-relaxed">
              Premium commercial vehicle brake chambers shipped worldwide. ISO 9001 certified manufacturing for heavy-duty fleet performance.
            </p>

            <div className="flex flex-col gap-4">
              <span className="text-sm text-slate-400 font-bold">Follow us on social media</span>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/company/brc-brake-chambers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-slate-500 hover:text-navy-900 transition-all shadow-sm">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://twitter.com/brcbrakechambers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-slate-500 hover:text-navy-900 transition-all shadow-sm">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://facebook.com/brcbrakechambers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-slate-500 hover:text-navy-900 transition-all shadow-sm">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="https://youtube.com/c/brcbrakechambers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-slate-500 hover:text-navy-900 transition-all shadow-sm">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">Our Catalog</h4>
            <ul className="space-y-3">
              <li><Link href={`/products`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors font-semibold">All Products</Link></li>
              <li><Link href={`/spring-brakes`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Spring Brakes</Link></li>
              <li><Link href={`/service-chambers`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Service Chambers</Link></li>
              <li><Link href={`/air-disc-actuators`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Air Disc Actuators</Link></li>
              <li><Link href={`/chamber-parts-kits`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Chamber Parts & Kits</Link></li>
              <li><Link href={`/oem-cross-reference`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">OEM Cross-Reference</Link></li>
            </ul>
          </div>
          
          {/* Applications */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">Applications</h4>
            <ul className="space-y-3">
              <li><Link href={`/applications`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors font-semibold">All Applications</Link></li>
              <li><Link href={`/applications/commercial-linehaul`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Commercial & Freight</Link></li>
              <li><Link href={`/applications/refuse-sanitation`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Severe-Duty Trucks</Link></li>
              <li><Link href={`/applications/transit-coach-bus`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Passenger & Transit</Link></li>
              <li><Link href={`/applications/off-highway-mining`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Off-Highway & Mining</Link></li>
              <li><Link href={`/applications/fleet-inquiries`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">OEM & Custom</Link></li>
              <li><Link href={`/quote`} className="text-amber-400 hover:text-amber-300 text-sm transition-colors font-semibold mt-2 inline-block">Request Custom Quote</Link></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">Support & Info</h4>
            <ul className="space-y-3">
              <li><Link href={`/company`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Company & Manufacturing</Link></li>
              <li><Link href={`/technical-resources`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Technical Resources</Link></li>
              <li><Link href={`/shipping`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Freight & Shipping</Link></li>
              <li><Link href={`/warranty`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Warranty Info</Link></li>
              <li><Link href={`/contact`} className="text-navy-300 hover:text-slate-400 text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">Contact Factory</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm">sales@brcbrakechambers.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm">WhatsApp: +86 186 0202 1144</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-navy-300 text-sm leading-relaxed">Industrial Park, Ningbo,<br/>Zhejiang Province, China</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-navy-400 text-sm">
            &copy; {new Date().getFullYear()} BRC Brake Chambers. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm mt-2 md:mt-0">
            <Link href={`/privacy`} className="text-navy-400 hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href={`/terms`} className="text-navy-400 hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        {/* Aftermarket / SEO Disclaimer */}
        <div className="pt-6 mt-6 border-t border-navy-800/50">
          <p className="text-navy-500 text-[11px] leading-relaxed max-w-4xl">
            <strong>Disclaimer:</strong> BRC Brake Chambers is an independent manufacturer of aftermarket heavy-duty commercial vehicle parts. 
            Brand names, trademarks, logos, and part numbers (including but not limited to Bendix, Haldex, Meritor, Rockwell, Wabco, and MGM Brakes) 
            are used strictly for identification and cross-reference purposes only. BRC is not affiliated with, sponsored by, or endorsed by any of these original equipment manufacturers.
          </p>
        </div>
      </div>
    </footer>
  );
}
