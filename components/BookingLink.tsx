"use client";

import type { ReactNode, AnchorHTMLAttributes } from "react";
import { BOOKING_URL } from "@/lib/content";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

/** Opens the live Calendly booking page in a new tab */
export function BookingLink({ children, className = "", ...props }: Props) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
