"use client";

import { ScrollReveal } from "@/components/Parallax";
import { ParallaxHeading } from "@/components/ParallaxHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingLink } from "@/components/BookingLink";
import { useContent } from "@/lib/i18n";

export function ServicesPageContent() {
  const { servicesPage, services, home } = useContent();

  return (
    <section className="page-shell overflow-x-clip pb-14 pt-[5.5rem] sm:pb-24 sm:pt-28 md:pt-36">
      <ParallaxHeading>
        <p className="eyebrow">{servicesPage.title}</p>
        <h1 className="font-display mt-3 max-w-2xl text-[1.85rem] leading-tight text-navy sm:mt-4 sm:text-4xl md:text-5xl">
          {home.servicesTitle}
        </h1>
      </ParallaxHeading>
      <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-lg">
        {servicesPage.lead}
      </p>

      <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3 md:items-start md:gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.id} delay={0.05 * i} y={20}>
            <ServiceCard service={service} defaultOpen={i === 0} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-12 sm:mt-16" y={16}>
        <BookingLink className="btn-primary btn-stack-mobile">
          {servicesPage.bookCta}
        </BookingLink>
      </ScrollReveal>
    </section>
  );
}
