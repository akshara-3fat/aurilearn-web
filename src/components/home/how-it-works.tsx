import {
  ArrowRight,
  ChartLine,
  MessageSquareText,
  Server,
  SquareTerminal,
  Users,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { demoHref } from "@/config/site";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Server,
    title: "Deploy Aurilearn Instructor",
    description:
      "Aurilearn deploys securely into your company’s environment and integrates with your existing engineering tools and lab systems.",
  },
  {
    icon: Users,
    title: "Enroll Teams in Training Programs",
    description:
      "Teams join curated Aurilearn learning tracks such as Kubernetes, DevOps, platform engineering, or internal product training.",
  },
  {
    icon: MessageSquareText,
    title: "AI-Guided Mentorship",
    description:
      "Engineers interact with the Aurilearn AI instructor that explains concepts, answers questions, and guides problem solving like a senior engineer.",
  },
  {
    icon: SquareTerminal,
    title: "Practice in Real Labs",
    description:
      "Learners work inside realistic infrastructure labs while the AI mentor provides step-by-step guidance and debugging support.",
  },
  {
    icon: ChartLine,
    title: "Track Skill Progress",
    description:
      "Managers monitor class and module progress, lab completion, and certification readiness across their teams.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-900 text-cream-300">
      <div className="container-page flex flex-col gap-14 section-y">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <SectionHeading
            tone="dark"
            eyebrow="How Aurilearn works"
            title={
              <>
                Five steps from deployment to certified expertise —{" "}
                <Accent tone="dark">your comprehensive solution.</Accent>
              </>
            }
            className="max-w-[820px] flex-[1_1_520px]"
          />
          <ButtonLink href={demoHref} variant="outline" size="md">
            See Aurilearn in Action
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </ButtonLink>
        </div>

        <ol className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li
                key={step.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-navy-800 p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-medium",
                      last
                        ? "bg-gold-500 text-navy-850"
                        : "border border-gold-400/50 text-gold-400",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-gold-400/25"
                  />
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white/5">
                    <step.icon
                      size={20}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="font-display text-[19px] leading-[1.3] font-semibold">
                  {step.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-mist-400">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
