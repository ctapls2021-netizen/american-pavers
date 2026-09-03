import React from 'react';
import { testimonialsData } from '@/data/testimonials';
import { companyData } from '@/data/company';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function TestimonialsGrid() {
  return (
    <section className="py-20 bg-stone-100 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
            Homeowner Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3">
            Trusted by Over {companyData.projectsCompleted.toLocaleString()}+ Homeowners
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3 text-amber-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-800">
              {companyData.averageRating} Rating on Google & Yelp
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-stone-400">
                    {t.date}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-amber-200 mb-2 opacity-60" />

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-stone-900 flex items-center gap-1.5">
                    <span>{t.author}</span>
                    {t.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-xs text-stone-500">
                    {t.city}, {t.state}
                  </div>
                </div>

                <span className="text-xs font-semibold bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
