import { PharmaProduct, ManufacturingFacility } from '../types/pharma';

export const FORMULATION_QUALITY_PILLARS = {
  statement: 'G-Rish Pharma Pvt. Ltd range of formulations is manufactured using premium grade ingredients sourced from recognized vendors and offered with features like high effectiveness, longer shelf life, purity, no side-effects, excellent healing properties and accurate composition.',
  features: [
    { title: 'High Effectiveness', description: 'Superior bio-availability and targeted therapeutic index across all dosage forms.' },
    { title: 'Longer Shelf Life', description: 'ICH Zone IVb (30°C / 75% RH & 40°C / 75% RH) stability validated packaging.' },
    { title: 'Chemical Purity', description: 'Synthesized with assay ≥ 99.0% and strict residual solvent controls.' },
    { title: 'No Side-Effects Formulation', description: 'Optimized excipient matrices ensuring high patient compliance and low GI distress.' },
    { title: 'Excellent Healing Properties', description: 'Rapid onset of clinical action for acute and chronic therapeutic indications.' },
    { title: 'Accurate Composition', description: 'Double-validated assay, HPLC chromatography, and verified dosage uniformity.' }
  ]
};

export const MANUFACTURING_FACILITIES: ManufacturingFacility[] = [
  {
    id: 'fac-mh',
    location: 'Tarapur & Navi Mumbai Industrial Corridor',
    state: 'Maharashtra',
    facilityType: 'Solid Oral Dosages, Syrups, Creams & Corporate Hub',
    focusAreas: [
      'Cardiovascular & Anti-Diabetic Tablets & Capsules',
      'Anti-Ulcerants, Anti-GERD & Anti-Cold Formulations',
      'Appetizers, Pediatric Syrups & Medicated Creams',
      'Herbal Health Supplements & Ayurvedic Pain Relieving Oil'
    ],
    cleanroomGrade: 'Class 10,000 (ISO Class 7) & Class 100 Laminar Hoods',
    annualCapacity: '2.2 Billion Tablets / 550 Million Capsules / 80 Million Bottles',
    approvals: ['WHO-GMP', 'Schedule M', 'ISO 9001:2015', 'FDA Maharashtra'],
    keyHighlights: [
      'Automated high-speed blister packing (Alu-Alu & PVC/PVDC)',
      'Isolated AHUs with HEPA filtration to eliminate cross-contamination',
      'Strategic 35 km proximity to Nhava Sheva (JNPT) container port for ocean export'
    ]
  },
  {
    id: 'fac-hyd',
    location: 'Telangana Pharma Hub & Jeedimetla Zone',
    state: 'Telangana (Hyderabad)',
    facilityType: 'Dedicated Sterile Injectables & Anti-Cancer / Critical Care Block',
    focusAreas: [
      'All Injectables: Sterile Liquid Ampoules & Dry Vials',
      'Cephalosporin & Betalactum Dedicated Isolation Blocks',
      'Anti-Cancer (Oncology) Sterile Lyophilized Injections',
      'Sterile WFI & Reconstitution Solvents'
    ],
    cleanroomGrade: 'Class 100 (ISO Class 5) Aseptic Core & Class 1,000 Prep Areas',
    annualCapacity: '150 Million Liquid Ampoules & 100 Million Dry Powder Vials',
    approvals: ['WHO-GMP', 'Schedule M (Sterile)', 'ISO 13485', 'Export Inspection Council'],
    keyHighlights: [
      'Robotic depyrogenation tunnel, automated aseptic filling & stoppering',
      'Double pass RO + Multi-Column Distillation Water for Injection (WFI) Loop',
      '100% automated optical particulate inspection and vial integrity verification'
    ]
  },
  {
    id: 'fac-guj',
    location: 'Vadodara & Ankleshwar Chemical Corridor',
    state: 'Gujarat',
    facilityType: 'APIs, Bulk Actives, Calcium Supplements & Nutraceuticals',
    focusAreas: [
      'High-Purity API Synthesis (Assay ≥ 99.0%)',
      'Nutraceuticals & Calcium Carbonate / D3 Chewables',
      'Herbal Extract Standardized Supplements',
      'Ophthalmic Drops & Topical Anti-Fungal Gels'
    ],
    cleanroomGrade: 'Class 10,000 (ISO Class 7) Controlled Synthesis Environment',
    annualCapacity: '750 Metric Tons APIs & 600 Million Nutraceutical Dosages',
    approvals: ['WHO-GMP', 'Schedule M', 'FSSAI (Nutra)', 'ISO 22000'],
    keyHighlights: [
      'SS-316 & Glass-lined reactors operating from -20°C to +150°C',
      'Solvent recovery systems and zero liquid discharge (ZLD) environmental setup',
      'ICH Zone IVb accelerated stability testing chambers'
    ]
  }
];

