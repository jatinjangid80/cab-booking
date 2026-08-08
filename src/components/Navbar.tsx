import React, { useState } from 'react';
import { Car, Phone, MessageSquare, Menu, X, ShieldCheck, ChevronRight, ChevronDown, User, Clock, LogOut } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
  onOpenLogin: () => void;
  isLoggedIn?: boolean;
  userEmail?: string;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBooking, onOpenLogin, isLoggedIn, userEmail, onLogout }) => {
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
            className="flex items-center cursor-pointer group text-left shrink-0 py-1"
          >
            <img
              src="/cab_booking_logo.png"
              alt="Cab Booking Logo"
              className="h-14 sm:h-18 w-auto object-contain group-hover:scale-105 transition-transform origin-left"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors cursor-pointer ${isActive
                    ? 'text-[#f97316] font-bold'
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
            {/* Login Button */}
            {isLoggedIn ? (
              <div className="relative group">
                <button
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F4F6F8] text-[#1E293B] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
                >
                  <User className="w-5 h-5" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-4 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-2 space-y-1">
                    <div className="px-3 py-2.5 border-b border-slate-100 mb-1">
                      <p className="text-[17px] font-bold text-[#1E293B] tracking-tight">My Account</p>
                      <p className="text-[14px] text-slate-500 font-medium">{userEmail || 'booking@lookmyholidays.in'}</p>
                    </div>
                    <button className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-600 rounded-lg transition-colors flex items-center gap-2.5 cursor-pointer">
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-600 rounded-lg transition-colors flex items-center gap-2.5 cursor-pointer">
                      <Clock className="w-4 h-4" />
                      Booking History
                    </button>
                    <div className="h-px bg-slate-100 my-1"></div>
                    <button
                      onClick={() => onLogout ? onLogout() : window.location.reload()}
                      className="w-full text-left px-3 py-2.5 text-sm text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex items-center gap-2.5 font-bold cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-2 text-slate-700 font-bold px-4 py-2 hover:text-orange-600 transition-colors cursor-pointer text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-500" />
                </div>
                Sign In
              </button>
            )}

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
              className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold sm:hidden"
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
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${activeTab === link.id
                  ? 'bg-orange-50 text-orange-600 font-bold'
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
              className="w-full py-3 px-4 rounded-xl bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-red-200"
            >
              <Car className="w-4 h-4" />
              Book Taxi Online Now
            </button>
          </div>

          <div className="pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-500 font-medium">
            <a href="tel:+919529155562" className="flex items-center gap-1 text-gray-700">
              <Phone className="w-3.5 h-3.5 text-orange-600" /> +91 95291 55562
            </a>
            <a href="https://wa.me/919529155562" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-emerald-600">
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
