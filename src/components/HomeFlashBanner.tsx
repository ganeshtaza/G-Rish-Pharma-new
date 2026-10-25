import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Pause,
  Play
} from 'lucide-react';

interface HomeFlashBannerProps {
  onOpenRfq: (topic?: string) => void;
  onExploreProducts: () => void;
}

export const HomeFlashBanner: React.FC<HomeFlashBannerProps> = ({
  onOpenRfq,
  onExploreProducts
}) => {
  const flashNews = [
    {
      id: 1,
      badge: 'NEW BATCH RELEASE',
      highlight: 'Cardiovascular & Anti-Diabetic:',
      message: 'Telmisartan, Amlodipine & Metformin SR formulations with validated high effectiveness and accurate composition ready for bulk export.',
      actionText: 'View CV & Diabetic Range',
      category: 'Cardiovascular'
    },
    {
      id: 2,
      badge: 'WHO-GMP STERILE LINE',
      highlight: 'All Injectables & Anti-Cancer:',
      message: 'Class 100 aseptic dry powder vials & liquid ampoules (Ceftriaxone, Meropenem, Paclitaxel) available for contract manufacturing at Hyderabad Hub.',
      actionText: 'Book Sterile Line',
      category: 'All Injectables'
    },
    {
      id: 3,
      badge: 'QUALITY RECOGNITION',
      highlight: 'Premium Grade Ingredients:',
      message: 'Sourced from recognized vendors offering features like longer shelf life, purity, no side-effects, and excellent healing properties.',
      actionText: 'Audit Quality Standards',
      category: 'Quality'
    },
    {
      id: 4,
      badge: 'HERBAL & NUTRACEUTICAL',
      highlight: 'Calcium & Pain Relieving Oils:',
      message: 'Ayurvedic Mahanarayan pain relieving oils, multivitamin tonics, and calcium + D3 softgels with FSSAI & Ayush certifications.',
      actionText: 'Explore Herbal Range',
      category: 'Herbal & Pain Relieving Oil'
    },
    {
      id: 5,
      badge: 'MARITIME DISPATCH',
      highlight: 'Navi Mumbai Port Logistics:',
      message: 'Fast-track ocean container stuffing 35 km from JNPT Port Nhava Sheva for consignments to Africa, CIS, Southeast Asia & LatAm.',
      actionText: 'Inquire Export Rates',
      category: 'Export'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flashNews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, flashNews.length]);

  const current = flashNews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flashNews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + flashNews.length) % flashNews.length);
  };

  return (
    <div className="bg-gradient-to-r from-[#0d3b42] via-[#0f4e56] to-[#0c353b] text-white border-b border-teal-800/60 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3 text-xs">
          
          {/* Flash Indicator Pill */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1.5 bg-[#f08b23] text-white font-extrabold px-2.5 py-1 rounded-full text-[11px] tracking-wider uppercase shadow-xs animate-pulse">
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>FLASH</span>
            </span>
            <span className="hidden sm:inline font-mono text-teal-200 text-[11px] font-semibold">
              [{currentIndex + 1}/{flashNews.length}]
            </span>
          </div>

          {/* Flash Dynamic Message */}
          <div 
            className="flex-1 overflow-hidden transition-all duration-300 min-h-[22px] flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 truncate">
              <span className="font-mono text-[10px] uppercase font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30 shrink-0">
                {current.badge}
              </span>
              <span className="font-bold text-white shrink-0">
                {current.highlight}
              </span>
              <span className="text-slate-200 truncate hidden md:inline">
                {current.message}
              </span>
            </div>
          </div>

          {/* Action & Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (current.category === 'Quality' || current.category === 'Export') {
                  onOpenRfq(current.highlight);
                } else {
                  onExploreProducts();
                }
              }}
              className="text-amber-300 hover:text-white font-bold flex items-center gap-1 transition-colors underline cursor-pointer text-xs"
            >
              <span>{current.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Prev / Next Buttons */}
            <div className="hidden sm:flex items-center gap-1 border-l border-teal-700/60 pl-2">
              <button
                onClick={handlePrev}
                className="p-1 hover:bg-teal-700/60 rounded text-teal-200 hover:text-white transition-colors"
                aria-label="Previous Flash Bulletin"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1 hover:bg-teal-700/60 rounded text-teal-200 hover:text-white transition-colors"
                aria-label={isPaused ? 'Resume Flash Ticker' : 'Pause Flash Ticker'}
                title={isPaused ? 'Resume Flash Ticker' : 'Pause Flash Ticker'}
              >
                {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
              </button>
              <button
                onClick={handleNext}
                className="p-1 hover:bg-teal-700/60 rounded text-teal-200 hover:text-white transition-colors"
                aria-label="Next Flash Bulletin"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
