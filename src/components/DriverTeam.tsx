import React from 'react';
import { DRIVERS } from '../data/mockData';
import { ShieldCheck, Star, Award, Globe, Car } from 'lucide-react';

export const DriverTeam: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f8fafc] text-[#111827] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100 inline-block">
            Professional Chauffeurs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Meet Our Top Rated Drivers
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Police-verified, courteous, multi-lingual, and seasoned highway experts committed to your safety.
          </p>
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DRIVERS.map((driver) => (
            <div
              key={driver.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 p-6 flex flex-col justify-between space-y-4 text-center group"
            >
              {/* Photo & Verified Badge */}
              <div className="relative mx-auto">
                <img
                  src={driver.photo}
                  alt={driver.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-red-50 group-hover:border-[#E53935] transition-colors shadow-md"
                />
                {driver.verified && (
                  <div
                    className="absolute bottom-0 right-1/2 translate-x-8 bg-emerald-500 text-white p-1 rounded-full shadow-xs"
                    title="Police Verified Driver"
                  >
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Driver Info */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#111827] group-hover:text-[#E53935] transition-colors">
                  {driver.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-xs font-bold text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{driver.rating}</span>
                  <span className="text-slate-400 font-normal">({driver.totalTrips} trips)</span>
                </div>
              </div>

              {/* Details List */}
              <div className="bg-slate-50 rounded-2xl p-3 text-left space-y-2 text-xs text-slate-600 border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Award className="w-3.5 h-3.5 text-[#E53935]" /> Experience
                  </span>
                  <span className="font-bold text-[#111827]">{driver.experienceYears} Years</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Car className="w-3.5 h-3.5 text-[#E53935]" /> Vehicle
                  </span>
                  <span className="font-bold text-[#111827] truncate max-w-[110px]">{driver.carAssigned}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <Globe className="w-3.5 h-3.5 text-[#E53935]" /> Languages
                  </span>
                  <span className="font-bold text-[#111827] truncate max-w-[110px]">{driver.languages.join(', ')}</span>
                </div>
              </div>

              {/* Status Pill */}
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    driver.status === 'Available'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                      : 'bg-amber-50 text-amber-800 border border-amber-100'
                  }`}
                >
                  {driver.status}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
