import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isHovered, setIsHovered] = useState(false);
  
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextReview = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextReview();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      nextReview();
      setTouchStart(null);
    } else if (diff < -50) {
      prevReview();
      setTouchStart(null);
    }
  };

  const current = REVIEWS[currentIndex];
  const slideAnimationClass = direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left';

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white text-[#111827] relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#f97316] font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 inline-block">
            Real Passenger Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Over 10,000+ happy families, business executives, and international tourists trust LookMyHolidays every month.
          </p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div 
          className="max-w-4xl mx-auto bg-[#f8fafc] rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 relative group/card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          tabIndex={0}
        >
          
          <Quote 
            key={`quote-${currentIndex}`}
            className="w-16 h-16 text-orange-100/80 absolute top-6 right-8 pointer-events-none animate-scale-fade" 
          />

          <div key={`content-${currentIndex}`} className={`space-y-6 relative z-10 ${slideAnimationClass}`} style={{ animationFillMode: 'forwards' }}>
            
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 fill-amber-400 text-amber-400 opacity-0 animate-star-pop" 
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
                />
              ))}
              <span className="ml-2 text-xs font-bold text-[#111827] opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>5.0 / 5.0 Rating</span>
            </div>

            {/* Comment */}
            <p className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed">
              "{current.comment}"
            </p>

            {/* Author info & route tag */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#f97316] shadow-md opacity-0 animate-scale-fade"
                  style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                />
                <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '180ms', animationFillMode: 'forwards' }}>
                  <h4 className="text-base font-bold text-[#111827]">{current.author}</h4>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#f97316]" />
                    {current.location}
                  </div>
                </div>
              </div>

              {/* Route Pill */}
              <div className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#111827] text-xs font-bold shadow-2xs opacity-0 animate-fade-in-up" style={{ animationDelay: '260ms', animationFillMode: 'forwards' }}>
                Route: {current.tripRoute}
              </div>

            </div>

          </div>

          {/* Next / Prev Controls & Progress */}
          <div className="flex flex-col items-end gap-3 mt-8 pt-4 border-t border-slate-200/60">
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={prevReview}
                className="p-3 rounded-full bg-white hover:bg-[#f97316] hover:text-white text-[#111827] shadow-2xs transition-all duration-300 hover:scale-105 group/btn cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
              </button>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-slate-400 px-2">
                  {currentIndex + 1} / {REVIEWS.length}
                </span>
              </div>
              <button
                onClick={nextReview}
                className="p-3 rounded-full bg-white hover:bg-[#f97316] hover:text-white text-[#111827] shadow-2xs transition-all duration-300 hover:scale-105 group/btn cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            {/* Progress Bar (Autoplay Indicator) */}
            <div className="w-24 h-0.5 bg-slate-200 rounded-full overflow-hidden mr-[52px]">
              <div 
                key={currentIndex}
                className="h-full bg-[#f97316] rounded-full"
                style={{
                  animation: `fill-progress 5.5s linear forwards ${isHovered ? 'paused' : 'running'}`
                }}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
