import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ArrowRight, Shield, Star, CheckCircle2, Car, RefreshCw, Zap } from 'lucide-react';
import { TripType, BookingDetails } from '../types';

interface HeroProps {
  onSearch: (searchData: Partial<BookingDetails>) => void;
  onOpenBookingWithDetails: (details: Partial<BookingDetails>) => void;
}

const POPULAR_CITIES = [
  'Delhi IGI Airport', 'New Delhi Railway Station', 'Jaipur Pink City',
  'Agra Taj Expressway', 'Udaipur City Center', 'Chandigarh Airport',
  'Gurugram Cyber Hub', 'Noida Sector 62', 'Mumbai Airport T2', 'Bangalore Airport'
];

export const Hero: React.FC<HeroProps> = ({ onOpenBookingWithDetails }) => {
  const [pickupLocation, setPickupLocation] = useState('Delhi IGI Airport');
  const [dropLocation, setDropLocation] = useState('Jaipur Pink City');
  const [pickupDate, setPickupDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('09:00');
  const [tripType, setTripType] = useState<TripType>('one-way');

  const handleSwapLocations = () => {
    const temp = pickupLocation;
    setPickupLocation(dropLocation);
    setDropLocation(temp);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingWithDetails({
      pickupLocation,
      dropLocation: tripType === 'local' ? 'Local Rental (8 Hrs / 80 Km)' : dropLocation,
      pickupDate,
      pickupTime,
      tripType,
      passengers: 4
    });
  };

  return (
    <section className="relative bg-[#f8fafc] text-[#111827] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-100">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading & Booking Form */}
          <div className="lg:col-span-7 space-y-6">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#f97316] text-xs font-bold uppercase tracking-wider shadow-xs animate-hero-fade-up">
              <span className="w-2 h-2 rounded-full bg-[#f97316]" />
              <span>Premium Taxi Services Across 120+ Cities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.1] tracking-tight drop-shadow-xs animate-hero-fade-up" style={{ animationDelay: '0.1s' }}>
              Book Your Perfect <br className="hidden sm:inline" />
              <span className="text-[#f97316]">Ride</span> Anywhere
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg text-slate-500 max-w-xl font-medium leading-relaxed animate-hero-fade-up" style={{ animationDelay: '0.2s' }}>
              Airport Transfers, One Way, Round Trip, and Local Hourly Rentals. Trusted by 10,000+ happy travelers across India.
            </p>

            {/* Interactive Search Card */}
            <div 
              className="bg-white/95 backdrop-blur-xl border border-slate-200/80 p-6 rounded-3xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] animate-hero-fade-up"
              style={{ animationDelay: '0.3s' }}
            >

              {/* Trip Type Selector Tabs */}
              <div className="flex items-center gap-2 mb-5 p-1 bg-slate-100 rounded-2xl max-w-xl">
                {(['one-way', 'round-trip', 'local', 'airport-transfer'] as TripType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTripType(type)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all cursor-pointer whitespace-nowrap ${tripType === type
                      ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-600 hover:text-[#111827]'
                      }`}
                  >
                    {type === 'one-way' && 'One Way'}
                    {type === 'round-trip' && 'Round Trip'}
                    {type === 'local' && 'Local Rental'}
                    {type === 'airport-transfer' && 'Airport Transfer'}
                  </button>
                ))}
              </div>

              {/* Booking Inputs Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-4">

                {/* Pickup & Drop Grid */}
                <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center relative">

                  {/* Pickup Input */}
                  <div className="md:col-span-5 relative">
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#f97316]" />
                      Pickup City / Airport
                    </label>
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all cursor-pointer"
                      required
                    >
                      <option value="" disabled>Select Pickup Location</option>
                      {POPULAR_CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Swap Button */}
                  {tripType !== 'local' && (
                    <div className="md:col-span-1 flex justify-center py-1 md:py-0">
                      <button
                        type="button"
                        onClick={handleSwapLocations}
                        className="w-9 h-9 rounded-full bg-slate-100 hover:bg-orange-50 text-slate-600 hover:text-[#f97316] flex items-center justify-center transition-colors border border-slate-200 cursor-pointer"
                        title="Swap Pickup & Drop Locations"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Drop Input */}
                  <div className={`relative ${tripType === 'local' ? 'md:col-span-6' : 'md:col-span-5'}`}>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-600" />
                      {tripType === 'local' ? 'Package Type' : 'Drop City / Destination'}
                    </label>
                    {tripType === 'local' ? (
                      <select
                        value={dropLocation}
                        onChange={(e) => setDropLocation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all"
                      >
                        <option value="4 Hours / 40 Km Package">4 Hours / 40 Km Package (Local)</option>
                        <option value="8 Hours / 80 Km Package">8 Hours / 80 Km Full Day Package</option>
                        <option value="12 Hours / 120 Km Package">12 Hours / 120 Km Extended Package</option>
                      </select>
                    ) : (
                      <>
                        <select
                          value={dropLocation}
                          onChange={(e) => setDropLocation(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all cursor-pointer"
                          required
                        >
                          <option value="" disabled>Select Drop Destination</option>
                          {POPULAR_CITIES.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </>
                    )}
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000 + 86400000).toISOString().split('T')[0]}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#f97316]" />
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-orange-500/20 outline-hidden transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#f97316] hover:scale-[1.01] text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>SEARCH RIDES & FARES</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </form>

              {/* Trust Badges under form */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 font-semibold gap-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero Cancellation Fee
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Drivers
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Instant Confirmation
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Highlights */}
          <div className="lg:col-span-5 relative">

            {/* Main Luxury Car Showcase Card */}
            <div className="relative mx-auto max-w-lg lg:max-w-none animate-hero-fade-up" style={{ animationDelay: '0.4s' }}>

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-[#f97316] opacity-20 blur-[80px] rounded-[40px] pointer-events-none" />

              <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-white bg-[#111827] group animate-hero-float transition-all duration-400">
                <img
                  src="/hero-premium-sedan.jpg"
                  alt="LookMyHolidays Premium Sedan"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/40 to-transparent pointer-events-none" />

                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-20 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#f97316] text-[10px] font-black tracking-wider uppercase">
                      Featured Outstation Cab
                    </span>
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9 / 5.0
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Premium Sedan</h3>
                  <p className="text-xs text-slate-300 font-medium max-w-sm">
                    Comfortable rides for Delhi, Jaipur & 120+ cities.
                  </p>
                </div>
              </div>

              {/* Trusted Badge */}
              <div className="absolute top-4 -right-2 bg-white text-[#111827] px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center animate-scale-fade" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm">4.9</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 mt-0.5 whitespace-nowrap">10K+ Trusted Travelers</span>
              </div>

              {/* Floating Badge: Stats Pill */}
              <div className="absolute bottom-4 left-4 sm:-left-4 bg-[#111827] text-white py-3.5 px-5 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-700/50 animate-scale-fade" style={{ animationDelay: '0.6s' }}>
                <div className="text-center border-r border-slate-700/60 pr-4">
                  <p className="text-xl font-bold">500+</p>
                  <p className="text-[9px] uppercase text-slate-400 tracking-widest font-bold mt-0.5">Drivers</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">4.9/5</p>
                  <p className="text-[9px] uppercase text-slate-400 tracking-widest font-bold mt-0.5">Rating</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
