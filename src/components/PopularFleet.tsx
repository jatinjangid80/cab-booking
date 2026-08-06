import React, { useState } from 'react';
import { VEHICLES } from '../data/mockData';
import { Users, Briefcase, Fuel, Wind, Star, CheckCircle, Car as CarIcon, ArrowRight } from 'lucide-react';
import { Vehicle } from '../types';

interface PopularFleetProps {
  onSelectVehicleForBooking: (vehicle: Vehicle) => void;
}

const CATEGORIES = ['All', 'Sedan', 'SUV', 'Innova Crysta', 'Luxury Sedan', 'Luxury SUV', 'Tempo Traveller', 'Electric Taxi'];

export const PopularFleet: React.FC<PopularFleetProps> = ({ onSelectVehicleForBooking }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVehicles = activeCategory === 'All'
    ? VEHICLES
    : VEHICLES.filter(v => v.category === activeCategory);

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100 inline-block">
            Comfort & Safety First
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Our Popular Vehicle Fleet
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Choose from well-maintained, sanitized sedans, spacious Innovas, group travellers, and VIP luxury cars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#E53935] text-white shadow-md shadow-red-500/20'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image & Price Overlay */}
              <div className="relative h-56 overflow-hidden bg-[#111827]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />
                
                {/* Popular Badge */}
                {vehicle.popular && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-400 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {vehicle.rating}
                </div>

                {/* Name & Pricing on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">{vehicle.category}</span>
                    <h3 className="text-lg font-black tracking-tight">{vehicle.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-300 font-bold">Outstation</span>
                    <div className="text-lg font-black text-[#E53935]">₹{vehicle.pricePerKm} <span className="text-xs font-normal text-white">/ km</span></div>
                  </div>
                </div>
              </div>

              {/* Vehicle Specs Grid */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Specs Pill Indicators */}
                <div className="grid grid-cols-4 gap-2 bg-slate-50 p-2.5 rounded-2xl text-center border border-slate-100">
                  <div className="space-y-0.5">
                    <Users className="w-4 h-4 text-slate-500 mx-auto" />
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Seats</div>
                    <div className="text-xs font-bold text-[#111827]">{vehicle.seats}</div>
                  </div>
                  <div className="space-y-0.5 border-l border-slate-200">
                    <Briefcase className="w-4 h-4 text-slate-500 mx-auto" />
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Bags</div>
                    <div className="text-xs font-bold text-[#111827]">{vehicle.bags}</div>
                  </div>
                  <div className="space-y-0.5 border-l border-slate-200">
                    <Fuel className="w-4 h-4 text-slate-500 mx-auto" />
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Fuel</div>
                    <div className="text-xs font-bold text-[#111827]">{vehicle.fuelType}</div>
                  </div>
                  <div className="space-y-0.5 border-l border-slate-200">
                    <Wind className="w-4 h-4 text-slate-500 mx-auto" />
                    <div className="text-[10px] text-slate-400 font-bold uppercase">AC</div>
                    <div className="text-xs font-bold text-emerald-600">Dual AC</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
                  {vehicle.description}
                </p>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {vehicle.features.slice(0, 3).map((feat, idx) => (
                    <span key={idx} className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#E53935]" />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Book Action Button */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Base Fare</div>
                    <div className="text-sm font-black text-[#111827]">₹{vehicle.baseFare}</div>
                  </div>
                  
                  <button
                    onClick={() => onSelectVehicleForBooking(vehicle)}
                    className="py-2.5 px-5 rounded-xl bg-[#E53935] hover:scale-[1.02] text-white font-bold text-xs shadow-md shadow-red-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Vehicle</span>
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
