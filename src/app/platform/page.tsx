import type { Metadata } from "next";
import { NaturalLearningSection } from "@/components/platform/natural-learning-section";
import { ScalabilitySection } from "@/components/platform/scalability-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { MentorshipSection } from "@/components/sections/mentorship-section";
import { PillarsSection } from "@/components/sections/pillars-section";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "A personal AI instructor, hands-on labs and exam preparation for every learner, with the analytics to show it worked.",
};

export default function PlatformPage() {
  return (
    <>
      <h1 className="sr-only">Aurilearn platform</h1>
      <PillarsSection />
      <ScalabilitySection />
      <NaturalLearningSection />
      <MentorshipSection />
      <ContactCtaSection />
    </>
  );
}
