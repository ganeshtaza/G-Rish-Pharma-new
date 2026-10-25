import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ApexFooterProps {
  onOpenRfq: () => void;
}

export const ApexFooter: React.FC<ApexFooterProps> = ({ onOpenRfq }) => {
  const { config, theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Corporate Profile Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${config.primary} text-white flex items-center justify-center font-bold text-xl shadow-md`}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="12 6 12 12 18 15" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="12 12 6 15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase font-sans">
                G-Rish Pharma Pvt. Ltd.
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dynamic &amp; dedicated Navi Mumbai based Pharmaceutical Manufacturing Company in INDIA, engaged in contract manufacturing across WHO-GMP approved facilities in Maharashtra, Hyderabad, and Gujarat. Exporting, supplying, and marketing APIs &amp; finished formulations worldwide.
            </p>

            <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>WHO-GMP Approved Units · Schedule M Validated</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Corporate
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About G-Rish Pharma
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('facilities')} className="hover:text-white transition-colors cursor-pointer">
                  Manufacturing Hubs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Technical Directory
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quality')} className="hover:text-white transition-colors cursor-pointer">
                  Quality &amp; R&amp;D Testing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('export')} className="hover:text-white transition-colors cursor-pointer">
                  Global Export Reach
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Product Spectrum */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Formulation Spectrum
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Cardiovascular &amp; Anti-Diabetic
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  All Injectables (Liquid &amp; Dry Vials)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Anti-Cancer (Oncology)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Anti-Biotic &amp; Anti-Bacterials
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Anti-Ulcerants &amp; Anti-GERD
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Nutraceuticals &amp; Pain Relieving Oil
                </button>
              </li>
            </ul>
          </div>

          {/* Plant Addresses & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Inquiries &amp; Tenders
            </h4>
            <p className="text-xs text-slate-400">
              For loan license, global procurement tenders, or commercial batch quotation:
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenRfq}
                className={`w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white ${config.primary} ${config.primaryHover} rounded-lg shadow-sm transition-colors cursor-pointer text-center`}
              >
                Request Quotation
              </button>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-1">
              Corporate Office: Navi Mumbai, India
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-[11px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} G-Rish Pharma Pvt. Ltd. All rights reserved. Navi Mumbai, Maharashtra, India.
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-500 font-mono">
            <span>WHO-GMP Approved Units</span>
            <span>·</span>
            <span>Schedule M Validated</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
