import type { ReactNode } from "react";
import {
  Activity,
  Check,
  ChevronDown,
  ListChecks,
  Presentation,
  SlidersHorizontal,
  ToggleRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function LearningExperience() {
  return (
    <section className="border-t border-cream-500 bg-white">
      <div className="container-page flex flex-col gap-12 section-y">
        <SectionHeading
          eyebrow="The learning experience"
          title="Interact with your Aurilearn AI instructor like working with a senior engineer."
          className="max-w-[900px]"
        />

        <div className="flex flex-wrap gap-4">
          <TeachingCard />
          <FeatureCard
            icon={ListChecks}
            title="Quizzes and instructor check-ins"
            description="Knowledge and skill sets are ensured through frequent quizzes and instructor check-ins."
          >
            <QuizPreview />
          </FeatureCard>
          <FeatureCard
            icon={SlidersHorizontal}
            title="A personalizable instructor"
            description="Instructor agent is highly personalizable in terms of voice, accent, explanation style, supportive level, etc."
          >
            <SettingsPreview />
          </FeatureCard>
          <FeatureCard
            icon={ToggleRight}
            title="Easy to use, highly customizable"
            description="System is easy to use and highly customizable."
          >
            <TogglesPreview />
          </FeatureCard>
          <FeatureCard
            icon={Activity}
            title="Real-time progress"
            description="Real-time progress readily tracked."
          >
            <ProgressPreview />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function TeachingCard() {
  return (
    <div className="flex min-w-0 flex-[2_1_560px] flex-col gap-7 rounded-3xl bg-navy-800 p-8 text-cream-300">
      <div className="flex max-w-[560px] flex-col gap-3.5">
        <span className="flex size-11 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400">
          <Presentation size={22} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl leading-tight font-semibold tracking-[-0.01em]">
          Interactive slides, live whiteboarding and case studies
        </h3>
        <p className="text-base leading-[1.6] text-mist-400">
          Students are taught using interactive slides, through live
          context-based whiteboarding and case studies.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="mt-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3"
      >
        <div className="flex min-h-[136px] flex-col gap-2.5 rounded-[14px] bg-cream-100 p-3.5">
          <span className="label-mono text-gold-700">Slide</span>
          <div className="h-2 w-[70%] rounded-[4px] bg-ink-900" />
          <div className="h-1.5 w-[92%] rounded-[3px] bg-cream-700" />
          <div className="h-1.5 w-[78%] rounded-[3px] bg-cream-700" />
          <div className="mt-auto flex gap-1.5">
            <div className="h-[30px] flex-1 rounded-[6px] bg-gold-200" />
            <div className="h-[30px] flex-1 rounded-[6px] bg-cream-600" />
          </div>
        </div>

        <div className="flex min-h-[136px] flex-col gap-2.5 rounded-[14px] bg-white p-3.5">
          <span className="label-mono text-gold-700">Whiteboard</span>
          <svg viewBox="0 0 160 70" width="100%" height="76">
            <g
              fill="none"
              stroke="#0F172A"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="23" width="38" height="24" rx="6" />
              <rect x="62" y="23" width="38" height="24" rx="6" />
              <rect x="120" y="23" width="36" height="24" rx="6" />
              <path d="M42 35h16M54 31l4 4-4 4" />
              <path d="M100 35h16M112 31l4 4-4 4" />
            </g>
            <ellipse
              cx="81"
              cy="35"
              rx="28"
              ry="21"
              fill="none"
              stroke="#C9A13B"
              strokeWidth="1.6"
              strokeDasharray="4 3"
            />
          </svg>
        </div>

        <div className="flex min-h-[136px] flex-col gap-2.5 rounded-[14px] border border-white/8 bg-navy-700 p-3.5">
          <span className="label-mono text-gold-400">Case study</span>
          <div className="h-[7px] w-[84%] rounded-[3px] bg-white/22" />
          <div className="h-1.5 w-[92%] rounded-[3px] bg-white/10" />
          <div className="h-1.5 w-[66%] rounded-[3px] bg-white/10" />
          <div className="mt-auto flex gap-1.5">
            <span className="h-[18px] w-[46px] rounded-full bg-gold-400/18" />
            <span className="h-[18px] w-[34px] rounded-full bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-[22px] rounded-3xl border border-cream-600 bg-cream-100 p-7">
      <div className="flex flex-col gap-3">
        <span className="flex size-10 items-center justify-center rounded-[11px] bg-ink-900 text-gold-400">
          <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="font-display text-[21px] leading-tight font-semibold tracking-[-0.01em]">
          {title}
        </h3>
        <p className="text-[15.5px] leading-[1.6] text-ink-600">
          {description}
        </p>
      </div>
      <div
        aria-hidden="true"
        className="mt-auto rounded-[14px] border border-cream-600 bg-white"
      >
        {children}
      </div>
    </div>
  );
}

function QuizPreview() {
  return (
    <div className="flex flex-col gap-2.5 p-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className="label-mono text-gold-700">Quiz</span>
        <div className="flex gap-1">
          {[true, true, true, false, false].map((done, i) => (
            <span
              key={i}
              className={cn(
                "h-[5px] w-[18px] rounded-[3px]",
                done ? "bg-gold-500" : "bg-cream-600",
              )}
            />
          ))}
        </div>
      </div>
      <div className="h-[7px] w-[86%] rounded-[3px] bg-ink-900" />
      <div className="flex items-center gap-2 rounded-sm border border-gold-500 bg-gold-50 px-2.5 py-2">
        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
          <Check size={10} strokeWidth={3.2} />
        </span>
        <span className="h-1.5 w-[60%] rounded-[3px] bg-gold-300" />
      </div>
      <div className="flex items-center gap-2 rounded-sm border border-cream-600 px-2.5 py-2">
        <span className="size-4 shrink-0 rounded-full border-[1.5px] border-ink-400" />
        <span className="h-1.5 w-[48%] rounded-[3px] bg-cream-600" />
      </div>
    </div>
  );
}

function SettingRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-2.5 border-b border-cream-400 py-[9px] last:border-b-0">
      <span className="text-[13px] text-ink-600">{label}</span>
      {children}
    </div>
  );
}

function SettingsPreview() {
  return (
    <div className="flex flex-col px-3.5 py-1.5">
      <SettingRow label="Voice">
        <div className="flex h-3.5 items-center gap-0.5">
          {[6, 12, 8, 14, 9, 5].map((height, i) => (
            <span
              key={i}
              className="w-0.5 rounded-[1px] bg-gold-500"
              style={{ height }}
            />
          ))}
        </div>
      </SettingRow>
      <SettingRow label="Accent">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-12 rounded-[3px] bg-cream-600" />
          <ChevronDown size={12} strokeWidth={2.2} className="text-ink-500" />
        </span>
      </SettingRow>
      <SettingRow label="Explanation style">
        <span className="inline-flex gap-0.5 rounded-[7px] bg-cream-400 p-0.5">
          <span className="h-3.5 w-[22px] rounded-[5px]" />
          <span className="h-3.5 w-[22px] rounded-[5px] bg-ink-900" />
          <span className="h-3.5 w-[22px] rounded-[5px]" />
        </span>
      </SettingRow>
      <SettingRow label="Supportive level">
        <span className="relative inline-block h-1 w-[84px] rounded-full bg-cream-600">
          <span className="absolute inset-y-0 left-0 w-[70%] rounded-full bg-gold-500" />
          <span className="absolute top-[-5px] left-[70%] -ml-[7px] size-3.5 rounded-full border-2 border-gold-500 bg-white" />
        </span>
      </SettingRow>
    </div>
  );
}

function TogglesPreview() {
  const rows = [
    { width: "46%", on: true },
    { width: "60%", on: true },
    { width: "38%", on: false },
  ];
  return (
    <div className="flex flex-col px-3.5 py-1.5">
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-2.5 border-b border-cream-400 py-[11px] last:border-b-0"
        >
          <span
            className="h-1.5 rounded-[3px] bg-cream-600"
            style={{ width: row.width }}
          />
          <span
            className={cn(
              "relative inline-block h-[18px] w-[30px] rounded-full",
              row.on ? "bg-gold-500" : "bg-ink-300",
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 size-3.5 rounded-full bg-white",
                row.on ? "right-0.5" : "left-0.5",
              )}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

function ProgressPreview() {
  const modules = [
    { name: "Module 1", progress: 100 },
    { name: "Module 2", progress: 65 },
    { name: "Module 3", progress: 0 },
  ];
  return (
    <div className="flex flex-col gap-3 p-3.5">
      {modules.map((module) => (
        <div
          key={module.name}
          className="flex items-center gap-2.5 font-mono text-[11px]"
        >
          <span className="w-16 shrink-0 text-ink-600">{module.name}</span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream-400">
            <span
              className="block h-full bg-gold-500"
              style={{ width: `${module.progress}%` }}
            />
          </span>
          <span className="w-9 shrink-0 text-right">{module.progress}%</span>
        </div>
      ))}
    </div>
  );
}
