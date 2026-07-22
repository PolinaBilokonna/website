"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Soft parallax block for section intros - no twist */
export function ParallaxHeading({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.55],
  );

  if (reduce) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, willChange: "transform" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Sleek word-by-word mask reveal (modern editorial) */
export function RevealTitle({
  text,
  className = "",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="mr-[0.28em] inline-block overflow-hidden align-bottom last:mr-0"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
              duration: 0.75,
              delay: 0.08 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
      <motion.span
        aria-hidden
        className="mt-4 block h-px w-0 bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: "4.5rem" }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </Tag>
  );
}

/** @deprecated Use RevealTitle */
export const TwirlTitle = RevealTitle;
