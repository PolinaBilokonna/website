"use client";

import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { ScrollReveal } from "@/components/Parallax";
import { IntroCallout } from "@/components/IntroCallout";
import { useContent } from "@/lib/i18n";

export function ContactPageContent() {
  const { contactPage, site, ui } = useContent();

  return (
    <section className="page-shell overflow-x-clip pb-14 pt-[5.5rem] sm:pb-24 sm:pt-28 md:pt-36">
      <div className="grid gap-8 sm:gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <ScrollReveal y={24} className="min-w-0">
          <p className="font-display page-soft-name text-2xl tracking-tight sm:text-4xl">
            {contactPage.title}
          </p>
          <h1 className="font-display page-title-shimmer mt-3 text-[1.65rem] leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
            {contactPage.lead}
          </h1>

          <IntroCallout className="mt-6 max-w-md sm:mt-8" />

          <div className="mt-8 space-y-5 sm:mt-10">
            <p className="text-sm text-muted">
              <span className="block text-xs uppercase tracking-[0.16em]">
                {ui.addressLabel}
              </span>
              <span className="mt-1.5 block text-base text-foreground">
                {site.address}
              </span>
            </p>

            <p className="break-all text-sm text-muted sm:break-normal">
              <span className="block text-xs uppercase tracking-[0.16em]">
                {ui.emailLabel}
              </span>
              <a
                href={`mailto:${site.email}`}
                className="nav-link mt-1.5 inline-block text-foreground"
              >
                {site.email}
              </a>
            </p>

            <div className="overflow-visible pt-2 pl-1 sm:pl-2">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {contactPage.socialHeading}
              </p>
              <SocialLinks className="mt-3 sm:mt-4" showHandles />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} y={32}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
