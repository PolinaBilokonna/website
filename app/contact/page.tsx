import type { Metadata } from "next";
import { contactPage } from "@/lib/content";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.lead,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
