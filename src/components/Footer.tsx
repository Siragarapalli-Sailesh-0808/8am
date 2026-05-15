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
  ArrowRight 
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
            <Link href="/" className="group mb-8">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="8AM Logo" 
                  className="h-16 w-auto mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
            </Link>
            
            <h2 className="text-2xl md:text-3xl font-black leading-tight mb-6 max-w-md uppercase tracking-tight">
              8AM <br />
              <span className="headline-italic text-[#E0B100] text-3xl md:text-4xl normal-case">with absolute trust.</span>
            </h2>
            
            <p className="text-[#666666] text-sm md:text-base mb-8 max-w-sm leading-relaxed font-medium">
              India&apos;s leading student mobility intelligence platform. We bridge the gap between schools and parents with real-time safety tech.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, color: "#E0B100", borderColor: "#E0B100" }}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#222222]/60 hover:text-[#E0B100] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] mb-8">Platform</h4>
              <ul className="space-y-4">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[#666666] hover:text-[#E0B100] transition-colors flex items-center group font-bold">
                      <span>{link.name}</span>
                      <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] mb-8">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[#666666] hover:text-[#E0B100] transition-colors flex items-center group font-bold">
                      <span>{link.name}</span>
                      <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E0B100] mb-8">Headquarters</h4>
              <ul className="space-y-6">
                <li className="flex items-start space-x-3 text-sm text-[#666666] font-bold">
                  <MapPin size={18} className="text-[#E0B100] shrink-0 mt-0.5" />
                  <span>Rajahmundry, <br />Andhra Pradesh - 533104</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-[#666666] font-bold">
                  <Activity size={18} className="text-[#E0B100] shrink-0" />
                  <a href="mailto:info@8am.in" className="hover:text-[#E0B100] transition-colors">info@8am.in</a>
                </li>
                <li className="flex items-center space-x-3 text-sm text-[#666666] font-bold">
                  <Phone size={18} className="text-[#E0B100] shrink-0" />
                  <a href="tel:+918333827275" className="hover:text-[#E0B100] transition-colors">+91 83338 27275</a>
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
