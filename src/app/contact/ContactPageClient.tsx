'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BottomCtaBanner from '@/components/sections/BottomCtaBanner';
import TestimonialsGrid from '@/components/sections/TestimonialsGrid';
import FaqAccordion from '@/components/sections/FaqAccordion';
import LeadFormModal from '@/components/ui/LeadFormModal';
import { companyData } from '@/data/company';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

const contactFaqs = [
  {
    question: 'Is the in-home 3D design consultation completely free?',
    answer:
      'Yes, 100% free with no obligation. One of our senior hardscape architects will visit your home, measure your yard with laser tools, bring physical stone samples for you to see in natural sunlight, and create a realistic 3D architectural rendering of your project.',
  },
  {
    question: 'How quickly can an estimator visit my home?',
    answer:
      'We typically schedule in-home consultations within 24 to 48 hours across Los Angeles, Orange County, the Inland Empire, San Diego, and Palm Springs. Weekend appointments are available upon request.',
  },
  {
    question: 'Do you handle city permits and HOA approvals?',
    answer:
      'Yes. Our team prepares all necessary engineering drawings, plot plans, and documentation required by your city building department and homeowner association (HOA). We handle the process from submission through final inspection.',
  },
  {
    question: 'What financing options are available for pavers and turf?',
    answer:
      'We partner with top home improvement lenders to offer 0% APR for up to 18 months or low fixed monthly payment plans extending up to 12 years. You can review pre-qualification options with soft credit pulls during your consultation.',
  },
  {
    question: 'What warranties are provided on materials and installation?',
    answer:
      'Every paver and turf project is backed by our comprehensive written 25-year structural workmanship warranty covering base settling and stone integrity, alongside manufacturer lifetime warranties against chipping and color fading.',
  },
];

interface ContactPageClientProps {
  contactData?: any;
}

