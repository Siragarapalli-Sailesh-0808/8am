"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  CheckCircle2, 
  FileCheck2, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Printer,
  Sparkles,
  Server,
  UserCheck
} from "lucide-react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "1. Scope & Commitments" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "usage", title: "3. Purpose & Legal Basis" },
    { id: "child-safety", title: "4. Child Safety & Zero-Ad Pledge" },
    { id: "sharing", title: "5. Authorized Sharing & Disclosure" },
    { id: "security", title: "6. Encryption & Storage Security" },
    { id: "retention", title: "7. Data Retention & Erasure" },
    { id: "rights", title: "8. Parental Rights under DPDP Act 2023" },
    { id: "grievance", title: "9. Grievance Redressal Officer" },
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
            <path d="M-100 120 Q 300 250 800 80 T 1300 120" fill="none" stroke="#E0B100" strokeWidth="1.5" strokeDasharray="10 10" />
            <path d="M-100 240 Q 400 60 700 260 T 1400 160" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#E0B100]/10 border border-[#E0B100]/30 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck size={14} className="text-[#E0B100]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#222222]">
              DPDP Act (2023) & Child Safety Aligned
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#222222] mb-6 leading-[0.95]">
            Privacy <span className="headline-italic text-[#E0B100] font-normal">Policy</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed mb-8 font-medium">
            At 8AM, safeguarding student telemetry, biometric verification records, and parental peace of mind is our core engineering imperative. Learn how your family&apos;s data is guarded with zero compromises.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8E2D3] text-xs text-[#666666] font-semibold">
            <div className="flex items-center space-x-4">
              <span>Last Revised: <strong className="text-[#222222]">October 2024</strong></span>
              <span>•</span>
              <span>Compliance: <strong className="text-[#222222]">India DPDP Act & GDPR</strong></span>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#E8E2D3] text-[#222222] hover:border-[#E0B100] hover:text-[#E0B100] transition-colors shadow-sm cursor-pointer"
            >
              <Printer size={14} />
              <span>Print Policy</span>
            </button>
          </div>
        </div>
      </section>

      {/* AT A GLANCE BENTO HIGHLIGHTS */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <EyeOff size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Zero Advertising</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              We never sell, rent, or monetize student or parent data. No third-party ad networks ever touch our ecosystem.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <Lock size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">AES-256 Encryption</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              All telemetry, RFID tap logs, and GPS trajectories are encrypted in transit via TLS 1.3 and at rest with AES-256.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <UserCheck size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Parental Sovereignty</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              Parents retain full rights under Indian law to inspect, correct, export, or request deletion of their child&apos;s records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <Server size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Sovereign Data Storage</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              All student mobility records are securely hosted in certified data centers located within Indian jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT WITH STICKY SIDEBAR */}
      <section className="py-8 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 bg-white border border-[#E8E2D3] rounded-3xl p-6 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#E0B100] mb-4">
                Policy Sections
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
                  Have a specific privacy concern or need a data export?
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-black text-[#E0B100] flex items-center space-x-1 hover:underline"
                >
                  <span>Contact Data Protection Officer</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN POLICY ARTICLES */}
          <div className="lg:col-span-8 space-y-12 text-[#333333]">
            
            {/* 1. OVERVIEW */}
            <article id="overview" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  01
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Scope & Commitments</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  This Privacy Policy delineates how <strong>8AM Mobility Intelligence</strong> (&quot;8AM&quot;, &quot;we&quot;, &quot;our&quot;) processes and protects data collected through our connected school transit platform, which includes the 8AM School Administration Dashboard, the 8AM Parent Mobile App, driver onboard interfaces, and hardware telemetry nodes.
                </p>
                <p>
                  We operate as a <strong>Data Fiduciary / Data Processor</strong> under India&apos;s <em>Digital Personal Data Protection Act, 2023 (DPDP Act)</em> on behalf of partnering schools. Protecting student personal data is our primary legal and ethical obligation.
                </p>
              </div>
            </article>

            {/* 2. COLLECTION */}
            <article id="collection" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  02
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  To provide reliable, real-time safety monitoring, we collect only the minimum necessary data points:
                </p>

                <div className="space-y-3">
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#222222] mb-1">
                      A. Student & Guardian Profiles
                    </h4>
                    <p className="text-xs text-[#666666]">
                      Student name, school admission / roll number, grade/section, designated pickup and drop-off bus stops, parent/guardian full names, registered mobile phone numbers, and emergency contact details provided directly by the enrolled school.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#222222] mb-1">
                      B. Real-Time Telemetry & GPS Coordinates
                    </h4>
                    <p className="text-xs text-[#666666]">
                      Continuous GPS latitude and longitude coordinates of active transit vehicles, vehicle speed, ignition status, engine idle indicators, and route adherence timestamps during active school morning and afternoon transit sessions.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#222222] mb-1">
                      C. RFID & NFC Verification Logs
                    </h4>
                    <p className="text-xs text-[#666666]">
                      Cryptographic RFID smart-card tap-in and tap-out timestamps recorded at vehicle entrance doors, marking student boarding and deboarding milestones without collecting any unnecessary biometric records unless specifically contracted by the institution.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#222222] mb-1">
                      D. Device & Application Diagnostics
                    </h4>
                    <p className="text-xs text-[#666666]">
                      IP address, device OS version, app build number, push notification delivery tokens, and system crash diagnostics to maintain uptime and prevent unauthorized account access.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 3. USAGE */}
            <article id="usage" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  03
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Purpose & Legal Basis</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  Under the DPDP Act 2023, data is processed strictly for defined, lawful purposes under the institutional contract with your school:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Calculating sub-second live ETAs and notifying parents when the school bus is approaching their stop",
                    "Notifying parents the instant their child taps their RFID pass entering or exiting the bus",
                    "Enabling school principals and transport supervisors to identify missed stops, route delays, or speed non-compliance",
                    "Facilitating immediate SOS panic alert dispatches to emergency personnel and school coordinators",
                    "Resolving customer support requests and verifying authorized guardian pickup credentials"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs md:text-sm">
                      <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* 4. CHILD SAFETY & ZERO ADS */}
            <article id="child-safety" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  04
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Child Safety & Zero-Ad Pledge</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <div className="bg-[#E0B100]/10 border border-[#E0B100]/30 p-5 rounded-2xl text-[#222222]">
                  <h4 className="font-black text-sm uppercase tracking-wider mb-2 flex items-center space-x-2">
                    <Sparkles size={16} className="text-[#E0B100]" />
                    <span>Our Sacred Covenant to Parents & Educators</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-[#444444]">
                    We treat children&apos;s privacy with paramount sanctity. 8AM explicitly covenants that:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#444444]">
                    <li>We will NEVER display third-party advertisements inside the parent app or school portal.</li>
                    <li>We will NEVER construct behavioral psychological profiles or advertising cohorts around students.</li>
                    <li>We will NEVER sell, lease, or broker student tracking data to data aggregators, insurers, or marketers.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* 5. SHARING */}
            <article id="sharing" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  05
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Authorized Sharing & Disclosure</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  We share transit and student records only in the following strictly controlled scenarios:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h5 className="font-black text-xs text-[#222222] mb-1">Accredited School Personnel</h5>
                    <p className="text-xs text-[#666666]">
                      Access is restricted via Role-Based Access Control (RBAC) to verified school transport administrators and principals.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h5 className="font-black text-xs text-[#222222] mb-1">Designated Parents / Guardians</h5>
                    <p className="text-xs text-[#666666]">
                      Parents only see their own enrolled children&apos;s location and tap logs. No parent can see other students&apos; personal details.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h5 className="font-black text-xs text-[#222222] mb-1">Infrastructure Service Providers</h5>
                    <p className="text-xs text-[#666666]">
                      Cloud hosting, SMS gateway (TRAI DLT registered), and WhatsApp Business API providers under strict non-disclosure agreements.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3]">
                    <h5 className="font-black text-xs text-[#222222] mb-1">Statutory Legal Process</h5>
                    <p className="text-xs text-[#666666]">
                      Only upon receipt of a binding court order or written warrant from Indian law enforcement agencies.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 6. SECURITY */}
            <article id="security" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  06
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Encryption & Storage Security</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  8AM implements defense-in-depth security architecture:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-center space-x-2 text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0" />
                    <span><strong>Data in Transit:</strong> 256-bit TLS 1.3 cryptographic tunnels for all API, socket, and mobile transmissions.</span>
                  </li>
                  <li className="flex items-center space-x-2 text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0" />
                    <span><strong>Data at Rest:</strong> Hardened AES-256 database volume encryption with rotated master keys.</span>
                  </li>
                  <li className="flex items-center space-x-2 text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0" />
                    <span><strong>Audit Trails:</strong> Immutable access logs for every administrative viewing of student coordinates.</span>
                  </li>
                  <li className="flex items-center space-x-2 text-xs md:text-sm">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0" />
                    <span><strong>Domestic Hosting:</strong> Servers located strictly within the territory of India in Tier-4 cloud facilities.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 7. RETENTION */}
            <article id="retention" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  07
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Data Retention & Erasure</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  Live GPS coordinate breadcrumbs are archived to high-level route summaries after 90 days. Detailed student RFID board/deboard tap logs are maintained throughout the active academic year for school safety audits and attendance reconciliations.
                </p>
                <p>
                  When a student graduates, withdraws from the school transport service, or when an institution discontinues its partnership with 8AM, student records are permanently purged or anonymized within 60 calendar days upon receipt of school written authorization.
                </p>
              </div>
            </article>

            {/* 8. PARENTAL RIGHTS */}
            <article id="rights" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  08
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Parental Rights under DPDP Act 2023</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  As a parent or legal guardian in India, you are entitled to the following statutory rights under the Digital Personal Data Protection Act, 2023:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-[#F8F7F2] rounded-xl border border-[#E8E2D3] flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-[#222222] block">Right to Access Information</strong>
                      <span className="text-xs text-[#666666]">Request a summary of personal student data processed by 8AM.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-[#F8F7F2] rounded-xl border border-[#E8E2D3] flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-[#222222] block">Right to Correction & Erasure</strong>
                      <span className="text-xs text-[#666666]">Correct inaccurate phone numbers or request erasure of obsolete transit logs.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-[#F8F7F2] rounded-xl border border-[#E8E2D3] flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs text-[#222222] block">Right to Grievance Redressal</strong>
                      <span className="text-xs text-[#666666]">Lodge inquiries with our Grievance Redressal Officer before escalating to the Data Protection Board of India.</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 9. GRIEVANCE REDRESSAL OFFICER */}
            <article id="grievance" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  09
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Grievance Redressal Officer</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  In accordance with the Information Technology Act, 2000 and the DPDP Act, 2023, the contact details of our designated Data Protection & Grievance Redressal Officer are published below:
                </p>
                <div className="bg-[#F8F7F2] p-6 rounded-2xl border border-[#E8E2D3] space-y-3">
                  <div className="flex items-center space-x-3 text-xs md:text-sm text-[#222222] font-semibold">
                    <Building2 size={16} className="text-[#E0B100]" />
                    <span>Office of the Data Protection Officer — 8AM Mobility Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs md:text-sm text-[#555555]">
                    <MapPin size={16} className="text-[#E0B100]" />
                    <span>Rajahmundry, Andhra Pradesh - 533104, India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs md:text-sm text-[#555555]">
                    <Mail size={16} className="text-[#E0B100]" />
                    <a href="mailto:8amplatform@gmail.com" className="hover:text-[#E0B100] transition-colors underline font-bold">
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
                <p className="text-xs text-[#666666]">
                  Response Commitment: All statutory privacy notices or data access requests are formally logged and acknowledged within 48 hours.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* BOTTOM ACTION CTA */}
      <section className="py-12 bg-white border-t border-[#E8E2D3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl md:text-2xl font-black text-[#222222] mb-3">
            Committed to Zero Compromise on Student Data
          </h3>
          <p className="text-xs md:text-sm text-[#666666] mb-6 max-w-xl mx-auto font-medium">
            Learn more about how 8AM equips institutions with enterprise security, or contact our support team.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#E0B100] text-[#222222] rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C99700] transition-colors shadow-md"
            >
              Contact Support
            </Link>
            <Link
              href="/terms"
              className="px-8 py-3.5 bg-[#F8F7F2] text-[#222222] border border-[#E8E2D3] rounded-full font-black text-xs uppercase tracking-widest hover:border-[#E0B100] transition-colors"
            >
              Read Terms & Conditions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
