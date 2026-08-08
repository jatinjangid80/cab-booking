import React from 'react';
import { Smartphone, Shield, Navigation, CreditCard, History, Star, Download, Apple } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#111827] text-white relative overflow-hidden border-b border-slate-800">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E53935]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Features */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20 inline-block">
              Yatra Mobile App
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Manage Rides on the Go with <span className="text-[#E53935]">Yatra App</span>
            </h2>

            <p className="text-base text-slate-300 max-w-xl leading-relaxed font-medium">
              Download our top-rated mobile app for live driver tracking, quick 1-tap rebooking, digital invoices, and exclusive app-only coupons.
            </p>

            {/* App Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-red-500/20 text-[#E53935]">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Live Driver Tracking</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">Track your driver’s arrival real-time on Google Maps.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Easy Instant Booking</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">Book cabs in under 10 seconds with saved addresses.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Yatra Cash Wallet</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">Get 5% cashback on every completed outstation trip.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Trip History & GST Invoices</h4>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">Download GST tax receipts instantly for business claims.</p>
                </div>
              </div>

            </div>

            {/* App Store Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              
              <button
                onClick={() => alert('LookMyHolidays Android app download link will be sent to your mobile phone!')}
                className="px-5 py-3 rounded-full bg-white text-[#111827] font-bold text-sm shadow-xl hover:bg-slate-100 transition-all flex items-center gap-3 cursor-pointer"
              >
                <div className="w-7 h-7 bg-[#E53935] rounded-lg text-white flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] uppercase font-bold text-slate-500">GET IT ON</div>
                  <div className="text-sm font-black leading-none">Google Play</div>
                </div>
              </button>

              <button
                onClick={() => alert('LookMyHolidays iOS app download link will be sent to your mobile phone!')}
                className="px-5 py-3 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-all flex items-center gap-3 cursor-pointer"
              >
                <Apple className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-bold text-slate-400">DOWNLOAD ON THE</div>
                  <div className="text-sm font-black leading-none">App Store</div>
                </div>
              </button>

              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold ml-2">
                <Star className="w-4 h-4 fill-amber-400" /> 4.9 ★ (12,000+ Downloads)
              </div>
            </div>

          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            
            <div className="relative w-72 sm:w-80 h-[520px] bg-gray-950 rounded-[45px] p-4 border-[8px] border-gray-800 shadow-2xl shadow-red-950/40 overflow-hidden">
              
              {/* Phone Speaker Notch */}
              <div className="w-32 h-5 bg-gray-800 rounded-b-xl mx-auto mb-4 flex justify-center items-center">
                <div className="w-10 h-1 bg-gray-700 rounded-full" />
              </div>

              {/* Mock App Screen UI */}
              <div className="bg-gray-900 rounded-[32px] p-4 h-[440px] flex flex-col justify-between text-white border border-gray-800">
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-red-500">LOOKMYHOLIDAYS</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">GPS ACTIVE</span>
                  </div>

                  {/* Driver Card Preview in App */}
                  <div className="bg-gray-800 p-3 rounded-2xl space-y-2 border border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs">
                        RK
                      </div>
                      <div>
                        <div className="text-xs font-bold">Driver: Rajesh Kumar</div>
                        <div className="text-[10px] text-gray-400">Innova Crysta • RJ-14-CB-9021</div>
                      </div>
                    </div>
                    <div className="bg-emerald-950/60 p-2 rounded-xl text-[11px] text-emerald-400 flex items-center justify-between">
                      <span>ETA: 4 Mins Away</span>
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Map Mockup graphic */}
                  <div className="h-40 rounded-2xl bg-slate-800 relative overflow-hidden flex items-center justify-center border border-gray-700">
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e53935_1px,transparent_1px)] [background-size:12px_12px]" />
                    <div className="relative z-10 text-center space-y-1">
                      <div className="w-10 h-10 rounded-full bg-red-600/80 text-white flex items-center justify-center mx-auto animate-pulse">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-gray-300">LIVE ROUTE NAVIGATION</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-600 text-center py-2.5 rounded-xl font-bold text-xs text-white">
                  SOS Panic Button Enabled
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
