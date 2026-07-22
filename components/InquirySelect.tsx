"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useContent } from "@/lib/i18n";

type InquiryValue = "consultation" | "mentorship" | "coaching" | "other";

type Props = {
  value: InquiryValue;
  onChange: (value: InquiryValue) => void;
  onBlur?: () => void;
  name?: string;
  error?: string;
};

export function InquirySelect({ value, onChange, onBlur, name, error }: Props) {
  const { contactPage } = useContent();
  const options = contactPage.form.inquiryOptions;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const reduce = useReducedMotion();
  const selected = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} readOnly />

      <button
        type="button"
        className={`input-field select-trigger flex w-full items-center justify-between gap-3 text-left ${
          error ? "border-red-700" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        onBlur={onBlur}
      >
        <span>{selected.label}</span>
        <motion.span
          aria-hidden
          className="text-muted"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▾
        </motion.span>
      </button>

      {open && (
        <motion.ul
          id={listId}
          role="listbox"
          initial={reduce ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="select-menu absolute z-30 mt-2 max-h-48 w-full overflow-y-auto border border-border bg-white py-1 shadow-[0_12px_40px_rgba(21,32,43,0.1)]"
        >
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  className={`flex w-full px-4 py-3 text-left text-sm transition-colors ${
                    active
                      ? "bg-accent/15 text-foreground"
                      : "text-foreground/85 hover:bg-accent/10 hover:text-foreground"
                  }`}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
}
