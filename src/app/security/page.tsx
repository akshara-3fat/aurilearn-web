import type { Metadata } from "next";
import { AnalyticsSection } from "@/components/sections/analytics-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { SecuritySection } from "@/components/sections/security-section";
import { pageMetadata } from "@/config/seo";

export const metadata: Metadata = pageMetadata({
  title: "Security & Analytics",
  description:
    "Private deployment, controlled access and isolated environments, with granular analytics on every learner's progress.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <>
      <h1 className="sr-only">Aurilearn security and analytics</h1>
      <SecuritySection />
      <AnalyticsSection />
      <ContactCtaSection />
    </>
  );
}
