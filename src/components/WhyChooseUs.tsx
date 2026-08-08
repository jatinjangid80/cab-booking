import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, DollarSign, UserCheck, Headphones, PhoneCall, MessageCircle } from 'lucide-react';

const features = [
  {
    title: '24×7 Travel Support',
    desc: 'Help before, during & after your trip',
    icon: Headphones,
    delay: 0,
  },
  {
    title: 'Verified Drivers',
    desc: 'Experienced professionals',
    icon: UserCheck,
    delay: 100,
  },
  {
    title: 'Transparent Fares',
    desc: 'No hidden charges',
    icon: DollarSign,
    delay: 200,
  },
  {
    title: 'Clean & Comfortable Cars',
    desc: 'Well-maintained vehicles',
    icon: ShieldCheck,
    delay: 300,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export const WhyChooseUs: React.FC = () => {
  const { ref: sectionRef, visible } = useInView(0.1);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white text-[#111827] relative border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-10 lg:gap-16 items-center">

          {/* ── Left Column: Image (45% width = 5 of 11 cols) ── */}
          <div className="lg:col-span-5 order-1">
            <div
              className="relative group mx-auto max-w-md lg:max-w-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Main Photo Container with Outer White Border */}
              <div className="bg-white p-2.5 sm:p-3 rounded-[32px] sm:rounded-[40px] shadow-2xl relative transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0f172a]">
                  <img
                    src="/driver-photo.png?v=4"
                    alt="LookMyHolidays Professional Driver"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-top"
                  />
                </div>
              </div>

              {/* Rating Badge — floating top-left (30% smaller) */}
              <div
                className="absolute -top-4 -left-2 sm:-left-4 bg-[#f97316] text-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg text-center z-10 animate-float"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.9)',
                  transition: 'opacity 0.5s ease 0.3s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s',
                  animationDelay: '1.5s'
                }}
              >
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center justify-center gap-1">
                  4.9
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-orange-100 mt-0.5 whitespace-nowrap">
                  Rated by 10K+ travelers
                </div>
              </div>

              {/* Trust Badge — floating bottom-right (smaller) */}
              <div
                className="absolute -bottom-5 -right-2 sm:-right-4 bg-white text-[#0f172a] rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-xl border border-slate-100 hidden sm:flex items-center gap-2.5 z-10 animate-float"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: 'opacity 0.6s ease 0.5s',
                  animationDelay: '0.5s'
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0f172a] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-[#0f172a] leading-tight">Verified Drivers</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase tracking-wide mt-0.5">
                    Professional & experienced
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Content (55% width = 6 of 11 cols) ── */}
          <div className="lg:col-span-6 order-2 space-y-7">

            {/* Label + Heading */}
            <div
              className="space-y-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
              }}
            >
              <span className="text-[#f97316] font-bold text-[11px] sm:text-xs uppercase tracking-wider bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 inline-block">
                The LookMyHolidays Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Why Travelers Choose<br className="hidden sm:block" /> LookMyHolidays
              </h2>
              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-lg">
                Reliable cabs, verified drivers, transparent pricing, and 24×7 support across India.
              </p>
            </div>

            {/* Feature Cards — staggered fade-up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#f8fafc] hover:bg-white border border-slate-100 hover:border-orange-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out flex gap-3.5 items-center group cursor-default"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(16px)',
                      transition: `opacity 0.5s ease ${0.5 + feat.delay / 1000}s, transform 0.5s ease ${0.5 + feat.delay / 1000}s`,
                    }}
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white text-[#f97316] shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#f97316] transition-colors duration-300">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium leading-snug">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Row */}
            <div
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.5s ease 0.9s, transform 0.5s ease 0.9s',
              }}
            >
              {/* Primary — Orange */}
              <a
                href="tel:+919529155562"
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-[#f97316] hover:bg-orange-600 text-white shadow-md shadow-orange-400/30 flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90 leading-none mb-1">
                    Talk to a Travel Expert
                  </div>
                  <div className="font-black text-sm leading-none">+91 95291 55562</div>
                </div>
              </a>

              {/* WhatsApp — Green */}
              <a
                href="https://wa.me/919529155562"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-400/25 flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-black text-sm leading-none mb-1">WhatsApp Us</div>
                  <div className="text-[11px] font-semibold opacity-90 leading-none">
                    Get instant assistance
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
