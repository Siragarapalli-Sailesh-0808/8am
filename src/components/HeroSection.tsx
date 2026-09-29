"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { m, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor follower driven by motion values: moving the mouse causes zero React re-renders
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cx = useSpring(mx, { damping: 22, stiffness: 220, mass: 0.5 });
  const cy = useSpring(my, { damping: 22, stiffness: 220, mass: 0.5 });

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };
  const pause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left - 48);
    my.set(e.clientY - rect.top - 48);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] pt-36 lg:pt-44">
      {/* soft static glow (cheap to render, no blur filter) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(224,177,0,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 md:px-8 text-center">
        <m.div
          className="flex max-w-3xl flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <m.h1
            variants={fadeInUp}
            className="display-xl mb-8 font-black leading-[0.9] tracking-[-0.06em] text-[#222222]"
          >
            The morning commute,
            <br />
            <span className="headline-italic text-[#E0B100] tracking-tight">re-engineered.</span>
          </m.h1>

          <m.p
            variants={fadeInUp}
            className="mb-10 max-w-xl text-base leading-relaxed text-[#222222]/75 sm:text-lg lg:text-xl font-medium"
          >
            8AM is a routing-intelligence platform for Indian school transport: automatic nodal points,
            fuel-aware routes, and live driver, parent and ops apps in one calm system.
          </m.p>

          <m.div variants={fadeInUp} className="mb-14 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#E0B100] px-10 py-5 text-base font-black text-[#222222] shadow-[0_20px_40px_-12px_rgba(224,177,0,0.45)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-12px_rgba(224,177,0,0.55)] active:translate-y-0"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </m.div>
        </m.div>

        {/* VIDEO PLAYER: loads nothing until the visitor asks for it */}
        <m.div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={(e) => e.pointerType === "mouse" && play()}
          onPointerLeave={(e) => e.pointerType === "mouse" && pause()}
          className="group relative w-full max-w-5xl aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_40px_80px_-24px_rgba(0,0,0,0.3)] border-2 md:border-4 border-white bg-[#101522] md:cursor-none"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <video
            ref={videoRef}
            poster="/media/hero-poster.jpg"
            preload="none"
            loop
            muted
            playsInline
            aria-label="8AM product demo video"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>

          {/* Tap-to-play for touch screens (and keyboard) */}
          <button
            type="button"
            onClick={() => (isPlaying ? pause() : play())}
            aria-label={isPlaying ? "Pause demo video" : "Play demo video"}
            className="absolute inset-0 z-10 flex items-center justify-center focus-visible:outline-4 focus-visible:outline-[#E0B100]"
          >
            <AnimatePresence>
              {!isPlaying && (
                <m.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center"
                >
                  <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#E0B100] shadow-2xl">
                    <Play className="ml-1 h-7 w-7 md:h-8 md:w-8 fill-[#222222] text-[#222222]" />
                  </span>
                  <span className="mt-4 text-white font-black uppercase tracking-[0.3em] text-[10px]">
                    <span className="hidden md:inline">Hover or click</span>
                    <span className="md:hidden">Tap</span> to play
                  </span>
                </m.span>
              )}
            </AnimatePresence>
            {isPlaying && (
              <span className="md:hidden absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white">
                <Pause className="h-4 w-4" />
              </span>
            )}
          </button>

          {/* Cursor follower (desktop mouse only) */}
          <m.div
            aria-hidden
            style={{ x: cx, y: cy }}
            className="absolute left-0 top-0 pointer-events-none z-20 hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-[#E0B100] text-[#222222] shadow-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-200"
          >
            <span className="text-[10px] font-black uppercase tracking-tighter">
              {isPlaying ? "Playing" : "Play"}
            </span>
          </m.div>

          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30 pointer-events-none">
            <div className="bg-black/40 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E0B100]" />
              <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest">
                8AM Intelligence Hub
              </span>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
