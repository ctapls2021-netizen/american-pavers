import React from 'react';
import { Compass, FileText, Hammer, ShieldCheck } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      icon: Compass,
      title: 'Complimentary In-Home 3D Design',
      description: 'Your design specialist walks your property, listens to your lifestyle needs, and renders a photorealistic 3D model of your new patio or driveway with actual stone textures.',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Permits & HOA Approvals Handled',
      description: 'We handle all site engineering, city permits, underground utility locating (811), and submit required architectural packages directly to your HOA.',
    },
    {
      number: '03',
      icon: Hammer,
      title: 'Master Craftsmanship Installation',
      description: 'Our in-house ICPI-certified crews excavate the proper base depth, install heavy-duty edge restraints, and compact polymeric locking sand to prevent weeds.',
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: '25-Year Warranty Activation',
      description: 'Your project manager performs a multi-point quality audit, thoroughly pressure cleans the site, and activates your transferable 25-Year Workmanship Warranty.',
    },
  ];

  return (
    <section className="py-20 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
            The Turnkey Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3">
            From Blank Canvas to Backyard Resort in 4 Steps
          </h2>
          <p className="text-stone-600 text-base mt-2">
            One dedicated company. One dedicated project manager. Zero hassle or subcontractor chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative flex flex-col justify-between group hover:border-amber-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-stone-200 group-hover:text-amber-200 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
