import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Globe2, 
  Award,
  Zap,
  Layers,
  FlaskConical
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroSliderProps {
  onOpenRfq: (productName?: string) => void;
  onExploreProducts: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ 
  onOpenRfq, 
  onExploreProducts 
}) => {
  const { config, theme } = useTheme();

  const slides = [
    {
      id: 0,
      kicker: 'WHO-GMP APPROVED MANUFACTURING IN INDIA',
      title: 'One of the Most Dedicated & Dynamic Manufacturers & Exporters',
      description: 'G-Rish Pharma Pvt. Ltd is a Navi Mumbai based Indian pharmaceutical company engaged in contract manufacturing across state-of-the-art facilities in Maharashtra, Hyderabad, Gujarat and other parts of India, supplying APIs and finished formulations worldwide.',
      primaryBtn: 'Explore Products',
      secondaryBtn: 'Request Quote',
      badge: 'Navi Mumbai Corporate Hub',
      stat1: '350+ Formulations',
      stat2: '3 Mega Hubs (MH, HYD, GUJ)',
      accentColor: 'from-blue-950 via-slate-900 to-slate-950'
    },
    {
      id: 1,
      kicker: 'PREMIUM GRADE FORMULATIONS SPECTRUM',
      title: 'Creating Better Life Through High-Purity Medicine',
      description: 'Cardiovascular, Anti-Diabetic, Anti-Biotic, Anti-Bacterials, Anti-Diarrhoeal, Anti-Ulcerants & Anti-GERD, Anti-Allergics, Anti-Cold, Anti-Inflammatory, Anti-Fungals, Anti-Cancer, All Injectables, Creams, Appetizers, Multivitamins, Calcium & Herbal Pain Relieving Oils.',
      primaryBtn: 'View Product Directory',
      secondaryBtn: 'Enquire Formulations',
      badge: 'Accurate Composition',
      stat1: 'High Effectiveness',
      stat2: 'Zero Side-Effects Standard',
      accentColor: 'from-slate-950 via-blue-950 to-slate-900'
    },
    {
      id: 2,
      kicker: 'GLOBAL LOGISTICS & REGULATORY ASSURANCE',
      title: 'Global Export Footprint with Complete CTD / ACTD Dossiers',
      description: 'Supplying international pharmaceutical tenders and private brands across 40+ countries in Southeast Asia, Africa, CIS, and Latin America. Expedited maritime container shipments through JNPT Port Nhava Sheva (Navi Mumbai).',
      primaryBtn: 'Global Export Reach',
      secondaryBtn: 'Book Facility Audit',
      badge: 'Zone IVb Stability Validated',
      stat1: '40+ Export Countries',
      stat2: '100% Retained Samples',
      accentColor: 'from-slate-900 via-indigo-950 to-slate-950'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden select-none">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:28px_28px]"></div>
      
      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Slider Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Slide Headline & Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Kicker Strip */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                {slide.kicker}
              </span>
            </div>

            {/* Slide Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight font-sans">
              {slide.title}
            </h1>

            {/* Slide Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl font-normal">
              {slide.description}
            </p>

            {/* Quality Features Strip (From User Brief) */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Premium Grade Ingredients Sourced from Recognized Vendors:</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-200">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High Effectiveness</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Longer Shelf Life</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Chemical Purity</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No Side-Effects</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Accurate Composition</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProducts}
                className={`px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white ${config.primary} ${config.primaryHover} rounded-lg shadow-lg shadow-blue-900/30 transition-all flex items-center gap-2 cursor-pointer`}
              >
                <span>{slide.primaryBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenRfq(slide.title)}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors cursor-pointer"
              >
                {slide.secondaryBtn}
              </button>
            </div>

          </div>

          {/* Right Column: Apex Healthcare Style Corporate Data Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  OPERATIONAL SUMMARY
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                  WHO-GMP ACTIVE
                </span>
              </div>

              {/* Manufacturing Clusters Strip */}
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>Maharashtra Plant</span>
                    <span className="text-amber-400 text-[10px] font-mono">Navi Mumbai / Tarapur</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    Solid Orals, Syrups, Medicated Creams &amp; Pain Relieving Oil
                  </div>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>Hyderabad Plant</span>
                    <span className="text-blue-400 text-[10px] font-mono">Telangana Hub</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    All Injectables (Sterile Dry Vials / Ampoules) &amp; Anti-Cancer
                  </div>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>Gujarat Plant</span>
                    <span className="text-emerald-400 text-[10px] font-mono">Ankleshwar / Vadodara</span>
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    Active Pharmaceutical Ingredients (APIs) &amp; Calcium Supplements
                  </div>
                </div>
              </div>

              {/* Slide Metric Highlights */}
              <div className="pt-2 grid grid-cols-2 gap-3 text-center border-t border-slate-800">
                <div className="p-2 bg-slate-950/50 rounded-lg">
                  <div className="text-base font-bold font-mono text-white">{slide.stat1}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Assurance</div>
                </div>
                <div className="p-2 bg-slate-950/50 rounded-lg">
                  <div className="text-base font-bold font-mono text-amber-400">{slide.stat2}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">Verification</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Slider Navigation Controls */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  currentSlide === idx 
                    ? `w-8 ${config.accentBg || 'bg-amber-400'}` 
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
