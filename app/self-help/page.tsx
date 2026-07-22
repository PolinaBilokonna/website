import type { Metadata } from "next";
import { dictionaries } from "@/lib/content";
import { SelfHelpPageContent } from "@/components/SelfHelpPageContent";

export const metadata: Metadata = {
  title: dictionaries.bg.selfHelpPage.title,
  description: dictionaries.bg.selfHelpPage.lead,
};

export default function SelfHelpPage() {
  return <SelfHelpPageContent />;
}
