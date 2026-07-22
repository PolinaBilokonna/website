"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BookingLink } from "./BookingLink";
import { useContent } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const { site, nav, home, ui } = useContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 12);
  });

  useEffect(() => {
    setScrolled(window.scrollY > 12);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-border/70 bg-white/95 shadow-[0_8px_30px_rgba(21,32,43,0.06)] backdrop-blur-md"
          : "border-transparent bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="page-shell flex h-14 items-center justify-between gap-3 sm:h-[4.25rem] sm:gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-medium text-cream sm:h-10 sm:w-10 sm:text-base">
            П
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-[0.95rem] tracking-tight text-navy sm:text-[1.1rem]">
              <span className="sm:hidden">{site.nameShort}</span>
              <span className="hidden sm:inline">{site.nameDisplay}</span>
            </span>
            <span className="block text-[0.65rem] text-muted sm:text-xs">
              {site.shortRole}
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-5">
          <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link text-[0.8rem] ${
                    active ? "font-medium text-navy" : "text-muted hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageSwitcher className="hidden lg:flex" />

          <BookingLink className="btn-primary hidden !min-h-10 !px-4 !text-[0.8rem] md:inline-flex">
            {home.ctaPrimary.label}
          </BookingLink>

          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 touch-manipulation lg:hidden"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              className="block h-px w-5 origin-center bg-navy"
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 3.5 : 0,
              }}
            />
            <motion.span
              className="block h-px w-5 origin-center bg-navy"
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -3.5 : 0,
              }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto overflow-x-hidden border-b border-border bg-white text-foreground lg:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-5 pb-8 pt-2">
              {nav.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="font-display nav-link block py-3.5 text-[1.35rem] tracking-tight touch-manipulation"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center justify-between border-t border-border/70 pt-4">
                <span className="text-xs uppercase tracking-[0.16em] text-muted">
                  {ui.langAria}
                </span>
                <LanguageSwitcher />
              </li>
              <li className="pt-4">
                <BookingLink
                  className="btn-primary w-full"
                  onClick={() => setOpen(false)}
                >
                  {home.ctaPrimary.label}
                </BookingLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
