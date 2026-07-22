"use client";

import { useContent } from "@/lib/i18n";

type Props = {
  className?: string;
  compact?: boolean;
};

/** Elegant free 15-min intro note with clickable phone */
export function IntroCallout({ className = "", compact = false }: Props) {
  const { contactPage, site } = useContent();

  const [before, after] = contactPage.introNote.split(
    `(${contactPage.introDuration})`,
  );

  return (
    <a
      href={site.phoneHref}
      className={`group block max-w-md border-t border-accent/20 pt-4 transition-colors hover:border-accent/45 ${
        compact ? "" : "sm:pt-5"
      } ${className}`}
    >
      <p className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
        {contactPage.introCta}
      </p>

      <p
        className={`quote-italic mt-3 leading-relaxed text-navy/88 ${
          compact ? "text-[0.95rem]" : "text-base sm:text-[1.15rem]"
        }`}
      >
        {before.trimEnd()}{" "}
        <span className="whitespace-nowrap not-italic font-display text-[1.05em] text-accent">
          ({contactPage.introDuration})
        </span>{" "}
        {after.trimStart()}
      </p>

      <p
        className={`font-display mt-4 tracking-tight text-navy transition-colors group-hover:text-accent ${
          compact ? "text-lg" : "text-xl sm:text-2xl"
        }`}
      >
        {site.phone}
      </p>
    </a>
  );
}
