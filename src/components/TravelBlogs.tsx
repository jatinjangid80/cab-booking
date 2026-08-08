import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { Calendar, Clock, ArrowRight, X, User } from 'lucide-react';
import { BlogPost } from '../types';

export const TravelBlogs: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 sm:py-24 bg-[#f8fafc] text-[#111827] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#f97316] font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 inline-block">
            Road Trip Stories & Guides
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Latest Travel Articles
          </h2>
          <p className="text-base text-slate-500 font-medium">
            Expert highway itineraries, outstation travel tips, and route guides curated for Indian road trips.
          </p>
        </div>
      </div>

      {/* Blog Carousel - Full Width */}
        <div className="relative overflow-x-auto sm:overflow-hidden group pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          <div className="flex gap-8 w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {[...BLOG_POSTS, ...BLOG_POSTS].map((post, idx) => (
              <div
                key={`${post.id}-${idx}`}
                className="w-[85vw] sm:w-[380px] shrink-0 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 overflow-hidden flex flex-col justify-between group/card"
              >
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#f97316] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#111827] group-hover/card:text-[#f97316] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="pt-3 border-t border-slate-100 text-[#f97316] font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5 relative shadow-2xl border border-slate-100 text-[#111827]">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-orange-50 text-[#f97316] text-xs font-bold border border-orange-100 inline-block">
              {selectedPost.category}
            </span>

            <h2 className="text-2xl font-extrabold text-[#111827] tracking-tight leading-snug pr-8">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-4">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <User className="w-3.5 h-3.5 text-[#f97316]" /> {selectedPost.author}
              </span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-56 object-cover rounded-2xl border border-slate-100"
            />

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {selectedPost.content}
            </p>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 rounded-full bg-[#111827] hover:bg-slate-800 text-white font-bold text-xs transition-all cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
