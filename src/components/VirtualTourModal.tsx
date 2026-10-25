import React from 'react';
import { X, Play, ShieldCheck, Factory, Microscope, Layers } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRfq: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onOpenRfq
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-bold text-amber-600 flex items-center gap-1.5 uppercase tracking-wider font-mono">
            <span>🔗 Virtual Plant Tour</span>
            <span>·</span>
            <span>WHO-GMP Facilities</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#113f48] tracking-tight mt-1">
            G-Rish Pharma Manufacturing Walkthrough
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Live technical view of our automated formulation lines and sterile filling suites in Maharashtra, Hyderabad, and Gujarat.
          </p>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative aspect-video rounded-2xl bg-gradient-to-tr from-slate-900 via-teal-950 to-slate-900 overflow-hidden border border-slate-800 flex flex-col justify-between p-6 text-white shadow-inner">
          {/* Subtle Cleanroom Graphic Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          {/* Top HUD */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-600/60 px-3 py-1 rounded-full text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ISO Class 5 Cleanroom Core · Online
            </span>
            <span className="text-slate-300">HVAC AHU: 24 Air Changes/Hr</span>
          </div>

          {/* Center Play Graphic */}
          <div className="relative z-10 text-center my-auto">
            <div className="w-20 h-20 rounded-full bg-[#0d7d85]/90 hover:bg-[#0d7d85] border-4 border-white/80 shadow-2xl flex items-center justify-center mx-auto transition-transform hover:scale-105 cursor-pointer">
              <Play className="w-8 h-8 text-white ml-1 fill-white" />
            </div>
            <p className="text-sm font-semibold text-slate-200 mt-4">
              Automated Sterile Lyophilization &amp; High-Speed Blister Line (360° Inspection)
            </p>
          </div>

          {/* Bottom Diagnostics Strip */}
          <div className="relative z-10 grid grid-cols-3 gap-3 text-xs bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-slate-300 font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">FACILITY</span>
              <span className="font-semibold text-white">Hyderabad Sterile Block</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">LINE CAPACITY</span>
              <span className="font-semibold text-teal-300">300 Vials / Min</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">WATER PURITY</span>
              <span className="font-semibold text-emerald-300">USP WFI &lt; 0.25 EU/ml</span>
            </div>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Facility audits and physical regulatory visits coordinated from our Navi Mumbai HQ.</span>
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
                onOpenRfq();
              }}
              className="px-6 py-2.5 bg-[#0d7d85] hover:bg-[#0b646a] text-white font-bold text-xs rounded-full shadow-md transition-colors cursor-pointer"
            >
              Request Plant Audit / Quotation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
