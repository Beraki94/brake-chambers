'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
      return;
    }

    // Set a timer for the splash screen duration
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasSeenSplash', 'true');
    }, 2200); // 2.2 seconds for full effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950 overflow-hidden"
        >
          {/* Background subtle grid pattern (optional industrial feel) */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Creative Animation Container */}
          <div className="relative flex flex-col items-center justify-center w-40 h-40">
            
            {/* Outer Spinning Mechanical Ring */}
            <motion.div 
              initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{ 
                rotate: { duration: 4, ease: "linear", repeat: Infinity },
                scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.5 }
              }}
              className="absolute w-32 h-32 rounded-full border-[3px] border-navy-800 border-t-[#FFB000] border-r-[#FFB000] shadow-[0_0_15px_rgba(255,176,0,0.15)]"
            />
            
            {/* Inner Counter-Spinning Ring */}
            <motion.div 
              initial={{ rotate: 360, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ 
                rotate: { duration: 2.5, ease: "linear", repeat: Infinity },
                scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
                opacity: { duration: 0.5, delay: 0.1 }
              }}
              className="absolute w-24 h-24 rounded-full border-2 border-navy-800 border-b-white border-l-white opacity-60"
            />

            {/* Central Logo Plaque */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 260, 
                damping: 20,
                delay: 0.3
              }}
              className="relative z-10 w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,176,0,0.25)]"
            >
              <img 
                src="/images/logo-brc.png" 
                alt="BRC Logo" 
                className="w-11 h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Text and Loading Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 flex flex-col items-center"
          >
            <div className="flex flex-col items-center leading-none mb-6">
               <span className="font-heading font-extrabold text-3xl text-white tracking-tight">BRC</span>
               <span className="text-[11px] font-bold text-amber-500 tracking-[0.35em] uppercase mt-2">Brake Chambers</span>
            </div>
            
            {/* Glowing Sweep Progress Bar */}
            <div className="w-56 h-[3px] bg-navy-900 rounded-full overflow-hidden relative shadow-inner">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.2, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-transparent via-[#FFB000] to-transparent"
              />
            </div>
          </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
