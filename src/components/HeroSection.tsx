"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#F8F7F2] pt-32 lg:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[#F8F7F2]" />
        <div
          className="absolute inset-y-0 right-0 hidden w-3/5 bg-[#E0B100] lg:block"
          style={{ clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.2fr,0.8fr] lg:gap-24 lg:px-8">
        <div className="order-1">
          <motion.div
            className="z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h1 className="text-5xl font-extrabold leading-[1] text-[#E0B100] sm:text-6xl lg:text-[7.5rem] tracking-tight lg:leading-[0.9]">
                <span>Deliver students</span>
                <br />
                <span>on time and</span>
                <br />
                <span className="headline-italic text-[#E0B100]">ready to learn.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mb-10 max-w-xl text-lg leading-relaxed text-[#222222]/70 sm:text-xl lg:text-2xl lg:opacity-60"
            >
              8AM combines real-time GPS visibility with instant RFID tap-in alerts, giving schools and parents absolute transparency and safety.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#E0B100] px-12 py-6 text-base font-black text-[#222222] shadow-[0_25px_50px_-12px_rgba(224,177,0,0.4)] transition-all hover:shadow-[0_30px_60px_-12px_rgba(224,177,0,0.5)] tracking-tight"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* EYE-CATCHING LANDSCAPE HERO VIDEO - OPTIMIZED FOR MOBILE */}
        <motion.div
          className="order-2 relative w-full aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-2 md:border-4 border-white/20 bg-[#222222]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <video 
            src="/hero_demo.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Professional Overlay Badge */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-black/20 backdrop-blur-xl border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#E0B100] animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">8AM Intelligence Hub</span>
            </motion.div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
