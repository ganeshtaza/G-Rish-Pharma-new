import React from 'react';
import { 
  Heart, 
  Activity, 
  ShieldAlert, 
  Droplets, 
  Flame, 
  Wind, 
  Bone, 
  Sparkles, 
  Zap, 
  Syringe, 
  Bandage, 
  Utensils, 
  Pill, 
  Leaf, 
  FlaskConical,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { TherapeuticCategory } from '../types/pharma';

interface TherapeuticSegmentsProps {
  onSelectCategory: (category: TherapeuticCategory) => void;
  onOpenRfq: (categoryName?: string) => void;
}

export const TherapeuticSegments: React.FC<TherapeuticSegmentsProps> = ({ 
  onSelectCategory,
  onOpenRfq 
}) => {
  const segments = [
    {
      id: 'Cardiovascular' as TherapeuticCategory,
      title: 'Cardiovascular Formulations',
      dosageForms: 'Tablets, Capsules, Bilayer Systems',
      description: 'Antihypertensives and lipid-lowering agents formulated for optimal bioavailability and vascular protection.',
      popularGenerics: ['Telmisartan 40/80', 'Amlodipine Besylate', 'Atorvastatin Calcium', 'Losartan Potassium'],
      icon: Heart,
      badge: 'High Demand'
    },
    {
      id: 'Anti-Diabetic' as TherapeuticCategory,
      title: 'Anti-Diabetic Range',
      dosageForms: 'Sustained Release (SR) Tablets & Fixed Combos',
      description: 'Advanced glycemic control formulations with dual-release matrices and minimal gastrointestinal distress.',
      popularGenerics: ['Metformin HCl SR', 'Glimepiride + Metformin', 'Vildagliptin 50mg', 'Dapagliflozin'],
      icon: Activity,
      badge: 'Glycemic Care'
    },
    {
      id: 'Anti-Biotic & Anti-Bacterials' as TherapeuticCategory,
      title: 'Anti-Biotic & Anti-Bacterials',
      dosageForms: 'Film Coated Tablets, Capsules, Suspensions',
      description: 'Broad-spectrum macrolides, fluoroquinolones, and penicillins manufactured under isolated air pressure systems.',
      popularGenerics: ['Azithromycin 500', 'Ciprofloxacin', 'Ofloxacin', 'Amoxicillin + Clavulanate'],
      icon: ShieldAlert,
      badge: 'Broad Spectrum'
    },
    {
      id: 'Anti-Diarrhoeal' as TherapeuticCategory,
      title: 'Anti-Diarrhoeal Preparations',
      dosageForms: 'Capsules, Tablets, Oral Liquids',
      description: 'Rapid anti-motility and antimicrobial gastrointestinal formulations offering prompt clinical recovery.',
      popularGenerics: ['Ofloxacin + Ornidazole', 'Loperamide HCl 2mg', 'Racecadotril Sachets'],
      icon: Droplets,
      badge: 'GI Recovery'
    },
    {
      id: 'Anti-Ulcerants & Anti-GERD' as TherapeuticCategory,
      title: 'Anti-Ulcerants & Anti-GERD',
      dosageForms: 'Enteric Coated (EC) & Sustained Release (SR)',
      description: 'Proton-pump inhibitors and prokinetic combinations designed with superior enteric polymers for stomach acid protection.',
      popularGenerics: ['Pantoprazole 40mg', 'Rabeprazole + Domperidone DSR', 'Esomeprazole 40', 'Omeprazole'],
      icon: Flame,
      badge: 'Acid Control'
    },
    {
      id: 'Anti-Allergics & Anti-Cold' as TherapeuticCategory,
      title: 'Anti-Allergics & Anti-Cold',
      dosageForms: 'Mouth Dissolving Tablets, Pediatric Syrups',
      description: 'Non-sedating antihistamines, leukotriene receptor antagonists, and decongestant cold syrups.',
      popularGenerics: ['Montelukast + Levocetirizine', 'Paracetamol + Phenylephrine', 'Cetirizine 10mg'],
      icon: Wind,
      badge: 'Respiratory'
    },
    {
      id: 'Anti-Inflammatory' as TherapeuticCategory,
      title: 'Anti-Inflammatory & Analgesics',
      dosageForms: 'Tablets, Aqueous Injections, Gels',
      description: 'Selective COX inhibitors and proteolytic enzyme combinations for rapid resolution of edema, trauma, and arthritis.',
      popularGenerics: ['Aceclofenac + Paracetamol + Serratiopeptidase', 'Diclofenac Aqueous', 'Ibuprofen'],
      icon: Bone,
      badge: 'Pain Relief'
    },
    {
      id: 'Anti-Fungals' as TherapeuticCategory,
      title: 'Anti-Fungals (Oral & Topical)',
      dosageForms: 'Micro-pellet Capsules, Tablets, Lotions',
      description: 'Systemic triazoles and broad-spectrum topical agents targeting dermatophytes, candidiasis, and deep fungal infections.',
      popularGenerics: ['Itraconazole 200mg', 'Fluconazole 150mg', 'Voriconazole', 'Clotrimazole'],
      icon: Sparkles,
      badge: 'Anti-Mycosis'
    },
    {
      id: 'Anti-Cancer' as TherapeuticCategory,
      title: 'Anti-Cancer (Oncology)',
      dosageForms: 'Targeted Tablets & Lyophilized Parenterals',
      description: 'Manufactured in state-of-the-art cytotoxic cleanroom blocks with negative pressure isolation and total containment.',
      popularGenerics: ['Imatinib Mesylate 400', 'Paclitaxel Sterile Infusion', 'Gefitinib', 'Capecitabine'],
      icon: Zap,
      badge: 'Oncology Core'
    },
    {
      id: 'All Injectables' as TherapeuticCategory,
      title: 'All Injectables (Liquid & Dry Vials)',
      dosageForms: 'Glass Ampoules & Lyophilized Vials',
      description: 'Class 100 sterile parenteral filling suites equipped with depyrogenation tunnels and automated particle inspection.',
      popularGenerics: ['Ceftriaxone 1g/2g', 'Meropenem 1g', 'Piperacillin-Tazobactam 4.5g', 'Pantoprazole IV'],
      icon: Syringe,
      badge: 'Class 100 Sterile'
    },
    {
      id: 'Creams & Topical' as TherapeuticCategory,
      title: 'Creams & Medicated Ointments',
      dosageForms: 'Laminated Aluminum Tubes & Jars',
      description: 'Dermatological corticosteroids, burn wound antimicrobials, and anti-infective formulations with high skin penetration.',
      popularGenerics: ['Silver Sulfadiazine Burn Cream', 'Clotrimazole + Beclomethasone', 'Diclofenac Gel'],
      icon: Bandage,
      badge: 'Dermatology'
    },
    {
      id: 'Appetizers & Multivitamins' as TherapeuticCategory,
      title: 'Appetizers & Multivitamins',
      dosageForms: 'Flavored Syrups, Drops, Tonics',
      description: 'Formulated with high-grade lysine, B-complex vitamins, and appetite stimulants for pediatric growth and geriatric convalescence.',
      popularGenerics: ['Cyproheptadine + Tricholine Citrate', 'Multivitamin + Zinc Tonic', 'Enzyme Drops'],
      icon: Utensils,
      badge: 'Vitality'
    },
    {
      id: 'Nutraceuticals & Calcium' as TherapeuticCategory,
      title: 'Nutraceuticals & Calcium Supplements',
      dosageForms: 'Softgels, Effervescent Tablets, Sachets',
      description: 'Calcium Citrate Malate, Calcitriol, Vitamin K2-7, Bioactive Collagen Peptides, and antioxidant complexes.',
      popularGenerics: ['Calcium Carbonate + D3 + K2-7', 'Hydrolyzed Collagen Peptides', 'Ginseng Gold'],
      icon: Pill,
      badge: 'Bone & Health'
    },
    {
      id: 'Herbal & Pain Relieving Oil' as TherapeuticCategory,
      title: 'Herbal Supplements & Pain Relieving Oil',
      dosageForms: 'Ayurvedic Medicated Oils & Tonics',
      description: 'Traditional Ayurvedic formulations extracted with modern standardization, featuring authentic Mahanarayan and Gandhapura oils.',
      popularGenerics: ['Mahanarayan Joint Pain Relieving Oil', 'Herbal Liver Protective Tonic', 'Herbal Cough Syrup'],
      icon: Leaf,
      badge: 'Herbal Ayush'
    },
    {
      id: 'APIs & Bulk Actives' as TherapeuticCategory,
      title: 'APIs & Active Pharmaceutical Ingredients',
      dosageForms: 'Pure Chemical Powders & Sterile Bulk',
      description: 'High-purity active chemical synthesis at Gujarat chemical hub complying with international pharmacopeial assays (≥99.0%).',
      popularGenerics: ['Cefixime Trihydrate API', 'Ceftriaxone Sterile Bulk', 'Chemical Intermediates'],
      icon: FlaskConical,
      badge: 'Bulk Supply'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-wider text-[#e07e2a] uppercase font-mono mb-2 flex items-center gap-1.5">
              <span>🔗 Comprehensive Formulation Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#113f48] tracking-tight leading-tight">
              Cardiovascular, Anti-Diabetic, Injectables, Anti-Cancer &amp; Nutraceuticals
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              G-Rish Pharma Pvt. Ltd manufactures and supplies an exhaustive pharmaceutical range formulated using premium grade ingredients sourced from recognized vendors, guaranteed for high effectiveness, longer shelf life, purity, and accurate composition.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenRfq()}
              className="px-6 py-2.5 bg-[#0d7d85] hover:bg-[#0a6369] text-white font-bold text-xs rounded-full shadow-md transition-colors cursor-pointer"
            >
              Inquire Custom Batch
            </button>
          </div>
        </div>

        {/* Quality Banner Highlight (From User Prompt) */}
        <div className="mb-10 bg-white rounded-2xl p-6 border border-teal-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#e07e2a] font-mono uppercase tracking-wider">
              G-Rish Quality Standard
            </div>
            <h3 className="text-base font-bold text-[#113f48]">
              Formulated Using Premium Grade Ingredients Sourced from Recognized Vendors
            </h3>
            <p className="text-xs text-slate-600 max-w-3xl">
              Engineered with proven features: <strong>High Effectiveness · Longer Shelf Life · Purity · No Side-Effects · Excellent Healing Properties · Accurate Composition</strong>.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3 py-1 bg-teal-50 text-[#0d7d85] border border-teal-200 rounded-lg text-xs font-bold font-mono">
              WHO-GMP Assured
            </span>
            <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs font-bold font-mono">
              Zero-Defect QA
            </span>
          </div>
        </div>

        {/* Therapeutic Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.id}
                className="group border border-slate-200/80 rounded-2xl p-6 bg-white hover:border-[#0d7d85] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0d7d85] flex items-center justify-center font-bold group-hover:bg-[#0d7d85] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#0d7d85] bg-teal-50/80 border border-teal-100 px-2.5 py-0.5 rounded-full font-semibold">
                      {segment.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#113f48] group-hover:text-[#0d7d85] transition-colors">
                    {segment.title}
                  </h3>

                  <div className="text-xs font-mono text-[#e07e2a] font-semibold mt-1 mb-2">
                    {segment.dosageForms}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {segment.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                      Key Formulations:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {segment.popularGenerics.map((generic, idx) => (
                        <span 
                          key={idx} 
                          className="text-[11px] text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60"
                        >
                          {generic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCategory(segment.id)}
                    className="text-xs font-bold text-[#0d7d85] hover:text-[#094e53] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Catalog Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenRfq(segment.title)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                  >
                    Quick RFQ
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
