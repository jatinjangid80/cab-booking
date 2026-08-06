import React from 'react';
import { DESTINATIONS } from '../data/mockData';
import { MapPin, Navigation, ArrowRight, Compass } from 'lucide-react';
import { Destination, BookingDetails } from '../types';

interface FeaturedDestinationsProps {
  onOpenBookingWithDetails: (details: Partial<BookingDetails>) => void;
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ onOpenBookingWithDetails }) => {
  return (
    <section id="destinations" className="py-16 sm:py-24 bg-[#f8fafc] text-[#111827] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100 inline-block">
            Top Outstation Routes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Explore Popular Destinations
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Seamless flat-rate taxi connectivity across North & West India’s most visited heritage, hill station, and business hubs.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden bg-[#111827]">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/20 to-transparent" />
                
                {/* Distance Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-[#E53935]" />
                  ~{dest.distanceKm} Km from Delhi
                </div>

                {/* Name & Tagline */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-black tracking-tight">{dest.name}</h3>
                  <p className="text-xs text-slate-200 font-medium">{dest.tagline}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Popular Routes List */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#E53935]" />
                    Popular Connect Routes
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popularRoutes.map((route, i) => (
                      <span key={i} className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {route}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Key Attractions</div>
                  <div className="flex flex-wrap gap-1 text-xs text-slate-500 font-medium">
                    {dest.highlights.join(' • ')}
                  </div>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Starting Fare</span>
                    <div className="text-lg font-black text-[#E53935]">₹{dest.startingPrice.toLocaleString()}</div>
                  </div>

                  <button
                    onClick={() => onOpenBookingWithDetails({
                      dropLocation: dest.name,
                      pickupLocation: 'Delhi IGI Airport'
                    })}
                    className="py-2.5 px-4 rounded-xl bg-[#111827] hover:bg-[#E53935] text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Route</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
