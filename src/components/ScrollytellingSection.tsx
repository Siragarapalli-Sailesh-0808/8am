"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BellRing,
  BusFront,
  MapPinned,
  School2,
  ShieldCheck,
  Smartphone,
  Ticket,
} from "lucide-react";

const steps = [
  {
    tag: "The Smart Tap",
    title: "Secure Boarding with",
    accent: "RFID",
    desc: "As students board, a simple RFID tap instantly logs their presence. No more manual attendance; just pure, automated safety.",
  },
  {
    tag: "Live Visibility",
    title: "Real-Time Bus",
    accent: "Tracking",
    desc: "Parents and schools watch the journey live on an interactive map. Every turn and every stop is visible in real-time.",
  },
  {
    tag: "Peace of Mind",
    title: "Instant Mobile",
    accent: "Alerts",
    desc: "The moment the bus arrives at school, parents get a notification. Total transparency from doorstep to classroom.",
  },
];

const StepCard = ({ step, index, onActive, showVisualBelow }: { step: any; index: number; onActive: (i: number) => void; showVisualBelow?: boolean }) => {
  const ref = useRef(null);
  // Detects when the card is in the center of the screen
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [isInView, index, onActive]);

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{
          opacity: isInView ? 1 : 0.3,
          scale: isInView ? 1.05 : 0.9,
          filter: isInView ? "blur(0px)" : "blur(2px)"
        }}
        transition={{ duration: 0.5 }}
        className={`p-10 rounded-[40px] border-2 transition-all duration-500 flex flex-col justify-center min-h-[400px] md:min-h-[350px] ${isInView ? "border-[#E0B100] bg-[var(--card-bg)] shadow-xl" : "border-transparent bg-[#F8F7F2]/50"
          }`}
      >
        <div className="flex items-center space-x-4 mb-6">
          <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 ${isInView ? "bg-[#E0B100] text-[#222222]" : "bg-gray-200 text-gray-400"
            }`}>
            0{index + 1}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#222222]/40">
            {step.tag}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-[#222222] mb-6 leading-tight">
          {step.title} <span className="italic font-serif text-[#E0B100]">{step.accent}</span>
        </h3>
        <p className="text-[#222222]/60 text-base md:text-lg leading-relaxed font-medium">
          {step.desc}
        </p>
      </motion.div>

      {/* Mobile Visual - Shows below card on mobile only */}
      {showVisualBelow && (
        <div className="lg:hidden mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full"
          >
            {/* Outer Gold Accent Border */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#E0B100] to-[#FFC700] rounded-[20px] opacity-60 blur-sm" />

            {/* Main Dark Border */}
            <div className="relative bg-[var(--card-bg)] border-4 border-[#222222]/20 rounded-[16px] overflow-hidden shadow-2xl">
              {/* Subtle Gold Edge Accent */}
              <div className="absolute inset-0 border-2 border-[#E0B100]/30 rounded-[12px] pointer-events-none" />

              <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden">
                {index === 0 && (
                  <img
                    src="/boarding.jpeg"
                    alt="Secure Boarding with RFID"
                    className="w-full h-full object-cover"
                  />
                )}
                {index === 1 && (
                  <video
                    src="/tracking.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
                {index === 2 && (
                  <img
                    src="/alerts.jpeg"
                    alt="Instant Mobile Alerts"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

function BoardingVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="absolute inset-0 flex items-center justify-center p-8 bg-[var(--card-bg)]"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative"
      >
        {/* Outer Gold Accent Border */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#E0B100] to-[#FFC700] rounded-[24px] opacity-60 blur-sm" />

        {/* Main Dark Border */}
        <div className="relative bg-[var(--card-bg)] border-4 border-[#222222]/20 rounded-[20px] overflow-hidden shadow-2xl">
          {/* Subtle Gold Edge Accent */}
          <div className="absolute inset-0 border-2 border-[#E0B100]/30 rounded-[16px] pointer-events-none" />

          <img
            src="/boarding.jpeg"
            alt="Secure Boarding with RFID"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function TrackingVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="absolute inset-0 flex items-center justify-center bg-[var(--card-bg)] p-8"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Outer Gold Accent Border */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#E0B100] to-[#FFC700] rounded-[24px] opacity-60 blur-sm" />

        {/* Main Dark Border */}
        <div className="relative bg-[var(--card-bg)] border-4 border-[#222222]/20 rounded-[20px] overflow-hidden shadow-2xl">
          {/* Subtle Gold Edge Accent */}
          <div className="absolute inset-0 border-2 border-[#E0B100]/30 rounded-[16px] pointer-events-none" />

          <video
            src="/tracking.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArrivalVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="absolute inset-0 flex items-center justify-center bg-[var(--card-bg)] p-8"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative"
      >
        {/* Outer Gold Accent Border */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#E0B100] to-[#FFC700] rounded-[24px] opacity-60 blur-sm" />

        {/* Main Dark Border */}
        <div className="relative bg-[var(--card-bg)] border-4 border-[#222222]/20 rounded-[20px] overflow-hidden shadow-2xl">
          {/* Subtle Gold Edge Accent */}
          <div className="absolute inset-0 border-2 border-[#E0B100]/30 rounded-[16px] pointer-events-none" />

          <img
            src="/alerts.jpeg"
            alt="Instant Mobile Alerts"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ScrollytellingSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-[#F8F7F2] px-4 py-16 md:px-6 md:py-24 lg:py-32 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-20 lg:mb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#E0B100]"
          >
            Seamless Integration
          </motion.p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#222222] leading-tight">
            The Journey of <br />
            <span className="italic font-serif font-normal text-[#E0B100]">Pure Visibility.</span>
          </h2>
        </div>

        {/* Desktop Layout: 2 Columns with Sticky Right */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20">
          <div className="space-y-12 py-[20vh]">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                onActive={(i) => setActiveStep(i)}
                showVisualBelow={false}
              />
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-[20vh] h-[60vh] w-full rounded-[64px] bg-[var(--card-bg)] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-[#E8E2D3] overflow-hidden">
              <AnimatePresence mode="wait">
                {activeStep === 0 && <BoardingVisual key="boarding" />}
                {activeStep === 1 && <TrackingVisual key="tracking" />}
                {activeStep === 2 && <ArrivalVisual key="arrival" />}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout: Stacked with Visuals Below */}
        <div className="lg:hidden space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              onActive={(i) => setActiveStep(i)}
              showVisualBelow={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
