import type { Metadata } from "next";
import { dictionaries } from "@/lib/content";
import { ServicesPageContent } from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: dictionaries.bg.servicesPage.title,
  description: dictionaries.bg.servicesPage.lead,
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
