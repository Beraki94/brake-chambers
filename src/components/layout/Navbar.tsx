"use client";

import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import MarketSelector from '@/components/home/MarketSelector';
import { Smartphone, Search, Menu, ShoppingBag, X, Laptop as LaptopIcon, Headphones, User, Truck, Settings, Wrench, Disc, Package, ShieldAlert, Bus, Factory, ShieldCheck, CheckCircle, FileText, Ruler, BookOpen, FlaskConical, Users, FileSignature } from 'lucide-react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { useCartStore } from '../../store/cart';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAKE_CHAMBERS, BRAKE_ACCESSORIES } from '../../lib/data';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = React.useRef<HTMLDivElement>(null);

  // To avoid hydration errors with Zustand persist
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cartItems = useCartStore(state => state.items);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Detect when scrolled past top
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => pathname === path;
  const getLinkClass = (path: string) => `block transform transition-transform duration-200 font-medium text-sm ${isActive(path) ? 'text-amber-600 font-bold translate-x-1' : 'text-slate-600 hover:text-amber-500 hover:translate-x-1'}`;

  // Compute live search results
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const tokens = query.split(/\s+/).filter(t => t.length > 0);

    let results: Array<{ type: string; item: any }> = [];

    results = [...results, ...BRAKE_CHAMBERS.filter(p => {
      return tokens.every(token => 
        p.name.toLowerCase().includes(token) || 
        p.brandSlug.toLowerCase().includes(token) || 
        p.slug.toLowerCase().includes(token) || 
        p.oemPartNumbers?.some(oem => oem.partNumber.toLowerCase().includes(token) || oem.brand.toLowerCase().includes(token))
      );
    }).map(p => ({ type: p.category === 'Spring Brake' ? 'spring-brakes' : 'service-chambers', item: p }))];
    
    results = [...results, ...BRAKE_ACCESSORIES.filter(a => {
      return tokens.every(token => 
        a.name.toLowerCase().includes(token) || 
        a.brandSlug.toLowerCase().includes(token) || 
        a.slug.toLowerCase().includes(token)
      );
    }).map(a => ({ type: 'chamber-parts-kits', item: a }))];

    return results; // Return all matching results directly in the dropdown
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (mobileSearchContainerRef.current && !mobileSearchContainerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
      setShowDropdown(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Utility Bar (Desktop Only) */}
      <div className="hidden md:flex bg-navy-900 text-white border-b border-navy-800 text-xs font-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-navy-200">
              <Headphones className="w-3.5 h-3.5" /> Support: 1-800-BRC-PART
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Suspense fallback={<div className="w-20 h-5 bg-navy-800 rounded animate-pulse" />}>
              <MarketSelector />
            </Suspense>
            <div className="w-px h-3.5 bg-navy-700" />
            <Link href="/distributor/login" className="flex items-center gap-2 text-navy-100 hover:text-white transition-colors">
              <User className="w-3.5 h-3.5" /> Distributor Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#FFB000] border-b border-[#e59d00] relative z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="h-20 md:h-24 flex items-center justify-between gap-4 md:gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 font-heading font-extrabold text-xl md:text-2xl tracking-tight text-navy-950 flex-shrink-0 min-w-0">
              <img src="/images/logo-brc.png" alt="BRC Brake Chambers" className="h-10 md:h-14 w-auto object-contain py-1 flex-shrink-0" />
              <span className="text-[16px] sm:text-lg md:text-2xl font-extrabold leading-tight tracking-normal whitespace-nowrap">BRC Brake Chambers</span>
            </Link>

            {/* Main Search Bar (Center Desktop) - Expanded Width */}
            <div className="flex-1 w-full mx-auto hidden md:block max-w-4xl" ref={searchContainerRef}>
              <div className="relative">
                <form onSubmit={handleSearch} className="relative group flex items-center w-full bg-white rounded-full border border-transparent focus-within:border-slate-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-500/10 transition-all overflow-hidden shadow-sm">
                  <Search className="h-5 w-5 text-navy-400 ml-4 group-focus-within:text-slate-600 transition-colors" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search by part number, chamber type, or cross-reference..."
                    className="flex-1 bg-transparent py-3 px-3 text-sm text-navy-900 focus:outline-none"
                  />
                  <button type="submit" className="pr-5 pl-3 flex items-center justify-center hover:bg-slate-50 h-full transition-colors text-navy-600 font-medium text-sm">
                    Search
                  </button>
                </form>

                {/* Desktop Live Search Dropdown */}
                {showDropdown && searchResults.length > 0 && (
                  <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-xl border border-navy-100 overflow-hidden z-50">
                    <ul className="py-2 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-navy-200 [&::-webkit-scrollbar-track]:bg-navy-50">
                      {searchResults.map((result, idx) => (
                        <li key={`${result.type}-${result.item.slug}`}>
                          <Link
                            href={`/${result.item.slug}`}
                            onClick={() => {
                              setShowDropdown(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center gap-3 px-4 py-2 hover:bg-navy-50 transition-colors"
                          >
                            <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-xl">⚙️</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold text-navy-900 truncate">{result.item.name}</p>
                              <p className="text-xs text-navy-500 capitalize">{result.type.replace('-', ' ')} &bull; {result.item.brandSlug}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {showDropdown && searchQuery.trim() !== '' && searchResults.length === 0 && (
                  <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-xl border border-navy-100 overflow-hidden z-50 p-6 text-center">
                    <p className="text-sm text-navy-500">No products found matching "{searchQuery}".</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-2.5 md:gap-4 flex-shrink-0">
              
              {/* Cart Button (Hidden on Mobile) */}
              <Link
                href={`/quote`}
                className="hidden md:flex relative items-center justify-center md:px-6 md:py-3.5 w-10 h-10 md:w-auto md:h-auto bg-navy-950 hover:bg-navy-900 text-white rounded-full font-extrabold transition-all shadow-md group md:gap-2"
              >
                <ShoppingBag className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <span className="hidden md:inline text-[12px] uppercase tracking-widest">Request Quote</span>
                {mounted && cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-white text-navy-950 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm border-2 border-navy-950">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-navy-950 text-white hover:bg-navy-900 transition-transform hover:scale-105 shadow-md"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop for closing */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[100px] bg-navy-950/60 backdrop-blur-md z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Premium Light Menu Panel */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 top-full bg-white z-50 shadow-2xl border-b border-navy-100 max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <div className="px-4 pt-6 pb-8" ref={mobileSearchContainerRef}>
              <div className="relative mb-8">
                <form onSubmit={handleSearch} className="flex items-center w-full bg-slate-50 rounded-xl border border-slate-200 focus-within:border-amber-500 focus-within:bg-white overflow-hidden group transition-colors shadow-sm">
                  <Search className="h-5 w-5 text-navy-400 ml-4 group-focus-within:text-amber-500 transition-colors" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search part #, brand, or type..."
                    className="flex-1 bg-transparent py-4 px-3 text-[15px] text-navy-900 focus:outline-none placeholder-slate-400"
                  />
                  <button type="submit" className="pr-4 pl-2 flex items-center justify-center text-navy-600 font-extrabold text-[12px] uppercase tracking-widest hover:text-amber-600 transition-colors">
                    Search
                  </button>
                </form>

                {/* Mobile Live Search Dropdown (Inline) */}
                {showDropdown && searchResults.length > 0 && (
                  <div className="mt-3 w-full bg-white rounded-xl shadow-inner border border-navy-50 overflow-hidden z-50 max-h-[40vh] overflow-y-auto">
                    <ul className="py-2">
                      {searchResults.map((result, idx) => (
                        <li key={`${result.type}-${result.item.slug}`}>
                          <Link
                            href={`/${result.item.slug}`}
                            onClick={() => {
                              setShowDropdown(false);
                              setSearchQuery('');
                              setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-4 px-4 py-3 hover:bg-slate-50 transition-colors border-b border-navy-50/50 last:border-0"
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-200">
                              <span className="text-xl">⚙️</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[14px] font-extrabold text-navy-900 truncate">{result.item.name}</p>
                              <p className="text-[11px] font-bold text-navy-500 capitalize tracking-wider mt-0.5">{result.type.replace('-', ' ')} &bull; {result.item.brandSlug}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {showDropdown && searchQuery.trim() !== '' && searchResults.length === 0 && (
                  <div className="mt-3 w-full bg-white rounded-xl shadow-inner border border-navy-50 p-6 text-center">
                    <p className="text-sm font-medium text-navy-500">No products found matching "{searchQuery}".</p>
                  </div>
                )}
              </div>

            <div className="mb-8 flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-[13px] font-extrabold text-navy-500 uppercase tracking-widest">Region / Language</span>
              <Suspense fallback={<div className="w-24 h-8 bg-slate-200 rounded-full animate-pulse" />}>
                <MarketSelector />
              </Suspense>
            </div>

            <nav className="flex flex-col gap-2">
              <div className="pt-2 pb-2 px-3">
                <span className="text-[11px] font-extrabold text-navy-400 uppercase tracking-widest">Braking Systems</span>
              </div>
              <div className="pl-2 flex flex-col gap-1 mb-4">
                <Link href={`/spring-brakes`} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 font-bold rounded-xl transition-colors text-navy-800 hover:bg-slate-50 hover:text-navy-950 text-[15px]`}>
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0"><Settings className="w-4 h-4 text-amber-600" /></div> Spring Brakes
                </Link>
                <Link href={`/service-chambers`} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 font-bold rounded-xl transition-colors text-navy-800 hover:bg-slate-50 hover:text-navy-950 text-[15px]`}>
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0"><Wrench className="w-4 h-4 text-amber-600" /></div> Service Chambers
                </Link>
                <Link href={`/air-disc-actuators`} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 font-bold rounded-xl transition-colors text-navy-800 hover:bg-slate-50 hover:text-navy-950 text-[15px]`}>
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0"><Disc className="w-4 h-4 text-amber-600" /></div> Air Disc Actuators
                </Link>
                <Link href={`/chamber-parts-kits`} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 font-bold rounded-xl transition-colors text-navy-800 hover:bg-slate-50 hover:text-navy-950 text-[15px]`}>
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0"><Package className="w-4 h-4 text-amber-600" /></div> Parts & Kits
                </Link>
              </div>

              <div className="pt-4 pb-2 px-3 border-t border-slate-100">
                <span className="text-[11px] font-extrabold text-navy-400 uppercase tracking-widest">Company & Resources</span>
              </div>
              <Link href={`/applications`} onClick={() => setIsMobileMenuOpen(false)} className={`p-3 font-bold rounded-xl transition-colors text-navy-700 hover:bg-slate-50 hover:text-navy-950`}>Applications</Link>
              <Link href={`/oem-cross-reference`} onClick={() => setIsMobileMenuOpen(false)} className={`p-3 font-bold rounded-xl transition-colors text-navy-700 hover:bg-slate-50 hover:text-navy-950`}>OEM Cross-Reference</Link>
              <Link href={`/company`} onClick={() => setIsMobileMenuOpen(false)} className={`p-3 font-bold rounded-xl transition-colors text-navy-700 hover:bg-slate-50 hover:text-navy-950`}>Company & Manufacturing</Link>
              <Link href={`/contact`} onClick={() => setIsMobileMenuOpen(false)} className={`p-3 font-bold rounded-xl transition-colors text-navy-700 hover:bg-slate-50 hover:text-navy-950`}>Contact Sales</Link>
              
              <div className="mt-6 flex flex-col gap-3">
                <Link href={`/quote`} onClick={() => setIsMobileMenuOpen(false)} className={`p-4 font-extrabold rounded-xl transition-colors flex items-center justify-center gap-2 bg-amber-500 text-navy-950 hover:bg-amber-400 text-[13px] uppercase tracking-widest shadow-lg shadow-amber-500/20`}>
                  <ShoppingBag className="w-4 h-4" /> Request Quote {mounted && cartCount > 0 && <span className="bg-navy-950 text-white text-xs px-2 py-0.5 rounded-full ml-1">{cartCount}</span>}
                </Link>
                <Link href={`/distributor/login`} onClick={() => setIsMobileMenuOpen(false)} className={`p-4 font-extrabold rounded-xl transition-colors flex items-center justify-center gap-2 bg-navy-900 text-white hover:bg-navy-800 text-[13px] uppercase tracking-widest border border-navy-700`}>
                  <User className="w-4 h-4" /> Distributor Portal
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
        </>
      )}
      </AnimatePresence>

      {/* Secondary Navigation (Desktop Only) - DYNAMIC MEGA MENUS */}
      <div className={`hidden md:block relative z-40 transition-colors duration-300 ${isScrolled ? 'bg-navy-900 border-t border-navy-800 border-b-2 border-[#FFB000] shadow-md' : 'bg-slate-50 border-y border-navy-100 shadow-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className={`flex items-center gap-6 lg:gap-8 h-12 text-sm font-semibold transition-colors duration-300 ${isScrolled ? 'text-navy-100' : 'text-navy-700'}`}>
            
            {/* Products Dropdown */}
            <div className="group h-full flex items-center">
              <Link href="/products" className={`cursor-pointer transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent ${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}`}>
                Products
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
                  <div className="grid grid-cols-4 gap-8">
                    {/* Column 1: Spring Brakes */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Settings className="w-5 h-5 text-amber-500" /> Spring Brakes</h3>
                      <ul className="space-y-3">
                        <li><Link href="/spring-brakes/30-30-air-brake-chambers" className={getLinkClass('/spring-brakes/30-30-air-brake-chambers')}>Type 30/30 Spring Brake</Link></li>
                        <li><Link href="/spring-brakes/24-30-24-24-spring-brakes" className={getLinkClass('/spring-brakes/24-30-24-24-spring-brakes')}>Type 24/30 & 24/24 Chambers</Link></li>
                        <li><Link href="/spring-brakes/20-24-spring-brake-chambers" className={getLinkClass('/spring-brakes/20-24-spring-brake-chambers')}>Type 20/24 Spring Brake</Link></li>
                        <li><Link href="/spring-brakes/type-30-30-piggyback-kits" className={getLinkClass('/spring-brakes/type-30-30-piggyback-kits')}>Type 30/30 Piggyback Kits</Link></li>
                      </ul>
                      <Link href="/spring-brakes" className="inline-block mt-4 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm">
                        View All Spring Brakes &rarr;
                      </Link>
                    </div>

                    {/* Column 2: Service Chambers */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Wrench className="w-5 h-5 text-amber-500" /> Service Chambers</h3>
                      <ul className="space-y-3">
                        <li><Link href="/service-chambers/type-20-steer-axle-brake-chambers" className={getLinkClass('/service-chambers/type-20-steer-axle-brake-chambers')}>Type 20 Steer Axle Chamber</Link></li>
                        <li><Link href="/service-chambers/type-30-service-chambers" className={getLinkClass('/service-chambers/type-30-service-chambers')}>Type 30 Service Chamber</Link></li>
                        <li><Link href="/service-chambers/type-12-16-24-service-chambers" className={getLinkClass('/service-chambers/type-12-16-24-service-chambers')}>Type 12, 16 & 24 Chambers</Link></li>
                        <li><Link href="/service-chambers/welded-clevis-brake-chambers" className={getLinkClass('/service-chambers/welded-clevis-brake-chambers')}>Welded Clevis Chambers</Link></li>
                      </ul>
                      <Link href="/service-chambers" className="inline-block mt-4 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm">
                        View All Service Chambers &rarr;
                      </Link>
                    </div>

                    {/* Column 3: Air Disc Actuators */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Disc className="w-5 h-5 text-amber-500" /> Air Disc Actuators</h3>
                      <ul className="space-y-3">
                        <li><Link href="/air-disc-actuators/type-16-18-adb-actuators" className={getLinkClass('/air-disc-actuators/type-16-18-adb-actuators')}>Type 16 & 18 ADB</Link></li>
                        <li><Link href="/air-disc-actuators/type-20-24-air-disc-actuators" className={getLinkClass('/air-disc-actuators/type-20-24-air-disc-actuators')}>Type 20/24 ADB</Link></li>
                        <li><Link href="/air-disc-actuators/type-24-24-adb-chambers" className={getLinkClass('/air-disc-actuators/type-24-24-adb-chambers')}>Type 24/24 ADB</Link></li>
                        <li><Link href="/air-disc-actuators/type-24-30-air-disc-brake-actuators" className={getLinkClass('/air-disc-actuators/type-24-30-air-disc-brake-actuators')}>Type 24/30 ADB</Link></li>
                      </ul>
                      <Link href="/air-disc-actuators" className="inline-block mt-4 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm">
                        View All ADB Actuators &rarr;
                      </Link>
                    </div>

                    {/* Column 4: Parts & Kits */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Package className="w-5 h-5 text-amber-500" /> Parts & Kits</h3>
                      <ul className="space-y-3">
                        <li><Link href="/chamber-parts-kits/air-brake-chamber-rebuild-kits" className={getLinkClass('/chamber-parts-kits/air-brake-chamber-rebuild-kits')}>Chamber Rebuild Kits</Link></li>
                        <li><Link href="/chamber-parts-kits/brake-chamber-diaphragms" className={getLinkClass('/chamber-parts-kits/brake-chamber-diaphragms')}>Rubber Diaphragms</Link></li>
                        <li><Link href="/chamber-parts-kits/clevis-pins-slack-adjuster-hardware" className={getLinkClass('/chamber-parts-kits/clevis-pins-slack-adjuster-hardware')}>Clevis Pins & Hardware</Link></li>
                        <li><Link href="/chamber-parts-kits/brake-chamber-caging-bolts-tools" className={getLinkClass('/chamber-parts-kits/brake-chamber-caging-bolts-tools')}>Caging Bolts & Tools</Link></li>
                      </ul>
                      <Link href="/chamber-parts-kits" className="inline-block mt-4 text-amber-500 font-bold hover:text-amber-600 transition-colors text-sm">
                        View All Parts & Tools &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="group h-full flex items-center">
              <Link href="/applications" className={`cursor-pointer transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent ${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}`}>
                Applications
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
                  <div className="grid grid-cols-4 gap-8">
                    {/* Column 1: Commercial & Freight */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Truck className="w-5 h-5 text-amber-500" /> Commercial & Freight</h3>
                      <ul className="space-y-3">
                        <li><Link href="/applications/commercial-linehaul" className={getLinkClass('/applications/commercial-linehaul')}>Commercial Linehaul</Link></li>
                        <li><Link href="/applications/heavy-duty-freight" className={getLinkClass('/applications/heavy-duty-freight')}>Heavy-Duty Freight</Link></li>
                        <li><Link href="/applications/regional-delivery" className={getLinkClass('/applications/regional-delivery')}>Regional Delivery</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: Severe-Duty & Specialized */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><ShieldAlert className="w-5 h-5 text-amber-500" /> Severe-Duty</h3>
                      <ul className="space-y-3">
                        <li><Link href="/applications/refuse-sanitation" className={getLinkClass('/applications/refuse-sanitation')}>Refuse & Sanitation Trucks</Link></li>
                        <li><Link href="/applications/off-highway-mining" className={getLinkClass('/applications/off-highway-mining')}>Off-Highway & Mining</Link></li>
                        <li><Link href="/applications/agricultural-transport" className={getLinkClass('/applications/agricultural-transport')}>Agricultural Transport</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: Passenger & Transit */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Bus className="w-5 h-5 text-amber-500" /> Passenger & Transit</h3>
                      <ul className="space-y-3">
                        <li><Link href="/applications/transit-coach-bus" className={getLinkClass('/applications/transit-coach-bus')}>Transit & Coach Buses</Link></li>
                        <li><Link href="/applications/school-buses" className={getLinkClass('/applications/school-buses')}>School Buses</Link></li>
                        <li><Link href="/applications/shuttle-fleets" className={getLinkClass('/applications/shuttle-fleets')}>Shuttle Fleets</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: OEM & Custom Solutions */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Factory className="w-5 h-5 text-amber-500" /> OEM & Custom</h3>
                      <ul className="space-y-3">
                        <li><Link href="/applications/fleet-inquiries" className={getLinkClass('/applications/fleet-inquiries')}>Fleet Volume Orders</Link></li>
                        <li><Link href="/applications/custom-engineering" className={getLinkClass('/applications/custom-engineering')}>Custom Engineering</Link></li>
                        <li><Link href="/applications/contract-manufacturing" className={getLinkClass('/applications/contract-manufacturing')}>Contract Manufacturing</Link></li>
                        <li className="pt-2"><Link href="/quote" className="inline-flex items-center gap-2 transform transition-transform duration-200 text-amber-600 font-bold hover:text-amber-500 hover:translate-x-1 text-sm"><ShoppingBag className="w-4 h-4" /> Request Custom Quote</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* OEM Cross-Reference */}
            <div className="group h-full flex items-center">
              <Link href={`/oem-cross-reference`} className={`transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent ${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}`}>
                OEM Cross-Reference
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
                  <div className="grid grid-cols-4 gap-8">
                    {/* Column 1: Major Brake Brands */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><ShieldCheck className="w-5 h-5 text-amber-500" /> Major Brake Brands</h3>
                      <ul className="space-y-3">
                        <li><Link href="/oem-cross-reference/bendix" className={getLinkClass('/oem-cross-reference/bendix')}>Bendix Equivalents</Link></li>
                        <li><Link href="/oem-cross-reference/haldex" className={getLinkClass('/oem-cross-reference/haldex')}>Haldex Equivalents</Link></li>
                        <li><Link href="/oem-cross-reference/meritor" className={getLinkClass('/oem-cross-reference/meritor')}>Meritor Equivalents</Link></li>
                        <li><Link href="/oem-cross-reference/mgm" className={getLinkClass('/oem-cross-reference/mgm')}>MGM Equivalents</Link></li>
                        <li><Link href="/oem-cross-reference/tse" className={getLinkClass('/oem-cross-reference/tse')}>TSE Equivalents</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: Truck OEMs */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Truck className="w-5 h-5 text-amber-500" /> Truck Manufacturers</h3>
                      <ul className="space-y-3">
                        <li><Link href="/oem-cross-reference/freightliner" className={getLinkClass('/oem-cross-reference/freightliner')}>Freightliner Replacements</Link></li>
                        <li><Link href="/oem-cross-reference/peterbilt" className={getLinkClass('/oem-cross-reference/peterbilt')}>Peterbilt Replacements</Link></li>
                        <li><Link href="/oem-cross-reference/kenworth" className={getLinkClass('/oem-cross-reference/kenworth')}>Kenworth Replacements</Link></li>
                        <li><Link href="/oem-cross-reference/volvo-mack" className={getLinkClass('/oem-cross-reference/volvo-mack')}>Volvo / Mack Replacements</Link></li>
                        <li><Link href="/oem-cross-reference/navistar" className={getLinkClass('/oem-cross-reference/navistar')}>Navistar Replacements</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: Axle & Suspension */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Settings className="w-5 h-5 text-amber-500" /> Axle & Suspension</h3>
                      <ul className="space-y-3">
                        <li><Link href="/oem-cross-reference/hendrickson" className={getLinkClass('/oem-cross-reference/hendrickson')}>Hendrickson Applications</Link></li>
                        <li><Link href="/oem-cross-reference/saf-holland" className={getLinkClass('/oem-cross-reference/saf-holland')}>SAF-Holland Applications</Link></li>
                        <li><Link href="/oem-cross-reference/dana" className={getLinkClass('/oem-cross-reference/dana')}>Dana Axle Applications</Link></li>
                        <li><Link href="/oem-cross-reference/meritor-axles" className={getLinkClass('/oem-cross-reference/meritor-axles')}>Meritor Axle Applications</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: Interchange Tools */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Search className="w-5 h-5 text-amber-500" /> Interchange Tools</h3>
                      <ul className="space-y-3">
                        <li><Link href="/oem-cross-reference/part-search" className={getLinkClass('/oem-cross-reference/part-search')}>Part Number Search</Link></li>
                        <li><Link href="/oem-cross-reference/visual-guide" className={getLinkClass('/oem-cross-reference/visual-guide')}>Visual Identification Guide</Link></li>
                        <li><Link href="/oem-cross-reference/database" className={getLinkClass('/oem-cross-reference/database')}>Full Interchange Database</Link></li>
                        <li className="pt-2"><Link href="/oem-cross-reference/request" className="inline-flex items-center gap-2 transform transition-transform duration-200 text-amber-600 font-bold hover:text-amber-500 hover:translate-x-1 text-sm"><CheckCircle className="w-4 h-4" /> Request a Cross-Match</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unified Company & Manufacturing Dropdown */}
            <div className="group h-full flex items-center">
              <Link href="/company" className={`cursor-pointer transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent ${isScrolled ? 'group-hover:border-amber-400 group-hover:text-white' : 'group-hover:border-amber-500 group-hover:text-amber-600'}`}>
                Company
              </Link>
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-6">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Column 1: About & Insights */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Users className="w-5 h-5 text-amber-500" /> About Us</h3>
                      <ul className="space-y-3">
                        <li><Link href="/company/our-story" className={getLinkClass('/company/our-story')}>Our Story</Link></li>
                        <li><Link href="/company/leadership" className={getLinkClass('/company/leadership')}>Leadership Team</Link></li>
                        <li><Link href="/blog" className={getLinkClass('/blog')}>Industry Blog</Link></li>
                      </ul>
                    </div>

                    {/* Column 2: Manufacturing */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><Factory className="w-5 h-5 text-amber-500" /> Manufacturing</h3>
                      <ul className="space-y-3">
                        <li><Link href="/company/production-process" className={getLinkClass('/company/production-process')}>Production Process</Link></li>
                        <li><Link href="/company/facility-overview" className={getLinkClass('/company/facility-overview')}>Facility Overview</Link></li>
                        <li><Link href="/company/material-sourcing" className={getLinkClass('/company/material-sourcing')}>Material Sourcing</Link></li>
                      </ul>
                    </div>

                    {/* Column 3: Quality & R&D */}
                    <div>
                      <h3 className="flex items-center gap-2 text-navy-900 font-bold text-lg mb-4 border-b border-slate-200 pb-2"><ShieldCheck className="w-5 h-5 text-amber-500" /> Quality & R&D</h3>
                      <ul className="space-y-3">
                        <li><Link href="/company/iso-certifications" className={getLinkClass('/company/iso-certifications')}>ISO Certifications</Link></li>
                        <li><Link href="/company/testing-laboratory" className={getLinkClass('/company/testing-laboratory')}>Testing Laboratory</Link></li>
                        <li><Link href="/company/research-and-innovations" className={getLinkClass('/company/research-and-innovations')}>R&D and Innovations</Link></li>
                      </ul>
                    </div>

                    {/* Column 4: CTA */}
                    <div className="flex flex-col justify-center">
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-center h-full">
                        <h4 className="font-bold text-navy-900 mb-2 text-sm">Build With Us</h4>
                        <p className="text-xs text-slate-500 mb-4 leading-relaxed">Partner directly with the manufacturer.</p>
                        <Link href="/contact" className="inline-block text-center bg-navy-900 text-white font-bold py-2 px-3 rounded-lg hover:bg-navy-800 transition-colors text-xs">
                          Discuss Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Resources */}
            <div className="group h-full flex items-center">
              <Link href="/technical-resources" className={`cursor-pointer transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent ${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}`}>
                Technical Resources
              </Link>
            </div>

            <div className="flex-1"></div>

            {/* Contact Sales */}
            <div className="group h-full flex items-center">
              <Link href="/contact" className={`cursor-pointer transition-colors py-3 h-full flex items-center border-b-[3px] border-transparent ${isScrolled ? 'hover:border-amber-400 hover:text-white' : 'hover:border-amber-500 hover:text-amber-600'}`}>
                Contact Sales
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