export const PHARMA_PRODUCTS: PharmaProduct[] = [
  // CARDIOVASCULAR
  {
    id: 'cv-01',
    brandName: 'GR-TELMI 40 / 80',
    genericName: 'Telmisartan Tablets IP',
    category: 'Cardiovascular',
    dosageForm: 'Tablet',
    strength: '40 mg / 80 mg',
    composition: 'Each uncoated tablet contains: Telmisartan IP 40 mg / 80 mg',
    packaging: '10 x 10 Alu-Alu Moisture-Barrier Pack',
    indications: 'Essential hypertension, cardiovascular risk reduction in patients with atherothrombotic disease',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'COPP', 'ISO 9001'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'Accurate Composition', 'Longer Shelf Life']
  },
  {
    id: 'cv-02',
    brandName: 'GR-TELMI AM',
    genericName: 'Telmisartan & Amlodipine Tablets IP',
    category: 'Cardiovascular',
    dosageForm: 'Tablet',
    strength: '40 mg + 5 mg',
    composition: 'Telmisartan IP 40 mg + Amlodipine Besylate IP eq. to Amlodipine 5 mg',
    packaging: '10 x 10 Alu-Alu Blister Pack',
    indications: 'Dual-action control for moderate to severe arterial hypertension',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    features: ['Accurate Composition', 'Purity', 'High Effectiveness']
  },
  {
    id: 'cv-03',
    brandName: 'GR-ATORVA 20',
    genericName: 'Atorvastatin Calcium Tablets IP',
    category: 'Cardiovascular',
    dosageForm: 'Tablet',
    strength: '20 mg',
    composition: 'Atorvastatin Calcium Trihydrate IP eq. to Atorvastatin 20 mg',
    packaging: '10 x 10 Alu-Alu Strip',
    indications: 'Primary hypercholesterolemia, mixed dyslipidemia, coronary heart disease prevention',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb']
  },

  // ANTI-DIABETIC
  {
    id: 'db-01',
    brandName: 'GR-MET SR 500 / 1000',
    genericName: 'Metformin Hydrochloride Sustained Release Tablets IP',
    category: 'Anti-Diabetic',
    dosageForm: 'Tablet',
    strength: '500 mg / 1000 mg SR',
    composition: 'Each sustained-release tablet contains: Metformin Hydrochloride IP 500 mg / 1000 mg',
    packaging: '10 x 10 Blister Pack / Export drums of 1000s',
    indications: 'Type 2 diabetes mellitus, glycemic control, insulin resistance management',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'COPP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'No Side-Effects Formulation', 'Accurate Composition']
  },
  {
    id: 'db-02',
    brandName: 'GR-GLIM-M2',
    genericName: 'Glimepiride & Metformin HCl (SR) Tablets',
    category: 'Anti-Diabetic',
    dosageForm: 'Tablet',
    strength: '2 mg + 500 mg SR',
    composition: 'Glimepiride IP 2 mg + Metformin Hydrochloride IP 500 mg (in sustained release form)',
    packaging: '10 x 10 Blister Pack',
    indications: 'Dual oral anti-hyperglycemic therapy for Type 2 diabetes unresponsive to monotherapy',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD']
  },
  {
    id: 'db-03',
    brandName: 'GR-VILDA 50',
    genericName: 'Vildagliptin Tablets IP',
    category: 'Anti-Diabetic',
    dosageForm: 'Tablet',
    strength: '50 mg',
    composition: 'Each uncoated tablet contains: Vildagliptin 50 mg',
    packaging: '10 x 1 x 10 Alu-Alu Pack',
    indications: 'DPP-4 inhibitor for adults with Type 2 diabetes as monotherapy or dual combination',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'COPP'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb']
  },

  // ANTI-BIOTIC & ANTI-BACTERIALS
  {
    id: 'ab-01',
    brandName: 'GR-AZITH 500',
    genericName: 'Azithromycin Tablets IP',
    category: 'Anti-Biotic & Anti-Bacterials',
    dosageForm: 'Tablet',
    strength: '500 mg',
    composition: 'Each film coated tablet contains: Azithromycin Dihydrate IP eq. to Azithromycin 500 mg',
    packaging: '10 x 3 Blister Pack / 10 x 5 Blister',
    indications: 'Macrolide anti-bacterial for upper & lower respiratory tract infections, skin infections',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M', 'COPP'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['Purity', 'High Effectiveness', 'Accurate Composition']
  },
  {
    id: 'ab-02',
    brandName: 'GR-CIPRO 500',
    genericName: 'Ciprofloxacin Tablets IP',
    category: 'Anti-Biotic & Anti-Bacterials',
    dosageForm: 'Tablet',
    strength: '500 mg',
    composition: 'Ciprofloxacin Hydrochloride IP eq. to Ciprofloxacin 500 mg',
    packaging: '10 x 10 Blister Pack',
    indications: 'Broad-spectrum fluoroquinolone for severe bacterial infections, complicated UTIs, typhoid',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'COPP'],
    dossierAvailable: ['CTD', 'ACTD']
  },

  // ANTI-DIARRHOEAL
  {
    id: 'ad-01',
    brandName: 'GR-OFLOX-OZ',
    genericName: 'Ofloxacin & Ornidazole Tablets / Suspension',
    category: 'Anti-Diarrhoeal',
    dosageForm: 'Tablet',
    strength: '200 mg + 500 mg',
    composition: 'Ofloxacin IP 200 mg + Ornidazole IP 500 mg',
    packaging: '10 x 10 Alu-Alu Blister / 30ml Suspension',
    indications: 'Acute gastrointestinal infections, amoebic dysentery, mixed protozoal & bacterial diarrhea',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD'],
    features: ['Excellent Healing Properties', 'High Effectiveness']
  },
  {
    id: 'ad-02',
    brandName: 'GR-LOPER 2',
    genericName: 'Loperamide Hydrochloride Capsules IP',
    category: 'Anti-Diarrhoeal',
    dosageForm: 'Capsule',
    strength: '2 mg',
    composition: 'Loperamide Hydrochloride IP 2 mg',
    packaging: '10 x 10 Blister Pack',
    indications: 'Symptomatic control of acute non-specific diarrhea and chronic diarrhea associated with IBD',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP'],
    dossierAvailable: ['CTD', 'ACTD']
  },

  // ANTI-ULCERANTS & ANTI-GERD
  {
    id: 'au-01',
    brandName: 'GR-PANTO 40',
    genericName: 'Pantoprazole Gastro-Resistant Tablets IP',
    category: 'Anti-Ulcerants & Anti-GERD',
    dosageForm: 'Tablet',
    strength: '40 mg',
    composition: 'Pantoprazole Sodium Sesquihydrate IP eq. to Pantoprazole 40 mg (Enteric Coated)',
    packaging: '10 x 10 Alu-Alu Blister Pack',
    indications: 'Gastroesophageal reflux disease (GERD), duodenal & gastric ulcers, Zollinger-Ellison syndrome',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'ISO 9001:2015'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'No Side-Effects Formulation', 'Longer Shelf Life']
  },
  {
    id: 'au-02',
    brandName: 'GR-RABE-DSR',
    genericName: 'Rabeprazole Sodium (EC) & Domperidone (SR) Capsules',
    category: 'Anti-Ulcerants & Anti-GERD',
    dosageForm: 'Capsule',
    strength: '20 mg + 30 mg SR',
    composition: 'Rabeprazole Sodium 20 mg (as enteric pellets) + Domperidone 30 mg (as sustained release pellets)',
    packaging: '10 x 10 Alu-Alu Pack',
    indications: 'Hyperacidity associated with nausea, vomiting, dyspepsia and refractory GERD',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'COPP'],
    dossierAvailable: ['CTD', 'ACTD'],
    features: ['Accurate Composition', 'Excellent Healing Properties']
  },

  // ANTI-ALLERGICS & ANTI-COLD
  {
    id: 'ac-01',
    brandName: 'GR-MONTE-LC',
    genericName: 'Montelukast Sodium & Levocetirizine HCl Tablets',
    category: 'Anti-Allergics & Anti-Cold',
    dosageForm: 'Tablet',
    strength: '10 mg + 5 mg',
    composition: 'Montelukast Sodium eq. to Montelukast 10 mg + Levocetirizine Dihydrochloride 5 mg',
    packaging: '10 x 10 Alu-Alu Pack',
    indications: 'Allergic rhinitis, seasonal allergies, prophylaxis and chronic management of bronchial asthma',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD'],
    featured: true,
    features: ['High Effectiveness', 'No Side-Effects Formulation', 'Purity']
  },
  {
    id: 'ac-02',
    brandName: 'GR-COLD TOTAL',
    genericName: 'Paracetamol, Phenylephrine HCl & Chlorpheniramine Maleate Suspension / Tablets',
    category: 'Anti-Allergics & Anti-Cold',
    dosageForm: 'Liquid Syrup / Suspension',
    strength: 'Pediatric & Adult Formula',
    composition: 'Paracetamol 250 mg + Phenylephrine HCl 5 mg + Chlorpheniramine 2 mg per 5 ml',
    packaging: '60 ml PET Bottle with outer monocarton and measuring cup',
    indications: 'Comprehensive relief from nasal congestion, common cold fever, headache, and runny nose',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP'],
    dossierAvailable: ['CTD', 'ACTD']
  },

  // ANTI-INFLAMMATORY
  {
    id: 'ai-01',
    brandName: 'GR-ACE-SP',
    genericName: 'Aceclofenac, Paracetamol & Serratiopeptidase Tablets',
    category: 'Anti-Inflammatory',
    dosageForm: 'Tablet',
    strength: '100 mg + 325 mg + 15 mg',
    composition: 'Aceclofenac IP 100 mg + Paracetamol IP 325 mg + Serratiopeptidase IP 15 mg',
    packaging: '10 x 10 Alu-Alu Blister',
    indications: 'Post-operative pain, traumatic inflammation, arthritis, dental surgeries and muscle injury',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'COPP'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['Excellent Healing Properties', 'High Effectiveness', 'Accurate Composition']
  },
  {
    id: 'ai-02',
    brandName: 'GR-DICLO 75 AQ',
    genericName: 'Diclofenac Sodium Aqueous Injection IP',
    category: 'Anti-Inflammatory',
    dosageForm: 'Liquid Injection',
    strength: '75 mg / 1 ml',
    composition: 'Diclofenac Sodium IP 75 mg in sterile aqueous vehicle without propylene glycol pain',
    packaging: '10 x 1 ml Amber One-Point Cut (OPC) Glass Ampoules',
    indications: 'Acute post-operative pain, renal colic flare-ups, severe orthopedic trauma',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'Schedule M (Sterile)'],
    dossierAvailable: ['CTD', 'ACTD']
  },

  // ANTI-FUNGALS
  {
    id: 'af-01',
    brandName: 'GR-ITRA 200',
    genericName: 'Itraconazole Capsules IP',
    category: 'Anti-Fungals',
    dosageForm: 'Capsule',
    strength: '200 mg',
    composition: 'Each hard gelatin capsule contains: Itraconazole IP (as micro-pellets) 200 mg',
    packaging: '10 x 1 x 4 / 10 x 10 Alu-Alu Pack',
    indications: 'Systemic fungal infections, onychomycosis, blastomycosis, histoplasmosis, aspergillosis',
    facilityLocation: 'Gujarat',
    certifications: ['WHO-GMP', 'COPP', 'ISO 9001'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'Purity', 'Longer Shelf Life']
  },
  {
    id: 'af-02',
    brandName: 'GR-FLUCO 150',
    genericName: 'Fluconazole Tablets IP',
    category: 'Anti-Fungals',
    dosageForm: 'Tablet',
    strength: '150 mg',
    composition: 'Each uncoated tablet contains: Fluconazole IP 150 mg',
    packaging: '10 x 1 Blister Pack / 10 x 10 Blister',
    indications: 'Vaginal candidiasis, mucosal candidiasis, cryptococcal meningitis prophylaxis',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD']
  },

  // ANTI-CANCER (ONCOLOGY)
  {
    id: 'ca-01',
    brandName: 'GR-IMATIN 400',
    genericName: 'Imatinib Mesylate Tablets IP',
    category: 'Anti-Cancer',
    dosageForm: 'Tablet',
    strength: '400 mg',
    composition: 'Imatinib Mesylate IP eq. to Imatinib 400 mg',
    packaging: '10 x 10 Alu-Alu Cold-Form Pack in tamper-proof security carton',
    indications: 'Targeted tyrosine kinase inhibitor for Philadelphia chromosome-positive CML & malignant GIST',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'COPP', 'Oncology Suite Validated'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['Accurate Composition', 'Purity', 'High Effectiveness']
  },
  {
    id: 'ca-02',
    brandName: 'GR-PACLI 100',
    genericName: 'Paclitaxel Injection IP / USP',
    category: 'Anti-Cancer',
    dosageForm: 'Liquid Injection',
    strength: '100 mg / 16.7 ml (6 mg/ml)',
    composition: 'Paclitaxel IP 100 mg in Polyoxyl 35 Castor Oil and Dehydrated Alcohol USP',
    packaging: 'Molded USP Type I Glass Vial with FluroTec Stopper & Overseal',
    indications: 'Ovarian carcinoma, breast carcinoma, non-small cell lung cancer (NSCLC)',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'Cytotoxic Cleanroom Grade ISO 5'],
    dossierAvailable: ['CTD', 'ACTD', 'COPP']
  },

  // ALL INJECTABLES
  {
    id: 'inj-01',
    brandName: 'GR-CEFTRI 1000',
    genericName: 'Ceftriaxone Sodium Sterile Injection IP',
    category: 'All Injectables',
    dosageForm: 'Dry Injection (Vial)',
    strength: '1000 mg (1.0 g)',
    composition: 'Each sterile vial contains: Ceftriaxone Sodium IP eq. to Anhydrous Ceftriaxone 1000 mg with Sterile Water for Injection (10 ml)',
    packaging: '1 Vial + 1 Ampoule Sterile WFI (10 ml) with Tray & Monocarton',
    indications: 'Bacterial meningitis, intra-abdominal infections, bone and joint infections, sepsis',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'Schedule M (Sterile)', 'COA Batch Certified'],
    dossierAvailable: ['CTD', 'ACTD', 'COPP', 'Stability Zone IVb'],
    featured: true,
    features: ['Purity', 'Accurate Composition', 'High Effectiveness']
  },
  {
    id: 'inj-02',
    brandName: 'GR-MEROPEN 1000',
    genericName: 'Meropenem for Injection IP',
    category: 'All Injectables',
    dosageForm: 'Dry Injection (Vial)',
    strength: '1000 mg (1 g)',
    composition: 'Sterile Meropenem Trihydrate eq. to Meropenem 1000 mg + Sodium Carbonate for buffering',
    packaging: 'Molded USP Type I Vial with Sterility Certificate & carton',
    indications: 'Complicated skin, intra-abdominal infections, bacterial meningitis in pediatric & adult ICU care',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'Schedule M (Sterile)', 'COPP'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'Purity', 'Longer Shelf Life']
  },
  {
    id: 'inj-03',
    brandName: 'GR-PIPTAZ 4.5',
    genericName: 'Piperacillin & Tazobactam Injection IP',
    category: 'All Injectables',
    dosageForm: 'Dry Injection (Vial)',
    strength: '4.5 g (4000 mg + 500 mg)',
    composition: 'Sterile Piperacillin Sodium eq. to Piperacillin 4000 mg + Sterile Tazobactam Sodium eq. to Tazobactam 500 mg',
    packaging: 'Sterile 20 ml Molded Glass Vial with Flip-Off Seal',
    indications: 'Hospital-acquired pneumonia, complicated intra-abdominal & urinary tract infections',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'COA Batch Release'],
    dossierAvailable: ['CTD', 'ACTD', 'COPP', 'Stability Zone IVb']
  },
  {
    id: 'inj-04',
    brandName: 'GR-PANTO IV',
    genericName: 'Pantoprazole for Injection BP',
    category: 'All Injectables',
    dosageForm: 'Dry Injection (Vial)',
    strength: '40 mg Lyophilized',
    composition: 'Sterile Pantoprazole Sodium eq. to Pantoprazole 40 mg (Lyophilized Cake)',
    packaging: '10 ml USP Type I Tubing Vial with 0.9% NaCl Solvent Ampoule',
    indications: 'Acute upper gastrointestinal bleeding, stress ulcer prophylaxis in ICU patients',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'COA Batch Release'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb']
  },

  // CREAMS & TOPICAL
  {
    id: 'cr-01',
    brandName: 'GR-CLOTRI PLUS',
    genericName: 'Clotrimazole, Beclomethasone & Neomycin Cream',
    category: 'Creams & Topical',
    dosageForm: 'Cream / Ointment / Gel',
    strength: '15 g / 20 g Medicated Tube',
    composition: 'Clotrimazole IP 1.0% w/w + Beclomethasone Dipropionate 0.025% w/w + Neomycin Sulphate 0.5% w/w',
    packaging: '15 g Laminated Collapsible Aluminum Tube with nozzle and monocarton',
    indications: 'Mixed dermatological infections, ringworm, athlete\'s foot, infected eczema and dermatitis',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD'],
    featured: true,
    features: ['Excellent Healing Properties', 'Purity', 'High Effectiveness']
  },
  {
    id: 'cr-02',
    brandName: 'GR-BURN HEAL',
    genericName: 'Silver Sulfadiazine & Chlorhexidine Gluconate Cream',
    category: 'Creams & Topical',
    dosageForm: 'Cream / Ointment / Gel',
    strength: '25 g / 50 g Tube & 250 g Jars',
    composition: 'Silver Sulfadiazine IP 1.0% w/w + Chlorhexidine Gluconate Solution eq. to Chlorhexidine 0.2% w/w',
    packaging: 'Seamless Laminated Tube & Clinic Jars',
    indications: 'Topical antibacterial treatment and infection prophylaxis in second and third-degree burn wounds',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP'],
    dossierAvailable: ['CTD', 'ACTD'],
    features: ['Excellent Healing Properties', 'Accurate Composition']
  },

  // APPETIZERS & MULTIVITAMINS
  {
    id: 'ap-01',
    brandName: 'GR-APPETITE PLUS',
    genericName: 'Cyproheptadine Hydrochloride & Tricholine Citrate Syrup',
    category: 'Appetizers & Multivitamins',
    dosageForm: 'Liquid Syrup / Suspension',
    strength: '200 ml Bottle',
    composition: 'Cyproheptadine HCl IP 2 mg + Tricholine Citrate 275 mg + Sorbitol Base per 5 ml',
    packaging: '200 ml Amber PET Bottle with calibrated measuring cup and shrink seal',
    indications: 'Loss of appetite, weight loss, anorexia nervosa, convalescence post prolonged illness',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Schedule M'],
    dossierAvailable: ['ACTD'],
    featured: true,
    features: ['High Effectiveness', 'No Side-Effects Formulation', 'Accurate Composition']
  },
  {
    id: 'ap-02',
    brandName: 'GR-VITA GOLD SYRUP',
    genericName: 'Multivitamin, L-Lysine & Zinc Immunity Tonic',
    category: 'Appetizers & Multivitamins',
    dosageForm: 'Liquid Syrup / Suspension',
    strength: '200 ml Bottle',
    composition: 'L-Lysine HCl 50 mg + Vitamin A, B-Complex, C, D3, E + Elemental Zinc 3 mg per 5 ml',
    packaging: '200 ml Bottle in premium duplex carton with tamper-evident seal',
    indications: 'Nutritional deficiency, growth support in pediatric age group, general adult fatigue',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'FSSAI'],
    dossierAvailable: ['ACTD']
  },

  // NUTRACEUTICALS & CALCIUM
  {
    id: 'nu-01',
    brandName: 'GR-CALCIT D3 MAX',
    genericName: 'Calcium Carbonate, Calcitriol, Zinc & Vitamin K2-7 Softgel Capsules',
    category: 'Nutraceuticals & Calcium',
    dosageForm: 'Capsule',
    strength: '500 mg Elemental Calcium + 0.25 mcg Calcitriol + 50 mcg K2-7',
    composition: 'Calcium Carbonate 1250 mg (eq. to Elemental Calcium 500 mg) + Calcitriol 0.25 mcg + Vitamin K2-7 50 mcg',
    packaging: '10 x 1 x 10 Blister Pack in Met-Pet Carton',
    indications: 'Osteoporosis, osteopenia, fracture healing, post-menopausal bone density restoration',
    facilityLocation: 'Gujarat',
    certifications: ['WHO-GMP', 'FSSAI', 'ISO 22000'],
    dossierAvailable: ['ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'Purity', 'Accurate Composition']
  },
  {
    id: 'nu-02',
    brandName: 'GR-COLLAGEN NUTRA',
    genericName: 'Hydrolyzed Collagen Peptides, Glucosamine & Boswellia Sachets',
    category: 'Nutraceuticals & Calcium',
    dosageForm: 'Tablet',
    strength: '10 g Sachet / Chewable',
    composition: 'Bioactive Collagen Peptides 10 g + Glucosamine Sulphate 1500 mg + Boswellia Serrata Extract 100 mg',
    packaging: 'Box of 10 Sachet Pouches / 60 Tablets Container',
    indications: 'Cartilage rebuilding, joint mobility, knee osteoarthritis comfort',
    facilityLocation: 'Gujarat',
    certifications: ['WHO-GMP', 'FSSAI'],
    dossierAvailable: ['ACTD']
  },

  // HERBAL & PAIN RELIEVING OIL
  {
    id: 'hb-01',
    brandName: 'GR-ORTHO RELIEF OIL',
    genericName: 'Ayurvedic Herbal Joint & Muscular Pain Relieving Oil',
    category: 'Herbal & Pain Relieving Oil',
    dosageForm: 'Herbal Oil / Topical Liquid',
    strength: '100 ml Dispenser Bottle',
    composition: 'Mahanarayan Taila 30% + Gandhapura (Wintergreen) Oil 15% + Kapoor 5% + Nilgiri Oil 5% + Sesame Base q.s.',
    packaging: '100 ml Leak-Proof Amber HDPE Bottle with Roll-On / Flip-Cap and Carton',
    indications: 'Instant and sustained relief from arthritis pain, sciatica, lumbar spondylosis, sports sprains',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Ayush Approved', 'Schedule M'],
    dossierAvailable: ['ACTD'],
    featured: true,
    features: ['Excellent Healing Properties', 'Purity', 'No Side-Effects Formulation', 'High Effectiveness']
  },
  {
    id: 'hb-02',
    brandName: 'GR-LIV HERBAL TONIC',
    genericName: 'Herbal Liver Protective & Digestive Tonic',
    category: 'Herbal & Pain Relieving Oil',
    dosageForm: 'Liquid Syrup / Suspension',
    strength: '200 ml Bottle',
    composition: 'Bhringraj, Bhumi Amla, Kalmegh, Kasni, Punarnava, Kutki concentrated aqueous herbal extract',
    packaging: '200 ml Amber PET Bottle with measuring cap',
    indications: 'Hepatic protection, fatty liver management, alcoholic liver distress, jaundice recovery',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'Ayush Approved'],
    dossierAvailable: ['ACTD']
  },

  // CEPHALOSPORIN & BETALACTUM
  {
    id: 'cp-01',
    brandName: 'GR-CEF 200',
    genericName: 'Cefixime Dispersible Tablets IP',
    category: 'Cephalosporin & Betalactum',
    dosageForm: 'Tablet',
    strength: '200 mg',
    composition: 'Cefixime Trihydrate IP eq. to Anhydrous Cefixime 200 mg',
    packaging: '10 x 10 Alu-Alu Blister Pack',
    indications: 'Typhoid fever, respiratory tract infections, acute otitis media, urinary tract infections',
    facilityLocation: 'Maharashtra',
    certifications: ['WHO-GMP', 'COPP', 'ISO 9001'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'Purity', 'Accurate Composition']
  },
  {
    id: 'cp-02',
    brandName: 'GR-CLAV 625',
    genericName: 'Amoxicillin & Potassium Clavulanate Tablets IP',
    category: 'Cephalosporin & Betalactum',
    dosageForm: 'Tablet',
    strength: '625 mg (500 mg + 125 mg)',
    composition: 'Amoxicillin Trihydrate IP eq. to Amoxicillin 500 mg + Diluted Potassium Clavulanate IP eq. to Clavulanic Acid 125 mg',
    packaging: '10 x 1 x 6 Alu-Alu Moisture-Barrier Pack with Desiccant',
    indications: 'Broad spectrum anti-bacterial for respiratory, urogenital, skin & soft tissue infections',
    facilityLocation: 'Hyderabad',
    certifications: ['WHO-GMP', 'COPP', 'Schedule M'],
    dossierAvailable: ['CTD', 'ACTD', 'Stability Zone IVb'],
    featured: true,
    features: ['High Effectiveness', 'Longer Shelf Life', 'Accurate Composition']
  },

  // APIS & BULK CHEMICALS
  {
    id: 'api-01',
    brandName: 'GR-API CEFIXIME',
    genericName: 'Cefixime Trihydrate Micronized Powder IP / BP / USP',
    category: 'APIs & Bulk Actives',
    dosageForm: 'API / Pure Chemical',
    strength: 'Assay ≥ 99.0% (Anhydrous Basis)',
    composition: 'High-purity crystalline powder synthesized under cGMP conditions with controlled particle size distribution',
    packaging: '25 kg Fibre Drums with double food-grade polyethylene inner liners',
    indications: 'Active pharmaceutical ingredient for solid oral dosage formulations',
    facilityLocation: 'Gujarat',
    certifications: ['WHO-GMP', 'Written Confirmation (WC)', 'EDQM Spec Compliance'],
    dossierAvailable: ['CTD', 'COPP', 'Stability Zone IVb'],
    features: ['Purity', 'Accurate Composition', 'Longer Shelf Life']
  }
];

