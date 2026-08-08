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
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropSuggestions, setShowDropSuggestions] = useState(false);

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
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading & Booking Form */}
          <div className="lg:col-span-7 space-y-6">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#E53935] text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
              <span>Premium Taxi Services Across 120+ Cities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.1] tracking-tight drop-shadow-xs">
              Book Your Perfect <br className="hidden sm:inline" />
              <span className="text-[#E53935]">Ride</span> Anywhere
            </h1>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
              Airport Transfers, One Way, Round Trip, and Local Hourly Rentals. Trusted by 10,000+ happy travelers across India.
            </p>

            {/* Interactive Search Card */}
            <div className="bg-white/90 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-2xl shadow-indigo-900/10 transition-all">

              {/* Trip Type Selector Tabs */}
              <div className="flex items-center gap-2 mb-5 p-1 bg-slate-100 rounded-2xl max-w-xl">
                {(['one-way', 'round-trip', 'local', 'airport-transfer'] as TripType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTripType(type)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all cursor-pointer whitespace-nowrap ${tripType === type
                        ? 'bg-[#E53935] text-white shadow-md shadow-red-500/20'
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
                      <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
                      Pickup City / Airport
                    </label>
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      onFocus={() => setShowPickupSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowPickupSuggestions(false), 200)}
                      placeholder="e.g. Delhi IGI Airport"
                      className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-red-500/20 outline-hidden transition-all"
                      required
                    />

                    {/* Auto Suggestions Dropdown */}
                    {showPickupSuggestions && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-xl border border-slate-100 z-30 max-h-48 overflow-y-auto">
                        <div className="p-2 text-[10px] uppercase font-bold text-slate-400">Popular Locations</div>
                        {POPULAR_CITIES.map((city) => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => {
                              setPickupLocation(city);
                              setShowPickupSuggestions(false);
                            }}
                            className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-red-50 hover:text-[#E53935] transition-colors flex items-center gap-2"
                          >
                            <MapPin className="w-3 h-3 text-[#E53935] shrink-0" />
                            {city}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Swap Button */}
                  {tripType !== 'local' && (
                    <div className="md:col-span-1 flex justify-center py-1 md:py-0">
                      <button
                        type="button"
                        onClick={handleSwapLocations}
                        className="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-[#E53935] flex items-center justify-center transition-colors border border-slate-200 cursor-pointer"
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
                        className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-red-500/20 outline-hidden transition-all"
                      >
                        <option value="4 Hours / 40 Km Package">4 Hours / 40 Km Package (Local)</option>
                        <option value="8 Hours / 80 Km Package">8 Hours / 80 Km Full Day Package</option>
                        <option value="12 Hours / 120 Km Package">12 Hours / 120 Km Extended Package</option>
                      </select>
                    ) : (
                      <>
                        <input
                          type="text"
                          value={dropLocation}
                          onChange={(e) => setDropLocation(e.target.value)}
                          onFocus={() => setShowDropSuggestions(true)}
                          onBlur={() => setTimeout(() => setShowDropSuggestions(false), 200)}
                          placeholder="e.g. Jaipur Pink City"
                          className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-red-500/20 outline-hidden transition-all"
                          required
                        />
                        {showDropSuggestions && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-2xl shadow-xl border border-slate-100 z-30 max-h-48 overflow-y-auto">
                            <div className="p-2 text-[10px] uppercase font-bold text-slate-400">Popular Destinations</div>
                            {POPULAR_CITIES.map((city) => (
                              <button
                                key={city}
                                type="button"
                                onClick={() => {
                                  setDropLocation(city);
                                  setShowDropSuggestions(false);
                                }}
                                className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-red-50 hover:text-[#E53935] transition-colors flex items-center gap-2"
                              >
                                <MapPin className="w-3 h-3 text-[#E53935] shrink-0" />
                                {city}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E53935]" />
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000 + 86400000).toISOString().split('T')[0]}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-red-500/20 outline-hidden transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E53935]" />
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-none bg-slate-50 text-sm font-semibold text-[#111827] focus:ring-2 focus:ring-red-500/20 outline-hidden transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#E53935] hover:scale-[1.01] text-white font-bold text-sm shadow-lg shadow-red-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
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
            <div className="relative mx-auto max-w-md lg:max-w-none">

              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-[#111827] group rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
                  alt="LookMyHolidays Luxury Fleet"
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/30 to-transparent" />

                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-20 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#E53935] text-[10px] font-black tracking-wider uppercase">
                      Featured Outstation Vehicle
                    </span>
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9 / 5.0
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Vintage Car</h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Supreme legroom, captain recliners, dual AC vents & luggage space.
                  </p>
                </div>
              </div>

              {/* Floating Badge: Stats Pill */}
              <div className="absolute -bottom-4 -left-6 bg-[#111827] text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-800 animate-float">
                <div className="text-center border-r border-slate-700 pr-4">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-[10px] uppercase text-slate-400 tracking-widest font-bold">Drivers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">4.9/5</p>
                  <p className="text-[10px] uppercase text-slate-400 tracking-widest font-bold">Rating</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
