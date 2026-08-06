import React from 'react';
import { SERVICES } from '../data/mockData';
import { Plane, MapPin, ArrowRight, Repeat, Clock, Briefcase, Sparkles, Crown, ChevronRight } from 'lucide-react';
import { Service, BookingDetails } from '../types';

interface BrowseServicesProps {
  onSelectService: (service: Service) => void;
  onOpenBookingWithDetails: (details: Partial<BookingDetails>) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Plane,
  MapPin,
  ArrowRight,
  Repeat,
  Clock,
  Briefcase,
  Sparkles,
  Crown
};

export const BrowseServices: React.FC<BrowseServicesProps> = ({ onOpenBookingWithDetails }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f8fafc] text-[#111827] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100 inline-block">
            Tailored Travel Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Browse Our Taxi & Rental Services
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Airport Transfers, One Way Outstation, Round Trips, and Hourly Local Rentals available 24/7 across 120+ cities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || MapPin;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top Image & Badges */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon Circle */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white text-[#E53935] shadow-md flex items-center justify-center font-bold">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-[#111827] group-hover:text-[#E53935] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onOpenBookingWithDetails({
                        specialInstructions: `Booking for ${service.title}`
                      });
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 group-hover:bg-[#111827] text-[#111827] group-hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>{service.buttonText || `Book ${service.title}`}</span>
                    <ChevronRight className="w-4 h-4" />
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
