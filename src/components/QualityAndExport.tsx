import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Microscope, 
  FileCheck, 
  Ship, 
  Plane, 
  ThermometerSnowflake, 
  CheckCircle2, 
  FileSpreadsheet,
  Award,
  Layers
} from 'lucide-react';
import { GLOBAL_EXPORT_REGIONS, CONTRACT_MANUFACTURING_MODELS } from '../data/pharmaData';

interface QualityAndExportProps {
  onOpenRfq: (topic?: string) => void;
}

export const QualityAndExport: React.FC<QualityAndExportProps> = ({ onOpenRfq }) => {
  const [activeTab, setActiveTab] = useState<'quality' | 'export' | 'models'>('quality');

  return (
    <section id="quality-export" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-teal-700 uppercase font-mono mb-2">
            Quality Assurance &amp; Worldwide Operations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            WHO-GMP Certified Quality &amp; Global Supply Chain
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From calibrated analytical chromatography in our QC laboratories to climate-controlled container shipping via Navi Mumbai&apos;s JNPT Port, G-Rish Pharma enforces international standards at every stage.
          </p>
        </div>

        {/* High Level Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('quality')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'quality'
                ? 'border-teal-700 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            WHO-GMP Testing &amp; Regulatory Dossiers
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'export'
                ? 'border-teal-700 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Worldwide Export Reach &amp; Cold Chain
          </button>
          <button
            onClick={() => setActiveTab('models')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'models'
                ? 'border-teal-700 text-teal-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Contract Manufacturing Business Models (P2P / Loan License)
          </button>
        </div>

        {/* Tab 1: Quality Assurance & Dossiers */}
        {activeTab === 'quality' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Instrumental Analytical Testing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with High Performance Liquid Chromatography (HPLC), Gas Chromatography (GC), UV-Vis Spectrophotometers, and Automated Dissolution Testers calibrated to USP/BP/IP protocols.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-mono text-teal-800">
                  Precision Assay &amp; Related Substances
                </div>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4">
                  <ThermometerSnowflake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  ICH Stability Chambers (Zone IVb)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time and accelerated stability chambers maintaining 30°C / 75% RH and 40°C / 75% RH, ensuring formulation longevity for tropical and high-humidity international markets.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-mono text-teal-800">
                  Zone IVb Certified Formulations
                </div>
              </div>

              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  CTD &amp; ACTD Regulatory Dossiers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our dedicated regulatory affairs division produces comprehensive 5-Module CTD / ACTD dossiers, Certificates of Pharmaceutical Product (COPP), FSC, and batch documentation.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-mono text-teal-800">
                  Full Ministry Registration Support
                </div>
              </div>

            </div>

            {/* QA Checklist Strip */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
              <h4 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-4">
                Quality Systems &amp; Release Protocol Checklist
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>100% Raw Material Assay:</strong> Every active API and excipient lot is chemically quarantined and tested.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Microbiological Control:</strong> Total aerobic microbial count, sterility testing, and endotoxin LAL checks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Automated Leak Testing:</strong> 100% blister and vial seal inspection before secondary packaging.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Retained Sample Archive:</strong> Full control batch retention under monitored climatic storage for 5 years.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Global Export Reach */}
        {activeTab === 'export' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GLOBAL_EXPORT_REGIONS.map((region, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="text-xs font-bold text-teal-700 font-mono mb-1">
                    Export Territory
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {region.region}
                  </h3>
                  <div className="text-xs text-slate-600 mb-3">
                    <strong className="text-slate-800">Key Markets:</strong> {region.countries.join(', ')}
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs space-y-1">
                    <div className="text-slate-500 font-medium">Dossier Standard:</div>
                    <div className="font-mono text-slate-800 font-semibold">{region.dossierFormat}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Logistics Infrastructure Advantage */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold shrink-0">
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">JNPT Port Nhava Sheva (Navi Mumbai)</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct access to India&apos;s largest container port, minimizing inland transit times and lowering export ocean freight fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Mumbai International Air Cargo</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    High-priority express air shipments for sterile injectables and temperature-sensitive biological medicines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold shrink-0">
                  <ThermometerSnowflake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Cold Chain 2°C - 8°C Monitoring</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Calibrated temperature data loggers included inside thermal shippers for complete end-to-end audit compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Contract Manufacturing Models */}
        {activeTab === 'models' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {CONTRACT_MANUFACTURING_MODELS.map((model) => (
              <div key={model.code} className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                      Model: {model.code}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Turnkey Contract</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {model.description}
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-slate-200">
                    {model.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60">
                  <button
                    onClick={() => onOpenRfq(`Engagement Model: ${model.title}`)}
                    className="w-full py-2 bg-slate-900 hover:bg-teal-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Discuss {model.code} Partnership
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
