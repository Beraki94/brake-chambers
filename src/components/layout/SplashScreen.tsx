'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Start fade out after 1.5 seconds
    const timer = setTimeout(() => {
      setIsFading(true);
      // Remove from DOM after fade transition completes (500ms)
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch by not rendering anything until client has mounted
  if (!isMounted || !isVisible) return null;

  return (
    <div 
      id="splash-screen"
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Loading Animation */}
      <div className="relative w-24 h-24 mb-6">
        {/* Outer static ring */}
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        {/* Spinning Amber Ring */}
        <div className="absolute inset-0 border-4 border-[#FFB000] rounded-full border-t-transparent animate-spin"></div>
        {/* Inner static Navy dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-[#0A192F] rounded-full"></div>
        </div>
      </div>
      
      {/* Brand Text */}
      <h1 className="text-3xl font-bold text-[#0A192F] tracking-wider">
        BRC <span className="text-[#FFB000]">BRAKES</span>
      </h1>
      <p className="text-sm text-gray-500 mt-3 uppercase tracking-[0.3em] animate-pulse font-medium">
        Premium Manufacturing
      </p>
    </div>
  );
}
