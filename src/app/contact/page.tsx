"use client";
import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollingTicker from "@/components/ScrollingTicker";
import { EMAIL, PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    subject: "Schedule School Demo",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const subjects = [
    "Schedule School Demo",
    "Parent App Support",
    "Hardware & RFID Inquiry",
    "Fleet Management Partnership",
    "Billing & Contract Question",
    "Other Inquiry",
  ];

  const faqs = [
    {
      q: "How fast can 8AM be deployed for a new school?",
      a: "Our plug-and-play GPS and RFID hardware can be installed across an entire fleet within 48 to 72 hours. We configure routes, test geofences, and provide hands-on training for drivers and coordinators before going live.",
    },
    {
      q: "Is there any cost for parents to download and track on the app?",
      a: "No. When your child's school partners with 8AM, the mobile tracking app is completely free for all enrolled parents and guardians with no hidden in-app purchases or subscriptions.",
    },
    {
      q: "What happens if a child forgets or misplaces their RFID pass?",
      a: "The bus attendant interface allows instant manual roll-call check-in with one tap on the tablet. The school admin can issue a replacement card from the dashboard.",
    },
    {
      q: "What are your emergency response hours for active transit?",
      a: "Route deviations, panic-button presses and major delays trigger instant alerts to the school transport team. For anything urgent, WhatsApp us and we will respond as quickly as we can.",
    },
  ];

  // Sends the enquiry to the 8AM WhatsApp with everything pre-filled
  const buildMessage = () =>
    [
      `Hi 8AM team, I'd like to get in touch.`,
      ``,
      `*Subject:* ${formData.subject}`,
      `*Name:* ${formData.name}`,
      formData.institution && `*School / Organisation:* ${formData.institution}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      ``,
      formData.message,
    ]
      .filter((l): l is string => typeof l === "string" && l !== "")
      .join("\n");

  const [waUrl, setWaUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const url = whatsappLink(buildMessage());
    setWaUrl(url);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url; // popup blocked (common on mobile): open in same tab
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      institution: "",
      subject: "Schedule School Demo",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#222222]">
      <ScrollingTicker />
      <StickyHeader />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-5 md:px-8 overflow-hidden border-b border-[#E8E2D3]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M-50 180 Q 250 40 550 200 T 1150 160" fill="none" stroke="#E0B100" strokeWidth="1.5" strokeDasharray="10 10" />
            <path d="M-50 290 Q 350 140 750 310 T 1350 210" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-[#E0B100]/10 border border-[#E0B100]/30 px-4 py-1.5 rounded-full mb-6">
            <MessageCircle size={14} className="text-[#E0B100]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#222222]">
              Direct Contact & Support Desk
            </span>
          </div>

          <h1 className="display-lg font-black tracking-tighter text-[#222222] mb-6 leading-[0.95]">
            Connect with <span className="headline-italic text-[#E0B100] font-normal">8AM</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about institutional rollout, driver telemetry, or parent app support? Our team is happy to help, and WhatsApp is the fastest way to reach us.
          </p>
        </div>
      </section>

      {/* MAIN TWO-COLUMN CONTACT SECTION */}
      <section className="py-16 md:py-24 px-5 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] mb-2 block">
                Direct Channels
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#222222] tracking-tight leading-tight">
                Always Reachable, <br />
                <span className="headline-italic text-[#E0B100] font-normal">Every Morning.</span>
              </h2>
              <p className="text-sm text-[#666666] mt-3 font-medium leading-relaxed">
                Whether you need immediate assistance with an active bus route or wish to schedule a physical demo on your campus, reach out through your preferred medium.
              </p>
            </div>

            {/* DIRECT CONTACT CARDS */}
            <div className="space-y-4 pt-2">
              
              {/* WHATSAPP CARD */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start space-x-4 p-5 bg-white border border-[#E8E2D3] rounded-3xl hover:border-[#25D366] transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#25D366]">Fastest Response</span>
                    <span className="text-xs text-[#25D366] font-bold group-hover:translate-x-1 transition-transform">Chat Now →</span>
                  </div>
                  <h3 className="text-sm font-black text-[#222222] truncate">WhatsApp Priority Desk</h3>
                  <p className="text-xs text-[#555555] font-semibold mt-0.5">{WHATSAPP_DISPLAY}</p>
                  <p className="text-[11px] text-[#888888] mt-1 font-medium">Quickest way to reach us</p>
                </div>
              </a>

              {/* PHONE CALL CARD */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex items-start space-x-4 p-5 bg-white border border-[#E8E2D3] rounded-3xl hover:border-[#E0B100] transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#E0B100]">Direct Line</span>
                    <span className="text-xs text-[#E0B100] font-bold group-hover:translate-x-1 transition-transform">Call →</span>
                  </div>
                  <h3 className="text-sm font-black text-[#222222] truncate">Direct Helpline</h3>
                  <p className="text-xs text-[#555555] font-semibold mt-0.5">{PHONE_DISPLAY}</p>
                  <p className="text-[11px] text-[#888888] mt-1 font-medium">Monday – Saturday: 8:00 AM – 6:00 PM IST</p>
                </div>
              </a>

              {/* EMAIL CARD */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start space-x-4 p-5 bg-white border border-[#E8E2D3] rounded-3xl hover:border-[#E0B100] transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#E0B100]">Official Desk</span>
                    <span className="text-xs text-[#E0B100] font-bold group-hover:translate-x-1 transition-transform">Mail →</span>
                  </div>
                  <h3 className="text-sm font-black text-[#222222] truncate">Official Correspondence</h3>
                  <p className="text-xs text-[#555555] font-semibold mt-0.5">{EMAIL}</p>
                  <p className="text-[11px] text-[#888888] mt-1 font-medium">Formal proposals, billing, and school tenders</p>
                </div>
              </a>

              {/* ADDRESS CARD */}
              <div className="p-5 bg-white border border-[#E8E2D3] rounded-3xl shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#222222]/5 flex items-center justify-center text-[#222222] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#888888]">Headquarters</span>
                    <h3 className="text-sm font-black text-[#222222] mt-0.5">8AM Mobility Intelligence</h3>
                    <p className="text-xs text-[#555555] font-medium mt-1 leading-relaxed">
                      Rajahmundry, Andhra Pradesh - 533104, India
                    </p>
                    <div className="mt-3 flex items-center space-x-2 text-[11px] text-[#E0B100] font-bold">
                      <Clock size={12} />
                      <span>Transit Hub Hours: Mon - Sat (8 AM - 6 PM IST)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E8E2D3] rounded-3xl md:rounded-[36px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <m.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="mb-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] block mb-1">
                        Send a Message
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-[#222222] tracking-tight">
                        How Can We Assist You?
                      </h3>
                      <p className="text-xs md:text-sm text-[#666666] font-medium mt-1">
                        Fill out the details below and an 8AM mobility engineer will get in touch shortly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                      {/* NAME & EMAIL */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#444444] mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Dr. Rajesh Verma"
                            className="w-full px-4 py-3 bg-[#F8F7F2] border border-[#E8E2D3] rounded-2xl text-xs md:text-sm text-[#222222] placeholder:text-[#999999] focus:outline-none focus:border-[#E0B100] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#444444] mb-1.5">
                            Official / Personal Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. principal@school.edu"
                            className="w-full px-4 py-3 bg-[#F8F7F2] border border-[#E8E2D3] rounded-2xl text-xs md:text-sm text-[#222222] placeholder:text-[#999999] focus:outline-none focus:border-[#E0B100] transition-colors"
                          />
                        </div>
                      </div>

                      {/* PHONE & INSTITUTION */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#444444] mb-1.5">
                            Phone / Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +91 98765 43210"
                            className="w-full px-4 py-3 bg-[#F8F7F2] border border-[#E8E2D3] rounded-2xl text-xs md:text-sm text-[#222222] placeholder:text-[#999999] focus:outline-none focus:border-[#E0B100] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#444444] mb-1.5">
                            School or Organization Name
                          </label>
                          <input
                            type="text"
                            value={formData.institution}
                            onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                            placeholder="e.g. your school name"
                            className="w-full px-4 py-3 bg-[#F8F7F2] border border-[#E8E2D3] rounded-2xl text-xs md:text-sm text-[#222222] placeholder:text-[#999999] focus:outline-none focus:border-[#E0B100] transition-colors"
                          />
                        </div>
                      </div>

                      {/* SUBJECT SELECTION */}
                      <div>
                        <label className="block text-xs font-bold text-[#444444] mb-1.5">
                          Inquiry Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F8F7F2] border border-[#E8E2D3] rounded-2xl text-xs md:text-sm text-[#222222] focus:outline-none focus:border-[#E0B100] transition-colors cursor-pointer"
                        >
                          {subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <label className="block text-xs font-bold text-[#444444] mb-1.5">
                          Your Message / Requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your fleet size, student capacity, or specific questions..."
                          className="w-full px-4 py-3 bg-[#F8F7F2] border border-[#E8E2D3] rounded-2xl text-xs md:text-sm text-[#222222] placeholder:text-[#999999] focus:outline-none focus:border-[#E0B100] transition-colors resize-none"
                        />
                      </div>

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#E0B100] hover:bg-[#C99700] text-[#222222] font-black uppercase text-xs tracking-widest rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#222222] border-t-transparent rounded-full animate-spin" />
                            <span>Opening WhatsApp...</span>
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            <span>Send via WhatsApp</span>
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-[#777777] text-center font-medium">
                        This opens WhatsApp with your message ready to send. By sending, you agree to our <Link href="/privacy" className="text-[#7A5F00] underline font-bold">Privacy Policy</Link>.
                      </p>

                    </form>
                  </m.div>
                ) : (
                  <m.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E0B100]/20 text-[#E0B100] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A5F00] block mb-2">
                      Almost done
                    </span>
                    <h3 className="text-3xl font-black text-[#222222] tracking-tight mb-2">
                      Thank you, {formData.name || "there"}!
                    </h3>
                    <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed mb-6 font-medium">
                      WhatsApp has opened with your message filled in. <strong className="text-[#222222]">Press send in WhatsApp</strong> and our team will reply as soon as possible.
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-[#25D366] text-white rounded-full font-black text-xs uppercase tracking-wider hover:bg-[#128C7E] transition-colors"
                    >
                      <MessageCircle size={14} /> WhatsApp didn&apos;t open? Tap here
                    </a>

                    <div className="bg-[#F8F7F2] p-4 rounded-2xl border border-[#E8E2D3] max-w-sm mx-auto mb-8 text-xs text-[#555555] space-y-1">
                      <p><strong>Subject:</strong> {formData.subject}</p>
                      <p><strong>Contact Email:</strong> {formData.email}</p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-8 py-3 bg-[#222222] text-white hover:bg-black font-black uppercase text-xs tracking-widest rounded-full transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </m.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E8E2D3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#222222] tracking-tight">
              Frequently Asked Inquiries
            </h2>
            <p className="text-xs md:text-sm text-[#666666] mt-2 font-medium">
              Immediate clarity on rollout timelines, parent access, and safety equipment.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E8E2D3] rounded-3xl overflow-hidden transition-all bg-[#F8F7F2]/40"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-black text-sm md:text-base text-[#222222] cursor-pointer hover:text-[#E0B100] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#E0B100] shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-[#555555] leading-relaxed border-t border-[#E8E2D3]/60 pt-4 font-medium">
                        {faq.a}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-[#F8F7F2] rounded-3xl border border-[#E8E2D3]">
            <p className="text-xs text-[#555555] font-semibold mb-3">
              Need immediate urgent assistance regarding a student currently on a school bus?
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-black text-[#25D366] hover:underline"
            >
              <MessageCircle size={14} />
              <span>Message us on WhatsApp ({WHATSAPP_DISPLAY})</span>
              <ArrowRight size={12} />
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
