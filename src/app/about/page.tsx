import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aurilearn is built on decades of real-world IT training experience, applying LLMs to narrow, high-value training use cases.",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About Aurilearn</h1>
      <AboutSection />
      <ContactCtaSection />
    </>
  );
}
