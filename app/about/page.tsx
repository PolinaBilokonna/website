import type { Metadata } from "next";
import { about } from "@/lib/content";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: about.title,
  description: about.lead,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
