"use client";
import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import StatsBento from "@/components/StatsBento";
import FinalCTA from "@/components/FinalCTA";
import AdminDashboardMockup from "@/components/AdminDashboardMockup";
import InstitutionalVault from "@/components/InstitutionalVault";
import Footer from "@/components/Footer";

export default function SchoolsPage() {
  return (
    <main className="w-full bg-[var(--background)] text-[var(--foreground)]">
      <ScrollingTicker />
      <StickyHeader />

      {/* 1. HERO */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_75%_45%,rgba(224,177,0,0.12),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-5 md:px-8 relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="bg-[#E0B100]/10 text-[#222222] px-5 py-2 rounded-full w-max mx-auto lg:mx-0 text-[10px] sm:text-xs font-black mb-8 border border-[#E0B100] tracking-[0.25em] uppercase">
              School Administration Portal
            </div>
            <h1 className="display-xl font-black leading-[0.92] tracking-tighter mb-8 text-[var(--foreground)]">
              The Gold Standard <br />
              of <span className="headline-italic text-[#E0B100]">Safety.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground)]/75 max-w-xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed">
              Give your school complete fleet visibility and student accountability, from the first pickup to the
              last drop-off, in one dashboard your transport team will actually enjoy using.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto bg-[#E0B100] text-[#222222] px-10 py-5 rounded-full font-black items-center justify-center gap-3 shadow-[0_20px_40px_-12px_rgba(224,177,0,0.45)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5"
            >
              <span>Partner with 8AM</span>
              <ArrowRight size={20} />
            </Link>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="relative"
          >
            <AdminDashboardMockup />
          </m.div>
        </div>
      </section>

      {/* 2. STANDARDS */}
      <InstitutionalVault />

      <StatsBento />
      <FinalCTA />
      <Footer />
    </main>
  );
}
