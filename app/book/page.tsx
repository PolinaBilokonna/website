import type { Metadata } from "next";
import { dictionaries } from "@/lib/content";
import { BookingPageContent } from "@/components/BookingPageContent";

export const metadata: Metadata = {
  title: dictionaries.bg.bookingPage.title,
  description: dictionaries.bg.bookingPage.lead,
};

export default function BookPage() {
  return <BookingPageContent />;
}
