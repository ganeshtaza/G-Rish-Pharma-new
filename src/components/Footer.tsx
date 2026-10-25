import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenRfq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Profile Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 3v18M3 12h18" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                G-Rish Pharma Pvt. Ltd
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dynamic &amp; dedicated Navi Mumbai based Pharmaceutical Manufacturing Company in INDIA, engaged in contract manufacturing, exporting, supplying, and marketing APIs &amp; finished formulations across WHO-GMP approved facilities in Maharashtra, Hyderabad, and Gujarat.
            </p>

            <div className="pt-2 text-[11px] font-mono text-teal-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>WHO-GMP · Schedule M · ISO 9001:2015</span>
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
                  Company Profile
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('facilities')} className="hover:text-white transition-colors cursor-pointer">
                  WHO-GMP Facilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-white transition-colors cursor-pointer">
                  Contract Manufacturing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quality-export')} className="hover:text-white transition-colors cursor-pointer">
                  Quality &amp; Regulatory
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Formulation Spectrum
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Cephalosporin Range
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Betalactum Antibiotics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Non-Betalactum Generics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Sterile Injections (Liquid &amp; Dry)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Nutraceuticals &amp; Tonics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Active Pharmaceutical Ingredients (APIs)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & RFQ */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Inquiries &amp; RFP
            </h4>
            <p className="text-xs text-slate-400">
              For loan license, bulk tender queries, or international distribution rights:
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenRfq}
                className="w-full py-2.5 px-4 bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs rounded-lg shadow-sm transition-colors cursor-pointer text-center"
              >
                Request Quotation
              </button>
            </div>
            <div className="text-[11px] font-mono text-slate-500 pt-1">
              CIN / FDA Reg. verified
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

          <div className="flex items-center gap-6 text-[11px] text-slate-500">
            <span>WHO-GMP Compliant Facilities</span>
            <span>·</span>
            <span>Schedule M Validated</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-teal-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
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