export const CONTRACT_MANUFACTURING_MODELS = [
  {
    code: 'P2P',
    title: 'Principal to Principal (P2P)',
    description: 'Turnkey manufacturing of formulations with your proprietary brand labels, handled end-to-end from raw material procurement to finished batch release.',
    benefits: ['Full batch traceability', 'Custom carton & blister branding', 'Volume pricing tier']
  },
  {
    code: 'LL',
    title: 'Loan License Manufacturing',
    description: 'Utilization of our state-of-the-art WHO-GMP infrastructure under your existing pharmaceutical license, audited to your exact QA parameters.',
    benefits: ['Rapid market entry', 'No capital expenditure', 'Dedicated production windows']
  },
  {
    code: 'EX',
    title: 'Global Export Formulations',
    description: 'Formulation supply customized for regulatory filings across Africa, Southeast Asia, CIS, Latin America, and Middle Eastern health ministries.',
    benefits: ['Complete CTD / ACTD dossiers', 'Zone IVb stability certified', 'COPP & FSC documentation']
  },
  {
    code: 'CDMO',
    title: 'Custom Formulation & Scale-Up',
    description: 'Pilot batch development, analytical method validation, dissolution profile matching, and tech transfer to commercial scale production.',
    benefits: ['R&D formulation lab', 'Bioequivalence support', 'Stability chamber testing']
  }
];

