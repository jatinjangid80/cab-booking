import React from 'react';
import { ShieldCheck, Clock, Navigation, CheckCircle2, DollarSign, Sparkles, UserCheck, Zap, Headphones, PhoneCall } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: '24×7 Customer Support',
      desc: 'Dedicated helpline & instant live chat support round the clock.',
      icon: Headphones
    },
    {
      title: 'Professional Drivers',
      desc: 'Uniformed, multi-lingual, & highway experienced chauffeurs.',
      icon: UserCheck
    },
    {
      title: 'GPS Tracking & Live Booking',
      desc: 'Real-time vehicle location sharing with emergency SOS safety alert.',
      icon: Navigation
    },
    {
      title: '100% Transparent Pricing',
      desc: 'All-inclusive quotes with zero hidden taxes or surprise extra fees.',
      icon: DollarSign
    },
    {
      title: 'Safe & Sanitized Vehicles',
      desc: 'Deep cleaned, sanitized interiors after every trip with air fresheners.',
      icon: Sparkles
    },
    {
      title: 'Instant Confirmation',
      desc: 'Instant driver assignment & SMS / WhatsApp confirmation slip.',
      icon: Zap
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white text-[#111827] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto">
              
              {/* Main Image */}
              <div className="rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-[#111827]">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=900"
                  alt="Yatra Cabs Professional Driver and Vehicle"
                  className="w-full h-[450px] object-cover object-center"
                />
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute -bottom-6 -right-4 bg-[#111827] text-white rounded-2xl p-5 shadow-2xl max-w-xs border border-slate-800 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E53935] text-white flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">100% Safe Guarantee</div>
                    <div className="text-xs text-slate-400 font-medium">Police verified drivers only</div>
                  </div>
                </div>
              </div>

              {/* Secondary decorative accent */}
              <div className="absolute -top-6 -left-4 bg-[#E53935] text-white rounded-2xl p-4 shadow-xl text-center">
                <div className="text-2xl font-extrabold">4.95 ★</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-red-100">User Rating</div>
              </div>

            </div>
          </div>

          {/* Right Column: Features Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100 inline-block">
                The Yatra Cabs Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Why Thousands of Travelers Choose Us Every Day
              </h2>
              <p className="text-base text-slate-500 font-medium leading-relaxed">
                We bridge the gap between expensive luxury travel and unorganized local taxis by promising punctuality, safety, and absolute price transparency across India.
              </p>
            </div>

            {/* Checklist Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-red-100 hover:shadow-md transition-all duration-200 flex gap-3.5 items-start group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white text-[#E53935] shadow-xs border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#E53935] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Box */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f8fafc] p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Need immediate booking assistance?</div>
                  <a href="tel:+919876543210" className="text-base font-black text-[#111827] hover:text-[#E53935]">
                    Call 24/7: +91 98765 43210
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
