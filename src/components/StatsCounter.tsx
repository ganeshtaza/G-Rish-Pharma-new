import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const StatsCounter: React.FC = () => {
  const { config } = useTheme();

  const stats = [
    { value: '350+', label: 'Formulations & Molecules', sub: 'Solid Orals, Parenterals & APIs' },
    { value: '3 Hubs', label: 'WHO-GMP Manufacturing', sub: 'Maharashtra, Hyderabad, Gujarat' },
    { value: '40+', label: 'Global Export Markets', sub: 'Asia, Africa, CIS & Latin America' },
    { value: '750 MT', label: 'Annual Bulk Capacity', sub: 'High-Purity Active Ingredients' },
    { value: '100%', label: 'Regulatory Adherence', sub: 'Schedule M & CTD/ACTD Ready' }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, idx) => (
            <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''}`}>
              <div className="text-3xl sm:text-4xl font-black font-mono text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
