"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { BookingLink } from "@/components/BookingLink";
import { useContent } from "@/lib/i18n";
import { useIsMobile } from "@/lib/useIsMobile";

export function HeroSection() {
  const { home } = useContent();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce || isMobile ? ["0%", "0%"] : ["0%", "10%"],
  );

  return (
    <section ref={ref} className="overflow-x-clip pt-[5.5rem] sm:pt-28 md:pt-32">
      <div className="page-shell grid gap-7 pb-10 sm:gap-10 sm:pb-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 lg:pb-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl lg:col-start-1 lg:row-start-1 lg:self-end"
        >
          <p className="eyebrow">{home.heroEyebrow}</p>
          <h1 className="font-display mt-4 text-[2rem] leading-[1.12] tracking-tight text-navy sm:mt-5 sm:text-5xl md:text-[3.4rem]">
            <span className="block">{home.heroTitle}</span>
            <span className="quote-italic mt-1.5 block text-[1.02em] text-accent">
              {home.heroTitleAccent}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none lg:self-stretch"
        >
          <div className="portrait-frame">
            {reduce || isMobile ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={home.heroImage}
                alt={home.heroAlt}
                className="aspect-[4/5] max-h-[min(58vh,520px)] w-full object-cover object-[center_18%] sm:max-h-none"
                fetchPriority="high"
              />
            ) : (
              <motion.img
                src={home.heroImage}
                alt={home.heroAlt}
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
                style={{ y: imageY, scale: 1.06, willChange: "transform" }}
                fetchPriority="high"
              />
            )}
          </div>

          <aside className="soft-card relative z-10 mx-2 -mt-8 border-l-[3px] border-l-accent/50 px-4 py-3.5 sm:mx-6 sm:-mt-14 sm:px-6 sm:py-5 lg:absolute lg:bottom-6 lg:left-6 lg:right-6 lg:mx-0 lg:mt-0">
            <p className="quote-italic text-[0.9rem] leading-snug text-navy/90 sm:text-base">
              „{home.yalomQuote}“
            </p>
            <p className="mt-1.5 text-[0.7rem] tracking-wide text-muted sm:mt-2 sm:text-xs">
              {home.yalomCite}
            </p>
          </aside>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-xl flex-col lg:col-start-1 lg:row-start-2 lg:self-start"
        >
          <p className="text-[0.95rem] leading-relaxed text-muted sm:text-base md:text-lg">
            {home.heroLead}
          </p>

          <div className="mt-7 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
            <BookingLink className="btn-primary btn-stack-mobile">
              {home.ctaPrimary.label}
            </BookingLink>
            <Link
              href={home.ctaSecondary.href}
              className="btn-link justify-center py-2 text-sm sm:justify-start sm:py-0 sm:text-[0.95rem]"
            >
              {home.ctaSecondary.label} →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
