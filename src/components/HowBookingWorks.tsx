import React from 'react';
import { MapPin, Car, CheckCircle2, Smile, ArrowRight } from 'lucide-react';

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
      color: 'bg-orange-50 text-orange-500 border-orange-100'
    },
    {
      step: 'Step 2',
      title: 'Select Vehicle',
      desc: 'Choose from Hatchback, Dzire Sedan, Ertiga, Innova Crysta or Luxury Cars.',
      icon: Car,
      color: 'bg-blue-50 text-blue-500 border-blue-100'
    },
    {
      step: 'Step 3',
      title: 'Confirm Booking',
      desc: 'Review flat rate breakdown and confirm booking with zero advance requirements.',
      icon: CheckCircle2,
      color: 'bg-emerald-50 text-emerald-500 border-emerald-100'
    },
    {
      step: 'Step 4',
      title: 'Enjoy Your Journey',
      desc: 'Relax in sanitized AC comfort while your professional chauffeur handles highway traffic.',
      icon: Smile,
      color: 'bg-purple-50 text-purple-500 border-purple-100'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#f8fafc] relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#f97316] font-bold text-xs uppercase tracking-wider bg-orange-100 px-3.5 py-1.5 rounded-full inline-block">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
            How Taxi Booking Works
          </h2>
          <p className="text-base text-slate-500 font-medium">
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
                className="relative bg-white rounded-2xl p-6 lg:p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#f97316]/30 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Connecting Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 text-slate-300 bg-white rounded-full p-1 border border-slate-200 shadow-sm w-10 h-10 items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}

                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-orange-50 group-hover:text-[#f97316] group-hover:border-orange-100 transition-colors">
                    {item.step}
                  </span>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-[#111827] mb-2 group-hover:text-[#f97316] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full bg-[#f97316] hover:bg-orange-600 text-white font-extrabold text-sm shadow-lg shadow-orange-500/20 transition-all inline-flex items-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <span>START YOUR BOOKING NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
