import React, { useState } from 'react';
import { Car, Phone, MessageSquare, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group text-left shrink-0"
          >
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-white flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <img
                src="/src/assets/images/cab_booking_logo.png"
                alt="Cab Booking Logo"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 font-black text-xl text-[#111827] tracking-tight leading-none">
                <span>CAB</span>
                <span className="text-[#E53935]">BOOKING</span>
              </div>
              <div className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase mt-1">
                Outstation & Taxi
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#E53935] font-bold'
                      : 'hover:text-[#111827]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Book Now Button */}
            <button
              onClick={onOpenBooking}
              className="bg-[#111827] text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all font-semibold text-sm shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Cabs</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold sm:hidden"
            >
              Book Cab
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  activeTab === link.id
                    ? 'bg-red-50 text-red-600 font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl bg-red-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-red-200"
            >
              <Car className="w-4 h-4" />
              Book Taxi Online Now
            </button>
          </div>

          <div className="pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-500 font-medium">
            <a href="tel:+919876543210" className="flex items-center gap-1 text-gray-700">
              <Phone className="w-3.5 h-3.5 text-red-600" /> +91 98765 43210
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-emerald-600">
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
