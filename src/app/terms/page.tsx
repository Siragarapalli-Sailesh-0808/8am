"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { 
  AlertTriangle, 
  CheckCircle2, 
  Scale, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  ChevronRight,
  ShieldAlert,
  CreditCard,
  FileText,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("definitions");

  const sections = [
    { id: "definitions", title: "1. Definitions" },
    { id: "service", title: "2. The Service" },
    { id: "safety-notice", title: "3. Important Safety Notice" },
    { id: "eligibility", title: "4. Eligibility & Your Account" },
    { id: "role-of-school", title: "5. Role of the School" },
    { id: "rfid-cards", title: "6. RFID Cards" },
    { id: "responsibilities", title: "7. Your Responsibilities" },
    { id: "fees", title: "8. Fees (Free for Parents)" },
    { id: "acceptable-use", title: "9. Acceptable Use" },
    { id: "privacy", title: "10. Privacy" },
    { id: "intellectual-property", title: "11. Intellectual Property" },
    { id: "availability", title: "12. Availability & Changes" },
    { id: "disclaimer", title: "13. Disclaimer" },
    { id: "liability", title: "14. Limitation of Liability" },
    { id: "indemnity", title: "15. Indemnity" },
    { id: "termination", title: "16. Suspension & Termination" },
    { id: "changes", title: "17. Changes to these Terms" },
    { id: "governing-law", title: "18. Governing Law & Disputes" },
    { id: "grievance", title: "19. Grievance Officer" },
    { id: "general", title: "20. General" },
    { id: "contact", title: "21. Contact" },
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#222222]">
      <ScrollingTicker />
      <StickyHeader />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden border-b border-[#E8E2D3]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 150 Q 300 50 600 250 T 1200 150" fill="none" stroke="#E0B100" strokeWidth="1.5" strokeDasharray="8 8" />
            <path d="M-100 280 Q 200 120 700 320 T 1300 220" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="12 12" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#E0B100]/10 border border-[#E0B100]/30 px-4 py-1.5 rounded-full mb-6">
            <Scale size={14} className="text-[#E0B100]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#222222]">
              Legal Terms of Service
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#222222] mb-6 leading-[0.95]">
            Terms and Conditions <span className="headline-italic text-[#E0B100] font-normal">of Use</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed mb-6 font-medium">
            These Terms and Conditions form a legally binding agreement between you and <strong>8AM Technologies Private Limited</strong> governing the use of the 8 AM mobile application, website, RFID cards, and transit notification services.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8E2D3] text-xs text-[#666666] font-semibold">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>Effective Date: <strong className="text-[#222222]">29 September 2026</strong></span>
              <span>•</span>
              <span>Last Updated: <strong className="text-[#222222]">29 September 2026</strong></span>
              <span>•</span>
              <span>Entity: <strong className="text-[#222222]">8AM Technologies Private Limited</strong></span>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#E8E2D3] text-[#222222] hover:border-[#E0B100] hover:text-[#E0B100] transition-colors shadow-sm cursor-pointer"
            >
              <Printer size={14} />
              <span>Print Terms</span>
            </button>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHT CARDS */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <CreditCard size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">100% Free for Parents</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              8 AM does not charge or collect any fees from parents. The service is fully sponsored and contracted by your child&apos;s enrolled school.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <ShieldAlert size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Information & Alert Tool</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              8 AM provides real-time tap alerts. It does not replace the active care, physical custody, or adult supervision of parents, schools, and transport operators.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <FileText size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Child Privacy First</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              Built in strict adherence with India&apos;s DPDP Act, 2023. Zero ads, zero commercial profiling, and minimal data collection.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT WITH STICKY SIDEBAR */}
      <section className="py-8 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 bg-white border border-[#E8E2D3] rounded-3xl p-6 shadow-sm max-h-[calc(100vh-140px)] overflow-y-auto">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#E0B100] mb-4">
                Document Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setActiveSection(sec.id)}
                    className={`block px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                      activeSection === sec.id
                        ? "bg-[#E0B100]/10 text-[#E0B100] font-black pl-4"
                        : "text-[#555555] hover:text-[#222222] hover:bg-gray-50"
                    }`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#E8E2D3] bg-[#F8F7F2]/80 p-4 rounded-2xl">
                <p className="text-[11px] text-[#666666] leading-relaxed mb-3 font-medium">
                  Looking for our data protection practices and child privacy details?
                </p>
                <Link
                  href="/privacy"
                  className="text-xs font-black text-[#E0B100] flex items-center space-x-1 hover:underline"
                >
                  <span>Read Privacy Policy</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN LEGAL TEXT */}
          <div className="lg:col-span-8 space-y-10 text-[#333333]">

            {/* PREAMBLE CALLOUT */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8E2D3] shadow-sm space-y-4 text-sm leading-relaxed text-[#555555]">
              <p>
                These Terms and Conditions (&quot;<strong>Terms</strong>&quot;) form a legally binding agreement between you and <strong>8AM Technologies Private Limited</strong> (&quot;<strong>8 AM</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, &quot;<strong>our</strong>&quot;), a company incorporated under the Companies Act, 2013, with its registered office at D.No - 79, 04R, 16, Smalamma Temple Area, Syamala Nagar, Postal Colony, Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103.
              </p>
              <p>
                By downloading, registering for or using the 8 AM mobile application, the website at <a href="https://the8am.in" target="_blank" rel="noopener noreferrer" className="text-[#E0B100] underline font-bold">the8am.in</a>, RFID cards or related services (the &quot;<strong>Service</strong>&quot;), you confirm that you have read, understood and agree to these Terms and our <Link href="/privacy" className="text-[#E0B100] underline font-bold">Privacy Policy</Link>. If you do not agree, do not use the Service.
              </p>
            </div>

            {/* 1. DEFINITIONS */}
            <article id="definitions" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  01
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Definitions</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <div className="p-3.5 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                  <strong className="text-[#222222] font-black">&quot;Parent&quot;</strong> or <strong className="text-[#222222] font-black">&quot;you&quot;</strong>: means the parent or lawful guardian who registers on the app for a Student.
                </div>
                <div className="p-3.5 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                  <strong className="text-[#222222] font-black">&quot;Student&quot;</strong>: means the child enrolled in a School whose RFID card is linked to your account.
                </div>
                <div className="p-3.5 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                  <strong className="text-[#222222] font-black">&quot;School&quot;</strong>: means the educational institution that has subscribed to the Service.
                </div>
                <div className="p-3.5 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                  <strong className="text-[#222222] font-black">&quot;RFID Card&quot;</strong>: means the card or tag issued to the Student for tapping on readers.
                </div>
                <div className="p-3.5 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                  <strong className="text-[#222222] font-black">&quot;Tap&quot;</strong>: means presenting the RFID Card to a reader installed on a bus, at school, or at another point.
                </div>
                <div className="p-3.5 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                  <strong className="text-[#222222] font-black">&quot;Notification&quot;</strong>: means an alert sent to the Parent through the app, SMS or other channel.
                </div>
              </div>
            </article>

            {/* 2. THE SERVICE */}
            <article id="service" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  02
                </div>
                <h2 className="text-2xl font-black text-[#222222]">The Service</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  8 AM sends Notifications to Parents when a Student taps the RFID Card at designated points, such as boarding the bus, arriving at school, leaving school, and arriving at the drop-off stop.
                </p>
                <p>
                  Additional features (for example, missed-tap alerts or live bus location) may be available depending on the School&apos;s plan.
                </p>
              </div>
            </article>

            {/* 3. SAFETY NOTICE */}
            <article id="safety-notice" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border-2 border-[#E0B100] shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100] flex items-center justify-center text-[#222222] font-black text-xs">
                  03
                </div>
                <h2 className="text-2xl font-black text-[#222222]">IMPORTANT SAFETY NOTICE — PLEASE READ</h2>
              </div>

              <div className="bg-[#E0B100]/15 border border-[#E0B100]/40 p-5 rounded-2xl mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-[#E0B100] shrink-0 mt-0.5" size={20} />
                  <p className="text-sm font-bold text-[#222222] leading-relaxed">
                    8 AM is an information and convenience tool. It is NOT a guarantee of your child&apos;s safety, and it does NOT replace supervision by the Parent, the School or the transport staff.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <p className="font-bold text-[#222222]">You understand and agree that:</p>
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0 mt-0.5">1.</span>
                    <span>A Notification only shows that <strong>the RFID Card was tapped</strong> at a reader at a particular time. It does not confirm who tapped it, that the Student is physically safe, or where the Student is after the tap.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0 mt-0.5">2.</span>
                    <span>Notifications may be <strong>delayed, not delivered, or inaccurate</strong> because of factors such as: the Student forgetting or refusing to tap; a lost, damaged, swapped or shared card; reader malfunction or power failure; poor mobile network; phone settings, battery saver or muted notifications; app not updated; or third-party service outages.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0 mt-0.5">3.</span>
                    <span><strong>If you do not receive an expected Notification, or anything seems wrong, you must immediately contact the School or transport in-charge directly.</strong> Do not wait for the app.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0 mt-0.5">4.</span>
                    <span>The <strong>School and its transport operator remain responsible</strong> for the care, supervision and safe transport of Students. 8 AM does not operate buses, employ drivers or supervise Students.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0 mt-0.5">5.</span>
                    <span>You remain responsible for being present (or arranging an authorised adult) at the drop-off stop.</span>
                  </li>
                </ol>
              </div>
            </article>

            {/* 4. ELIGIBILITY AND YOUR ACCOUNT */}
            <article id="eligibility" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  04
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Eligibility and Your Account</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span>You must be at least 18 years old and the parent or lawful guardian of the Student.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span>You must provide true, complete and current information and keep it updated.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span>You are responsible for keeping your phone and login OTPs secure and for all activity under your account. Tell us immediately at <a href="mailto:fivextechnologiesofficial@gmail.com" className="text-[#E0B100] underline font-semibold">fivextechnologiesofficial@gmail.com</a> if you suspect unauthorised access.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">4.</span>
                    <span>You may add other authorised adults as secondary contacts only if they are trusted persons and you have their permission to share their details with us.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">5.</span>
                    <span>Students may not create or operate accounts.</span>
                  </li>
                </ol>
              </div>
            </article>

            {/* 5. ROLE OF THE SCHOOL */}
            <article id="role-of-school" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  05
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Role of the School</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  The School decides whether to adopt the Service, which buses and points have readers, and how RFID Cards are issued. Matters relating to bus routes, timings, staff, discipline, and student supervision are the School&apos;s responsibility. Complaints about these should go to the School. We will cooperate with the School to resolve issues related to the Service.
                </p>
              </div>
            </article>

            {/* 6. RFID CARDS */}
            <article id="rfid-cards" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  06
                </div>
                <h2 className="text-2xl font-black text-[#222222]">RFID Cards</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span>The RFID Card is for the <strong>sole use of the Student</strong> it is issued to. It must not be shared, lent, copied or tampered with.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span>Please teach your child to tap the card every time at every point.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span>Report a <strong>lost, stolen or damaged card immediately</strong> through the app or to the School so it can be blocked. Replacement cards are arranged through the School.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">4.</span>
                    <span>We are not responsible for Notifications triggered by a card that was lost, shared or misused before it was reported.</span>
                  </li>
                </ol>
              </div>
            </article>

            {/* 7. YOUR RESPONSIBILITIES */}
            <article id="responsibilities" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  07
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Your Responsibilities</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <p className="font-semibold text-[#222222]">You agree:</p>
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span>To keep app notifications switched on and the app updated;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span>To inform the School and us of any change in address, stop, phone number or guardianship;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span>Not to use the Service to track, harass or monitor any person other than your own child;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span>If there is a custody dispute or court order about your child, to inform the School immediately so access can be updated. We may act on instructions of the School or a court order regarding who may receive Notifications.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 8. FEES */}
            <article id="fees" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  08
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Fees</h2>
              </div>
              <div className="bg-[#E0B100]/10 border border-[#E0B100]/30 p-5 rounded-2xl text-sm leading-relaxed text-[#222222]">
                <p className="font-semibold">
                  The Service is <strong>free of charge for Parents</strong>. 8 AM does not collect any fees from Parents. The Service is paid for by the School under a separate agreement between 8 AM and the School.
                </p>
              </div>
            </article>

            {/* 9. ACCEPTABLE USE */}
            <article id="acceptable-use" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  09
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Acceptable Use</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  You must not: reverse-engineer, copy or modify the app or readers; attempt to access data of other Students; interfere with readers or systems; upload harmful code; use the Service for any unlawful purpose; or impersonate any person.
                </p>
              </div>
            </article>

            {/* 10. PRIVACY */}
            <article id="privacy" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  10
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Privacy</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  Our collection and use of personal data, including children&apos;s data, is governed by our <Link href="/privacy" className="text-[#E0B100] underline font-bold">Privacy Policy</Link>, which is part of these Terms. By registering, you give verifiable consent as the Student&apos;s parent or guardian for processing described in the Privacy Policy.
                </p>
              </div>
            </article>

            {/* 11. INTELLECTUAL PROPERTY */}
            <article id="intellectual-property" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  11
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  The app, software, designs, logos, the name &quot;8 AM&quot; and all related content belong to us or our licensors. We give you a limited, personal, non-transferable, revocable licence to use the app only for receiving the Service. RFID readers installed at the School remain the property of 8 AM or the School, as agreed between them.
                </p>
              </div>
            </article>

            {/* 12. AVAILABILITY AND CHANGES TO THE SERVICE */}
            <article id="availability" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  12
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Availability and Changes to the Service</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  We aim to keep the Service available during school transport hours but do not promise uninterrupted or error-free operation. We may carry out maintenance (normally outside transport hours), and may add, change or discontinue features with reasonable notice.
                </p>
              </div>
            </article>

            {/* 13. DISCLAIMER */}
            <article id="disclaimer" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  13
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Disclaimer</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  To the maximum extent permitted by law, the Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Except as expressly stated in these Terms, we do not give any warranty that the Service will be uninterrupted, timely or error-free, or that every Tap will result in a Notification. Nothing in these Terms excludes any right you have under any law that cannot be excluded.
                </p>
              </div>
            </article>

            {/* 14. LIMITATION OF LIABILITY */}
            <article id="liability" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  14
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Limitation of Liability</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span>We are not liable for any loss or harm caused by: the acts or omissions of the School, bus operator, driver or other third parties; the Student not tapping or misusing a card; failure of mobile networks, phones, power supply or third-party services; or events beyond our reasonable control (force majeure), including natural disasters, strikes, riots, pandemics, or government action.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span>We are not liable for indirect, consequential or special losses, loss of profits, or loss of data.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span className="font-semibold text-[#222222]">Nothing in these Terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud, for gross negligence or wilful misconduct, or any liability that cannot be limited under applicable law.</span>
                  </li>
                </ol>
              </div>
            </article>

            {/* 15. INDEMNITY */}
            <article id="indemnity" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  15
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Indemnity</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  You agree to compensate us for losses, claims or costs arising from your breach of these Terms, misuse of the Service, or providing false information, except to the extent caused by our own fault.
                </p>
              </div>
            </article>

            {/* 16. SUSPENSION AND TERMINATION */}
            <article id="termination" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  16
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Suspension and Termination</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span>You may stop using the Service and close your account at any time through the app or by emailing us.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span>We may suspend or terminate your access if you breach these Terms, if the School ends its arrangement with us, if the Student leaves the School, or if required by law. Where reasonable, we will give prior notice.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span>On termination, data will be handled as stated in the Privacy Policy. Clauses that by nature should survive (such as liability, indemnity and governing law) will continue.</span>
                  </li>
                </ol>
              </div>
            </article>

            {/* 17. CHANGES TO THESE TERMS */}
            <article id="changes" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  17
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Changes to these Terms</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  We may update these Terms from time to time. We will notify you of material changes through the app or by email at least 15 days before they take effect. Continuing to use the Service after that date means you accept the updated Terms.
                </p>
              </div>
            </article>

            {/* 18. GOVERNING LAW AND DISPUTES */}
            <article id="governing-law" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  18
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Governing Law and Disputes</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span>These Terms are governed by the laws of India.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span>We encourage you to first contact our Grievance Officer (Section 19) so we can try to resolve the issue amicably within 30 days.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span>If not resolved, the courts at <strong>Rajamahendravaram, Andhra Pradesh</strong> will have exclusive jurisdiction, subject to any right you may have under law to approach another forum.</span>
                  </li>
                </ol>
              </div>
            </article>

            {/* 19. GRIEVANCE OFFICER */}
            <article id="grievance" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  19
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Grievance Officer</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  In accordance with the Information Technology Act, 2000 and rules made under it:
                </p>
                <div className="bg-[#F8F7F2] p-6 rounded-2xl border border-[#E8E2D3] space-y-3 text-sm">
                  <div className="flex items-center space-x-3 text-[#222222] font-semibold">
                    <Building2 size={16} className="text-[#E0B100] shrink-0" />
                    <span><strong>Grievance Officer:</strong> Teja Davuluri</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#555555]">
                    <Mail size={16} className="text-[#E0B100] shrink-0" />
                    <span><strong>Email:</strong> <a href="mailto:fivextechnologiesofficial@gmail.com" className="hover:text-[#E0B100] underline font-medium">fivextechnologiesofficial@gmail.com</a></span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#555555]">
                    <Phone size={16} className="text-[#E0B100] shrink-0" />
                    <span><strong>Phone:</strong> <a href="tel:+918143528142" className="hover:text-[#E0B100] font-medium">+91 81435 28142</a></span>
                  </div>
                  <div className="flex items-start space-x-3 text-[#555555]">
                    <MapPin size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span><strong>Address:</strong> 8AM Technologies Private Limited, D.No - 79, 04R, 16, Smalamma Temple Area, Syamala Nagar, Postal Colony, Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103</span>
                  </div>
                </div>
                <p className="text-xs text-[#666666]">
                  We will acknowledge complaints within 48 hours and aim to resolve them within 30 days.
                </p>
              </div>
            </article>

            {/* 20. GENERAL */}
            <article id="general" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  20
                </div>
                <h2 className="text-2xl font-black text-[#222222]">General</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-[#222222] min-w-[130px] shrink-0">Entire agreement:</span>
                    <span>These Terms and the Privacy Policy are the full agreement between you and us about the Service.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-[#222222] min-w-[130px] shrink-0">Severability:</span>
                    <span>If any part is found invalid, the rest remains in force.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-[#222222] min-w-[130px] shrink-0">No waiver:</span>
                    <span>Our delay in enforcing a right does not mean we give it up.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-[#222222] min-w-[130px] shrink-0">Assignment:</span>
                    <span>You may not transfer your account. We may transfer our rights to a successor entity with notice.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-[#222222] min-w-[130px] shrink-0">Language:</span>
                    <span>If these Terms are translated, the English version will prevail.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 21. CONTACT */}
            <article id="contact" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  21
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Contact</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <div className="bg-[#F8F7F2] p-6 rounded-2xl border border-[#E8E2D3] space-y-3">
                  <div className="font-bold text-[#222222] text-base">
                    8AM Technologies Private Limited
                  </div>
                  <div className="flex items-start space-x-3 text-xs md:text-sm text-[#555555]">
                    <MapPin size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span>D.No - 79, 04R, 16, Smalamma Temple Area, Syamala Nagar, Postal Colony, Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-[#555555] pt-1">
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-[#E0B100]" />
                      <span>Email: <a href="mailto:fivextechnologiesofficial@gmail.com" className="hover:text-[#E0B100] underline font-medium">fivextechnologiesofficial@gmail.com</a></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-[#E0B100]" />
                      <span>Phone: <a href="tel:+918143528142" className="hover:text-[#E0B100] font-medium">+91 81435 28142</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* BOTTOM ACTION CTA */}
      <section className="py-12 bg-white border-t border-[#E8E2D3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-black text-[#222222] mb-3">
            Have questions regarding these Terms?
          </h3>
          <p className="text-xs md:text-sm text-[#666666] mb-6 max-w-xl mx-auto font-medium">
            We are here to support parents and educational institutions with complete transparency.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#E0B100] text-[#222222] rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C99700] transition-colors shadow-md"
            >
              Get in Touch
            </Link>
            <Link
              href="/privacy"
              className="px-8 py-3.5 bg-[#F8F7F2] text-[#222222] border border-[#E8E2D3] rounded-full font-black text-xs uppercase tracking-widest hover:border-[#E0B100] transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
