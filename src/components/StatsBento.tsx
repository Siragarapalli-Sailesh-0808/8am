"use client";

import { m } from "framer-motion";

function BentoCard({
  className = "",
  children,
  label,
  desc,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  label: string;
  desc?: string;
  delay?: number;
}) {
  return (
    <m.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-[28px] p-7 md:p-10 flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#E8E2D3] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${className}`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#222222]/60 uppercase">{label}</p>
        {children}
        {desc && <p className="text-[#555555] text-sm md:text-base font-medium leading-relaxed">{desc}</p>}
      </div>
      <div className="w-12 h-1 bg-gray-100 group-hover:w-full group-hover:bg-[#E0B100] transition-all duration-500 mt-8" />
    </m.article>
  );
}

// What schools get, stated as capabilities. Swap in real results (e.g. "pilot: 12% shorter routes") once you have them.
export default function StatsBento() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] px-5 py-20 md:px-8 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bentoGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#E8E2D3" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bentoGrid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#B08A00]">What your school gets</p>
          <h2 className="display-lg font-black text-[#222222] leading-[0.95]">
            8AM Mobility <br />
            <span className="headline-italic text-[#E0B100]">Experience.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          <BentoCard
            label="Live Visibility"
            desc="See every bus on one map in real time, with delays flagged before parents start calling."
            className="md:col-span-2 md:row-span-2"
          >
            <h3 className="text-7xl md:text-8xl font-serif italic font-normal text-[#E0B100] tracking-tighter leading-none">
              Every bus.
            </h3>
          </BentoCard>

          <BentoCard
            label="Attendance"
            desc="Students tap an RFID card as they board and leave, so the transport register fills itself."
            className="md:col-span-2"
            delay={0.05}
          >
            <h3 className="text-5xl md:text-6xl font-serif italic font-normal text-[#E0B100] tracking-tighter leading-none">
              Automatic.
            </h3>
          </BentoCard>

          <BentoCard label="Routes" desc="Routes planned around fuel and ride time." delay={0.1}>
            <h3 className="text-4xl font-serif italic font-normal text-[#E0B100] tracking-tighter leading-none">Shorter.</h3>
          </BentoCard>

          <BentoCard label="Parents" desc="Fewer calls to your office every morning." delay={0.15}>
            <h3 className="text-4xl font-serif italic font-normal text-[#E0B100] tracking-tighter leading-none">Calmer.</h3>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
