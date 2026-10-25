import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Table, 
  LayoutGrid, 
  Check, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight,
  Award,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { PHARMA_PRODUCTS } from '../data/pharmaData';
import { PharmaProduct, TherapeuticCategory, DosageForm } from '../types/pharma';
import { useTheme } from '../context/ThemeContext';

interface ProductPortfolioProps {
  selectedCategory: TherapeuticCategory;
  onSelectCategory: (category: TherapeuticCategory) => void;
  onOpenRfq: (productName?: string) => void;
  onViewProduct: (product: PharmaProduct) => void;
}

export const ProductPortfolio: React.FC<ProductPortfolioProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenRfq,
  onViewProduct
}) => {
  const { config } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDosage, setSelectedDosage] = useState<DosageForm>('All');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
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
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedDosage !== 'All' && product.dosageForm !== selectedDosage) {
        return false;
      }
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

  // Export CSV
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
    <section id="products" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-blue-900 uppercase mb-2">
              APEX STYLE PRODUCT PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight uppercase font-sans">
              Formulations &amp; Active Ingredients Directory
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Manufactured with premium grade ingredients sourced from recognized vendors for high effectiveness, longer shelf life, purity, and accurate composition.
            </p>
          </div>

          {/* Action Tools: Table/Grid View & CSV Download */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                title="Tabular Technical View"
              >
                <Table className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'}`}
                title="Card Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleExportCsv}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Downloaded CSV</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Export Product List</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quality Banner Strip (User Requirements) */}
        <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Award className="w-4 h-4 text-blue-900 shrink-0" />
            <span>Guaranteed Formulation Quality Attributes:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-semibold text-slate-600">
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> High Effectiveness</span>
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Longer Shelf Life</span>
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Chemical Purity</span>
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> No Side-Effects</span>
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Excellent Healing</span>
            <span className="flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Accurate Composition</span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search formulations (e.g. Telmisartan, Metformin, Azithromycin, Pantoprazole, Ceftriaxone, Calcium, Pain Relieving Oil)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900"
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
                className="w-full py-2.5 px-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900 cursor-pointer"
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

          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? `${config.primary} text-white shadow-xs`
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200 font-mono">
            <span>
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> formulations
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedDosage !== 'All' && ` (${selectedDosage})`}
            </span>
            <span>WHO-GMP Validated Technical Profiles</span>
          </div>
        </div>

        {/* Tabular Technical View (Apex Healthcare Standard) */}
        {viewMode === 'table' ? (
          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-900 text-white uppercase font-mono text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">Brand / Generic Name</th>
                  <th className="py-3 px-4">Therapeutic Segment</th>
                  <th className="py-3 px-4">Dosage Form</th>
                  <th className="py-3 px-4">Strength</th>
                  <th className="py-3 px-4">Packaging</th>
                  <th className="py-3 px-4">Manufacturing Plant</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-slate-500">
                      No matching formulations found. Contact our technical desk for custom synthesis.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900 text-sm">{p.brandName}</div>
                        <div className="text-slate-600 font-medium text-xs">{p.genericName}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-blue-900">{p.category}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-700 font-medium">
                        {p.dosageForm}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        {p.strength}
                      </td>
                      <td className="py-3 px-4 text-slate-600 max-w-[180px] truncate" title={p.packaging}>
                        {p.packaging}
                      </td>
                      <td className="py-3 px-4">
                        <span className="flex items-center gap-1 text-slate-600 font-mono text-[11px]">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {p.facilityLocation}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => onViewProduct(p)}
                            className="px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:text-slate-900 border border-slate-300 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            Specs
                          </button>
                          <button
                            onClick={() => onOpenRfq(`${p.brandName} (${p.genericName})`)}
                            className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${config.primary} ${config.primaryHover} rounded transition-colors cursor-pointer`}
                          >
                            Enquire
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-900 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono">
                    <span className="text-blue-900 font-bold uppercase">{p.category}</span>
                    <span>·</span>
                    <span>{p.dosageForm}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {p.brandName}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600 mt-0.5 line-clamp-1">
                    {p.genericName}
                  </div>

                  <div className="mt-3.5 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Strength:</span>
                      <span className="text-slate-900 font-bold font-mono">{p.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Packaging:</span>
                      <span className="text-slate-800 text-right truncate max-w-[180px]">{p.packaging}</span>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-slate-600 line-clamp-2">
                    <span className="font-semibold text-slate-700">Composition: </span>
                    {p.composition}
                  </div>

                  {p.features && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.features.map((feat, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onViewProduct(p)}
                    className="text-xs font-bold text-slate-700 hover:underline cursor-pointer"
                  >
                    View Technical Sheet
                  </button>

                  <button
                    onClick={() => onOpenRfq(`${p.brandName} (${p.genericName})`)}
                    className={`px-3.5 py-1.5 text-xs font-bold uppercase text-white ${config.primary} ${config.primaryHover} rounded transition-colors cursor-pointer`}
                  >
                    Enquire Now
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
