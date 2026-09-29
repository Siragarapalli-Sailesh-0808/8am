"use client";
import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { EMAIL, PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

const navLinks = [
  { name: "Parents", href: "/parents" },
  { name: "Schools", href: "/schools" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
];

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-12 left-0 right-0 z-[100] px-4 flex justify-center pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-3 bg-white/95 border border-[#E8E2D3] rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-[padding,box-shadow,border-color] duration-300
          w-full max-w-[20rem] px-4 md:max-w-4xl md:px-6
          ${isScrolled ? "py-1.5 shadow-lg border-[#E0B100]/30" : "py-2"}`}
        >
          {/* LOGO */}
          <Link href="/" aria-label="8AM home" className="flex items-center shrink-0">
            <Image
              src="/media/logo-horizontal.webp"
              alt="8AM"
              width={576}
              height={176}
              preload
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors ${
                  pathname === item.href ? "text-[#B08A00]" : "text-[#222222]/65 hover:text-[#B08A00]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors rounded-full text-[11px] font-black uppercase tracking-widest"
            >
              WhatsApp
            </a>
          </nav>

          {/* MOBILE MENU TRIGGER */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col items-center justify-center gap-1 w-10 h-10 rounded-full bg-gray-50"
          >
            <m.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-4 h-[1.5px] bg-[#222222]"
            />
            <m.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-[1.5px] bg-[#222222]"
            />
            <m.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block w-4 h-[1.5px] bg-[#222222]"
            />
          </button>
        </div>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[95] bg-white flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6 text-center px-6">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black text-[#222222] hover:text-[#B08A00] transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </m.div>
              ))}

              <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-3 text-sm font-bold text-[#555555]">
                <a href={`mailto:${EMAIL}`} className="hover:text-[#B08A00]">{EMAIL}</a>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-[#B08A00]">Call: {PHONE_DISPLAY}</a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-white rounded-full font-black text-xs uppercase tracking-wider"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
