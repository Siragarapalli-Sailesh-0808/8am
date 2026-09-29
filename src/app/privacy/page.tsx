"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Printer,
  Sparkles,
  Server,
  UserCheck,
  Ban,
  Clock,
  Database,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  Radio
} from "lucide-react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("who-we-are");

  const sections = [
    { id: "who-we-are", title: "1. Who We Are" },
    { id: "scope", title: "2. Scope and Our Role" },
    { id: "children-consent", title: "3. Children's Data & Consent" },
    { id: "data-collected", title: "4. What Data We Collect" },
    { id: "how-collected", title: "5. How We Collect Data" },
    { id: "how-used", title: "6. How We Use Data" },
    { id: "never-do", title: "7. What We Will Never Do" },
    { id: "sharing", title: "8. Who We Share Data With" },
    { id: "storage", title: "9. Where Data is Stored" },
    { id: "retention", title: "10. How Long We Keep Data" },
    { id: "protection", title: "11. How We Protect Data" },
    { id: "data-breach", title: "12. Personal Data Breach" },
    { id: "your-rights", title: "13. Your Rights" },
    { id: "withdrawing-consent", title: "14. Withdrawing Consent" },
    { id: "cookies", title: "15. Cookies and Analytics" },
    { id: "grievance", title: "16. Grievance Officer" },
    { id: "changes", title: "17. Changes to This Policy" },
    { id: "contact", title: "18. Contact Us" },
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
            <path d="M-100 120 Q 300 250 800 80 T 1300 120" fill="none" stroke="#E0B100" strokeWidth="1.5" strokeDasharray="10 10" />
            <path d="M-100 240 Q 400 60 700 260 T 1400 160" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#E0B100]/10 border border-[#E0B100]/30 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck size={14} className="text-[#E0B100]" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#222222]">
              DPDP Act (2023) Compliant • Child Privacy Focused
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-[#222222] mb-6 leading-[0.95]">
            Privacy <span className="headline-italic text-[#E0B100] font-normal">Policy</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed mb-6 font-medium">
            We have written this policy in simple language because the 8 AM Service involves children&apos;s data, and parents deserve to understand exactly what happens to it.
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
              <span>Print Policy</span>
            </button>
          </div>
        </div>
      </section>

      {/* AT A GLANCE BENTO HIGHLIGHTS */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <EyeOff size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Zero Ads & Marketing</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              We never show ads to children, never sell data, and never build commercial behavioral profiles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <Lock size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Encrypted Security</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              Data is encrypted in transit via TLS and at rest, guarded with strict role-based access control and OTP login.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <UserCheck size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Parental Sovereignty</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              Accounts belong to parents. You have full rights under the DPDP Act 2023 to access, correct, and erase data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E8E2D3] shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] mb-4">
              <Server size={20} />
            </div>
            <h3 className="text-sm font-black text-[#222222] uppercase tracking-wider mb-2">Domestic Storage</h3>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">
              All personal records and transit logs are stored on secure servers located within India.
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
                Policy Sections
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
                  Looking for our platform terms of use and service agreements?
                </p>
                <Link
                  href="/terms"
                  className="text-xs font-black text-[#E0B100] flex items-center space-x-1 hover:underline"
                >
                  <span>Read Terms and Conditions</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN POLICY ARTICLES */}
          <div className="lg:col-span-8 space-y-10 text-[#333333]">
            
            {/* PREAMBLE */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8E2D3] shadow-sm space-y-4 text-sm leading-relaxed text-[#555555]">
              <p>
                This Privacy Policy explains how <strong>8AM Technologies Private Limited</strong> (&quot;<strong>8 AM</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, &quot;<strong>our</strong>&quot;) collects, uses, shares and protects personal data when you use the 8 AM mobile application, the website at <a href="https://the8am.in" target="_blank" rel="noopener noreferrer" className="text-[#E0B100] underline font-bold">the8am.in</a>, RFID cards and related services (together, the &quot;<strong>Service</strong>&quot;).
              </p>
              <p>
                We have written this policy in simple language because the Service involves children&apos;s data, and parents deserve to understand exactly what happens to it. Please read it carefully. If you do not agree, please do not use the Service.
              </p>
            </div>

            {/* 1. WHO WE ARE */}
            <article id="who-we-are" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  01
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Who We Are</h2>
              </div>
              <div className="space-y-5 text-sm leading-relaxed text-[#555555]">
                <p>
                  8 AM is a student-transit notification service. When a student taps an RFID card on a reader (in the school bus or at school), the parent or guardian receives a notification on the 8 AM app, for example:
                </p>

                {/* TABLE OF TAP POINTS */}
                <div className="overflow-x-auto border border-[#E8E2D3] rounded-2xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F8F7F2] border-b border-[#E8E2D3] text-[#222222] font-black uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Tap Point</th>
                        <th className="py-3 px-4">Notification Sent to Parent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E2D3]">
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Boarding the bus (morning)</td>
                        <td className="py-3 px-4 text-[#555555]">&quot;Your child has boarded the bus.&quot;</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Arriving at school</td>
                        <td className="py-3 px-4 text-[#555555]">&quot;Your child has reached school.&quot;</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Boarding the bus (after school)</td>
                        <td className="py-3 px-4 text-[#555555]">&quot;School is over. Your child is on the way home.&quot;</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Arriving at the home bus stop</td>
                        <td className="py-3 px-4 text-[#555555]">&quot;Your child has reached the bus stop. Please collect your child.&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#F8F7F2] p-5 rounded-2xl border border-[#E8E2D3] space-y-2 text-xs">
                  <div className="font-bold text-[#222222] text-sm">8AM Technologies Private Limited</div>
                  <div className="text-[#555555]">
                    D.No - 79, 04R, 16, Smalamma Temple Area, Syamala Nagar, Postal Colony, Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-[#555555] pt-1">
                    <span><strong>Email:</strong> <a href="mailto:fivextechnologiesofficial@gmail.com" className="hover:text-[#E0B100] underline font-medium">fivextechnologiesofficial@gmail.com</a></span>
                    <span><strong>Phone:</strong> <a href="tel:+918143528142" className="hover:text-[#E0B100] font-medium">+91 81435 28142</a></span>
                  </div>
                </div>
              </div>
            </article>

            {/* 2. SCOPE AND OUR ROLE */}
            <article id="scope" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  02
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Scope and Our Role</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  This policy applies to personal data of (a) students, (b) parents and legal guardians, (c) school staff and administrators, and (d) visitors to our website.
                </p>
                <p>
                  The Service is provided to Schools, which subscribe to and pay for it. The School decides to adopt the Service for its students, and 8 AM processes student data <strong>on behalf of the School</strong> as a Data Processor under the Digital Personal Data Protection Act, 2023 (&quot;<strong>DPDP Act</strong>&quot;). The School&apos;s own privacy notice will also apply.
                </p>
                <p>
                  For parent account data, app usage data and website data, 8 AM acts as the <strong>Data Fiduciary</strong>.
                </p>
                <div className="bg-[#E0B100]/10 border border-[#E0B100]/30 p-4 rounded-2xl text-xs font-semibold text-[#222222]">
                  In either case, we follow the commitments in this policy.
                </div>
              </div>
            </article>

            {/* 3. CHILDREN'S DATA AND PARENTAL CONSENT */}
            <article id="children-consent" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  03
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Children&apos;s Data and Parental Consent</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  Most students using the Service are under 18 years of age and are &quot;children&quot; under the DPDP Act. Therefore:
                </p>
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span>We process a child&apos;s personal data <strong>only with verifiable consent of the parent or lawful guardian</strong>, obtained through the School enrolment process and the app sign-up process (for example, OTP verification on the parent&apos;s mobile number registered with the School).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span>We process a child&apos;s data <strong>only for the child&apos;s safety and for the transport-notification purpose</strong> described in this policy.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span>We <strong>do not</strong> carry out targeted advertising directed at children, and we <strong>do not</strong> track or monitor children&apos;s behaviour for any commercial, marketing or profiling purpose.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">4.</span>
                    <span>We collect only the <strong>minimum data</strong> necessary to run the Service.</span>
                  </li>
                </ol>
                <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3] text-xs font-semibold text-[#222222]">
                  Students do not create their own accounts. The account belongs to, and is controlled by, the parent or guardian.
                </div>
              </div>
            </article>

            {/* 4. WHAT PERSONAL DATA WE COLLECT */}
            <article id="data-collected" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  04
                </div>
                <h2 className="text-2xl font-black text-[#222222]">What Personal Data We Collect</h2>
              </div>
              <div className="space-y-6 text-sm leading-relaxed text-[#555555]">
                
                {/* ABOUT THE STUDENT */}
                <div>
                  <h4 className="font-black text-[#222222] text-sm uppercase tracking-wider mb-3">
                    About the student
                  </h4>
                  <div className="overflow-x-auto border border-[#E8E2D3] rounded-2xl mb-2">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#F8F7F2] border-b border-[#E8E2D3] text-[#222222] font-black uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Data</th>
                          <th className="py-3 px-4">Why we need it</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E2D3]">
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Name and admission/roll number</td>
                          <td className="py-2.5 px-4 text-[#555555]">To identify the student and link the RFID card</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">School name and branch</td>
                          <td className="py-2.5 px-4 text-[#555555]">To link the student to the correct school and buses</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Bus number, route and assigned stop</td>
                          <td className="py-2.5 px-4 text-[#555555]">To send the right notifications</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">RFID card unique ID</td>
                          <td className="py-2.5 px-4 text-[#555555]">To recognise the tap</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Tap events: date, time, reader location (bus/school gate/stop)</td>
                          <td className="py-2.5 px-4 text-[#555555]">To send notifications and keep a trip record</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Photograph (<strong>optional</strong>, only if the School enables it)</td>
                          <td className="py-2.5 px-4 text-[#555555]">To help school/bus staff verify identity</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs font-bold text-[#E0B100] mt-2">
                    We do not collect the student&apos;s class or section.
                  </p>
                </div>

                {/* ABOUT THE PARENT / GUARDIAN */}
                <div>
                  <h4 className="font-black text-[#222222] text-sm uppercase tracking-wider mb-3">
                    About the parent / guardian
                  </h4>
                  <div className="overflow-x-auto border border-[#E8E2D3] rounded-2xl mb-2">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#F8F7F2] border-b border-[#E8E2D3] text-[#222222] font-black uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Data</th>
                          <th className="py-3 px-4">Why we need it</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E2D3]">
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Name, relationship to the student</td>
                          <td className="py-2.5 px-4 text-[#555555]">To confirm who is authorised</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Mobile number, email address</td>
                          <td className="py-2.5 px-4 text-[#555555]">Login, OTP verification, notifications and support</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Secondary contacts (optional)</td>
                          <td className="py-2.5 px-4 text-[#555555]">So another authorised adult can receive alerts</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Device information, app version, push-notification token</td>
                          <td className="py-2.5 px-4 text-[#555555]">To deliver notifications to your phone</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-semibold text-[#222222]">Support messages and feedback</td>
                          <td className="py-2.5 px-4 text-[#555555]">To help you and improve the Service</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-[#666666] italic">
                    We do not collect any payment details from parents, as the Service is free for parents.
                  </p>
                </div>

                {/* OTHER CATEGORIES */}
                <div className="space-y-2 text-xs">
                  <p>
                    <strong>About school staff and transport staff:</strong> name, role, official contact details and login records.
                  </p>
                  <p>
                    <strong>Bus location (if enabled):</strong> where the School uses GPS on the bus, we process the bus&apos;s location during trip hours only. This is the location of the vehicle, not of any individual phone.
                  </p>
                  <p>
                    <strong>Website visitors:</strong> IP address, browser type and basic analytics (see Section 15).
                  </p>
                </div>

                {/* WHAT WE DO NOT COLLECT */}
                <div className="p-4 bg-red-50/60 border border-red-200 rounded-2xl text-xs text-[#222222]">
                  <strong className="text-red-700 block mb-1 uppercase tracking-wider font-black">
                    What we do not collect:
                  </strong>
                  <span>Aadhaar number, biometrics, caste, religion, health records, class or section, or the location of the parent&apos;s or child&apos;s personal phone.</span>
                </div>

              </div>
            </article>

            {/* 5. HOW WE COLLECT DATA */}
            <article id="how-collected" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  05
                </div>
                <h2 className="text-2xl font-black text-[#222222]">How We Collect Data</h2>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#555555]">
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span>From the <strong>School</strong>, when it enrols students and assigns RFID cards and routes.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span>From <strong>you</strong>, when you register on the app or contact us.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span><strong>Automatically</strong>, when the RFID card is tapped on a reader, and when you use the app.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 6. HOW WE USE PERSONAL DATA */}
            <article id="how-used" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  06
                </div>
                <h2 className="text-2xl font-black text-[#222222]">How We Use Personal Data</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>We use personal data only to:</p>
                <ol className="space-y-2.5 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span>Send boarding, arrival, departure and drop-off notifications to parents;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span>Alert parents and the School about exceptions (for example, a missed tap or a card tapped at an unexpected stop), where this feature is enabled;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span>Provide the School with transport and trip records for student safety;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">4.</span>
                    <span>Verify identity, manage accounts and prevent misuse or fraud;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">5.</span>
                    <span>Provide customer support;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">6.</span>
                    <span>Maintain, secure, fix and improve the Service (using aggregated or de-identified data wherever possible);</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">7.</span>
                    <span>Comply with law, court orders and lawful requests of government authorities.</span>
                  </li>
                </ol>
                <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3] text-xs font-semibold text-[#222222]">
                  We will not use personal data for any new purpose without informing you and, where required, obtaining fresh consent.
                </div>
              </div>
            </article>

            {/* 7. WHAT WE WILL NEVER DO */}
            <article id="never-do" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border-2 border-[#E0B100] shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100] flex items-center justify-center text-[#222222] font-black text-xs">
                  07
                </div>
                <h2 className="text-2xl font-black text-[#222222]">What We Will Never Do</h2>
              </div>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3] flex items-start space-x-3">
                    <Ban className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-xs text-[#333333] font-bold">
                      We will <strong>never sell</strong> personal data of students or parents.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3] flex items-start space-x-3">
                    <Ban className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-xs text-[#333333] font-bold">
                      We will <strong>never show advertisements</strong> to students, or use children&apos;s data for marketing.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3] flex items-start space-x-3">
                    <Ban className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-xs text-[#333333] font-bold">
                      We will <strong>never build behavioural profiles</strong> of children.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3] flex items-start space-x-3">
                    <Ban className="text-red-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-xs text-[#333333] font-bold">
                      We will <strong>never share</strong> a child&apos;s location or tap history with anyone other than authorised parent(s)/guardian(s), the School, and persons listed in Section 8.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* 8. WHO WE SHARE DATA WITH */}
            <article id="sharing" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  08
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Who We Share Data With</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>We share personal data only on a need-to-know basis with:</p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span><strong>The student&apos;s School</strong> and its authorised staff;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span><strong>Transport staff</strong> (bus driver/attendant/transport in-charge) — limited to what they need, such as the student&apos;s name and stop;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span><strong>Service providers</strong> working on our behalf, under written contracts requiring confidentiality and security: cloud hosting, SMS/push notification providers and customer-support tools;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span><strong>Government or law-enforcement authorities</strong>, when required by law or to protect the life or safety of a child;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-[#E0B100] shrink-0 mt-0.5" />
                    <span><strong>A successor entity</strong> in case of merger, acquisition or sale of business, subject to the same protections in this policy.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* 9. WHERE DATA IS STORED */}
            <article id="storage" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  09
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Where Data is Stored</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  Data is stored on secure servers located in India. If any service provider processes data outside India, we will do so only in countries permitted under Indian law and with appropriate contractual safeguards.
                </p>
              </div>
            </article>

            {/* 10. HOW LONG WE KEEP DATA */}
            <article id="retention" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  10
                </div>
                <h2 className="text-2xl font-black text-[#222222]">How Long We Keep Data</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <div className="overflow-x-auto border border-[#E8E2D3] rounded-2xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F8F7F2] border-b border-[#E8E2D3] text-[#222222] font-black uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Data</th>
                        <th className="py-3 px-4">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E2D3]">
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Tap / trip records</td>
                        <td className="py-3 px-4 text-[#555555]">Current academic year + 6 months, then deleted or anonymised</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Student profile and RFID link</td>
                        <td className="py-3 px-4 text-[#555555]">Until the student leaves the School or the School ends the Service, then deleted within 90 days</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Parent account</td>
                        <td className="py-3 px-4 text-[#555555]">Until the account is closed, then deleted within 90 days</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-semibold text-[#222222]">Records needed for a legal claim or investigation</td>
                        <td className="py-3 px-4 text-[#555555]">Until the matter is closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            {/* 11. HOW WE PROTECT DATA */}
            <article id="protection" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  11
                </div>
                <h2 className="text-2xl font-black text-[#222222]">How We Protect Data</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  We use reasonable security practices, including: encryption of data in transit (TLS) and at rest; role-based access so staff see only what they need; OTP-based login; audit logs of access; regular security testing; and confidentiality obligations for our employees and vendors. We follow the Information Technology Act, 2000 and the reasonable security practices rules made under it.
                </p>
                <div className="p-4 bg-[#F8F7F2] rounded-2xl border border-[#E8E2D3] text-xs text-[#666666]">
                  No system is 100% secure. If you notice any suspicious activity on your account, please contact us immediately.
                </div>
              </div>
            </article>

            {/* 12. PERSONAL DATA BREACH */}
            <article id="data-breach" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  12
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Personal Data Breach</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  If a personal data breach occurs, we will take immediate steps to contain it, and we will inform the affected parents, the School, the Data Protection Board of India and CERT-In, in the manner and time required by law.
                </p>
              </div>
            </article>

            {/* 13. YOUR RIGHTS */}
            <article id="your-rights" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  13
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Your Rights</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  As a parent/guardian (for yourself and on behalf of your child), you have the right to:
                </p>
                <ol className="space-y-3 pl-2 list-none">
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">1.</span>
                    <span><strong>Access</strong> — get a summary of the personal data we hold and how it is used;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">2.</span>
                    <span><strong>Correction and updating</strong> — fix incorrect or incomplete data;</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">3.</span>
                    <span><strong>Erasure</strong> — ask us to delete data that is no longer needed (subject to legal retention requirements);</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">4.</span>
                    <span><strong>Withdraw consent</strong> — at any time (see Section 14);</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">5.</span>
                    <span><strong>Grievance redressal</strong> — raise a complaint with us (Section 16);</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-black text-[#E0B100] shrink-0">6.</span>
                    <span><strong>Nominate</strong> — nominate another person to exercise these rights in case of your death or incapacity.</span>
                  </li>
                </ol>
                <p className="text-xs text-[#666666] pt-2">
                  Where the School is the Data Fiduciary, we may forward your request to the School and assist it in responding. We may verify your identity before acting on a request.
                </p>
              </div>
            </article>

            {/* 14. WITHDRAWING CONSENT */}
            <article id="withdrawing-consent" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  14
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Withdrawing Consent</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  You can withdraw consent through the app settings or by emailing <a href="mailto:fivextechnologiesofficial@gmail.com" className="text-[#E0B100] underline font-semibold">fivextechnologiesofficial@gmail.com</a>. Once consent is withdrawn, we will stop sending notifications and stop processing your child&apos;s data, except where we must retain it by law.
                </p>
                <div className="bg-[#E0B100]/15 border border-[#E0B100]/40 p-4 rounded-2xl text-xs font-bold text-[#222222]">
                  Please note: after withdrawal, you will no longer receive any bus or school arrival alerts. Withdrawal does not affect processing done before it.
                </div>
              </div>
            </article>

            {/* 15. COOKIES AND ANALYTICS */}
            <article id="cookies" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  15
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Cookies and Analytics (Website)</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  Our website uses essential cookies to function and may use basic analytics cookies to understand site traffic. You can control cookies through your browser settings. We do not use advertising or tracking cookies. The mobile app does not use advertising identifiers.
                </p>
              </div>
            </article>

            {/* 16. GRIEVANCE OFFICER */}
            <article id="grievance" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  16
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Grievance Officer</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  If you have any concern or complaint about your data, please contact:
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
                  We will acknowledge your complaint within 48 hours and try to resolve it within 30 days or such time as required by law. If you are not satisfied, you may approach the <strong>Data Protection Board of India</strong>.
                </p>
              </div>
            </article>

            {/* 17. CHANGES TO THIS POLICY */}
            <article id="changes" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  17
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Changes to This Policy</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-[#555555]">
                <p>
                  We may update this policy from time to time. If we make significant changes, we will notify you through the app or by email before they take effect, and seek fresh consent where required. The &quot;Last updated&quot; date at the top shows the latest version.
                </p>
              </div>
            </article>

            {/* 18. CONTACT US */}
            <article id="contact" className="scroll-mt-28 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D3] shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#E0B100]/10 flex items-center justify-center text-[#E0B100] font-black text-xs">
                  18
                </div>
                <h2 className="text-2xl font-black text-[#222222]">Contact Us</h2>
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
            Committed to Zero Compromise on Student Data
          </h3>
          <p className="text-xs md:text-sm text-[#666666] mb-6 max-w-xl mx-auto font-medium">
            Learn more about how 8 AM protects families and schools, or reach out to our grievance team.
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
