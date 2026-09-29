"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { m, useInView, AnimatePresence } from "framer-motion";

type Step = { tag: string; title: string; accent: string; desc: string };

const steps: Step[] = [
  {
    tag: "The Smart Tap",
    title: "Secure Boarding with",
    accent: "RFID",
    desc: "As students board, a simple RFID tap logs their presence. No more manual attendance, just automatic, reliable records.",
  },
  {
    tag: "Live Visibility",
    title: "Real-Time Bus",
    accent: "Tracking",
    desc: "Parents and schools follow the journey live on a map. Every turn and every stop is visible as it happens.",
  },
  {
    tag: "Peace of Mind",
    title: "Instant Mobile",
    accent: "Alerts",
    desc: "The moment the bus reaches school, parents get a notification. Clear updates from doorstep to classroom.",
  },
];

/** true on ≥1024px, false below, null before hydration */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

function StepVisual({ index, className = "" }: { index: number; className?: string }) {
  if (index === 1) {
    return (
      <video
        src="/media/tracking.mp4"
        poster="/media/tracking-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Live bus tracking on a map"
        className={`w-full h-auto object-cover ${className}`}
      />
    );
  }
  const img =
    index === 0
      ? { src: "/media/boarding.webp", alt: "Student tapping an RFID card while boarding the bus" }
      : { src: "/media/alerts.webp", alt: "Parent receiving an arrival alert on the phone" };
  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={1024}
      height={559}
      sizes="(max-width: 1024px) 92vw, 560px"
      className={`w-full h-auto object-cover ${className}`}
    />
  );
}

function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-1 bg-gradient-to-br from-[#E0B100] to-[#FFC700] rounded-[22px] opacity-50" />
      <div className="relative bg-white border-4 border-white rounded-[18px] overflow-hidden shadow-2xl">
        {children}
      </div>
    </div>
  );
}

function StepCard({
  step,
  index,
  onActive,
  showVisualBelow,
}: {
  step: Step;
  index: number;
  onActive: (i: number) => void;
  showVisualBelow: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) onActive(index);
  }, [isInView, index, onActive]);

  // On phones every card is fully readable; the "focus" effect is only for the desktop scroll story
  const focused = showVisualBelow || isInView;

  return (
    <div>
      <m.div
        ref={ref}
        animate={{ opacity: focused ? 1 : 0.35, scale: focused ? 1 : 0.97 }}
        transition={{ duration: 0.4 }}
        className={`p-7 md:p-10 rounded-[32px] border-2 transition-colors duration-300 flex flex-col justify-center lg:min-h-[340px] ${
          focused ? "border-[#E0B100] bg-white shadow-xl" : "border-transparent bg-white/50"
        }`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
              focused ? "bg-[#E0B100] text-[#222222]" : "bg-gray-200 text-gray-500"
            }`}
          >
            0{index + 1}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#222222]/60">{step.tag}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-[#222222] mb-5 leading-tight">
          {step.title} <span className="headline-italic text-[#E0B100]">{step.accent}</span>
        </h3>
        <p className="text-[#222222]/70 text-base md:text-lg leading-relaxed font-medium">{step.desc}</p>
      </m.div>

      {showVisualBelow && (
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <VisualFrame>
            <StepVisual index={index} />
          </VisualFrame>
        </m.div>
      )}
    </div>
  );
}

export default function ScrollytellingSection() {
  const [activeStep, setActiveStep] = useState(0);
  const isDesktop = useIsDesktop();

  return (
    <section className="relative bg-[#F8F7F2] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 md:mb-20 text-center">
          <m.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#B08A00]"
          >
            Seamless Integration
          </m.p>
          <h2 className="display-lg font-black text-[#222222] leading-[0.95]">
            The Journey of <br />
            <span className="headline-italic text-[#E0B100]">Pure Visibility.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 lg:space-y-12 lg:py-[18vh]">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                onActive={setActiveStep}
                showVisualBelow={isDesktop === false}
              />
            ))}
          </div>

          {/* Desktop only: sticky visual that follows the active step */}
          <div className="relative hidden lg:block">
            <div className="sticky top-[22vh] flex h-[56vh] min-h-[360px] w-full items-center justify-center overflow-hidden rounded-[48px] border border-[#E8E2D3] bg-white p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]">
              {isDesktop && (
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="w-full"
                  >
                    <VisualFrame>
                      <StepVisual index={activeStep} />
                    </VisualFrame>
                  </m.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
