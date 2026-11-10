import { Eyebrow } from "@/components/ui/eyebrow";
import { stats } from "@/config/site";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="bg-cream-100">
      <div className="container-page flex flex-col gap-14 section-y">
        <div className="flex flex-wrap items-start gap-x-16 gap-y-10">
          <div className="flex min-w-0 flex-[1.3_1_520px] flex-col gap-[22px]">
            <Eyebrow>About Aurilearn</Eyebrow>
            <figure className="flex flex-col gap-3.5">
              <span
                aria-hidden="true"
                className="block h-10 font-display text-[96px] leading-[0.85] font-semibold text-gold-500"
              >
                “
              </span>
              <blockquote className="font-display text-[clamp(26px,2.8vw,40px)] leading-[1.2] font-medium tracking-[-0.018em] text-balance">
                Built on decades of deep real-world IT training experience and
                applying LLMs to narrow, high-value training use cases.
              </blockquote>
            </figure>
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px] pt-2 text-[17px] leading-[1.7] text-ink-600">
            <p>
              Aurilearn was created, architected and engineered by professionals
              who have worked for top-tier global IT training companies,
              bringing together decades of combined experience in the classroom
              and content development.
            </p>
            <p>
              We recognize that general LLM-based chatbots have failed to teach
              effectively. By building a specialized LLM IT training platform we
              have created a system that dynamically and efficiently interprets
              the complex, stateful environments of modern engineering.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {stats.map((stat) => {
            const highlight = "highlight" in stat;
            return (
              <li
                key={stat.label}
                className={cn(
                  "flex flex-col gap-2 rounded-2xl border p-7",
                  highlight
                    ? "border-navy-800 bg-navy-800"
                    : "border-cream-600 bg-white",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-0.5 w-8",
                    highlight ? "bg-gold-400" : "bg-gold-500",
                  )}
                />
                <span
                  className={cn(
                    "mt-3 font-display text-[clamp(40px,4vw,54px)] leading-none font-semibold tracking-[-0.03em]",
                    highlight ? "text-gold-400" : "text-ink-900",
                  )}
                >
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-[15px]",
                    highlight ? "text-mist-400" : "text-ink-600",
                  )}
                >
                  {stat.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
