import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ApexContact: React.FC = () => {
  const { config } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Contract Manufacturing Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-blue-900 uppercase mb-2">
            GLOBAL INQUIRIES &amp; LOCATION NETWORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight uppercase font-sans">
            Connect With G-Rish Pharma
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Reach out to our corporate headquarters in Navi Mumbai or connect directly with our manufacturing coordinators for Maharashtra, Hyderabad, and Gujarat units.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office & Plants Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Navi Mumbai HQ Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${config.primary} text-white flex items-center justify-center font-bold`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Corporate Headquarters</h3>
                  <div className="text-xs text-blue-900 font-mono font-semibold">G-Rish Pharma Pvt. Ltd</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span>
                    Plot No. C-42, MIDC Industrial Area, Turbhe / Vashi, Navi Mumbai, Maharashtra - 400705, INDIA.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-900 shrink-0" />
                  <span className="font-mono font-semibold">+91 (22) 2778 4500 / +91 (22) 2778 4501</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                  <span className="font-mono text-blue-900 font-bold">export@grishpharma.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe2 className="w-4 h-4 text-blue-900 shrink-0" />
                  <span className="font-mono text-slate-700">contact@grishpharma.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500 pt-1 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Working Hours: Mon – Sat (09:30 AM – 06:30 PM IST)</span>
                </div>
              </div>
            </div>

            {/* Plants Locator */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
                Manufacturing Facilities Locations:
              </h4>

              <div className="border-b border-slate-100 pb-3 text-xs">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Maharashtra Hub</span>
                  <span className="text-[10px] font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded font-semibold">Solid Orals &amp; Syrups</span>
                </div>
                <div className="text-slate-600 mt-1">Tarapur Industrial Area, Boisar, Palghar Dist., Maharashtra - 401506</div>
              </div>

              <div className="border-b border-slate-100 pb-3 text-xs">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Hyderabad Hub (Telangana)</span>
                  <span className="text-[10px] font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded font-semibold">Sterile Parenterals &amp; Vials</span>
                </div>
                <div className="text-slate-600 mt-1">Jeedimetla Industrial Corridor, Phase III, Hyderabad, Telangana - 500055</div>
              </div>

              <div className="text-xs">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Gujarat Hub</span>
                  <span className="text-[10px] font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded font-semibold">APIs &amp; Nutraceuticals</span>
                </div>
                <div className="text-slate-600 mt-1">GIDC Chemical Estate, Ankleshwar / Vadodara, Gujarat - 393002</div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct RFP / Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send an Official Enquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              For contract manufacturing, Loan License inquiries, export dossier filings, or bulk active purchases.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Enquiry Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for your enquiry. Our business development team at Navi Mumbai HQ will contact you with batch timelines.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-blue-900 hover:underline font-bold"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Global Health Care Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98200 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Contract Manufacturing Inquiry">Contract Manufacturing Inquiry (MH / HYD / GUJ)</option>
                    <option value="Cardiovascular & Anti-Diabetic Formulations">Cardiovascular &amp; Anti-Diabetic Formulations</option>
                    <option value="Sterile Injectables & Anti-Cancer">Sterile Injectables &amp; Anti-Cancer</option>
                    <option value="Nutraceuticals & Calcium Supplements">Nutraceuticals &amp; Calcium Supplements</option>
                    <option value="Herbal & Pain Relieving Oil">Herbal Health Supplements &amp; Pain Relieving Oil</option>
                    <option value="API Bulk Purchase">API &amp; Bulk Active Purchase</option>
                    <option value="Global Export & Dossier Filing">Global Export &amp; Regulatory Dossier Filing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Requirements / Batch Specifications
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify molecule name, target volume (e.g. 100,000 units), packaging type, and target export market..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`px-7 py-3 text-xs font-bold uppercase tracking-wider text-white ${config.primary} ${config.primaryHover} rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer`}
                >
                  <span>Submit Official Enquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
