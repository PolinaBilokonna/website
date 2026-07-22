"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/Parallax";
import { ServiceCard } from "@/components/ServiceCard";
import { useContent } from "@/lib/i18n";

export function ApproachSection() {
  const { home } = useContent();

  return (
    <section className="overflow-x-clip pb-14 pt-4 sm:pb-20 sm:pt-10 md:pb-24">
      <div className="page-shell">
        <div className="section-rule mb-10 sm:mb-16" />
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <ScrollReveal y={20}>
            <p className="eyebrow tracking-[0.22em] sm:tracking-[0.28em]">
              {home.approachEyebrow}
            </p>
            <h2 className="font-display mt-3 max-w-sm text-[1.85rem] leading-tight tracking-tight text-navy sm:mt-4 sm:text-4xl md:text-[2.75rem]">
              {home.approachTitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.06} y={20}>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
              <p className="text-[0.95rem] leading-relaxed text-muted sm:text-base">
                {home.approachBody}
              </p>
              <p className="text-[0.95rem] leading-relaxed text-muted sm:text-base">
                {home.approachNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const { home, services } = useContent();

  return (
    <section id="services" className="overflow-x-clip py-12 sm:py-20 md:py-24">
      <div className="page-shell">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <ScrollReveal y={16}>
            <p className="eyebrow">{home.servicesEyebrow}</p>
            <h2 className="font-display mt-2 text-[1.85rem] tracking-tight text-navy sm:mt-3 sm:text-4xl">
              {home.servicesTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05} y={12}>
            <Link
              href="/services"
              className="btn-link shrink-0 py-1 text-sm text-muted hover:text-navy sm:pb-1"
            >
              {home.servicesCta} →
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3 md:gap-6 md:items-start">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={0.05 * i} y={20}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeliefQuote() {
  const { home } = useContent();

  return (
    <section className="water-band">
      <div className="page-shell relative z-10 px-1 py-16 text-center sm:py-24 md:py-28">
        <ScrollReveal y={16}>
          <p
            aria-hidden
            className="font-display text-5xl leading-none text-white/25 sm:text-6xl"
          >
            „
          </p>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-white/75 sm:text-xs sm:tracking-[0.32em]">
            {home.beliefEyebrow}
          </p>
          <blockquote className="quote-italic mx-auto mt-5 max-w-3xl text-[1.3rem] leading-snug text-white sm:mt-6 sm:text-3xl md:text-[2.35rem]">
            {home.beliefQuote}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
