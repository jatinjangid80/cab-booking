import React, { useState, useRef, useEffect } from 'react';
import { VEHICLES } from '../data/mockData';
import { Star, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';

interface PopularFleetProps {
  onSelectVehicleForBooking: (vehicle: Vehicle) => void;
  limit?: number;
  onViewAll?: () => void;
  onBackToHome?: () => void;
}

const CATEGORIES = ['All', 'Sedan', 'SUV/MUV', 'Luxury Sedan', 'Luxury SUV', 'Tempo Traveller'];

export const PopularFleet: React.FC<PopularFleetProps> = ({ onSelectVehicleForBooking, limit, onViewAll, onBackToHome }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const filteredVehicles = activeCategory === 'All'
    ? VEHICLES
    : VEHICLES.filter(v => v.category === activeCategory);

  const displayedVehicles = limit ? filteredVehicles.slice(0, limit) : filteredVehicles;

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one card width roughly
          const cardWidth = carouselRef.current.children[0]?.clientWidth || clientWidth;
          carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' }); // 32px for gap
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, activeCategory]);

  // Reset scroll on category change
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Actions */}
        {onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#f97316] font-bold transition-colors cursor-pointer group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#f97316] font-bold text-xs uppercase tracking-wider bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200 inline-block">
            Comfort & Safety First
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Our Complete Fleet
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Choose from well-maintained, sanitized sedans, spacious Innovas, group travellers, and VIP luxury cars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${activeCategory === cat
                ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Full Width Carousel Container */}
      <div 
        className="relative group/carousel w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {/* Nav Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white shadow-xl shadow-slate-200/50 p-3 rounded-full text-slate-700 hover:text-[#f97316] hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 hidden lg:block cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white shadow-xl shadow-slate-200/50 p-3 rounded-full text-slate-700 hover:text-[#f97316] hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 hidden lg:block cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fleet Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 sm:px-6 lg:px-8 xl:px-16 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex-none w-[85vw] sm:w-[350px] lg:w-[380px] snap-center snap-always transition-all duration-500 group/card"
              >
                <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 flex flex-col overflow-hidden h-full">
                  
                  {/* Top Image Section */}
                  <div className="relative h-56 bg-slate-100 flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain object-center scale-110 group-hover/card:scale-115 transition-transform duration-500 drop-shadow-xl mix-blend-multiply"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-slate-900/10" />

                    {/* Popular Badge */}
                    {vehicle.popular && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 rounded-md bg-[#f97316] text-white text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md text-[11px] font-bold text-amber-400 flex items-center gap-1 border border-white/10">
                      ⭐ {vehicle.rating}
                    </div>

                    {/* Name & Pricing on Image */}
                    <div className="absolute bottom-4 left-5 right-5 text-white flex justify-between items-end z-10">
                      <div>
                        <span className="text-[9px] text-slate-300 uppercase font-black tracking-widest bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-sm mb-2 inline-block">
                          {vehicle.category} • OUTSTATION
                        </span>
                        <h3 className="text-xl font-black tracking-tight leading-tight">{vehicle.name}</h3>
                      </div>
                      <div className="text-right pb-0.5">
                        <div className="text-xl font-black text-white bg-[#f97316] px-2 py-0.5 rounded-md shadow-lg shadow-orange-500/30">₹{vehicle.pricePerKm}<span className="text-sm font-medium text-white/90">/km</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 p-5 flex flex-col">
                    
                    {/* Specs Row */}
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700 bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100 mb-5">
                      <span className="flex items-center gap-1.5"><span className="text-base">👤</span> {vehicle.seats} Seats</span>
                      <span className="text-slate-300">|</span>
                      <span className="flex items-center gap-1.5"><span className="text-base">🧳</span> {vehicle.bags} Bags</span>
                      <span className="text-slate-300">|</span>
                      <span className="flex items-center gap-1.5"><span className="text-base text-blue-500">❄</span> {vehicle.ac ? 'AC' : 'Non-AC'}</span>
                      <span className="text-slate-300">|</span>
                      <span>{vehicle.fuelType === 'Automatic' ? 'Auto' : 'Manual'}</span>
                    </div>

                    {/* Description */}
                    <div className="text-[13px] text-slate-500 font-medium leading-relaxed mb-5 flex-1 relative pl-4 italic">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-200 rounded-full"></div>
                      {vehicle.description}
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {vehicle.features.slice(0, 3).map((feat, idx) => (
                        <span key={idx} className="text-[10px] font-bold text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                          <CheckCircle className="w-3 h-3 text-[#f97316]" />
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Book Action Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Starting From</div>
                        <div className="text-lg font-black text-[#111827] leading-none">
                          ₹{vehicle.baseFare}
                        </div>
                        <div className="text-[9px] text-slate-400 font-medium mt-1 uppercase tracking-wider">Toll & parking extra</div>
                      </div>

                      <button
                        onClick={() => onSelectVehicleForBooking(vehicle)}
                        className="py-3 px-5 rounded-xl bg-slate-900 group-hover/card:bg-[#f97316] text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer group/btn"
                      >
                        <span>Book Vehicle</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* View All Button */}
        {limit && filteredVehicles.length > limit && onViewAll && (
          <div className="mt-4 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors cursor-pointer group"
            >
              View All Fleet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
