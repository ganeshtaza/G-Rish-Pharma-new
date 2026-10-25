import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  FileCheck,
  Calculator,
  Building2
} from 'lucide-react';
import { RfqFormData } from '../types/pharma';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  prefilledProduct = ''
}) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'India',
    category: 'Cephalosporin',
    dosageForm: 'Tablet',
    productName: prefilledProduct || '',
    estimatedBatchSize: '100,000 Units',
    packagingPreference: 'Alu-Alu Moisture Barrier Blister',
    dossierNeeded: true,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.companyName.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');

    // Generate inquiry reference number
    const generatedId = `GRP-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close RFQ dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Inquiry Successfully Submitted
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you for reaching out to <strong>G-Rish Pharma Pvt. Ltd</strong>. Our contract manufacturing &amp; regulatory export desk will review your batch specifications and respond within 24 business hours.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Inquiry Reference:</span>
                <span className="font-bold text-teal-800">{inquiryId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Client / Organization:</span>
                <span className="text-slate-800 font-semibold">{formData.companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Formulation:</span>
                <span className="text-slate-800">{formData.productName || formData.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Lead Time:</span>
                <span className="text-emerald-700 font-semibold">21 - 30 Calendar Days</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Done / Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="pr-8 mb-6">
              <div className="text-xs font-bold text-teal-700 font-mono uppercase tracking-wider mb-1">
                G-Rish Pharma Pvt Ltd · RFP &amp; RFQ Portal
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Request Contract Manufacturing Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                WHO-GMP facilities in Maharashtra, Hyderabad &amp; Gujarat. Provide your batch parameters for custom quotation.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product and Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Therapeutic Segment *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="Cardiovascular">Cardiovascular</option>
                    <option value="Anti-Diabetic">Anti-Diabetic</option>
                    <option value="Anti-Biotic & Anti-Bacterials">Anti-Biotic &amp; Anti-Bacterials</option>
                    <option value="Anti-Diarrhoeal">Anti-Diarrhoeal</option>
                    <option value="Anti-Ulcerants & Anti-GERD">Anti-Ulcerants &amp; Anti-GERD</option>
                    <option value="Anti-Allergics & Anti-Cold">Anti-Allergics &amp; Anti-Cold</option>
                    <option value="Anti-Inflammatory">Anti-Inflammatory &amp; Pain</option>
                    <option value="Anti-Fungals">Anti-Fungals</option>
                    <option value="Anti-Cancer">Anti-Cancer (Oncology)</option>
                    <option value="All Injectables">All Injectables (Liquid &amp; Dry)</option>
                    <option value="Creams & Topical">Creams &amp; Topical</option>
                    <option value="Appetizers & Multivitamins">Appetizers &amp; Multivitamins</option>
                    <option value="Nutraceuticals & Calcium">Nutraceuticals &amp; Calcium</option>
                    <option value="Herbal & Pain Relieving Oil">Herbal &amp; Pain Relieving Oil</option>
                    <option value="Cephalosporin & Betalactum">Cephalosporin &amp; Betalactum</option>
                    <option value="APIs & Bulk Actives">APIs &amp; Bulk Actives</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Dosage Form *
                  </label>
                  <select
                    value={formData.dosageForm}
                    onChange={(e) => setFormData({ ...formData, dosageForm: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="Tablet">Tablet (Film/Enteric/Dispersible/SR)</option>
                    <option value="Capsule">Capsule (Hard Gelatin/Pellets)</option>
                    <option value="Dry Injection (Vial)">Dry Injection (Sterile Vial with WFI)</option>
                    <option value="Liquid Injection">Liquid Injection (Ampoules)</option>
                    <option value="Dry Syrup">Dry Syrup / Pediatric Suspension</option>
                    <option value="Liquid Syrup">Liquid Syrup / Oral Drop / Tonic</option>
                    <option value="Cream / Ointment / Gel">Cream / Ointment / Medicated Gel</option>
                    <option value="Eye / Ear Drops">Eye / Ear Drops</option>
                    <option value="Herbal Oil / Topical Liquid">Herbal Oil / Topical Liquid</option>
                    <option value="API / Pure Chemical">API / Active Substance</option>
                  </select>
                </div>
              </div>

              {/* Formulation Molecule Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product / Generic Molecule Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Cefixime 200mg, Ceftriaxone 1g, Pantoprazole 40mg, etc."
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Batch Size & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Estimated Batch Volume
                  </label>
                  <select
                    value={formData.estimatedBatchSize}
                    onChange={(e) => setFormData({ ...formData, estimatedBatchSize: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="25,000 Units (Pilot Batch)">25,000 Units (Pilot Batch)</option>
                    <option value="50,000 Units">50,000 Units</option>
                    <option value="100,000 Units">100,000 Units (Standard Commercial)</option>
                    <option value="500,000+ Units (Bulk Export)">500,000+ Units (Bulk Export)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Packaging Specification
                  </label>
                  <select
                    value={formData.packagingPreference}
                    onChange={(e) => setFormData({ ...formData, packagingPreference: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="Alu-Alu Moisture Barrier Blister">Alu-Alu Moisture Barrier Blister</option>
                    <option value="PVC / PVDC Blister Strip">PVC / PVDC Blister Strip</option>
                    <option value="Glass Vial with WFI Ampoule">Glass Vial with WFI Ampoule</option>
                    <option value="Amber Glass / PET Bottle">Amber Glass / PET Bottle</option>
                    <option value="Laminated Aluminum Tube">Laminated Aluminum Tube</option>
                    <option value="Bulk Pack / Jars">Bulk Pack / Jars (Export)</option>
                  </select>
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ramesh Kumar / John Anderson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Healthcare Pharma Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98200 XXXXX / +1 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              {/* Dossier Option Checkbox */}
              <div className="pt-1 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dossierCheck"
                  checked={formData.dossierNeeded}
                  onChange={(e) => setFormData({ ...formData, dossierNeeded: e.target.checked })}
                  className="rounded text-teal-700 focus:ring-teal-600 h-4 w-4"
                />
                <label htmlFor="dossierCheck" className="text-xs text-slate-700 cursor-pointer">
                  Require CTD / ACTD regulatory dossier &amp; Zone IVb stability documentation
                </label>
              </div>

              {/* Specific Remarks */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Technical / Regulatory Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify target market, custom excipients, delivery timelines, or loan license requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  🔒 NDA Protected Inquiry
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Submit Official RFQ</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
