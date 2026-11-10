import type { Metadata } from "next";
import { Clock, Mail } from "lucide-react";
import { DemoRequestForm } from "@/components/contact/demo-request-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute discovery call or request an enterprise demo of Aurilearn.",
};

export default function ContactPage() {
  return (
    <section className="bg-navy-900 bg-grid text-cream-300">
      <div className="container-page flex flex-wrap items-start gap-12 pt-[clamp(48px,6vw,88px)] pb-[clamp(72px,7vw,104px)]">
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
          <Eyebrow tone="dark">Contact</Eyebrow>
          <h1 className="font-display text-[clamp(36px,3.6vw,52px)] leading-[1.08] font-semibold tracking-[-0.026em] text-balance text-cream-200">
            Book a 30-minute discovery call{" "}
            <Accent tone="dark">
              with an AURILEARN.AI Customer Service Representative
            </Accent>
          </h1>
          <div className="mt-3 flex flex-col gap-2.5 rounded-2xl border border-white/9 bg-white/4 p-6">
            <span className="font-mono text-[11.5px] tracking-eyebrow text-mist-400 uppercase">
              Contact us at
            </span>
            <a
              href={`mailto:${siteConfig.salesEmail}`}
              className="inline-flex items-center gap-3 font-display text-[28px] font-semibold tracking-[-0.01em] wrap-anywhere text-gold-400 hover:text-gold-300"
            >
              <Mail
                size={24}
                strokeWidth={1.75}
                aria-hidden="true"
                className="shrink-0"
              />
              {siteConfig.salesEmail}
            </a>
            <span className="inline-flex items-center gap-2 text-[14.5px] text-mist-400">
              <Clock
                size={16}
                strokeWidth={1.9}
                aria-hidden="true"
                className="shrink-0"
              />
              We’ll get back to you within 24 hours
            </span>
          </div>
        </div>

        <DemoRequestForm />
      </div>
    </section>
  );
}
