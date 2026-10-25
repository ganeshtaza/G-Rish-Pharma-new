import React from 'react';
import { 
  Link2, 
  Building2, 
  ShieldCheck, 
  Pill, 
  Globe2, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Users,
  Microscope,
  FileCheck
} from 'lucide-react';

interface AboutCompanyProps {
  onOpenRfq: () => void;
  onExploreProducts: () => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ 
  onOpenRfq, 
  onExploreProducts 
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Pharmed "Who We Are" Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#e07e2a] uppercase tracking-wider mb-2 font-mono">
            <Link2 className="w-3.5 h-3.5 text-[#e07e2a]" />
            <span>Who We Are</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#113f48] tracking-tight leading-tight">
            Healthcare Solutions for a Healthier Tomorrow
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            At <strong>G-Rish Pharma Pvt. Ltd</strong>, we are dedicated to providing top-notch pharmaceutical manufacturing, active ingredients, and finished formulations with an uncompromising focus on quality, safety, and global accessibility.
          </p>
        </div>

        {/* 3 Core Highlight Feature Cards (Pharmed Style with Rounded-2xl and Soft Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Navi Mumbai Base & Contract Manufacturing */}
          <div className="group rounded-2xl p-6 sm:p-7 border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#0d7d85] hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0d7d85] flex items-center justify-center font-bold mb-5 group-hover:bg-[#0d7d85] group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#e07e2a] font-bold uppercase mb-1">
                Contract Manufacturing
              </div>
              <h3 className="text-lg font-bold text-[#113f48] mb-2">
                Pan-India Production Hubs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Advanced contract manufacturing facilities located across Maharashtra, Hyderabad, and Gujarat, offering high capacity for solid orals, sterile injectables, and bulk APIs.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>Principal to Principal (P2P)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>Loan License Arrangements</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>Third-Party Brand Manufacturing</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/70">
              <button 
                onClick={onOpenRfq}
                className="text-xs font-bold text-[#0d7d85] hover:text-[#094e53] flex items-center gap-1 cursor-pointer"
              >
                <span>Inquire Facility Booking</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Wide Range of APIs & Formulations */}
          <div className="group rounded-2xl p-6 sm:p-7 border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#0d7d85] hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0d7d85] flex items-center justify-center font-bold mb-5 group-hover:bg-[#0d7d85] group-hover:text-white transition-colors">
                <Pill className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#e07e2a] font-bold uppercase mb-1">
                Therapeutic Portfolio
              </div>
              <h3 className="text-lg font-bold text-[#113f48] mb-2">
                APIs &amp; Finished Formulations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Specializing in Cephalosporin, Betalactum, Non-Betalactum, Injections, and Nutraceuticals across all essential delivery dosage forms.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>Tablets &amp; Capsules (Alu-Alu)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>Liquid / Dry Syrups &amp; Drops</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>Dry &amp; Liquid Injections (Vials/Ampoules)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/70">
              <button 
                onClick={onExploreProducts}
                className="text-xs font-bold text-[#0d7d85] hover:text-[#094e53] flex items-center gap-1 cursor-pointer"
              >
                <span>Browse Products Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: WHO-GMP Approved Facilities & Global Export */}
          <div className="group rounded-2xl p-6 sm:p-7 border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#0d7d85] hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0d7d85] flex items-center justify-center font-bold mb-5 group-hover:bg-[#0d7d85] group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#e07e2a] font-bold uppercase mb-1">
                Quality &amp; Compliance
              </div>
              <h3 className="text-lg font-bold text-[#113f48] mb-2">
                WHO-GMP Certified &amp; Export Ready
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Manufactured at sophisticated state-of-the-art WHO GMP approved manufacturing facilities in India with full CTD/ACTD dossier backing.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>ICH Zone IVb Stability Validated</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>COPP, FSC &amp; Free Sale Certificates</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7d85]" />
                  <span>JNPT Port Navi Mumbai Maritime Dispatch</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200/70">
              <button 
                onClick={onOpenRfq}
                className="text-xs font-bold text-[#0d7d85] hover:text-[#094e53] flex items-center gap-1 cursor-pointer"
              >
                <span>Request Regulatory Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Pharmed-Style Team & Scientific Staff Section */}
        <div className="mt-8 pt-10 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#e07e2a] uppercase tracking-wider font-mono">
                <Link2 className="w-3.5 h-3.5" />
                <span>Our Technical Leadership</span>
              </div>
              <h3 className="text-2xl font-bold text-[#113f48] tracking-tight mt-1">
                Expert Pharmaceutical Scientists &amp; QA Specialists
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              In-House Analytical QC / QA Teams
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center hover:bg-white hover:border-[#0d7d85] transition-all">
              <div className="w-20 h-20 rounded-full bg-teal-100 text-[#0d7d85] mx-auto mb-3 flex items-center justify-center font-bold text-xl border-2 border-white shadow-sm">
                <Microscope className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-[#113f48] text-sm">Dr. A. K. Deshmukh</h4>
              <p className="text-xs text-[#0d7d85] font-medium">Head of Quality Assurance (QA)</p>
              <p className="text-[11px] text-slate-500 mt-2">24+ years in sterile parenteral validation and WHO-GMP audit readiness.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center hover:bg-white hover:border-[#0d7d85] transition-all">
              <div className="w-20 h-20 rounded-full bg-teal-100 text-[#0d7d85] mx-auto mb-3 flex items-center justify-center font-bold text-xl border-2 border-white shadow-sm">
                <FileCheck className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-[#113f48] text-sm">Priya V. Nair</h4>
              <p className="text-xs text-[#0d7d85] font-medium">Regulatory Affairs Director</p>
              <p className="text-[11px] text-slate-500 mt-2">Specialist in CTD / ACTD dossier compilations for Asian and African ministries.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center hover:bg-white hover:border-[#0d7d85] transition-all">
              <div className="w-20 h-20 rounded-full bg-teal-100 text-[#0d7d85] mx-auto mb-3 flex items-center justify-center font-bold text-xl border-2 border-white shadow-sm">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-[#113f48] text-sm">Sanjay R. Patel</h4>
              <p className="text-xs text-[#0d7d85] font-medium">Operations &amp; Plant Head</p>
              <p className="text-[11px] text-slate-500 mt-2">Overseeing multi-site contract batch production in Maharashtra &amp; Gujarat.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center hover:bg-white hover:border-[#0d7d85] transition-all">
              <div className="w-20 h-20 rounded-full bg-teal-100 text-[#0d7d85] mx-auto mb-3 flex items-center justify-center font-bold text-xl border-2 border-white shadow-sm">
                <Globe2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-[#113f48] text-sm">Ganesh Kulpe</h4>
              <p className="text-xs text-[#0d7d85] font-medium">Global Supply &amp; Export Lead</p>
              <p className="text-[11px] text-slate-500 mt-2">Navi Mumbai shipping coordination and client relationship management.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
