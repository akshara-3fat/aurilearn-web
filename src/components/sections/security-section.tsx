import {
  Building2,
  Code,
  Database,
  KeyRound,
  Lock,
  Server,
  ShieldCheck,
  SquareTerminal,
} from "lucide-react";
import { InstructorAvatar } from "@/components/ui/badges";
import { SectionHeading } from "@/components/ui/section-heading";

const environmentItems = [
  { icon: Code, label: "Engineering tools" },
  { icon: SquareTerminal, label: "Lab systems" },
  { icon: Database, label: "Training data" },
  { icon: KeyRound, label: "Corporate SSO" },
];

const features = [
  {
    icon: Server,
    title: "Private Deployment Options",
    description:
      "Deploy Aurilearn within your infrastructure or dedicated cloud environment — keeping all training data inside your perimeter.",
  },
  {
    icon: Lock,
    title: "Controlled Access",
    description:
      "Administrators manage which teams and individual users can access the AI instructor and training programs.",
  },
  {
    icon: Building2,
    title: "Organization-Isolated Environments",
    description:
      "Each company operates in a fully isolated environment. No cross-tenant data sharing at any layer.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Training Data",
    description:
      "Runbooks, labs, and infrastructure interactions remain fully protected and never leave your controlled environment.",
  },
  {
    icon: KeyRound,
    title: "Enterprise Identity Integration",
    description:
      "Integrate with corporate SSO, authentication systems, and access policies for seamless and secure onboarding.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="bg-navy-900 text-cream-300">
      <div className="container-page flex flex-col gap-14 section-y">
        <SectionHeading
          tone="dark"
          eyebrow="Security"
          title="Aurilearn runs within your controlled environment"
          description="Ensuring that you have full enterprise governance, security and access management."
          className="max-w-[860px]"
        />

        <div className="flex flex-wrap items-stretch gap-6">
          <EnvironmentDiagram />

          <ul className="min-w-0 flex-[1.2_1_520px] rounded-3xl border border-white/8 bg-navy-800 px-7 py-1">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="flex gap-4 border-b border-white/7 py-[22px] last:border-b-0"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400">
                  <feature.icon
                    size={21}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="text-[17px] leading-[1.35] font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-mist-400">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Aurilearn instructor sitting inside the customer's own environment. */
function EnvironmentDiagram() {
  return (
    <div className="flex min-w-0 flex-[1_1_420px] flex-col justify-center gap-[18px] rounded-3xl border-[1.5px] border-dashed border-gold-400/45 bg-gold-500/4 p-7">
      <span className="inline-flex items-center gap-2 font-mono text-xs tracking-eyebrow text-gold-400 uppercase">
        <Lock size={16} strokeWidth={1.9} aria-hidden="true" />
        Your environment
      </span>

      <div className="flex items-center gap-3 self-center rounded-xl bg-gold-500 py-3.5 pr-5 pl-3.5 text-navy-850 shadow-[0_16px_40px_rgb(201_161_59/0.18)]">
        <InstructorAvatar className="size-[38px] bg-navy-850 text-[15px] text-gold-400" />
        <span className="flex flex-col gap-0.5">
          <span className="text-[15px] font-semibold">
            Aurilearn Instructor
          </span>
          <span className="text-[12.5px] text-gold-900">
            Private deployment
          </span>
        </span>
      </div>

      {/* Connector from the instructor down to the systems it reaches */}
      <div aria-hidden="true" className="relative h-7">
        <span className="absolute top-0 left-1/2 h-3.5 w-px bg-gold-400/55" />
        <span className="absolute inset-x-1/4 top-3.5 h-px bg-gold-400/55" />
        <span className="absolute top-3.5 left-1/4 h-3.5 w-px bg-gold-400/55" />
        <span className="absolute top-3.5 right-1/4 h-3.5 w-px bg-gold-400/55" />
      </div>

      <ul className="grid grid-cols-2 gap-2.5">
        {environmentItems.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2.5 rounded-lg border border-white/9 bg-white/4 px-3.5 py-3 text-sm text-mist-100"
          >
            <item.icon
              size={18}
              strokeWidth={1.9}
              aria-hidden="true"
              className="shrink-0 text-gold-400"
            />
            {item.label}
          </li>
        ))}
      </ul>

      <p className="flex items-center gap-2.5 border-t border-white/8 pt-4 text-[13.5px] text-mist-400">
        <ShieldCheck
          size={18}
          strokeWidth={1.9}
          aria-hidden="true"
          className="shrink-0 text-gold-400"
        />
        No cross-tenant data sharing at any layer
      </p>
    </div>
  );
}
