import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Wind, 
  Droplets, 
  Gauge, 
  Activity, 
  ArrowRight,
  Factory
} from 'lucide-react';
import { MANUFACTURING_FACILITIES } from '../data/pharmaData';
import { useTheme } from '../context/ThemeContext';

interface ApexFacilitiesProps {
  onOpenRfq: (productName?: string) => void;
}

export const ApexFacilities: React.FC<ApexFacilitiesProps> = ({ onOpenRfq }) => {
  const { config } = useTheme();
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>('fac-mh');

  const selectedFacility = MANUFACTURING_FACILITIES.find(f => f.id === selectedFacilityId) || MANUFACTURING_FACILITIES[0];

  return (
    <section id="facilities" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-blue-900 uppercase mb-2">
            ADVANCED INFRASTRUCTURE &amp; CAPACITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight uppercase font-sans">
            State-of-the-Art WHO-GMP Manufacturing Facilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Our multi-site manufacturing hubs located across <strong>Maharashtra, Hyderabad, and Gujarat</strong> comply with stringent cGMP and Schedule M guidelines, equipped with segregated AHU air handling loops and automated robotic lines.
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
                    ? `bg-white ${config.primaryBorder} shadow-md ring-1 ring-blue-900` 
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="font-bold text-slate-800">{facility.state}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isSelected ? 'bg-blue-100 text-blue-900' : 'bg-slate-100 text-slate-600'
                  }`}>
                    WHO-GMP
                  </span>
                </div>
                <div className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                  <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-blue-900' : 'text-slate-400'}`} />
                  <span>{facility.state.split(' ')[0]} Plant</span>
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {facility.facilityType}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Facility Deep Dive Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-900 font-bold mb-1 uppercase tracking-wider">
                  <Factory className="w-3.5 h-3.5" />
                  <span>{selectedFacility.location}</span>
                  <span>·</span>
                  <span>{selectedFacility.cleanroomGrade}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase">
                  {selectedFacility.facilityType}
                </h3>
              </div>

              {/* Annual Installed Capacity */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-[11px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-1">
                  Installed Annual Manufacturing Capacity
                </div>
                <div className="text-xl font-bold font-mono text-blue-950">
                  {selectedFacility.annualCapacity}
                </div>
              </div>

              {/* Production Scope */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 font-mono">
                  Production Lines &amp; Formulation Scope:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedFacility.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contamination Controls */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-mono">
                  Engineering &amp; Quality Control Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedFacility.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 shrink-0"></span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenRfq(`${selectedFacility.state} Facility Inquiries`)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white ${config.primary} ${config.primaryHover} rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-2`}
                >
                  <span>Inquire Facility Booking at {selectedFacility.state.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Cleanroom Environmental Specs */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">ENVIRONMENTAL CONTROL SPECS</span>
                <span className="text-[10px] font-mono text-slate-400">c-GMP Validated</span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">Clean Air Classification</span>
                  </div>
                  <span className="text-white font-bold">{selectedFacility.cleanroomGrade.split(' ')[0]}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">Water Grade</span>
                  </div>
                  <span className="text-white font-bold">Purified Water / WFI USP</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">Differential Pressure</span>
                  </div>
                  <span className="text-amber-400 font-bold">+15 Pa Positive (Sterile)</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300">Air Changes / Hour</span>
                  </div>
                  <span className="text-emerald-400 font-bold">24 – 30 AC/Hr (HEPA)</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Regulatory Approvals on Site:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFacility.approvals.map((app, idx) => (
                    <span key={idx} className="bg-slate-800 text-blue-200 border border-slate-700 px-2.5 py-0.5 rounded text-[11px] font-mono">
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
