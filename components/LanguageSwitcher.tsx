"use client";

import { useLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/content";

type Props = {
  solid?: boolean;
  className?: string;
};

export function LanguageSwitcher({ solid = true, className = "" }: Props) {
  const { locale, setLocale, t } = useLocale();

  const options: { code: Locale; label: string }[] = [
    { code: "bg", label: "BG" },
    { code: "en", label: "EN" },
  ];

  return (
    <div
      className={`flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.18em] ${className}`}
      role="group"
      aria-label={t.ui.langAria}
    >
      {options.map((opt, i) => {
        const active = locale === opt.code;
        return (
          <span key={opt.code} className="inline-flex items-center gap-1.5">
            {i > 0 ? (
              <span
                aria-hidden
                className={solid ? "opacity-35" : "opacity-45"}
              >
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLocale(opt.code)}
              className={`touch-manipulation transition-opacity ${
                active ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
              aria-pressed={active}
              aria-label={opt.label === "BG" ? "Български" : "English"}
            >
              {opt.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
