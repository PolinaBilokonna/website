"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/Parallax";
import { ParallaxHeading } from "@/components/ParallaxHeading";
import { BookingLink } from "@/components/BookingLink";
import { useContent } from "@/lib/i18n";

export function BookingPageContent() {
  const { bookingPage, contactPage } = useContent();

  return (
    <section className="page-shell overflow-x-clip pb-14 pt-[5.5rem] sm:pb-24 sm:pt-28 md:pt-36">
      <ParallaxHeading>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {bookingPage.title}
        </p>
        <h1 className="font-display mt-3 max-w-2xl text-[1.75rem] leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
          {bookingPage.lead}
        </h1>
      </ParallaxHeading>

      <ScrollReveal className="mt-7 max-w-xl space-y-5 sm:mt-10 sm:space-y-6" y={20}>
        <p className="text-[0.95rem] leading-relaxed text-muted sm:text-lg">
          {bookingPage.body}
        </p>

        <BookingLink className="btn-primary btn-stack-mobile inline-flex">
          {bookingPage.cta} →
        </BookingLink>

        <p className="pt-4 text-sm text-muted">
          <Link
            href="/contact"
            className="nav-link underline decoration-accent/40 underline-offset-4 hover:text-accent"
          >
            {contactPage.title} →
          </Link>
        </p>
      </ScrollReveal>
    </section>
  );
}
