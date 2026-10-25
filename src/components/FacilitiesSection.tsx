import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Gauge,
  Wind,
  Droplets,
  Activity
} from 'lucide-react';
import { MANUFACTURING_FACILITIES } from '../data/pharmaData';

interface FacilitiesSectionProps {
  onOpenRfq: (productName?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenRfq }) => {
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>('fac-mh');

  const selectedFacility = MANUFACTURING_FACILITIES.find(f => f.id === selectedFacilityId) || MANUFACTURING_FACILITIES[0];

  return (
    <section id="facilities" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-teal-700 uppercase font-mono mb-2">
            World-Class Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Sophisticated State-of-the-Art WHO GMP Approved Facilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our products are manufactured at cutting-edge, WHO-GMP accredited manufacturing facilities across <strong className="text-slate-900 font-semibold">Maharashtra, Hyderabad, Gujarat</strong> and other key pharmaceutical clusters in India, engineered with dedicated AHU air handling systems to guarantee zero cross-contamination.
          </p>
        </div>

        {/* Facility Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {MANUFACTURING_FACILITIES.map((facility) => {
            const isSelected = facility.id === selectedFacilityId;
            return (
              <button
                key={facility.id}
                onClick={() => setSelectedFacilityId(facility.id)}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-white border-teal-600 shadow-md ring-1 ring-teal-600' 
                    : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span>{facility.state}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    isSelected ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    WHO-GMP
                  </span>
                </div>
                <div className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                  <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-teal-600' : 'text-slate-400'}`} />
                  <span>{facility.state.split(' ')[0]} Hub</span>
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {facility.facilityType}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Facility Deep Dive Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Specifications & Focus Areas */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-teal-700 font-mono mb-1">
                  <span className="font-semibold">{selectedFacility.location}</span>
                  <span className="text-slate-300">·</span>
                  <span>{selectedFacility.cleanroomGrade}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedFacility.facilityType}
                </h3>
              </div>

              {/* Annual Production Capacity Callout */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  Installed Annual Manufacturing Capacity
                </div>
                <div className="text-lg sm:text-xl font-bold text-teal-800 font-mono">
                  {selectedFacility.annualCapacity}
                </div>
              </div>

              {/* Focus Areas & Dosage Lines */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Production Lines &amp; Formulation Scope
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedFacility.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Engineering &amp; Contamination Controls
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedFacility.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0"></span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenRfq(`${selectedFacility.state} Facility Inquiries`)}
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Request Capacity Booking at {selectedFacility.state.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Cleanroom & Technical Diagnostics Display */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-teal-400">ENVIRONMENTAL CONTROL SPECS</span>
                <span className="text-[11px] font-mono text-slate-400">c-GMP / ISO Validated</span>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-300">Clean Air Classification</span>
                  </div>
                  <span className="text-white font-bold">{selectedFacility.cleanroomGrade.split(' ')[0]}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-300">Water Grade</span>
                  </div>
                  <span className="text-white font-bold">Purified Water / WFI USP</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-300">Differential Pressure</span>
                  </div>
                  <span className="text-teal-400 font-bold">+15 Pa Positive (Sterile)</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-teal-400" />
                    <span className="text-slate-300">Environmental Monitoring</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Continuous Particle Count</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Regulatory Approvals on Site:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFacility.approvals.map((app, idx) => (
                    <span key={idx} className="bg-slate-800 text-teal-300 border border-slate-700 px-2 py-0.5 rounded text-[11px] font-mono">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
