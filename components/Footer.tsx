"use client";

import Link from "next/link";
import { useContent } from "@/lib/i18n";
import { SocialLinks } from "./SocialLinks";
import { IntroCallout } from "./IntroCallout";

export function Footer() {
  const { site, footer } = useContent();

  return (
    <footer className="mt-auto border-t border-border/80 bg-white/55 backdrop-blur-sm">
      <div className="page-shell py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-md">
            <Link
              href="/"
              className="font-display nav-link text-lg tracking-tight text-navy sm:text-2xl"
            >
              {site.nameDisplay}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted">{site.role}</p>
            <IntroCallout className="mt-5" compact />
          </div>

          <div className="flex flex-col gap-3 text-sm sm:items-end sm:text-right">
            <p className="max-w-xs text-muted sm:ml-auto">{site.address}</p>
            <SocialLinks className="mt-1 sm:-mr-1 sm:justify-end" compact />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border/70 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footer.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link text-sm text-navy/80 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.nameShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
