import React from 'react';
import { MapPin, Car, CheckCircle2, UserCheck, Smile, ArrowRight } from 'lucide-react';

interface HowBookingWorksProps {
  onOpenBooking: () => void;
}

export const HowBookingWorks: React.FC<HowBookingWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Choose Pickup & Drop',
      desc: 'Enter your pickup city, drop location, travel date, and preferred pickup time.',
      icon: MapPin,
      color: 'bg-red-500/10 text-red-400 border-red-500/30'
    },
    {
      step: 'Step 2',
      title: 'Select Vehicle',
      desc: 'Choose from Hatchback, Dzire Sedan, Ertiga, Innova Crysta or Luxury Cars.',
      icon: Car,
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    },
    {
      step: 'Step 3',
      title: 'Confirm Booking',
      desc: 'Review flat rate breakdown and confirm booking with zero advance requirements.',
      icon: CheckCircle2,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    },
    {
      step: 'Step 4',
      title: 'Enjoy Your Journey',
      desc: 'Relax in sanitized AC comfort while your professional chauffeur handles highway traffic.',
      icon: Smile,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/30'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#111827] text-white relative overflow-hidden border-y border-slate-800">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20 inline-block">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How Taxi Booking Works
          </h2>
          <p className="text-base text-slate-400 font-medium">
            Book a premium outstation or airport cab in under 60 seconds with instant confirmation.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-md rounded-3xl p-5 border border-white/10 hover:border-[#E53935]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Connecting Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#E53935] bg-[#111827] rounded-full p-1 border border-slate-800">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/40 text-[#E53935] border border-slate-800">
                      {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E53935] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Step</span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#E53935] hover:bg-red-600 text-white font-extrabold text-sm shadow-xl shadow-red-500/20 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>START YOUR BOOKING NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
