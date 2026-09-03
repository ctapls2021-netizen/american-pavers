'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { companyData } from '@/data/company';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultZip?: string;
}

export default function LeadFormModal({
  isOpen,
  onClose,
  defaultService = 'Patio Pavers',
  defaultZip = '',
}: LeadFormModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(defaultService);
  const [zip, setZip] = useState(defaultZip);
  const [timeframe, setTimeframe] = useState('Within 30 days');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const projectOptions = [
    'Patio Pavers & Living Area',
    'Driveway Interlocking Pavers',
    'Pool Deck Pavers & Coping',
    'Synthetic Turf & Putting Green',
    'Outdoor Kitchen & BBQ Island',
    'Composite Deck & Louvered Pergola',
    'Retaining Walls & Steps',
    'Full Yard Transformation',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          zipCode: zip,
          serviceInterest: service,
          timeframe,
          notes,
          sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit estimate request.');
      }

      setSubmitted(true);
    } catch {
      setErrorMsg('Something went wrong. Please call us directly at ' + companyData.formattedPhone);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-stone-100 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="inline-flex items-center gap-1.5 bg-amber-600/90 text-white px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            Zero-Obligation Estimate
          </div>
          <h3 className="text-xl font-bold tracking-tight">
            Schedule Your Free In-Home 3D Design Consultation
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Includes custom 3D model, material samples, and guaranteed itemized pricing.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">
                Consultation Request Received!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold">{firstName}</span>. A Senior Outdoor Living Design Specialist will call you at <span className="font-semibold text-stone-900">{phone}</span> within 15 minutes to confirm your appointment time and discuss your 3D design concepts.
              </p>
              <div className="pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold px-6 py-2.5 rounded-lg"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Select Project Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {projectOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setService(opt)}
                          className={`p-2.5 rounded-lg text-left text-xs font-semibold border transition-all cursor-pointer ${
                            service === opt
                              ? 'border-amber-700 bg-amber-50/80 text-amber-900 ring-1 ring-amber-700'
                              : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        required
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder="e.g. 90210"
                        className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Target Timeframe
                      </label>
                      <select
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden bg-white"
                      >
                        <option>Immediately (Within 2 wks)</option>
                        <option>Within 30 days</option>
                        <option>1 to 3 months</option>
                        <option>Planning / Budgeting</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!zip) {
                        alert('Please enter your ZIP Code to verify coverage.');
                        return;
                      }
                      setStep(2);
                    }}
                    className="w-full mt-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm py-3 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Continue to Contact Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3 animate-in fade-in">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Smith"
                        className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Phone Number (For Appointment Confirmation) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      Project Notes or Specific Ideas (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Need old concrete removed, thinking about circular patio with a fire pit..."
                      className="w-full border border-stone-300 rounded-lg px-3 py-1.5 text-xs focus:ring-2 focus:ring-amber-600 focus:border-amber-600 outline-hidden"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 border border-stone-300 hover:bg-stone-50 text-stone-700 font-bold text-xs py-3 rounded-lg"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 bg-amber-700 hover:bg-amber-800 disabled:opacity-75 text-white font-bold text-sm py-3 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-amber-200" />
                          <span>Get My Guaranteed Quote</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-stone-400 text-center flex items-center justify-center gap-1 mt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Your privacy is protected. No spam. Instant 25-Year warranty guarantee.
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
