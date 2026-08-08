import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Booking' | 'Cancellation' | 'Payment' | 'Driver' | 'Safety'>('All');
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const categories = ['All', 'Booking', 'Cancellation', 'Payment', 'Driver', 'Safety'] as const;

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white text-[#111827] relative border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#f97316] font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 inline-block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Find quick answers to common questions about outstation rates, toll charges, cancellation, and driver details.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/20'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#f8fafc] rounded-2xl border border-slate-100 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#111827] hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <HelpCircle className="w-5 h-5 text-[#f97316] shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-white text-slate-500 transition-transform duration-200 shadow-2xs ${isOpen ? 'rotate-180 bg-orange-50 text-[#f97316]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
