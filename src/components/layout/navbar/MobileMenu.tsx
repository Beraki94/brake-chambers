import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MarketSelector from '@/components/home/MarketSelector';
import { MOBILE_LINKS } from '@/lib/navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  searchResults: Array<{ type: string; item: any }>;
  handleSearch: (e: React.FormEvent) => void;
  mobileSearchContainerRef: React.RefObject<HTMLDivElement | null>;
  mounted: boolean;
  cartCount: number;
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
  searchQuery,
  setSearchQuery,
  showDropdown,
  setShowDropdown,
  searchResults,
  handleSearch,
  mobileSearchContainerRef,
  mounted,
  cartCount
}: MobileMenuProps) {
  const router = useRouter();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for closing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[100px] bg-navy-950/60 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Premium Light Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 top-full bg-white z-50 shadow-2xl h-[calc(100vh-116px)] overflow-y-auto flex flex-col"
          >
            <div className="px-4 pt-6 pb-24 flex-1 flex flex-col" ref={mobileSearchContainerRef}>
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
                    placeholder="Search BRC catalog or part numbers..."
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
                      {searchResults.map((result) => (
                        <li key={`${result.type}-${result.item.slug}`}>
                          <button
                            type="button"
                            onPointerDown={(e) => {
                              // Use onPointerDown for immediate response on mobile before blur events can fire
                              e.preventDefault();
                              router.push(`/${result.type}/${result.item.slug}`);
                              setShowDropdown(false);
                              setSearchQuery('');
                              setIsOpen(false);
                            }}
                            className="w-full text-left flex items-center gap-4 px-4 py-3 hover:bg-slate-50 transition-colors border-b border-navy-50/50 last:border-0"
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-200">
                              <span className="text-xl">⚙️</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[14px] font-extrabold text-navy-900 truncate">{result.item.name}</p>
                              <p className="text-[11px] font-bold text-navy-500 capitalize tracking-wider mt-0.5">{result.type.replace('-', ' ')} &bull; {result.item.brandSlug}</p>
                            </div>
                          </button>
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
                  <span className="text-[11px] font-extrabold text-navy-400 uppercase tracking-widest">Products</span>
                </div>
                <div className="pl-2 flex flex-col gap-1 mb-4">
                  {MOBILE_LINKS.products.map((link, idx) => (
                    <Link key={idx} href={link.href} onClick={() => setTimeout(() => setIsOpen(false), 150)} className={`flex items-center gap-3 p-3 font-bold rounded-xl transition-colors text-navy-800 hover:bg-slate-50 hover:text-navy-950 text-[15px]`}>
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">{link.icon}</div> {link.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 pb-2 px-3 border-t border-slate-100">
                  <span className="text-[11px] font-extrabold text-navy-400 uppercase tracking-widest">Company & Resources</span>
                </div>
                <div className="pl-2 flex flex-col gap-1 mb-4">
                  {MOBILE_LINKS.company.map((link, idx) => (
                    <Link key={idx} href={link.href} onClick={() => setTimeout(() => setIsOpen(false), 150)} className={`flex items-center gap-3 p-3 font-bold rounded-xl transition-colors text-navy-800 hover:bg-slate-50 hover:text-navy-950 text-[15px]`}>
                      <div className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center flex-shrink-0">{link.icon}</div> {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href={`/quote`} onClick={() => setTimeout(() => setIsOpen(false), 150)} className={`p-4 font-extrabold rounded-xl transition-colors flex items-center justify-center gap-2 bg-amber-500 text-navy-950 hover:bg-amber-400 text-[13px] uppercase tracking-widest shadow-lg shadow-amber-500/20`}>
                    <ShoppingBag className="w-4 h-4" /> Request Quote {mounted && cartCount > 0 && <span className="bg-navy-950 text-white text-xs px-2 py-0.5 rounded-full ml-1">{cartCount}</span>}
                  </Link>
                  <Link href={`/distributors`} onClick={() => setTimeout(() => setIsOpen(false), 150)} className={`p-4 font-extrabold rounded-xl transition-colors flex items-center justify-center gap-2 bg-navy-900 text-white hover:bg-navy-800 text-[13px] uppercase tracking-widest border border-navy-700`}>
                    <User className="w-4 h-4" /> Distributors
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
