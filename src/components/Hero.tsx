import React, { useState, useEffect } from 'react';
import { 
  Play, 
  MapPin, 
  Phone, 
  Link2, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Award
} from 'lucide-react';
import { FORMULATION_QUALITY_PILLARS } from '../data/pharmaData';

interface HeroProps {
  onOpenRfq: (productName?: string) => void;
  onExploreProducts: () => void;
  onOpenVirtualTour: () => void;
  onSelectCategory?: (category: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenRfq, 
  onExploreProducts,
  onOpenVirtualTour,
  onSelectCategory
}) => {
  // Flash Formulation Highlights
  const flashSpotlights = [
    {
      title: 'Cardiovascular & Anti-Diabetic',
      dosage: 'Tablets, Capsules & Sustained Release',
      generics: 'Telmisartan, Amlodipine, Metformin SR, Vildagliptin',
      feature: 'Accurate Composition & High Effectiveness',
      tag: 'Cardiovascular'
    },
    {
      title: 'All Injectables & Anti-Cancer (Oncology)',
      dosage: 'Sterile Liquid Ampoules & Lyophilized Vials',
      generics: 'Ceftriaxone, Meropenem, Pantoprazole IV, Imatinib, Paclitaxel',
      feature: 'Class 100 Sterile Aseptic Core & Pure Grade',
      tag: 'All Injectables'
    },
    {
      title: 'Anti-Biotic, Anti-Bacterials & Cephalosporin',
      dosage: 'Dry Syrups, Tablets & Dispersibles',
      generics: 'Azithromycin, Cefixime, Cefuroxime, Ciprofloxacin',
      feature: 'Purity & Longer Shelf Life Stability',
      tag: 'Anti-Biotic & Anti-Bacterials'
    },
    {
      title: 'Anti-Ulcerants, Anti-GERD & Anti-Diarrhoeal',
      dosage: 'Enteric Coated & Sustained Release Pellets',
      generics: 'Pantoprazole EC, Rabeprazole DSR, Ofloxacin-Ornidazole',
      feature: 'Excellent Healing Properties & Fast Relief',
      tag: 'Anti-Ulcerants & Anti-GERD'
    },
    {
      title: 'Nutraceuticals, Calcium & Pain Relieving Oils',
      dosage: 'Softgels, Syrups, Powders & Herbal Oils',
      generics: 'Calcium + D3 + K2-7, Multivitamin Tonics, Mahanarayan Oil',
      feature: 'Premium Grade Ingredients from Recognized Vendors',
      tag: 'Herbal & Pain Relieving Oil'
    }
  ];

  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSpotlightIdx((prev) => (prev + 1) % flashSpotlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [flashSpotlights.length]);

  const activeSpotlight = flashSpotlights[activeSpotlightIdx];

  return (
    <section id="hero" className="relative pt-4 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Pharmed Hero Box with Rounded Corners */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl min-h-[600px] lg:min-h-[660px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          
          {/* High-Fidelity Medical Background with Cleanroom Atmosphere */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-950/90 relative">
              <svg className="absolute inset-0 w-full h-full object-cover opacity-35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="pharmBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f464d" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#134e4a" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#042f2e" stopOpacity="0.9" />
                  </linearGradient>
                  <pattern id="shelfGrid" width="60" height="40" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="38" x2="60" y2="38" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />
                    <rect x="8" y="10" width="14" height="26" rx="2" fill="#38bdf8" fillOpacity="0.12" />
                    <rect x="26" y="6" width="10" height="30" rx="1" fill="#34d399" fillOpacity="0.1" />
                    <rect x="40" y="14" width="12" height="22" rx="2" fill="#fbbf24" fillOpacity="0.1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pharmBg)" />
                <rect width="100%" height="100%" fill="url(#shelfGrid)" />
                <g opacity="0.45" transform="translate(480, 120)">
                  <circle cx="160" cy="90" r="45" fill="#f8fafc" />
                  <path d="M90 280 C90 180, 130 150, 160 150 C190 150, 230 180, 230 280 Z" fill="#ffffff" />
                  <path d="M120 180 L80 320 L130 330 L150 220 Z" fill="#f1f5f9" />
                  <path d="M200 180 L240 320 L190 330 L170 220 Z" fill="#f1f5f9" />
                  <path d="M140 180 Q160 210 180 180" stroke="#0d7d85" strokeWidth="4" fill="none" />
                </g>
              </svg>
            </div>
          </div>

          {/* Top Interactive Flash Pill & Accreditations */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            
            {/* Flash Live Pill Badge */}
            <div className="flex items-center gap-2.5 bg-slate-900/80 backdrop-blur-md border border-teal-500/30 text-white text-xs px-4 py-1.5 rounded-full">
              <span className="flex items-center gap-1 font-bold text-[#f08b23] uppercase tracking-wider text-[11px] animate-pulse">
                <Zap className="w-3.5 h-3.5 fill-[#f08b23]" />
                <span>FLASH SPOTLIGHT:</span>
              </span>
              <span className="font-semibold text-teal-200">
                {activeSpotlight.title}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-mono">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Navi Mumbai HQ · Maharashtra, Hyderabad &amp; Gujarat Plants</span>
            </div>
          </div>

          {/* Center / Bottom Layout Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-12 sm:pt-16">
            
            {/* Exact Pharmed Floating White Card (Bottom-Left) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-w-xl">
              
              {/* Amber Kicker with Link Icon */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#e07e2a] uppercase tracking-wider mb-2 font-mono">
                <Link2 className="w-3.5 h-3.5 text-[#e07e2a]" />
                <span>Wellness Starts Here · WHO-GMP Formulations</span>
              </div>

              {/* Bold Headline in Deep Teal */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#113f48] tracking-tight leading-tight">
                Stay Healthy with Our Quality Medical Products
              </h1>

              {/* User Formulation Range Profile Description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-[#113f48]">G-Rish Pharma Pvt. Ltd</strong> offers a comprehensive range of formulations including <strong>Cardiovascular, Anti-Diabetic, Anti-Biotic, Anti-Bacterials, Anti-Diarrhoeal, Anti-Ulcerants &amp; Anti-GERD, Anti-Allergics, Anti-Cold, Anti-Inflammatory, Anti-Fungals, Anti-Cancer, All Injectables, Creams, Appetizers, and Multivitamins</strong>.
              </p>

              {/* Quality Features Strip (From User's Prompt) */}
              <div className="mt-3.5 p-3 bg-teal-50/60 rounded-xl border border-teal-100 text-xs text-[#0f464d] space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-[#0d7d85]">
                  <Award className="w-4 h-4" />
                  <span>Premium Grade Ingredients from Recognized Vendors:</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-slate-700 pt-0.5">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> High Effectiveness</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Longer Shelf Life</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Purity</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> No Side-Effects</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Accurate Composition</span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenRfq()}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#0d7d85] hover:bg-[#0a6369] rounded-full transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onExploreProducts}
                  className="px-5 py-2.5 text-xs font-bold text-[#113f48] border border-slate-300 hover:border-[#0d7d85] rounded-full transition-all hover:bg-slate-50 cursor-pointer"
                >
                  Browse Product Directory
                </button>
              </div>

              {/* Accreditations / Logoipsum Row (from Pharmed Screenshot) */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-bold">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0d7d85] flex items-center justify-center text-[10px] font-black">
                    ✓
                  </div>
                  <span>WHO-GMP</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-bold">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0d7d85] flex items-center justify-center text-[10px] font-black">
                    ✓
                  </div>
                  <span>Schedule M</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-bold">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0d7d85] flex items-center justify-center text-[10px] font-black">
                    ✓
                  </div>
                  <span>ISO 9001</span>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-slate-700 text-xs font-bold">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-[10px] font-black">
                    ✓
                  </div>
                  <span>COPP &amp; FSC</span>
                </div>
              </div>

            </div>

            {/* Right Side Video Play Button & Flash Formulation Box */}
            <div className="lg:col-span-5 flex flex-col justify-end space-y-4 text-white pb-2">
              
              {/* Play Button & Callout */}
              <div className="flex items-center gap-4">
                <button
                  onClick={onOpenVirtualTour}
                  className="w-14 h-14 rounded-full bg-[#0d7d85] hover:bg-[#0a6369] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0 border-2 border-white/30"
                  aria-label="Watch Virtual Facility Tour"
                  title="Watch Virtual Facility Tour"
                >
                  <Play className="w-6 h-6 ml-0.5 fill-white text-white" />
                </button>
                <div className="text-xs">
                  <div className="font-bold text-white uppercase tracking-wider font-mono">
                    Virtual Plant Tour
                  </div>
                  <div className="text-slate-300">
                    Watch automated sterile lines in action
                  </div>
                </div>
              </div>

              {/* Dynamic Flash Showcase Card */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-teal-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-400 font-bold flex items-center gap-1 text-[11px]">
                    <Zap className="w-3 h-3 fill-amber-400" />
                    FLASH FOCUS LINE
                  </span>
                  <span className="text-[10px] font-mono text-teal-300">
                    Auto-Cycling
                  </span>
                </div>

                <div className="text-sm font-bold text-white">
                  {activeSpotlight.title}
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-teal-300">Dosages:</strong> {activeSpotlight.dosage}
                </div>
                <div className="text-xs text-slate-400">
                  <strong className="text-slate-300">Key Generics:</strong> {activeSpotlight.generics}
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-[11px] text-teal-200">
                  <span>★ {activeSpotlight.feature}</span>
                  <button
                    onClick={() => onSelectCategory ? onSelectCategory(activeSpotlight.tag) : onExploreProducts()}
                    className="text-amber-300 hover:underline font-bold"
                  >
                    View Line →
                  </button>
                </div>
              </div>

              {/* Bottom Address & Phone Bar */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300 pt-1 border-t border-white/15">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Navi Mumbai, Maharashtra 400705</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>022-2778-4500</span>
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
