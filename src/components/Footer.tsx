import React, { useState } from 'react';
import { Car, Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#111827] text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="/cab_booking_logo.png"
                alt="Cab Booking Logo"
                className="h-12 sm:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              India’s premier taxi rental and outstation cab booking service. Connecting 120+ cities with verified drivers, transparent flat rates, and 24/7 customer support.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E53935]" /> +91 95291 55562 (24x7 Support)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E53935]" /> booking@yatracabs.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E53935]" /> FF-35, JTM Mall, Jagatpura, Jaipur
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><button onClick={() => { setActiveTab('services'); window.scrollTo(0, 0); }} className="hover:text-[#E53935] transition-colors cursor-pointer">Airport Transfers</button></li>
              <li><button onClick={() => { setActiveTab('services'); window.scrollTo(0, 0); }} className="hover:text-[#E53935] transition-colors cursor-pointer">One Way Outstation</button></li>
              <li><button onClick={() => { setActiveTab('services'); window.scrollTo(0, 0); }} className="hover:text-[#E53935] transition-colors cursor-pointer">Round Trip Cabs</button></li>
              <li><button onClick={() => { setActiveTab('services'); window.scrollTo(0, 0); }} className="hover:text-[#E53935] transition-colors cursor-pointer">Hourly Local Rentals</button></li>
              <li><button onClick={() => { setActiveTab('services'); window.scrollTo(0, 0); }} className="hover:text-[#E53935] transition-colors cursor-pointer">VIP Corporate Travel</button></li>
              <li><button onClick={() => { setActiveTab('services'); window.scrollTo(0, 0); }} className="hover:text-[#E53935] transition-colors cursor-pointer">Wedding Car Rental</button></li>
            </ul>
          </div>

          {/* Column 2: Top Routes & Cities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Popular Routes</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><button onClick={onOpenBooking} className="hover:text-[#E53935] transition-colors cursor-pointer">Delhi to Jaipur Cab</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#E53935] transition-colors cursor-pointer">Delhi to Agra Taxi</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#E53935] transition-colors cursor-pointer">Jaipur to Udaipur Taxi</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#E53935] transition-colors cursor-pointer">Mumbai to Pune Cab</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#E53935] transition-colors cursor-pointer">Delhi to Shimla / Manali</button></li>
              <li><button onClick={onOpenBooking} className="hover:text-[#E53935] transition-colors cursor-pointer">Bangalore to Mysore Cab</button></li>
            </ul>
          </div>

          {/* Column 3: Newsletter & Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Exclusive Discounts</h4>
            <p className="text-xs text-slate-400 font-medium">Subscribe for coupon codes and highway travel guides.</p>

            {subscribed ? (
              <div className="p-3 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white focus:border-[#E53935] outline-hidden pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1 p-1.5 rounded-full bg-[#E53935] text-white hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 flex items-center gap-2 text-[10px] text-slate-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> We respect your privacy. Zero spam.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© {new Date().getFullYear()} Cab Booking India Private Limited. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="text-slate-300">Designed and deployed by Jatin Jangid</p>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <button onClick={() => alert('Yatra Cabs Terms & Conditions: All flat-rate fares include GST and permit fees.')} className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
            <span>•</span>
            <button onClick={() => alert('Yatra Cabs Privacy Policy: Passenger contact data is encrypted and strictly used for trip alerts.')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
