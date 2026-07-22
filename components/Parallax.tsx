"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px from start → end of scroll range */
  offset?: number;
  /** Optional opacity fade linked to the same scroll */
  fade?: boolean;
};

export function Parallax({
  children,
  className = "",
  offset = 80,
  fade = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.55, 1, 1, 0.55],
  );

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity: fade ? opacity : undefined, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** How much the image shifts (px). Higher = stronger parallax */
  strength?: number;
  priority?: boolean;
};

/** Image that drifts slower than scroll inside an overflow-hidden frame */
export function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 120,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength / 2, strength / 2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {reduce ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <motion.img
          src={src}
          alt={alt}
          className="h-[120%] w-full object-cover"
          style={{ y, scale, willChange: "transform" }}
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
      )}
    </div>
  );
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
};

/** Stronger in-view reveal used across pages */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 48,
  x = 0,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function useParallaxY(
  progress: MotionValue<number>,
  range: [number, number] = [60, -60],
) {
  return useTransform(progress, [0, 1], range);
}
