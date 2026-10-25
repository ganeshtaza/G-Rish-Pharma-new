import React from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Globe2,
  FileText,
  Microscope,
  Cpu
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface WelcomeAboutProps {
  onOpenRfq: () => void;
  onExploreProducts: () => void;
}

export const WelcomeAbout: React.FC<WelcomeAboutProps> = ({ 
  onOpenRfq, 
  onExploreProducts 
}) => {
  const { config } = useTheme();

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-blue-900 uppercase mb-2">
            CORPORATE OVERVIEW &amp; PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight uppercase font-sans">
            Welcome to G-Rish Pharma Pvt. Ltd.
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Dynamic &amp; Dedicated Navi Mumbai Based Indian Pharmaceutical Manufacturer &amp; Worldwide Exporter
          </p>
        </div>

        {/* 2-Column Split: Corporate Narrative & Facility Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Official Profile Copy & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-900" />
                <span>Our Corporate Profile &amp; Mission</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm">
                &ldquo;<strong className="text-slate-900">G-Rish Pharma Pvt. Ltd</strong> is a dynamic &amp; dedicated Navi Mumbai based Pharmaceutical Manufacturing Company in INDIA, engaged in contract Manufacturing (facilities located in Maharashtra, Hyderabad, Gujarat &amp; other parts of India), Exporting, Supplying, and Marketing a wide range of APIs &amp; Finished Formulations—under the category of Cephalosporin, Betalactum, Non Betalactum, Injections and Nutraceuticals (Tablet, capsules, Liquid/Dry syrup, Liquid/Dry Injections, ointments, Eye/Ear Drops etc) worldwide. Our products are mostly manufactured at sophisticated, state-of-the-art WHO GMP Approved Manufacturing Facilities in India.&rdquo;
              </p>
            </div>

            <p className="text-sm text-slate-600">
              Through strategic backward integration, high-capacity tableting, sterile injectable lyophilization, and API crystallization lines in <strong>Maharashtra (Navi Mumbai &amp; Tarapur)</strong>, <strong>Telangana (Hyderabad Pharma Corridor)</strong>, and <strong>Gujarat (Ankleshwar / Vadodara)</strong>, we ensure uninterrupted global healthcare supplies with zero compromise on chemical purity.
            </p>

            {/* Quality Formulations Feature Grid (From User Prompt) */}
            <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-blue-950 uppercase font-mono tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-900" />
                <span>Verified Quality Standards:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                We formulate these products using premium grade ingredients that are sourced from recognized vendors and are offered with features like <strong>high effectiveness, longer shelf life, purity, no side-effects, excellent healing properties and accurate composition</strong>.
              </p>
            </div>

            {/* Core 4 Pillar Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  WHO-GMP &amp; Schedule M
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Validated cleanroom Class 100/10k with separate AHUs preventing cross-contamination.
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-900" />
                  CTD / ACTD Regulatory Files
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Complete technical modules, Zone IVb stability testing, and COPP export issuance.
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-blue-900" />
                  Global Shipping Hub
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Navi Mumbai location provides 35 km proximity to Nhava Sheva (JNPT) container port.
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-lg">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-blue-900" />
                  In-House Analytical QC
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Equipped with calibrated HPLC, GC, UV Spectrophotometry, and dissolution analyzers.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRfq}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-wider text-white ${config.primary} ${config.primaryHover} rounded-lg shadow-sm transition-colors cursor-pointer`}
              >
                Request Third-Party / Loan License Quote
              </button>

              <button
                onClick={onExploreProducts}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white border border-slate-300 hover:border-slate-400 rounded-lg transition-colors cursor-pointer"
              >
                View Formulation Portfolio
              </button>
            </div>

          </div>

          {/* Right Column: Strategic Location & Manufacturing Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Navi Mumbai Strategic Advantages */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Navi Mumbai Central Advantage</h4>
                  <p className="text-xs text-slate-500">Commercial Operations &amp; Port Access</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>JNPT Port Proximity:</strong> Located 35 km from Nhava Sheva (JNPT Port) ensuring rapid container gate-in and low inland freight costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mumbai Air Cargo:</strong> 40 minutes from Mumbai International Airport for emergency cold-chain injectable air shipments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Regulatory Nexus:</strong> Direct connectivity to Maharashtra FDA Directorate and national testing centers.</span>
                </li>
              </ul>
            </div>

            {/* Engagement Models (P2P, Loan License, Export) */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider mb-3">
                Contract Manufacturing Models Available:
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="font-bold text-blue-900">Principal to Principal (P2P):</span>
                  <p className="text-slate-600 mt-0.5">End-to-end turnkey batch production under your established brand packaging.</p>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="font-bold text-blue-900">Loan License Manufacturing:</span>
                  <p className="text-slate-600 mt-0.5">Dedicated production lines utilization under your existing drug manufacturing license.</p>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="font-bold text-blue-900">Global Tender &amp; Institutional Supply:</span>
                  <p className="text-slate-600 mt-0.5">Bulk export volumes with registered CTD/ACTD dossiers for health ministries.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
