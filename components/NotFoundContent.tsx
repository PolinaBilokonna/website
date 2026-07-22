"use client";

import Link from "next/link";
import { useContent } from "@/lib/i18n";

export function NotFoundContent() {
  const { ui } = useContent();

  return (
    <section className="page-shell flex flex-1 flex-col items-start justify-center pb-20 pt-28 sm:pb-28 sm:pt-36">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="font-display page-title-shimmer mt-4 max-w-xl text-4xl leading-tight sm:text-5xl md:text-6xl">
        {ui.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-base text-muted sm:mt-5 sm:text-lg">
        {ui.notFoundLead}
      </p>
      <Link href="/" className="btn-primary mt-8 sm:mt-10">
        {ui.notFoundCta}
      </Link>
    </section>
  );
}
