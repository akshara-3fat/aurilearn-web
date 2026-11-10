import type { ReactNode } from "react";
import { Check, Download, TrendingDown, TriangleAlert } from "lucide-react";
import { StatusBadge, type StatusTone } from "@/components/ui/badges";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const capabilities = [
  "Number of students enrolled and in progress",
  "Track exact module position of each learner",
  "Pass/fail rates on automated lab validations",
  "Certification exam registration tracking",
  "Final certification pass statistics",
];

export function AnalyticsSection() {
  return (
    <section id="analytics" className="bg-white">
      <div className="container-page flex flex-wrap items-center gap-14 section-y">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-7">
          <SectionHeading
            eyebrow="Analytics"
            title="Analytics when, where and as you want them"
            description="Move beyond generic course completion rates. All data is captured and presented on demand, giving engineering leaders granular visibility into team capabilities and potential roadblocks."
          />
          <ul className="flex flex-col gap-3.5">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base leading-[1.45]"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <LearnerDashboard />
      </div>
    </section>
  );
}

type StepState = "done" | "current" | "risk" | "todo";

const journey: { name: string; state: StepState }[] = [
  { name: "K8s Basics", state: "done" },
  { name: "Pod Net", state: "current" },
  { name: "Debugging", state: "risk" },
  { name: "Helm", state: "todo" },
  { name: "Security", state: "todo" },
];

const modules: {
  name: string;
  progress: number;
  status: string;
  tone: StatusTone;
}[] = [
  {
    name: "Kubernetes Basics",
    progress: 100,
    status: "Completed",
    tone: "success",
  },
  { name: "Pod Networking", progress: 65, status: "In Progress", tone: "info" },
  {
    name: "Cluster Debugging",
    progress: 0,
    status: "At Risk",
    tone: "warning",
  },
  { name: "Helm Deployments", progress: 0, status: "Locked", tone: "neutral" },
];

const pipeline = [
  { name: "Concept", progress: 100 },
  { name: "Lab Practice", progress: 55, current: true },
  { name: "Assessment", progress: 0 },
  { name: "Cert Exam", progress: 0 },
];

const tableColumns =
  "grid grid-cols-[36px_minmax(150px,1.6fr)_minmax(120px,1.2fr)_112px] items-center gap-2 px-3.5";

