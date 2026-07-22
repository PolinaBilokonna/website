"use client";

import { ScrollReveal } from "@/components/Parallax";
import { ParallaxHeading } from "@/components/ParallaxHeading";
import { BookingLink } from "@/components/BookingLink";
import { useContent } from "@/lib/i18n";

export function AboutPageContent() {
  const { about, home } = useContent();

  return (
    <section className="page-shell overflow-x-clip pb-14 pt-[5.5rem] sm:pb-24 sm:pt-28 md:pt-36">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal y={28}>
          <div className="portrait-frame mx-auto max-w-sm sm:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.image}
              alt={about.imageAlt}
              className="aspect-[4/5] max-h-[min(55vh,480px)] w-full object-cover object-center sm:max-h-none sm:aspect-[5/6]"
            />
          </div>
        </ScrollReveal>

        <div>
          <ParallaxHeading>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {about.title}
            </p>
            <h1 className="font-display mt-3 text-[1.9rem] leading-tight text-navy sm:mt-4 sm:text-4xl md:text-5xl">
              {about.lead}
            </h1>
          </ParallaxHeading>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:mt-8 sm:text-lg">
            {about.body.map((p) => (
              <ScrollReveal key={p.slice(0, 24)} y={18}>
                <p>{p}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 sm:mt-12" y={22}>
            <h2 className="font-display text-2xl sm:text-3xl">
              {about.experienceTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {about.experienceIntro}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85 sm:text-base">
              {about.experienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-foreground/90 sm:text-lg">
              {about.experienceClosing}
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-10 sm:mt-12" y={22}>
            <h2 className="font-display text-2xl sm:text-3xl">
              {about.motherhoodTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {about.motherhoodBody}
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-10" y={18}>
            <BookingLink className="btn-primary">
              {home.ctaPrimary.label}
            </BookingLink>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
