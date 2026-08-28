"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Globe,
  Share2,
  Activity, 
  Phone, 
  MapPin, 
  ArrowRight,
  Mail,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Parent App", href: "/parents" },
      { name: "School Dashboard", href: "/schools" },
    ],
    company: [
      { name: "Our Story", href: "/company" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <Globe size={18} />, href: "#" },
    { icon: <Share2 size={18} />, href: "#" },
    { icon: <Globe size={18} />, href: "#" },
  ];

  return (
    <footer className="relative bg-[#F8F7F2] text-[#222222] pt-24 pb-12 overflow-hidden">
      {/* MINIMALIST TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#E0B100]/20" />
      
      {/* BACKGROUND DECO - Faded Golden Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
           <path d="M-100 200 Q 200 50 400 200 T 900 200" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="12 12" />
           <path d="M-100 300 Q 300 150 500 300 T 1000 300" fill="none" stroke="#E0B100" strokeWidth="1" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="group mb-6">
              <img 
                src="/logo-horizontal.png" 
                alt="8AM Mobility Platform Logo" 
                className="h-12 md:h-14 w-auto object-contain hover:scale-105 transition-all duration-300" 
              />
            </Link>
            
            <p className="text-[#555555] text-sm md:text-base mb-8 max-w-md leading-relaxed font-medium">
              India&apos;s leading student mobility intelligence platform. We bridge the gap between schools and parents with real-time safety technology and absolute trust.
            </p>

            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, color: "#E0B100", borderColor: "#E0B100" }}
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#222222]/60 hover:text-[#E0B100] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS & CONTACT COLUMNS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] mb-6">Platform</h4>
              <ul className="space-y-3.5">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[#555555] hover:text-[#E0B100] transition-colors flex items-center group font-semibold">
                      <span>{link.name}</span>
                      <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] mb-6">Company</h4>
              <ul className="space-y-3.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[#555555] hover:text-[#E0B100] transition-colors flex items-center group font-semibold">
                      <span>{link.name}</span>
                      <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-[240px]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-xs md:text-sm text-[#555555] font-semibold">
                  <MapPin size={18} className="text-[#E0B100] shrink-0 mt-0.5" />
                  <span className="leading-snug">Rajahmundry, <br />Andhra Pradesh - 533104</span>
                </li>
                <li className="flex items-center space-x-3 text-xs md:text-sm text-[#555555] font-semibold">
                  <Mail size={18} className="text-[#E0B100] shrink-0" />
                  <a href="mailto:8amplatform@gmail.com" className="hover:text-[#E0B100] transition-colors whitespace-nowrap">8amplatform@gmail.com</a>
                </li>
                <li className="flex items-center space-x-3 text-xs md:text-sm text-[#555555] font-semibold">
                  <Phone size={18} className="text-[#E0B100] shrink-0" />
                  <a href="tel:+918143528142" className="hover:text-[#E0B100] transition-colors whitespace-nowrap">Mobile: +91 81435 28142</a>
                </li>
                <li className="flex items-center space-x-3 text-xs md:text-sm text-[#555555] font-semibold">
                  <MessageCircle size={18} className="text-[#25D366] shrink-0" />
                  <a 
                    href="https://wa.me/918374054499" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#25D366] transition-colors whitespace-nowrap"
                  >
                    WhatsApp: +91 83740 54499
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#E0B100] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            © {currentYear} 8AM Mobility Intelligence. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#E0B100] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E0B100]">System Live</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
