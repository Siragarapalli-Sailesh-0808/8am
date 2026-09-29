"use client";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

// LazyMotion + `m` components ship only the animation features this site uses,
// instead of the full Framer Motion bundle on every page.
// reducedMotion="user" respects the visitor's OS "reduce motion" setting.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
