export type TherapeuticCategory = 
  | 'All'
  | 'Cardiovascular'
  | 'Anti-Diabetic'
  | 'Anti-Biotic & Anti-Bacterials'
  | 'Anti-Ulcerants & Anti-GERD'
  | 'Anti-Allergics & Anti-Cold'
  | 'Anti-Inflammatory'
  | 'Anti-Fungals'
  | 'Anti-Cancer'
  | 'Anti-Diarrhoeal'
  | 'All Injectables'
  | 'Creams & Topical'
  | 'Appetizers & Multivitamins'
  | 'Nutraceuticals & Calcium'
  | 'Herbal & Pain Relieving Oil'
  | 'Cephalosporin & Betalactum'
  | 'APIs & Bulk Actives';

export type DosageForm = 
  | 'All'
  | 'Tablet'
  | 'Capsule'
  | 'Liquid Syrup / Suspension'
  | 'Dry Syrup'
  | 'Liquid Injection'
  | 'Dry Injection (Vial)'
  | 'Cream / Ointment / Gel'
  | 'Eye / Ear Drops'
  | 'Herbal Oil / Topical Liquid'
  | 'API / Pure Chemical';

export interface PharmaProduct {
  id: string;
  brandName: string;
  genericName: string;
  category: TherapeuticCategory;
  dosageForm: DosageForm;
  strength: string;
  composition: string;
  packaging: string;
  indications: string;
  facilityLocation: 'Maharashtra' | 'Hyderabad' | 'Gujarat';
  certifications: string[];
  dossierAvailable: ('CTD' | 'ACTD' | 'COPP' | 'Stability Zone IVb')[];
  featured?: boolean;
  features?: string[];
}

export interface ManufacturingFacility {
  id: string;
  location: string;
  state: 'Maharashtra' | 'Telangana (Hyderabad)' | 'Gujarat';
  facilityType: string;
  focusAreas: string[];
  cleanroomGrade: string;
  annualCapacity: string;
  approvals: string[];
  keyHighlights: string[];
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  category: string;
  dosageForm: string;
  productName: string;
  estimatedBatchSize: string;
  packagingPreference: string;
  dossierNeeded: boolean;
  message: string;
}
