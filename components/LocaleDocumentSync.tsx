"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n";

/** Keeps document title + html lang in sync with the active locale */
export function LocaleDocumentSync() {
  const pathname = usePathname();
  const { locale, t } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;

    const path = pathname.replace(/\/$/, "") || "/";
    let title = `${t.site.name} - ${t.site.tagline}`;

    if (path === "/about") title = `${t.about.title} · ${t.site.name}`;
    else if (path === "/services")
      title = `${t.servicesPage.title} · ${t.site.name}`;
    else if (path === "/book") title = `${t.bookingPage.title} · ${t.site.name}`;
    else if (path === "/self-help")
      title = `${t.selfHelpPage.title} · ${t.site.name}`;
    else if (path === "/contact")
      title = `${t.contactPage.title} · ${t.site.name}`;

    document.title = title;
  }, [locale, pathname, t]);

  return null;
}
