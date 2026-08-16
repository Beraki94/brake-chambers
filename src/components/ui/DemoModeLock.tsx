'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoModeLock() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  // List of paths that are fully built and should be accessible
  const ALLOWED_PATHS = [
    '/',
    '/products',
    '/spring-brakes',
    '/service-chambers',
    '/chamber-parts-kits',
    '/air-disc-actuators',
    '/applications',
    '/company',
    '/contact',
    '/quote',
    '/warranty',
    '/oem-cross-reference'
  ];

  const isPathAllowed = (path: string) => {
    // Remove query params or hash for check
    const cleanPath = path.split('?')[0].split('#')[0];
    
    // Explicitly block subpages of oem-cross-reference
    if (cleanPath.startsWith('/oem-cross-reference/') && cleanPath !== '/oem-cross-reference') return false;

    // Allow exact matches
    if (ALLOWED_PATHS.includes(cleanPath)) return true;
    
    // Allow sub-paths of allowed directories (e.g., /spring-brakes/my-product)
    if (ALLOWED_PATHS.some(allowed => allowed !== '/' && cleanPath.startsWith(allowed + '/'))) return true;
    
    return false;
  };

  // Handle direct navigation to restricted subpages - remove the auto-redirect
  // We want them to see the nice modal instead of just flashing it
  // useEffect(() => {
  //   if (!isPathAllowed(pathname)) {
  //     router.replace('/');
  //   }
  // }, [pathname, router]);

  // Intercept all link clicks globally
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Allow overriding with ctrl/meta key
      if (e.ctrlKey || e.metaKey) return;
      
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      
      // If it's an internal link and the path is NOT allowed
      if (href && href.startsWith('/') && !href.startsWith('/#') && !isPathAllowed(href)) {
        e.preventDefault();
        e.stopPropagation();
        setIsLoading(true);
        
        // Auto-close after 5 seconds just in case
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }
    };

    // Use capture phase to intercept before Next.js Link component does
    document.addEventListener('click', handleClick, { capture: true });
    
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);

  const showModal = isLoading || !isPathAllowed(pathname);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-[#F8FAFC]/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 max-w-lg w-full text-center border border-slate-100 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 relative shadow-inner">
              <Loader2 className="w-10 h-10 text-amber-500 animate-spin relative z-10" />
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/30 animate-ping"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4 font-heading tracking-tight">
              Section Under Construction
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              This page is currently being developed. The link you clicked will be available in the final release.
            </p>
            
            <button
              onClick={() => {
                setIsLoading(false);
                if (!isPathAllowed(pathname)) {
                  router.replace('/');
                }
              }}
              className="bg-navy-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-navy-800 hover:-translate-y-1 transition-all shadow-lg"
            >
              Continue Exploring
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