/** Illustration of the manager's view of a single learner. */
function LearnerDashboard() {
  return (
    <div
      role="img"
      aria-label="Learner dashboard for Simon Riley on the Kubernetes CKA track: module 2 of 5, flagged as moderate risk, with an AI suggestion to assign a guided remediation lab."
      className="min-w-0 flex-[1.4_1_560px] overflow-hidden rounded-3xl border border-cream-600 bg-white shadow-card"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-500 px-[22px] py-[18px]">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-ink-900 text-sm font-semibold text-gold-400">
            SR
          </span>
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="text-base font-semibold">Simon Riley</span>
            <span className="text-[13px] text-ink-500">
              Kubernetes CKA Track
            </span>
          </div>
          <StatusBadge tone="info" className="px-2.5 py-1">
            In Progress
          </StatusBadge>
        </div>
        <span className="inline-flex h-9 items-center gap-2 rounded-md border border-cream-600 px-3.5 text-[13.5px] font-medium">
          <Download size={16} strokeWidth={1.9} />
          Export Report
        </span>
      </div>

      <div className="flex flex-col gap-[18px] px-[22px] pt-5 pb-6">
        <div className="flex items-center gap-2.5 rounded-lg bg-warning-bg px-3.5 py-2.5 text-[12.5px] font-semibold tracking-[0.06em] text-[#92400e] uppercase">
          <TriangleAlert size={16} strokeWidth={2} className="shrink-0" />
          Moderate risk — needs practice
        </div>

        {/* Learning journey stepper */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] tracking-[0.12em] text-ink-500 uppercase">
              Learning journey
            </span>
            <span className="text-[12.5px] font-medium text-ink-600">
              Module 2 of 5
            </span>
          </div>
          <div className="flex items-start">
            {journey.map((step, i) => (
              <div
                key={step.name}
                className="relative flex min-w-0 flex-1 flex-col items-center gap-2 text-center"
              >
                {i < journey.length - 1 && (
                  <span
                    className={cn(
                      "absolute top-[13px] left-1/2 h-0.5 w-full",
                      step.state === "done" ? "bg-gold-500" : "bg-cream-600",
                    )}
                  />
                )}
                <StepDot state={step.state} index={i + 1} />
                <span className="font-mono text-[10px] text-ink-500">
                  Module {i + 1}
                </span>
                <span
                  className={cn(
                    "text-[12.5px] font-semibold",
                    step.state === "todo" && "text-ink-600",
                  )}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5">
          <InfoTile label="Current phase">Hands-on Lab Practice</InfoTile>
          <InfoTile label="Momentum">
            <span className="inline-flex items-center gap-1.5 text-warning-fg">
              <TrendingDown size={15} strokeWidth={2.2} />
              Slowing
            </span>
          </InfoTile>
          <InfoTile label="Next action">Complete Network Lab</InfoTile>
        </div>

        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-3.5 rounded-[14px] bg-navy-800 px-[18px] py-4 text-cream-300">
          <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-1.5">
            <span className="label-mono text-gold-400">
              Aurilearn AI insight
            </span>
            <p className="text-[13.5px] leading-[1.55] text-mist-200">
              Simon is struggling with Kubernetes Network Policies, specifically
              block-all ingress rules. He spent 45 minutes on the last module
              without passing validation.
            </p>
          </div>
          <span className="inline-flex h-[38px] shrink-0 items-center rounded-md bg-gold-500 px-3.5 text-[13px] font-semibold whitespace-nowrap text-navy-850">
            Assign Guided Remediation Lab
          </span>
        </div>

        {/* Module table — scrolls sideways on narrow screens */}
        <div className="overflow-x-auto rounded-[14px] border border-cream-500">
          <div className="min-w-[440px]">
            <div
              className={cn(
                tableColumns,
                "bg-cream-100 py-2.5 label-mono text-ink-500",
              )}
            >
              <span>#</span>
              <span>Module name</span>
              <span>Progress</span>
              <span>Status</span>
            </div>
            {modules.map((module, i) => (
              <div
                key={module.name}
                className={cn(
                  tableColumns,
                  "border-t border-cream-500 py-[11px] text-[13.5px]",
                )}
              >
                <span className="text-ink-500">{i + 1}</span>
                <span
                  className={cn(
                    "font-semibold",
                    module.tone === "neutral" && "text-ink-600",
                  )}
                >
                  {module.name}
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream-400">
                    <span
                      className="block h-full bg-gold-500"
                      style={{ width: `${module.progress}%` }}
                    />
                  </span>
                  <span className="w-[34px] shrink-0 font-mono text-[11.5px] text-ink-600">
                    {module.progress}%
                  </span>
                </span>
                <span>
                  <StatusBadge tone={module.tone}>{module.status}</StatusBadge>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] tracking-[0.12em] text-ink-500 uppercase">
              CKA certification pipeline
            </span>
            <span className="text-[12.5px] font-medium text-ink-600">
              Phase 2 of 4
            </span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {pipeline.map((phase) => (
              <div key={phase.name} className="flex flex-col gap-1.5">
                <span className="h-1.5 overflow-hidden rounded-[3px] bg-cream-400">
                  <span
                    className="block h-full bg-gold-500"
                    style={{ width: `${phase.progress}%` }}
                  />
                </span>
                <span
                  className={cn(
                    "text-xs",
                    phase.current
                      ? "font-semibold text-ink-900"
                      : phase.progress === 100
                        ? "text-ink-600"
                        : "text-ink-500",
                  )}
                >
                  {phase.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepDot({ state, index }: { state: StepState; index: number }) {
  const base = "relative flex size-7 items-center justify-center rounded-full";
  switch (state) {
    case "done":
      return (
        <span className={cn(base, "bg-gold-500 text-white")}>
          <Check size={13} strokeWidth={3} />
        </span>
      );
    case "current":
      return (
        <span className={cn(base, "border-2 border-gold-500 bg-white")}>
          <span className="size-2.5 rounded-full bg-gold-500" />
        </span>
      );
    case "risk":
      return (
        <span
          className={cn(
            base,
            "border-2 border-warning-border bg-warning-bg text-[13px] font-bold text-warning-fg",
          )}
        >
          !
        </span>
      );
    case "todo":
      return (
        <span
          className={cn(
            base,
            "border-2 border-ink-200 bg-ink-100 text-xs font-semibold text-ink-500",
          )}
        >
          {index}
        </span>
      );
  }
}

function InfoTile({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-cream-500 bg-cream-100 px-3.5 py-3">
      <span className="font-mono text-[10.5px] tracking-[0.1em] text-ink-500 uppercase">
        {label}
      </span>
      <span className="text-sm font-semibold">{children}</span>
    </div>
  );
}