export default function ContactPageClient({ contactData }: ContactPageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Driveway Pavers',
    city: '',
    zipCode: '',
    timeline: 'Within 30 Days',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          address: formData.city ? `${formData.city}, CA ${formData.zipCode}`.trim() : undefined,
          timeline: formData.timeline,
          notes: formData.message,
          source: 'contact-page-quote-form',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main className="flex-1">
        {/* ==================================================================== */}
        {/* 1. HERO BANNER                                                       */}
        {/* ==================================================================== */}
        <section className="relative w-full h-[50vh] min-h-[380px] max-h-[500px] overflow-hidden bg-stone-950 text-white flex flex-col justify-between">
          {/* Static Background Image with zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/assets/banners/banner-driveway.webp"
              alt="Contact American Pavers & Turf"
              className="w-full h-full object-cover object-center scale-105"
              loading="eager"
            />
          </div>

          {/* Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/85 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,15,18,0.7)_100%)] pointer-events-none z-10" />

          {/* Top Breadcrumbs Bar */}
          <div className="relative z-20 bg-stone-950/60 border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-stone-300 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-bold text-[#42e078]">Contact Us</span>
            </div>
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto my-auto">
            <span className="text-[#42e078] font-bold text-xs uppercase tracking-widest mb-2 drop-shadow">
              Direct Contractor Communication
            </span>

            <h1
              className="text-white font-extrabold tracking-tight drop-shadow-2xl max-w-4xl font-serif-brand"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Get in Touch with California’s Hardscape Specialists
            </h1>

            <p className="mt-3 text-stone-200 font-medium text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md leading-relaxed">
              Have questions about your project, city permits, stone options, or pricing? Speak directly with our senior California project estimators or request your free in-home 3D consultation.
            </p>

            {/* Action Buttons in Radio Cero */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl">
              <a
                href="#quote-form"
                className="w-full sm:w-auto px-7 py-3.5 rounded-none bg-[#019934] hover:bg-[#01802b] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Schedule Free 3D Estimate</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={`tel:${companyData.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-none bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#42e078] shrink-0" />
                <span className="whitespace-nowrap">Call {companyData.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="relative z-20 w-full h-1 bg-gradient-to-r from-transparent via-[#019934] to-transparent opacity-80" />
        </section>

        {/* ==================================================================== */}
        {/* 2. SECTION 1: DIRECT INFO + IN-HOME 3D ESTIMATE REQUEST FORM         */}
        {/* ==================================================================== */}
        <section id="quote-form" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header with Green Subtitle */}
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block">
                Direct Contact &amp; Estimates
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A292C] tracking-tight font-serif-brand mt-2">
                Speak Directly with Our Estimating Team
              </h2>
              <p className="text-base text-stone-600 mt-2 leading-relaxed">
                Our team is available Monday through Saturday to answer questions, check site feasibility, and coordinate on-site 3D consultations across Southern California.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Contact Details & Licensing */}
              <div className="lg:col-span-5 space-y-6">
                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Phone Card with Solid Permanent Green Circle */}
                  <div className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-none shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#019934] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Direct Phone Line (Call or Text)
                      </div>
                      <a
                        href={`tel:${companyData.phone}`}
                        className="text-lg font-bold text-[#1A292C] hover:text-[#019934] transition-colors block mt-0.5"
                      >
                        {companyData.formattedPhone}
                      </a>
                      <span className="text-xs text-stone-500">Toll-free California line • Live contractor support</span>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-none shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#ebf9ee] text-[#019934] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Email Estimating Department
                      </div>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-base font-bold text-[#1A292C] hover:text-[#019934] transition-colors block mt-0.5"
                      >
                        {companyData.email}
                      </a>
                      <span className="text-xs text-stone-500">Responses within 2 business hours</span>
                    </div>
                  </div>

                  {/* Hours Card */}
                  <div className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-none shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#ebf9ee] text-[#019934] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Hours of Operation
                      </div>
                      <div className="text-sm font-bold text-[#1A292C] mt-0.5">
                        Mon – Sat: 7:00 AM – 7:00 PM
                      </div>
                      <span className="text-xs text-stone-500">Sunday: Closed for field operations (Emergency calls answered)</span>
                    </div>
                  </div>
                </div>

                {/* Regional Hubs List */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Regional Dispatch Hubs
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {locationsData.slice(0, 4).map((loc) => (
                      <div
                        key={loc.slug}
                        className="p-3 bg-white border border-stone-200 rounded-none flex items-center gap-2"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#019934] shrink-0" />
                        <div>
                          <div className="font-bold text-[#1A292C]">{loc.name}</div>
                          <div className="text-[11px] text-stone-500">{loc.county}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Conversion 3D Estimate Request Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-10 border border-stone-200 shadow-xl rounded-none">
                  {submitted ? (
                    <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                      <div className="w-16 h-16 bg-[#ebf9ee] text-[#019934] rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A292C] font-serif-brand">
                        Thank You! Your Request Has Been Received.
                      </h3>
                      <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                        One of our senior California estimating specialists will call you within 2 business hours to confirm your project details and schedule your complimentary 3D site design.
                      </p>
                      <div className="pt-4">
                        <a
                          href={`tel:${companyData.phone}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#019934] text-white font-bold text-sm rounded-none hover:bg-[#01802b] transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Need Immediate Help? Call {companyData.formattedPhone}</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="border-b border-stone-200 pb-5 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-1">
                          Free In-Home Design Consultation
                        </span>
                        <h3 className="text-2xl font-extrabold text-[#1A292C] font-serif-brand">
                          Request Your 3D Consultation &amp; Price Lock
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1">
                          Fill out the form below. We will bring physical paver samples, measure your space, and provide an exact, itemized 3D quote.
                        </p>
                      </div>

                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                            First Name <span className="text-[#019934]">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                            Last Name <span className="text-[#019934]">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Smith"
                            className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                            Phone Number <span className="text-[#019934]">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 000-0000"
                            className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                            Email Address <span className="text-[#019934]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Selector with All 6 Core Services */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                          Primary Service Interested In <span className="text-[#019934]">*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors cursor-pointer"
                        >
                          {servicesData.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Complete Backyard Remodel">
                            Complete Backyard Remodel (Multiple Services)
                          </option>
                        </select>
                      </div>

                      {/* City & Zip Code */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                            City in California <span className="text-[#019934]">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="e.g. Pasadena, Newport Beach, Irvine"
                            className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                            Zip Code <span className="text-[#019934]">*</span>
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            required
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="90210"
                            className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Project Timeline */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                          Desired Project Start Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-3.5 py-3 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors cursor-pointer"
                        >
                          <option value="Immediately (Within 1-2 Weeks)">Immediately (Within 1-2 Weeks)</option>
                          <option value="Within 30 Days">Within 30 Days</option>
                          <option value="1 to 3 Months">1 to 3 Months</option>
                          <option value="Planning & Budgeting Stage">Planning & Budgeting Stage</option>
                        </select>
                      </div>

                      {/* Project Notes */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                          Project Description or Special Requests (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your space (approximate square footage, replacing existing concrete, HOA requirements, etc.)"
                          className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-none focus:bg-white focus:outline-hidden focus:border-[#019934] transition-colors"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#019934] hover:bg-[#01802b] text-white font-extrabold text-sm sm:text-base py-4 rounded-none shadow-md hover:shadow-lg transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <span>Schedule Free In-Home 3D Estimate</span>
                            <ChevronRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      {/* Trust Micro-Copy */}
                      <div className="text-[11px] text-stone-500 text-center leading-normal pt-1">
                        🔒 Your information is confidential and will never be shared. We respect your privacy and don’t spam.
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 3. SECTION 2: WHAT HAPPENS AFTER YOU REACH OUT? (3-STEP PROCESS)     */}
        {/* ==================================================================== */}
        <section className="py-20 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#019934] block mb-2">
                Clear &amp; Transparent Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A292C] font-serif-brand">
                What Happens After You Contact Us?
              </h2>
              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                We make transforming your outdoor space seamless, professional, and completely transparent from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="p-8 bg-stone-50 border border-stone-200 rounded-none relative">
                <div className="w-12 h-12 bg-[#1A292C] text-white font-extrabold text-lg flex items-center justify-center rounded-none mb-6 font-serif-brand">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#1A292C] mb-2">
                  15-Min Discovery Call
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  We review your project goals, approximate dimensions, and timeline. We answer preliminary pricing questions and assign a senior local hardscape architect to your project.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-8 bg-stone-50 border border-stone-200 rounded-none relative">
                <div className="w-12 h-12 bg-[#019934] text-white font-extrabold text-lg flex items-center justify-center rounded-none mb-6 font-serif-brand">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#1A292C] mb-2">
                  In-Home 3D Site Survey
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Our specialist visits your property with laser measurement tools and physical samples of pavers, coping, and synthetic turf. We render a custom 3D model of your exact yard.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-8 bg-stone-50 border border-stone-200 rounded-none relative">
                <div className="w-12 h-12 bg-[#1A292C] text-white font-extrabold text-lg flex items-center justify-center rounded-none mb-6 font-serif-brand">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#1A292C] mb-2">
                  Guaranteed Written Price Lock
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  You receive an exact line-item quote with zero hidden change orders. We review 0% financing options, file city permits, and lock in your project start date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 4. HOMEOWNER TESTIMONIALS                                            */}
        {/* ==================================================================== */}
        <TestimonialsGrid />

        {/* ==================================================================== */}
        {/* 5. FREQUENTLY ASKED QUESTIONS ABOUT ESTIMATES                         */}
        {/* ==================================================================== */}
        <FaqAccordion
          faqs={contactFaqs}
          tag="Homeowner Questions"
          title="Consultation & Estimate FAQs"
          subtitle="Straightforward answers to the most common questions before scheduling your complimentary in-home 3D consultation."
          imageSrc="/assets/faq-patio.webp"
        />

        {/* ==================================================================== */}
        {/* 6. BOTTOM CTA BANNER                                                 */}
        {/* ==================================================================== */}
        <BottomCtaBanner
          onOpenModal={() => setModalOpen(true)}
          title="Ready to Build Your Custom Hardscape Sanctuary?"
          subtitle="Speak with our California design team today. Call direct or book your free in-home 3D consultation with American Pavers & Turf."
        />
      </main>

      <Footer />

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Driveway Pavers"
      />
    </div>
  );
}
