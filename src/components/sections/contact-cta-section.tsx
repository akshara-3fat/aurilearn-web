import { ArrowRight, Clock } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Accent } from "@/components/ui/section-heading";
import { demoHref, siteConfig } from "@/config/site";

export function ContactCtaSection() {
  return (
    <section className="bg-cream-100">
      <div className="container-page pt-[72px] pb-[clamp(72px,9vw,120px)]">
        <div className="flex flex-wrap items-center justify-between gap-10 rounded-4xl bg-navy-900 bg-grid p-[clamp(32px,5vw,64px)] text-cream-300 [--grid-size:48px]">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[18px]">
            <Eyebrow tone="dark">Contact</Eyebrow>
            <h2 className="font-display text-[clamp(28px,3vw,42px)] leading-[1.12] font-semibold tracking-display text-balance text-cream-200">
              Book a 30-minute discovery call{" "}
              <Accent tone="dark">
                with an AURILEARN.AI Customer Service Representative
              </Accent>
            </h2>
          </div>

          <div className="flex min-w-0 flex-[0_1_400px] flex-col gap-4 rounded-2xl bg-cream-300 p-7 text-ink-900">
            <span className="font-mono text-[11.5px] tracking-eyebrow text-gold-700 uppercase">
              Contact us at
            </span>
            <a
              href={`mailto:${siteConfig.salesEmail}`}
              className="font-display text-[28px] font-semibold tracking-[-0.01em] wrap-anywhere hover:text-gold-700"
            >
              {siteConfig.salesEmail}
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-ink-600">
              <Clock
                size={16}
                strokeWidth={1.9}
                aria-hidden="true"
                className="shrink-0"
              />
              We’ll get back to you within 24 hours
            </span>
            <ButtonLink href={demoHref} className="mt-1 w-full">
              Request an Enterprise Demo
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
