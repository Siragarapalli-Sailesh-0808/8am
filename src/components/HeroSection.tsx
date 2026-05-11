"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-14 lg:pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-white" />
        <div
          className="absolute inset-y-0 right-0 hidden w-3/5 bg-[#FFD700] lg:block"
          style={{ clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="order-1 rounded-[36px] bg-[rgba(0,0,0,0.55)] p-8 backdrop-blur-md sm:p-10 lg:p-12">
          <motion.div
            className="z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-4 py-2">
              <span className="text-sm">🇮🇳</span>
              <span className="text-xs font-semibold tracking-wide text-white sm:text-sm">
                India&apos;s #1 Mobility Platform
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                <span>Deliver students</span>
                <br />
                <span>on time and</span>
                <br />
                <span className="headline-italic text-white">ready to learn.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-xl text-base leading-8 text-white/90 sm:text-lg"
            >
              SAFEHOP combines real-time GPS visibility with instant RFID tap-in alerts, giving schools and parents accurate arrival updates, stronger accountability, and safer, better-coordinated student transportation across Indian cities every day reliably.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#FFD700] shadow-[0_8px_24px_rgba(255,215,0,0.35)] transition-shadow hover:shadow-[0_12px_28px_rgba(255,215,0,0.45)] sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="order-2 h-64 w-full rounded-3xl bg-[#FFD700] md:h-80 lg:order-2 lg:h-[36rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="hidden h-full w-full lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
