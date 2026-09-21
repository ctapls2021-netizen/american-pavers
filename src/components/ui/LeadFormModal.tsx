'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ChevronRight, Loader2 } from 'lucide-react';
import { companyData } from '@/data/company';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultZip?: string;
}

const PROJECT_OPTIONS = [
  'Driveway Pavers',
  'Patio Pavers',
  'Pool Deck Pavers',
  'Synthetic Turf',
  'Outdoor Kitchens & Fire Pits',
  'Decks & Pergolas',
  'Complete Outdoor Living',
];

export default function LeadFormModal({
  isOpen,
  onClose,
  defaultService = 'Pavers',
  defaultZip = 'California',
}: LeadFormModalProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Pavers');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync initial service with props
  useEffect(() => {
    if (defaultService) {
      const match = PROJECT_OPTIONS.find(
        (opt) =>
          opt.toLowerCase() === defaultService.toLowerCase() ||
          opt.toLowerCase().includes(defaultService.toLowerCase()) ||
          defaultService.toLowerCase().includes(opt.toLowerCase())
      );
      setProjectType(match || defaultService);
    }
  }, [defaultService, isOpen]);

  // Reset form when modal closes/opens
  const handleClose = () => {
    onClose();
    if (submitted) {
      setSubmitted(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setNotes('');
      setErrorMsg('');
    }
  };

  if (!isOpen) return null;

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
          email,
          phone,
          serviceInterest: projectType,
          notes,
          zipCode: defaultZip || 'California',
          timeframe: 'Immediate',
          sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit estimate request.');
      }

      setSubmitted(true);
    } catch {
      setErrorMsg(
        `Something went wrong. Please call us directly at ${companyData.formattedPhone}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-none shadow-2xl overflow-hidden border border-stone-200 relative">
        {/* Header */}
        <div className="bg-[#1A292C] text-white p-6 relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors p-1 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-xs font-bold uppercase tracking-widest text-[#42e078] mb-1.5">
            Zero-Obligation Estimate
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-serif-brand">
            Schedule Your Free In-Home 3D Design Consultation
          </h3>
          <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
            Includes custom 3D model, material samples, and guaranteed itemized pricing.
          </p>
        </div>

        {/* Modal Form Body: Exact fields matching the CTA banner form */}
        <div className="p-6 sm:p-8 bg-[#edf4ee]">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#019934]/15 text-[#019934] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#1A292C] font-serif-brand">
                Consultation Request Received!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#1A292C]">{firstName}</span>. One of our senior hardscape architects will contact you shortly at <span className="font-bold text-[#1A292C]">{phone}</span> to confirm your free 3D design consultation.
              </p>
              <div className="pt-4 border-t border-stone-200/80">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-[#1A292C] hover:bg-[#019934] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none transition-colors cursor-pointer mx-auto"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Row 1: First name & Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-first-name" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                    First name
                  </label>
                  <input
                    id="modal-first-name"
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="modal-last-name" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                    Last name
                  </label>
                  <input
                    id="modal-last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Smith"
                    className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                    Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                    Phone
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Project type */}
              <div>
                <label htmlFor="modal-project-type" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                  Project type
                </label>
                <select
                  id="modal-project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all"
                >
                  {PROJECT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Tell us about your project */}
              <div>
                <label htmlFor="modal-notes" className="block text-xs sm:text-sm font-semibold text-[#1A292C] mb-1.5">
                  Tell us about your project
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Approximate dimensions, current conditions, or design ideas..."
                  className="w-full bg-[#f8faf8] border border-stone-300 rounded-none px-3.5 py-2.5 text-sm text-[#1A292C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#019934] focus:border-[#019934] transition-all resize-y"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-none bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#019934] hover:bg-[#01802b] disabled:opacity-75 text-white font-bold text-sm sm:text-base py-3.5 rounded-none shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule Free 3D Design</span>
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Guarantee / Privacy badge */}
              <p className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#019934]" />
                <span>Your privacy is protected. No spam. 25-Year warranty included.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
