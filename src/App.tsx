import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HomeFlashBanner } from './components/HomeFlashBanner';
import { HeroSlider } from './components/HeroSlider';
import { StatsCounter } from './components/StatsCounter';
import { WelcomeAbout } from './components/WelcomeAbout';
import { ProductPortfolio } from './components/ProductPortfolio';
import { ApexFacilities } from './components/ApexFacilities';
import { QualityAndExport } from './components/QualityAndExport';
import { ApexContact } from './components/ApexContact';
import { ApexFooter } from './components/ApexFooter';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RfqModal } from './components/RfqModal';
import { PharmaProduct, TherapeuticCategory } from './types/pharma';
import { MessageSquareText } from 'lucide-react';

function AppContent() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqPrefilledProduct, setRfqPrefilledProduct] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<PharmaProduct | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<TherapeuticCategory>('All');
  const [activeSection, setActiveSection] = useState('hero');

  const handleOpenRfq = (productName?: string) => {
    setRfqPrefilledProduct(productName || '');
    setRfqModalOpen(true);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (category: TherapeuticCategory) => {
    setSelectedCategory(category);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scrollspy to update active navigation item
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'products', 'facilities', 'quality', 'export', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-900 selection:text-white relative">
      {/* Apex Healthcare Style Header with Color Theme Switcher */}
      <Header 
        onOpenRfq={handleOpenRfq} 
        activeSection={activeSection} 
      />

      {/* Live News Flash Announcement Banner */}
      <HomeFlashBanner 
        onOpenRfq={handleOpenRfq}
        onExploreProducts={handleExploreProducts}
      />

      {/* Main Content Sections (Apex Healthcare Template Structure) */}
      <main className="flex-1">
        {/* Apex Style Wide Hero Slider Banner */}
        <HeroSlider 
          onOpenRfq={handleOpenRfq} 
          onExploreProducts={handleExploreProducts} 
        />

        {/* Statistical Metrics Strip */}
        <StatsCounter />

        {/* Welcome to G-Rish Pharma Pvt. Ltd (About Section) */}
        <WelcomeAbout 
          onOpenRfq={() => handleOpenRfq('Corporate Engagement / Loan License')} 
          onExploreProducts={handleExploreProducts}
        />

        {/* Apex Style Technical Product Portfolio with Table & Grid Views */}
        <ProductPortfolio 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenRfq={handleOpenRfq}
          onViewProduct={(product) => setSelectedProduct(product)}
        />

        {/* Multi-Site Manufacturing Facilities (Maharashtra, Hyderabad, Gujarat) */}
        <ApexFacilities 
          onOpenRfq={handleOpenRfq} 
        />

        {/* Quality Assurance, R&D Labs & Global Export */}
        <div id="quality">
          <QualityAndExport 
            onOpenRfq={handleOpenRfq}
          />
        </div>

        {/* Apex Style Corporate Contact & Plant Locators */}
        <ApexContact />
      </main>

      {/* Comprehensive Apex Sitemap Footer */}
      <ApexFooter 
        onOpenRfq={() => handleOpenRfq()} 
      />

      {/* Floating Quick Enquiry Button */}
      <button
        onClick={scrollToContact}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs py-3 px-3.5 rounded-l-xl shadow-xl flex items-center gap-1.5 transition-all hover:pr-4 cursor-pointer"
        aria-label="Quick Enquiry"
        title="Quick Enquiry"
      >
        <MessageSquareText className="w-4 h-4" />
        <span className="hidden sm:inline font-mono uppercase tracking-wider text-[11px]">Enquire</span>
      </button>

      {/* Product Technical Specifications Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenRfq={handleOpenRfq}
      />

      {/* Contract Manufacturing RFQ & Instant Quote Modal */}
      <RfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        prefilledProduct={rfqPrefilledProduct}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
