import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { LearningExperience } from "@/components/home/learning-experience";
import { AboutSection } from "@/components/sections/about-section";
import { AnalyticsSection } from "@/components/sections/analytics-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { MentorshipSection } from "@/components/sections/mentorship-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { SecuritySection } from "@/components/sections/security-section";
import { pageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

// "Aurilearn" alone says nothing to a searcher; the home page title says what it is.
export const metadata: Metadata = pageMetadata({
  title: "Aurilearn: AI Instructor Agents for Enterprise Technical Training",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <LearningExperience />
      <HowItWorks />
      <MentorshipSection />
      <SecuritySection />
      <AnalyticsSection />
      <AboutSection />
      <ContactCtaSection />
    </>
  );
}
