import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Clock, Car } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white text-[#111827] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact CTA Header Card */}
        <div className="bg-[#111827] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-16 relative overflow-hidden border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20 inline-block">
                24/7 Booking Support Hotline
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Need Instant Help with Your Cab Booking?
              </h2>
              <p className="text-sm text-slate-300 font-medium">
                Our support team is available round-the-clock to assist with route selection, custom quotes, or driver updates.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="tel:+919529155562"
                className="py-3.5 px-6 rounded-full bg-[#E53935] hover:bg-red-600 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Call Now: +91 95291 55562
              </a>

              <a
                href="https://wa.me/919529155562"
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Chat
              </a>

              <button
                onClick={onOpenBooking}
                className="py-3 px-6 rounded-full bg-white text-[#111827] hover:bg-slate-100 font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Car className="w-4 h-4 text-[#E53935]" /> Book Online Instantly
              </button>
            </div>
          </div>

        </div>

        {/* Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#111827]">Headquarters & Support</h3>
              <p className="text-xs text-slate-500 font-medium">Reach out directly or visit our corporate booking hub.</p>
            </div>

            <div className="space-y-4 text-xs font-semibold text-slate-700">
              <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111827] text-sm">Main Booking Hub</div>
                  <div className="text-slate-500 font-medium mt-0.5">FF-35, JTM Mall, Jagatpura, Jaipur</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111827] text-sm">24x7 Customer Support Line</div>
                  <div className="text-slate-500 font-medium mt-0.5">+91 95291 55562</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-100 flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111827] text-sm">Email Inquiries</div>
                  <div className="text-slate-500 font-medium mt-0.5">support@lookmyholidays.in / resv@lookmyholidays.in</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
            
            <h3 className="text-xl font-extrabold text-[#111827] mb-1">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-500 font-medium mb-6">Have custom outstation requirements or corporate inquiries? Drop us a note.</p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700 font-medium">Our customer support representative will call you back within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-semibold focus:border-[#E53935] focus:ring-2 focus:ring-red-100 outline-hidden bg-white text-[#111827]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (+91)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 95291 55562"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-semibold focus:border-[#E53935] focus:ring-2 focus:ring-red-100 outline-hidden bg-white text-[#111827]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-xs font-semibold focus:border-[#E53935] focus:ring-2 focus:ring-red-100 outline-hidden bg-white text-[#111827]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Travel Requirement</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your trip dates, passengers, preferred car type..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs font-semibold focus:border-[#E53935] focus:ring-2 focus:ring-red-100 outline-hidden bg-white text-[#111827]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#E53935] hover:bg-red-600 text-white font-extrabold text-xs shadow-md shadow-red-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Now</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
