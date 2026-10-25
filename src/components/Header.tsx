import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Palette,
  ChevronDown,
  Building2,
  FileCheck
} from 'lucide-react';
import { useTheme, THEMES, ColorTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenRfq: (productName?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRfq, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, setTheme, config } = useTheme();

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all shadow-sm">
      {/* Apex Healthcare Style Top Header Strip */}
      <div className={`${config.headerBg} text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Corporate HQ: Navi Mumbai, India</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Plants: Maharashtra · Hyderabad · Gujarat</span>
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>WHO-GMP Approved &amp; Schedule M Compliant</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a 
              href="mailto:export@grishpharma.com" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">export@grishpharma.com</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:+912227784500" 
              className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 (22) 2778 4500</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Apex Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Apex Healthcare Style Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
            className="flex items-center gap-3 shrink-0 group text-slate-900"
          >
            <div className={`w-11 h-11 rounded-lg ${config.primary} text-white flex items-center justify-center font-bold text-xl shadow-md transition-transform group-hover:scale-105`}>
              {/* Hexagon Chemical Molecule Mark */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="12 6 12 12 18 15" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="12 12 6 15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-sans uppercase">
                G-Rish <span className={theme === 'navy' ? 'text-blue-800' : theme === 'teal' ? 'text-teal-700' : theme === 'cobalt' ? 'text-indigo-800' : 'text-emerald-800'}>Pharma</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase -mt-1 font-mono">
                Pvt Ltd · APIs &amp; Formulations
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Apex Healthcare Style) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-700">
            <button
              onClick={() => scrollTo('hero')}
              className={`hover:text-blue-900 transition-colors py-2 border-b-2 cursor-pointer ${
                activeSection === 'hero' ? config.navActive : 'border-transparent'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className={`hover:text-blue-900 transition-colors py-2 border-b-2 cursor-pointer ${
                activeSection === 'about' ? config.navActive : 'border-transparent'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollTo('products')}
              className={`hover:text-blue-900 transition-colors py-2 border-b-2 cursor-pointer ${
                activeSection === 'products' ? config.navActive : 'border-transparent'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => scrollTo('facilities')}
              className={`hover:text-blue-900 transition-colors py-2 border-b-2 cursor-pointer ${
                activeSection === 'facilities' ? config.navActive : 'border-transparent'
              }`}
            >
              Facilities
            </button>
            <button
              onClick={() => scrollTo('quality')}
              className={`hover:text-blue-900 transition-colors py-2 border-b-2 cursor-pointer ${
                activeSection === 'quality' ? config.navActive : 'border-transparent'
              }`}
            >
              Quality &amp; R&amp;D
            </button>
            <button
              onClick={() => scrollTo('export')}
              className={`hover:text-blue-900 transition-colors py-2 border-b-2 cursor-pointer ${
                activeSection === 'export' ? config.navActive : 'border-transparent'
              }`}
            >
              Global Export
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`hover:text-blue-900 transition-colors py-2 border-b-2 cursor-pointer ${
                activeSection === 'contact' ? config.navActive : 'border-transparent'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Header Area: Color Switcher & Primary RFP Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            
            {/* Color Palette Switcher (Fulfills "only coller change") */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
                title="Change Color Theme"
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Color Theme</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[10px] font-mono font-bold text-slate-400 uppercase">
                    Select Template Theme
                  </div>
                  {Object.values(THEMES).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold flex items-center justify-between hover:bg-slate-50 transition-colors ${
                        theme === t.id ? 'text-blue-900 bg-blue-50/70 font-bold' : 'text-slate-700'
                      }`}
                    >
                      <span>{t.name}</span>
                      <span className={`w-3 h-3 rounded-full ${t.primary}`}></span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Apex Healthcare Style "Enquire Now" Button */}
            <button
              onClick={() => onOpenRfq()}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white ${config.primary} ${config.primaryHover} rounded-lg shadow-sm transition-all cursor-pointer`}
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenRfq()}
              className={`sm:hidden px-3 py-1.5 text-xs font-bold uppercase text-white ${config.primary} rounded-md`}
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-900 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 space-y-2 shadow-xl">
          <button
            onClick={() => scrollTo('hero')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase text-slate-800 hover:text-blue-900"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase text-slate-800 hover:text-blue-900"
          >
            About Us
          </button>
          <button
            onClick={() => scrollTo('products')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase text-slate-800 hover:text-blue-900"
          >
            Products &amp; Formulations
          </button>
          <button
            onClick={() => scrollTo('facilities')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase text-slate-800 hover:text-blue-900"
          >
            Manufacturing Facilities
          </button>
          <button
            onClick={() => scrollTo('quality')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase text-slate-800 hover:text-blue-900"
          >
            Quality &amp; Compliance
          </button>
          <button
            onClick={() => scrollTo('export')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase text-slate-800 hover:text-blue-900"
          >
            Global Export
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full text-left py-2.5 text-xs font-bold uppercase text-slate-800 hover:text-blue-900"
          >
            Contact Us
          </button>

          {/* Mobile Color Switcher */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Theme Color:</span>
            <div className="flex items-center gap-2">
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`w-6 h-6 rounded-full ${t.primary} ${theme === t.id ? 'ring-2 ring-offset-2 ring-slate-900' : ''}`}
                  title={t.name}
                />
              ))}
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRfq(); }}
              className={`w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white ${config.primary} rounded-lg shadow-md`}
            >
              Enquire Now / Request Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
