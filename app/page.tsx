"use client";

import { HeroSection } from "@/components/HeroSection";
import {
  ApproachSection,
  BeliefQuote,
  ServicesSection,
} from "@/components/PsychologySections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <BeliefQuote />
    </>
  );
}
