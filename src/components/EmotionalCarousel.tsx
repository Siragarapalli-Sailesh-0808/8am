"use client";
import React from "react";
import { m } from "framer-motion";
import { Heart, School, Bus } from "lucide-react";

// Honest "who it's for" cards. Replace with real, permission-granted testimonials when you have them.
const audiences = [
  {
    icon: Heart,
    who: "For parents",
    line: "Know the moment your child boards, where the bus is right now, and when they reach school, without a single phone call.",
    points: ["Boarding & arrival alerts", "Live bus on the map", "Delay notifications"],
  },
  {
    icon: School,
    who: "For schools",
    line: "One calm dashboard for every route, every bus and every student, with attendance recorded automatically.",
    points: ["RFID attendance", "Fleet overview", "Fewer parent calls"],
  },
  {
    icon: Bus,
    who: "For drivers & attendants",
    line: "A simple, distraction-free app with clear stops and pickups, so the focus stays on safe driving.",
    points: ["Turn-by-turn stops", "One-tap roll call", "Direct line to ops"],
  },
];

export const EmotionalCarousel = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8F7F2] overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <m.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#B08A00] text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
          >
            Everyone on the school run
          </m.span>
          <m.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="display-lg font-black text-[var(--foreground)]"
          >
            Built for families, <br />
            <span className="headline-italic text-[#E0B100]">schools and drivers.</span>
          </m.h2>
        </div>
      </div>

      {/* Phones: swipe row with snap. Desktop: 3-column grid */}
      <div className="mx-auto max-w-6xl md:px-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {audiences.map((a, i) => (
            <m.article
              key={a.who}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto bg-white rounded-[32px] p-7 md:p-8 border border-[#E8E2D3] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FDF7E7] flex items-center justify-center text-[#B08A00] mb-6">
                <a.icon size={26} />
              </div>
              <h3 className="text-2xl font-black text-[#222222] mb-3 leading-tight">{a.who}</h3>
              <p className="text-base text-[#222222]/75 font-medium leading-relaxed mb-6">{a.line}</p>
              <ul className="mt-auto space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm font-bold text-[#222222]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E0B100]" />
                    {p}
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalCarousel;
