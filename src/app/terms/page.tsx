"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { 
  FileText, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Scale, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Printer,
  ChevronRight
} from "lucide-react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "services", title: "2. Description of 8AM Services" },
    { id: "responsibilities", title: "3. User Roles & Obligations" },
    { id: "telemetry", title: "4. GPS, Telemetry & Hardware Disclaimer" },
    { id: "safety", title: "5. Student Safety & Emergency Protocol" },
    { id: "intellectual-property", title: "6. Intellectual Property Rights" },
    { id: "billing", title: "7. Commercial Terms & Subscriptions" },
    { id: "liability", title: "8. Limitation of Liability" },
    { id: "termination", title: "9. Suspension & Termination" },
    { id: "governing-law", title: "10. Governing Law & Jurisdiction" },
    { id: "contact", title: "11. Legal Contact Information" },
  ];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

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
              Institutional Governance
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#222222] mb-6 leading-[0.95]">
            Terms & <span className="headline-italic text-[#E0B100] font-normal">Conditions</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed mb-8 font-medium">
            Please read these terms carefully before accessing or using the 8AM Mobility Platform, including our school portal, parent mobile applications, driver devices, and telemetry hardware services.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8E2D3] text-xs text-[#666666] font-semibold">
            <div className="flex items-center space-x-4">
              <span>Effective Date: <strong className="text-[#222222]">October 1, 2024</strong></span>
              <span>•</span>
              <span>Version: <strong className="text-[#222222]">2.4 (Statutory Update)</strong></span>
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

      {/* CONTENT WITH STICKY SIDEBAR */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 bg-white border border-[#E8E2D3] rounded-3xl p-6 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#E0B100] mb-4">
                Document Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setActiveSection(sec.id)}
                    className={`block px-3 py-2 text-xs font-semibold rounded-xl transition-all ${
                      activeSection === sec.id
                        ? "bg-[#E0B100]/10 text-[#E0B100] font-black pl-4"
                        : "text-[#555555] hover:text-[#222222] hover:bg-gray-50"
                    }`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#E8E2D3] bg-[#F8F7F2]/60 p-4 rounded-2xl">
                <p className="text-[11px] text-[#666666] leading-relaxed mb-3 font-medium">
                  Need legal clarification or custom enterprise agreements for your school district?
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-black text-[#E0B100] flex items-center space-x-1 hover:underline"
                >
                  <span>Contact Legal Counsel</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN LEGAL TEXT */}
          <div className="lg:col-span-8 space-y-12 text-[#333333]">
            
            {/* 1. ACCEPTANCE */}
            <article id="acceptance" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  01
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  These Terms and Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;School Administrator&quot;, &quot;Parent&quot;, or &quot;Transport Partner&quot;) and <strong>8AM Mobility Intelligence</strong> (&quot;8AM&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                </p>
                <p>
                  By creating an account, installing the 8AM Parent App, deploying the 8AM School Dashboard, or utilizing our telemetry devices, you acknowledge that you have read, understood, and agree to be bound by these Terms and our companion <Link href="/privacy" className="text-[#E0B100] underline font-bold">Privacy Policy</Link>.
                </p>
                <div className="bg-[#F8F7F2] border-l-4 border-[#E0B100] p-4 rounded-r-2xl my-4 text-xs text-[#444444]">
                  <strong>Notice to Minors:</strong> The 8AM Platform provides transit monitoring services for students. Students do not directly enter into this agreement; all accounts, verifications, and approvals must be managed by an authorized parent, legal guardian, or accredited educational institution.
                </div>
              </div>
            </article>

            {/* 2. DESCRIPTION OF SERVICES */}
            <article id="services" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  02
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Description of 8AM Services</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  8AM delivers real-time student mobility intelligence and institutional fleet surveillance, including:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Live GPS vehicle tracking and dynamic estimated time of arrival (ETA) predictions",
                    "RFID and NFC contactless student boarding and deboarding tap-in/tap-out logs",
                    "Automated push notifications, WhatsApp alerts, and SMS delivery for bus stop arrival",
                    "Fleet telematics, speed compliance, geofencing, and driver behavior analysis",
                    "Centralized school transport administrative dashboard and incident escalation workflows"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs md:text-sm">
                      <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* 3. USER ROLES & OBLIGATIONS */}
            <article id="responsibilities" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  03
                </div>
                <h2 className="text-2xl font-black text-[#222222]">User Roles & Obligations</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <h4 className="font-black text-[#222222] text-sm uppercase tracking-wider">A. Educational Institutions & Fleet Owners</h4>
                <p>
                  Schools agree to provide accurate student rosters, designated pickup/drop coordinates, and authorized chaperone profiles. Schools are solely responsible for obtaining parental consent to record and transmit student transit information via the 8AM system.
                </p>

                <h4 className="font-black text-[#222222] text-sm uppercase tracking-wider mt-4">B. Parents & Legal Guardians</h4>
                <p>
                  Parents agree to maintain confidential login credentials and ensure prompt updates if mobile numbers or designated guardians change. Parents must not tamper with, reverse-engineer, or share private live tracking links with unauthorized third parties.
                </p>

                <h4 className="font-black text-[#222222] text-sm uppercase tracking-wider mt-4">C. Drivers & Transit Attendants</h4>
                <p>
                  Drivers and school bus attendants must follow safe vehicle operating protocols, comply with traffic regulations, and ensure student verification hardware (RFID readers/tablets) is operational before initiating each transit route.
                </p>
              </div>
            </article>

            {/* 4. GPS & TELEMETRY DISCLAIMER */}
            <article id="telemetry" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  04
                </div>
                <h2 className="text-2xl font-black text-[#222222]">GPS, Telemetry & Hardware Disclaimer</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  While 8AM employs high-precision multi-constellation GPS hardware and sub-second cloud ingestion pipelines, users acknowledge that satellite positioning and mobile data transmission are subject to inherent physical limitations:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <div className="flex items-center space-x-2 text-[#222222] font-black text-xs mb-1">
                      <AlertCircle size={14} className="text-[#E0B100]" />
                      <span>Network Propagation Delay</span>
                    </div>
                    <p className="text-xs text-[#666666]">
                      Cellular blind spots, carrier latency, and severe meteorological interference may occasionally introduce minor delay in real-time coordinates.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <div className="flex items-center space-x-2 text-[#222222] font-black text-xs mb-1">
                      <AlertCircle size={14} className="text-[#E0B100]" />
                      <span>Route Deviations</span>
                    </div>
                    <p className="text-xs text-[#666666]">
                      Unannounced roadblocks, roadwork detours, or police traffic diversions may temporarily alter predicted ETAs without prior notice.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 5. STUDENT TRANSIT SAFETY */}
            <article id="safety" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  05
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Student Safety & Emergency Protocol</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  The 8AM platform is an intelligence and notification assistant. <strong>8AM is not a transportation provider, common carrier, or school authority.</strong>
                </p>
                <p>
                  Physical custody, physical safety, and behavioral supervision of students remain at all times with the school administration, transport contractors, and designated bus attendants. In the event of vehicle breakdown, collision, or medical emergency, standard school emergency protocols and municipal emergency services (112 / Police / Ambulance) take precedence over digital app alerts.
                </p>
              </div>
            </article>

            {/* 6. INTELLECTUAL PROPERTY */}
            <article id="intellectual-property" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  06
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  All proprietary software, machine-learning route algorithms, telemetry firmware, user interface designs, logos, typography, and trade secrets related to the 8AM brand are the exclusive property of 8AM Mobility Intelligence.
                </p>
                <p>
                  Users receive a limited, revocable, non-exclusive, non-transferable license to access the portal and mobile application for authorized institutional or parental purposes.
                </p>
              </div>
            </article>

            {/* 7. BILLING & SUBSCRIPTIONS */}
            <article id="billing" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  07
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Commercial Terms & Subscriptions</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  Enterprise school subscriptions are billed annually or quarterly based on the active fleet size and registered student count as set forth in the master institutional service agreement.
                </p>
                <p>
                  Hardware replacement fees apply in cases of intentional physical damage or loss of RFID readers and onboard telemetry units outside of standard manufacturer warranty terms.
                </p>
              </div>
            </article>

            {/* 8. LIMITATION OF LIABILITY */}
            <article id="liability" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  08
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  To the maximum extent permitted by applicable law, 8AM shall not be held liable for any indirect, incidental, punitive, or consequential damages resulting from lost school time, bus delays, hardware outages caused by third-party telecom providers, or force majeure events.
                </p>
                <p>
                  In all circumstances, 8AM&apos;s aggregate financial liability arising out of or related to these Terms shall be limited to the total subscription fees received by 8AM for the affected institution during the three (3) months preceding the incident.
                </p>
              </div>
            </article>

            {/* 9. TERMINATION */}
            <article id="termination" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  09
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Suspension & Termination</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  8AM reserves the right to suspend or terminate user accounts immediately if there is evidence of fraudulent usage, unauthorized credential sharing, breach of network security, or non-payment of subscription fees following formal notice.
                </p>
              </div>
            </article>

            {/* 10. GOVERNING LAW & JURISDICTION */}
            <article id="governing-law" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  10
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Governing Law & Jurisdiction</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>India</strong>.
                </p>
                <p>
                  The courts of <strong>Rajahmundry, Andhra Pradesh, India</strong> shall have exclusive jurisdiction to resolve any dispute, claim, or controversy arising under or in connection with these Terms.
                </p>
              </div>
            </article>

            {/* 11. LEGAL CONTACT */}
            <article id="contact" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  11
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Legal Contact Information</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  For formal legal notices, statutory inquiries, or contract amendments, please reach our legal and compliance desk:
                </p>
                <div className="bg-[#F8F7F2] p-6 rounded-2xl border border-[#E8E2D3] space-y-3">
                  <div className="flex items-center space-x-3 text-xs md:text-sm text-[#222222] font-semibold">
                    <Building2 size={16} className="text-[#E0B100]" />
                    <span>8AM Mobility Intelligence (Legal Department)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs md:text-sm text-[#555555]">
                    <MapPin size={16} className="text-[#E0B100]" />
                    <span>Rajahmundry, Andhra Pradesh - 533104, India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs md:text-sm text-[#555555]">
                    <Mail size={16} className="text-[#E0B100]" />
                    <a href="mailto:8amplatform@gmail.com" className="hover:text-[#E0B100] transition-colors underline">
                      8amplatform@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-xs md:text-sm text-[#555555]">
                    <Phone size={16} className="text-[#E0B100]" />
                    <a href="tel:+918143528142" className="hover:text-[#E0B100] transition-colors">
                      +91 81435 28142
                    </a>
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
            Questions regarding our institutional legal terms?
          </h3>
          <p className="text-xs md:text-sm text-[#666666] mb-6 max-w-xl mx-auto font-medium">
            Our enterprise compliance specialists are available to review contracts with school boards, parent associations, and transport directors.
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
