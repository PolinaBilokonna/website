"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useContent } from "@/lib/i18n";
import { useIsMobile } from "@/lib/useIsMobile";

const icons: Record<string, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
};

type Props = {
  className?: string;
  showHandles?: boolean;
  compact?: boolean;
};

export function SocialLinks({
  className = "",
  showHandles = false,
  compact = false,
}: Props) {
  const { socials } = useContent();
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <ul
      className={`flex flex-wrap items-center gap-1 sm:gap-3 ${className}`}
    >
      {socials.map((social, index) => (
        <motion.li
          key={social.name}
          initial={reduce ? false : { opacity: 0.35, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 20,
            delay: index * 0.05,
          }}
          className="overflow-visible"
        >
          <motion.a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`group relative inline-flex min-h-11 items-center gap-2 rounded-sm text-muted outline-none touch-manipulation ${
              compact ? "px-2 py-2" : "px-2.5 py-2.5 sm:px-3 sm:py-2"
            }`}
            whileHover={
              reduce || isMobile
                ? undefined
                : {
                    y: -2,
                    color: "var(--accent)",
                  }
            }
            whileTap={
              reduce
                ? undefined
                : {
                    scale: 0.98,
                    color: "var(--accent)",
                  }
            }
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
          >
            <span className="relative z-[1] inline-flex">{icons[social.name]}</span>
            {showHandles ? (
              <span className="nav-link relative z-[1] text-sm tracking-wide">
                {social.handle}
              </span>
            ) : (
              <span className="nav-link relative z-[1] text-xs uppercase tracking-[0.14em]">
                {social.name}
              </span>
            )}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}
