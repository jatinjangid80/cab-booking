import React, { useState } from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white text-[#111827] relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#E53935] font-bold text-xs uppercase tracking-wider bg-red-50 px-3.5 py-1 rounded-full border border-red-100 inline-block">
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
        <div className="max-w-4xl mx-auto bg-[#f8fafc] rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 relative">
          
          <Quote className="w-16 h-16 text-red-100/80 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-[#111827]">5.0 / 5.0 Rating</span>
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
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#E53935] shadow-md"
                />
                <div>
                  <h4 className="text-base font-bold text-[#111827]">{current.author}</h4>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
                    {current.location} • Verified Traveler
                  </div>
                </div>
              </div>

              {/* Route Pill */}
              <div className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#111827] text-xs font-bold shadow-2xs">
                Route: {current.tripRoute}
              </div>

            </div>

          </div>

          {/* Next / Prev Controls */}
          <div className="flex items-center justify-end gap-2 mt-8 pt-4 border-t border-slate-200/60">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-white hover:bg-[#E53935] hover:text-white text-[#111827] shadow-2xs transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-slate-400 px-2">
              {currentIndex + 1} / {REVIEWS.length}
            </span>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white hover:bg-[#E53935] hover:text-white text-[#111827] shadow-2xs transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
