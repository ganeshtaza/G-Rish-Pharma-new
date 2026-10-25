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
  Globe
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
          <div className="text-xs font-bold tracking-wider text-teal-700 uppercase font-mono mb-2">
            Connect With Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Corporate Headquarters &amp; Manufacturing Hubs
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Reach out to our corporate office in Navi Mumbai or connect directly with our production coordination team for Maharashtra, Hyderabad, and Gujarat plants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office & Facility Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Navi Mumbai HQ Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Corporate Headquarters</h3>
                  <div className="text-xs text-teal-700 font-mono">G-Rish Pharma Pvt. Ltd</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Plot No. C-42, MIDC Industrial Area, Turbhe / Vashi, Navi Mumbai, Maharashtra - 400705, INDIA.
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="font-mono">+91 (22) 2778 4500 / +91 (22) 2778 4501</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="font-mono text-teal-800 font-medium">contact@grishpharma.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="font-mono text-teal-800 font-medium">export@grishpharma.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-500 pt-1 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Mon – Sat: 09:30 AM – 06:30 PM IST (GMT +5:30)</span>
                </div>
              </div>
            </div>

            {/* Manufacturing Sites Details */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                Approved Manufacturing Facilities:
              </h4>

              <div className="border-b border-slate-100 pb-3 text-xs">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Maharashtra Hub</span>
                  <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">Solid Orals &amp; Syrups</span>
                </div>
                <div className="text-slate-600 mt-1">Tarapur Industrial Area, Boisar, Palghar Dist, Maharashtra</div>
              </div>

              <div className="border-b border-slate-100 pb-3 text-xs">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Hyderabad Hub (Telangana)</span>
                  <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">Sterile Injectables &amp; Vials</span>
                </div>
                <div className="text-slate-600 mt-1">Jeedimetla Industrial Corridor, Phase III, Hyderabad, Telangana</div>
              </div>

              <div className="text-xs">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>Gujarat Hub</span>
                  <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">APIs &amp; Nutraceuticals</span>
                </div>
                <div className="text-slate-600 mt-1">GIDC Chemical Estate, Ankleshwar / Vadodara, Gujarat</div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send a Message to Corporate Desk
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              For loan license, global tenders, distributor inquiries, or API bulk requirements.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for your message. Our business development team in Navi Mumbai will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-teal-700 hover:underline font-semibold"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. r.sharma@pharma-distributor.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98200 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="Contract Manufacturing Inquiry">Contract Manufacturing Inquiry</option>
                      <option value="Global Export & Distribution">Global Export &amp; Distribution</option>
                      <option value="Loan License Facility Booking">Loan License Facility Booking</option>
                      <option value="API & Raw Bulk Order">API &amp; Raw Bulk Order</option>
                      <option value="Dossier & Regulatory Affairs">Dossier &amp; Regulatory Affairs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding formulation requirements, target volume, or country of export..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Message</span>
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
