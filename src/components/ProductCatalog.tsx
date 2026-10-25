import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  MapPin, 
  ChevronRight, 
  Package, 
  ShieldCheck, 
  Sparkles,
  FileCheck,
  Check,
  CheckCircle2,
  Award
} from 'lucide-react';
import { PHARMA_PRODUCTS, FORMULATION_QUALITY_PILLARS } from '../data/pharmaData';
import { PharmaProduct, TherapeuticCategory, DosageForm } from '../types/pharma';

interface ProductCatalogProps {
  selectedCategory: TherapeuticCategory;
  onSelectCategory: (category: TherapeuticCategory) => void;
  onOpenRfq: (productName?: string) => void;
  onViewProduct: (product: PharmaProduct) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenRfq,
  onViewProduct
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDosage, setSelectedDosage] = useState<DosageForm>('All');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const categories: TherapeuticCategory[] = [
    'All',
    'Cardiovascular',
    'Anti-Diabetic',
    'Anti-Biotic & Anti-Bacterials',
    'Anti-Ulcerants & Anti-GERD',
    'Anti-Allergics & Anti-Cold',
    'Anti-Inflammatory',
    'Anti-Fungals',
    'Anti-Cancer',
    'Anti-Diarrhoeal',
    'All Injectables',
    'Creams & Topical',
    'Appetizers & Multivitamins',
    'Nutraceuticals & Calcium',
    'Herbal & Pain Relieving Oil',
    'Cephalosporin & Betalactum',
    'APIs & Bulk Actives'
  ];

  const dosageForms: DosageForm[] = [
    'All',
    'Tablet',
    'Capsule',
    'Dry Syrup',
    'Liquid Syrup / Suspension',
    'Dry Injection (Vial)',
    'Liquid Injection',
    'Cream / Ointment / Gel',
    'Eye / Ear Drops',
    'Herbal Oil / Topical Liquid',
    'API / Pure Chemical'
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PHARMA_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Dosage form filter
      if (selectedDosage !== 'All' && product.dosageForm !== selectedDosage) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesBrand = product.brandName.toLowerCase().includes(query);
        const matchesGeneric = product.genericName.toLowerCase().includes(query);
        const matchesComp = product.composition.toLowerCase().includes(query);
        const matchesInd = product.indications.toLowerCase().includes(query);
        const matchesStrength = product.strength.toLowerCase().includes(query);
        return matchesBrand || matchesGeneric || matchesComp || matchesInd || matchesStrength;
      }
      return true;
    });
  }, [selectedCategory, selectedDosage, searchQuery]);

  // CSV Export Function
  const handleExportCsv = () => {
    const headers = ['Product ID', 'Brand Name', 'Generic Name', 'Category', 'Dosage Form', 'Strength', 'Composition', 'Packaging', 'Facility Location', 'Quality Features', 'Dossiers'];
    const rows = filteredProducts.map(p => [
      `"${p.id}"`,
      `"${p.brandName}"`,
      `"${p.genericName}"`,
      `"${p.category}"`,
      `"${p.dosageForm}"`,
      `"${p.strength}"`,
      `"${p.composition.replace(/"/g, '""')}"`,
      `"${p.packaging}"`,
      `"${p.facilityLocation}"`,
      `"${(p.features || ['Accurate Composition', 'Purity']).join('; ')}"`,
      `"${p.dossierAvailable.join(', ')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `G-Rish_Pharma_Product_Catalog_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-wider text-[#e07e2a] uppercase font-mono mb-2 flex items-center gap-1.5">
              <span>🔗 Verified Formulations Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#113f48] tracking-tight leading-tight">
              APIs &amp; Finished Formulations Directory
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Explore our wide therapeutic portfolio spanning <strong>Cardiovascular, Anti-Diabetic, Anti-Biotic, Anti-Bacterials, Anti-Diarrhoeal, Anti-Ulcerants, Anti-Allergics, Anti-Inflammatory, Anti-Fungals, Anti-Cancer, All Injectables, Creams, Appetizers, Multivitamins, Calcium, and Pain Relieving Oil</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCsv}
              className="px-5 py-2.5 bg-white border border-slate-300 hover:border-[#0d7d85] text-slate-800 hover:text-[#0d7d85] font-bold text-xs rounded-full shadow-2xs transition-colors flex items-center gap-2 cursor-pointer"
              title="Download Product List as CSV"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Downloaded CSV</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-[#0d7d85]" />
                  <span>Export Product List</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quality Banner Reminder (Features: high effectiveness, longer shelf life, purity, no side-effects, accurate composition) */}
        <div className="mb-8 p-4 bg-teal-50/70 border border-teal-200 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
          <div className="flex items-center gap-2 font-bold text-[#0f464d]">
            <Award className="w-4 h-4 text-[#0d7d85] shrink-0" />
            <span>Formulation Quality Features:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-medium text-slate-600">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> High Effectiveness</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> Longer Shelf Life</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> Chemical Purity</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> No Side-Effects</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> Excellent Healing Properties</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> Accurate Composition</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-8 space-y-4">
          
          {/* Top Search & Dosage Select */}
          <div className="flex flex-col sm:flex-row gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search generics (e.g. Telmisartan, Metformin, Azithromycin, Pantoprazole, Ceftriaxone, Calcium, Pain Oil)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d7d85] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dosage Dropdown */}
            <div className="sm:w-64">
              <select
                value={selectedDosage}
                onChange={(e) => setSelectedDosage(e.target.value as DosageForm)}
                className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d7d85] cursor-pointer"
              >
                <option value="All">All Dosage Forms</option>
                {dosageForms.filter(d => d !== 'All').map((df) => (
                  <option key={df} value={df}>
                    {df}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Category Tabs (Interactive Segmented Buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#0d7d85] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100 font-mono">
            <span>
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> active formulations
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedDosage !== 'All' && ` (${selectedDosage})`}
            </span>
            <span>WHO-GMP Validated Formulations</span>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No matching formulations found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We frequently produce custom formulations across Cardiovascular, Anti-Diabetic, Anti-Cancer, and Herbal oils on request. Reach out with your batch requirements.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedDosage('All'); onSelectCategory('All'); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#0d7d85] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-[#0d7d85] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  
                  {/* Clean unboxed metadata with subtle typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                    <span className="text-[#0d7d85] font-semibold">{product.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.dosageForm}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-600">{product.facilityLocation}</span>
                  </div>

                  {/* Product Title & Generic */}
                  <h3 className="text-lg font-bold text-[#113f48] group-hover:text-[#0d7d85]">
                    {product.brandName}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5 line-clamp-1">
                    {product.genericName}
                  </div>

                  {/* Strength & Packaging Row */}
                  <div className="mt-3.5 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Strength:</span>
                      <span className="text-slate-900 font-bold font-mono">{product.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Packaging:</span>
                      <span className="text-slate-800 text-right line-clamp-1 max-w-[180px]">{product.packaging}</span>
                    </div>
                  </div>

                  {/* Composition Snippet */}
                  <div className="mt-3 text-xs text-slate-600 line-clamp-2">
                    <span className="font-semibold text-slate-700">Composition: </span>
                    {product.composition}
                  </div>

                  {/* Quality Features Tags */}
                  {product.features && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.features.map((feat, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] font-mono text-[#0f464d] bg-teal-50/90 border border-teal-100 px-2 py-0.5 rounded"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Available Dossiers */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <FileCheck className="w-3.5 h-3.5 text-[#0d7d85] shrink-0" />
                    <span>Dossiers: {product.dossierAvailable.join(', ')}</span>
                  </div>

                </div>

                {/* Actions Row */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onViewProduct(product)}
                    className="text-xs font-bold text-slate-700 hover:text-[#0d7d85] transition-colors cursor-pointer"
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => onOpenRfq(`${product.brandName} (${product.genericName})`)}
                    className="px-4 py-1.5 text-xs font-bold text-[#0d7d85] bg-teal-50 hover:bg-[#0d7d85] hover:text-white rounded-full transition-colors cursor-pointer"
                  >
                    Inquire Batch
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
