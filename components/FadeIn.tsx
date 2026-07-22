"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { ScrollReveal } from "./Parallax";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Backwards-compatible reveal - now uses stronger scroll motion */
export function FadeIn({ children, className = "", delay = 0 }: Props) {
  return (
    <ScrollReveal className={className} delay={delay}>
      {children}
    </ScrollReveal>
  );
}

export function HeroMotion({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
