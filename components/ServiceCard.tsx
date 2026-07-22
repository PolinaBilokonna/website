"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookingLink } from "@/components/BookingLink";
import { useContent } from "@/lib/i18n";

type Service = ReturnType<typeof useContent>["services"][number];

type Props = {
  service: Service;
  defaultOpen?: boolean;
};

export function ServiceCard({ service, defaultOpen = false }: Props) {
  const { servicesPage } = useContent();
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const panelId = useId();

  return (
    <article
      id={service.id}
      className={`soft-card soft-card-lift scroll-mt-28 h-full overflow-hidden transition-[box-shadow,border-color] ${
        open ? "border-accent-soft/50 shadow-[0_16px_40px_rgba(21,32,43,0.1)]" : ""
      }`}
    >
      <button
        type="button"
        className="flex w-full flex-col p-5 text-left touch-manipulation sm:p-8"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="font-display text-2xl tracking-[0.08em] text-accent-mint sm:text-[1.65rem]">
            {service.number}
          </p>
          <span
            aria-hidden
            className={`mt-1 text-lg text-muted transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>
        <h3 className="font-display mt-4 text-xl tracking-tight text-navy sm:mt-5 sm:text-[1.5rem]">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted sm:mt-3 sm:text-[0.95rem]">
          {service.description}
        </p>
        <span className="nav-link mt-4 self-start text-sm text-accent">
          {open ? servicesPage.collapse : servicesPage.expand}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="details"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 border-t border-border/70 px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
              {service.details.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]"
                >
                  {paragraph}
                </p>
              ))}

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {servicesPage.forWhomLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.forWhom}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {servicesPage.focusLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {service.focus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <BookingLink className="btn-primary mt-2 inline-flex">
                {servicesPage.bookCta}
              </BookingLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