export const GLOBAL_EXPORT_REGIONS = [
  {
    region: 'Southeast Asia & Pacific',
    countries: ['Vietnam', 'Philippines', 'Myanmar', 'Cambodia', 'Sri Lanka'],
    dossierFormat: 'ACTD & National Health Registry Formats',
    keyProducts: ['Cardiovascular', 'Cephalosporin Oral Solids', 'Liquid Injections', 'Nutraceuticals']
  },
  {
    region: 'African Continent',
    countries: ['Kenya', 'Nigeria', 'Tanzania', 'Ghana', 'Uganda', 'Ethiopia'],
    dossierFormat: 'WHO / CTD Format & NAFDAC / PPB Approvals',
    keyProducts: ['Dry Powder Injections', 'Anti-Biotic & Anti-Bacterials', 'Anti-Ulcerants', 'Multivitamin Syrups']
  },
  {
    region: 'CIS & Central Asia',
    countries: ['Uzbekistan', 'Kazakhstan', 'Georgia', 'Azerbaijan'],
    dossierFormat: 'Eurasian Economic Union (EAEU) / CTD Russian & English',
    keyProducts: ['Sterile Vials', 'Meropenem', 'Anti-Cancer Imatinib', 'Proton Pump Inhibitors']
  },
  {
    region: 'Latin America & Caribbean',
    countries: ['Bolivia', 'Peru', 'Dominican Republic', 'Guatemala'],
    dossierFormat: 'Spanish CTD & Free Sale Certification',
    keyProducts: ['Anti-Diabetic Formulations', 'P2P Formulations', 'All Injectables']
  },
  {
    region: 'Middle East & GCC Belt',
    countries: ['Yemen', 'Iraq', 'Oman', 'UAE Free Zones'],
    dossierFormat: 'GCC Health Authority CTD Guidelines',
    keyProducts: ['High-potency Antibiotics', 'APIs', 'Nutraceutical Formulations & Herbal Oils']
  }
];
