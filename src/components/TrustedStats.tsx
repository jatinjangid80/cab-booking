import React from 'react';
import { Users, UserCheck, MapPin, Award } from 'lucide-react';

export const TrustedStats: React.FC = () => {
  const stats = [
    {
      id: 1,
      label: 'Happy Customers',
      value: '10,000+',
      icon: Users,
      description: 'Rated 4.9/5 across reviews'
    },
    {
      id: 2,
      label: 'Verified Drivers',
      value: '500+',
      icon: UserCheck,
      description: 'Police verified & experienced'
    },
    {
      id: 3,
      label: 'Cities Covered',
      value: '120+',
      icon: MapPin,
      description: 'Pan-India intercity network'
    },
    {
      id: 4,
      label: 'Trips Completed',
      value: '50,000+',
      icon: Award,
      description: 'Safe & comfortable journeys'
    }
  ];

  return (
    <section className="bg-[#111827] text-white py-16 relative overflow-hidden border-y border-slate-800">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-[#E53935]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E53935]/20 text-[#E53935] flex items-center justify-center group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-black/40 px-2 py-1 rounded-md">
                    Verified
                  </span>
                </div>
                
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 group-hover:text-[#E53935] transition-colors">
                  {stat.value}
                </div>
                
                <div className="text-sm font-bold text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                
                <div className="text-xs text-slate-400 font-medium">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
