import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin, 
  ArrowRight,
  Mail,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { 
  EMAIL, 
  PHONE_DISPLAY, 
  PHONE_NUMBER, 
  WHATSAPP_DISPLAY, 
  whatsappLink 
} from "@/lib/site";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Parent App", href: "/parents" },
      { name: "School Dashboard", href: "/schools" },
    ],
    company: [
      { name: "Our Story", href: "/company" },
      { name: "Contact Us", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Compliance", href: "/privacy#grievance" },
    ],
  };

  return (
    <footer className="relative bg-[#F8F7F2] text-[#222222] pt-20 pb-12 overflow-hidden border-t border-[#E8E2D3]">
      {/* BACKGROUND DECO - Subtle Faded Lines */}
      <div aria-hidden className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 Q 200 50 400 200 T 900 200" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="12 12" />
          <path d="M-100 300 Q 300 150 500 300 T 1000 300" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 items-start">
          
          {/* BRAND COLUMN (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link href="/" className="group mb-6 inline-block">
              <Image
                src="/media/logo-horizontal.webp"
                alt="8AM"
                width={576}
                height={176}
                className="h-11 md:h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-[#555555] text-sm leading-relaxed font-medium max-w-sm">
              Student mobility intelligence for Indian schools. We connect schools, drivers, and parents with real-time transport visibility and child safety assurance.
            </p>
          </div>

          {/* PLATFORM COLUMN (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B08A00] mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#555555] hover:text-[#E0B100] transition-colors inline-flex items-center group font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-[#E0B100]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY COLUMN (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B08A00] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#555555] hover:text-[#E0B100] transition-colors inline-flex items-center group font-medium"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-[#E0B100]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COLUMN (4 cols - generous space so email & numbers never wrap or clip) */}
          <div className="lg:col-span-4">
            <Link href="/contact" className="group inline-flex items-center space-x-1.5 mb-5">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B08A00] group-hover:text-[#E0B100] transition-colors">
                Contact Us
              </h4>
              <ArrowRight size={12} className="text-[#E0B100] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3 text-xs md:text-sm text-[#555555] font-medium">
                <MapPin size={17} className="text-[#E0B100] shrink-0 mt-0.5" />
                <span className="leading-snug">Rajahmundry, Andhra Pradesh - 533104</span>
              </li>

              <li className="flex items-center space-x-3 text-xs md:text-sm text-[#555555] font-medium">
                <Mail size={17} className="text-[#E0B100] shrink-0" />
                <a 
                  href={`mailto:${EMAIL}`} 
                  className="hover:text-[#E0B100] transition-colors break-all sm:break-normal truncate sm:whitespace-nowrap"
                  title={EMAIL}
                >
                  {EMAIL}
                </a>
              </li>

              <li className="flex items-center space-x-3 text-xs md:text-sm text-[#555555] font-medium">
                <Phone size={17} className="text-[#E0B100] shrink-0" />
                <a 
                  href={`tel:${PHONE_NUMBER}`} 
                  className="hover:text-[#E0B100] transition-colors whitespace-nowrap"
                >
                  Mobile: {PHONE_DISPLAY}
                </a>
              </li>

              <li className="flex items-center space-x-3 text-xs md:text-sm text-[#555555] font-medium">
                <MessageCircle size={17} className="text-[#25D366] shrink-0" />
                <a 
                  href={whatsappLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#25D366] transition-colors whitespace-nowrap"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LEGAL & COPYRIGHT BAR */}
        <div className="pt-8 border-t border-[#E8E2D3] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-wider text-[#666666]">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#E0B100] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="text-[11px] font-semibold tracking-wider text-[#777777]">
            © {currentYear} 8AM Technologies Private Limited. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
