import React from 'react';
import { 
  X, 
  ShieldCheck, 
  FileCheck, 
  MapPin, 
  Package, 
  Pill, 
  Activity, 
  ArrowRight,
  Download
} from 'lucide-react';
import { PharmaProduct } from '../types/pharma';

interface ProductDetailModalProps {
  product: PharmaProduct | null;
  onClose: () => void;
  onOpenRfq: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenRfq
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700 uppercase tracking-wider mb-1">
            <span>{product.category}</span>
            <span>·</span>
            <span>{product.dosageForm}</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-slate-500">
              <MapPin className="w-3 h-3 text-teal-600" />
              {product.facilityLocation} Plant
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {product.brandName}
          </h3>
          <div className="text-sm font-semibold text-slate-600 mt-0.5">
            {product.genericName}
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="mt-6 space-y-4 text-xs sm:text-sm">
          
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Active Composition
            </div>
            <div className="text-slate-900 font-medium">
              {product.composition}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Dosage Strength
              </div>
              <div className="text-slate-900 font-bold font-mono">
                {product.strength}
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Standard Packaging
              </div>
              <div className="text-slate-900 font-medium">
                {product.packaging}
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Therapeutic Indications
            </div>
            <div className="text-slate-700">
              {product.indications}
            </div>
          </div>

          {/* Product Quality Features (High Effectiveness, Longer Shelf Life, Purity, etc.) */}
          {product.features && (
            <div className="p-3.5 bg-teal-50/60 rounded-xl border border-teal-100">
              <div className="text-xs font-bold text-[#0d7d85] uppercase tracking-wider mb-1.5 font-mono">
                Formulation Features &amp; Purity Standards:
              </div>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-semibold bg-white text-[#0f464d] border border-teal-200 rounded-lg shadow-2xs"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Dossiers & Regulatory Certificates */}
          <div className="pt-2">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
              Regulatory Dossiers &amp; Technical Support Available:
            </div>
            <div className="flex flex-wrap gap-2">
              {product.dossierAvailable.map((dossier, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-teal-50 text-teal-800 border border-teal-200 rounded-md flex items-center gap-1.5"
                >
                  <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                  {dossier}
                </span>
              ))}
              {product.certifications.map((cert, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 rounded-md flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Action Footnotes */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">
            ID: <span className="text-slate-800 font-bold">{product.id.toUpperCase()}</span> · WHO-GMP Facility Verified
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRfq(`${product.brandName} (${product.genericName})`);
              }}
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Inquire Batch &amp; Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
