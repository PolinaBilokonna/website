"use client";

import { ScrollReveal } from "@/components/Parallax";
import { ParallaxHeading } from "@/components/ParallaxHeading";
import { useContent } from "@/lib/i18n";

export function SelfHelpPageContent() {
  const { selfHelpPage } = useContent();

  return (
    <section className="page-shell overflow-x-clip pb-14 pt-[5.5rem] sm:pb-24 sm:pt-28 md:pt-36">
      <ParallaxHeading>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {selfHelpPage.title}
        </p>
        <h1 className="font-display mt-3 max-w-2xl text-[1.75rem] leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
          {selfHelpPage.lead}
        </h1>
      </ParallaxHeading>

      {selfHelpPage.items.length === 0 ? (
        <p className="mt-10 text-muted sm:mt-12">{selfHelpPage.empty}</p>
      ) : (
        <div className="mt-10 grid gap-7 sm:mt-16 sm:grid-cols-2 sm:gap-10">
          {selfHelpPage.items.map((item, i) => (
            <ScrollReveal key={item.id} delay={0.05 * i} y={20}>
              <article className="border-t border-border/70 pt-5 sm:pt-6">
                <h2 className="font-display text-xl sm:text-3xl">{item.title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                  {item.excerpt}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      )}
    </section>
  );
}
