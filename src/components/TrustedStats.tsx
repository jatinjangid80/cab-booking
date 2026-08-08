import React, { useEffect, useRef, useState } from 'react';
import { Users, UserCheck, MapPin, Award } from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) { 
          setVisible(true); 
          obs.disconnect(); 
        } 
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const AnimatedCounter: React.FC<{ value: number; visible: boolean }> = ({ value, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(easeOutExpo(progress) * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [visible, value]);

  return <span>{count.toLocaleString()}</span>;
};

export const TrustedStats: React.FC = () => {
  const { ref, visible } = useInView(0.1);

  const stats = [
    {
      id: 1,
      label: 'Happy Customers',
      value: 10000,
      suffix: '+',
      icon: Users,
      description: 'Rated 4.9/5 by travelers',
      delay: 0,
    },
    {
      id: 2,
      label: 'Verified Drivers',
      value: 500,
      suffix: '+',
      icon: UserCheck,
      description: 'Experienced professionals',
      delay: 100,
    },
    {
      id: 3,
      label: 'Cities Covered',
      value: 120,
      suffix: '+',
      icon: MapPin,
      description: 'Pan-India coverage',
      delay: 200,
    },
    {
      id: 4,
      label: 'Trips Completed',
      value: 50000,
      suffix: '+',
      icon: Award,
      description: 'Safe & comfortable journeys',
      delay: 300,
    }
  ];

  return (
    <section 
      ref={ref}
      className="bg-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div 
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
            Trusted by Travelers Across India
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Thousands of travelers choose LookMyHolidays for reliable, comfortable journeys.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            // Add border-r to the first 3 elements only on large screens
            const hasBorder = index < 3;
            return (
              <div
                key={stat.id}
                className={`relative flex flex-col items-center sm:items-start text-center sm:text-left group transition-all duration-300 hover:-translate-y-1 ${
                  hasBorder ? 'lg:after:content-[""] lg:after:absolute lg:after:right-[-24px] lg:after:top-2 lg:after:bottom-2 lg:after:w-px lg:after:bg-slate-100' : ''
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${stat.delay}ms, transform 0.6s ease ${stat.delay}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-5 text-slate-400 group-hover:text-[#f97316] transition-colors duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 transform group-hover:scale-[1.08] transition-transform duration-300" strokeWidth={1.5} />
                </div>
                
                {/* Numbers */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-2 flex items-baseline justify-center sm:justify-start">
                  <AnimatedCounter value={stat.value} visible={visible} />
                  <span className="text-[#f97316] ml-1">{stat.suffix}</span>
                </div>
                
                {/* Labels */}
                <div className="text-sm sm:text-base font-bold text-[#111827] mb-1">
                  {stat.label}
                </div>
                
                {/* Descriptions */}
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
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
