import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Calendar,
  CircleQuestionMark,
  FileText,
  ListChecks,
  Pencil,
  Play,
  Presentation,
  SquareTerminal,
  User,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { demoHref } from "@/config/site";
import { cn } from "@/lib/utils";

const included = [
  {
    icon: User,
    title: "A personal AI instructor",
    description:
      "Pace, examples and explanations adapt to how each person learns.",
  },
  {
    icon: SquareTerminal,
    title: "One-to-one lab mentorship",
    description: "Hands-on guidance through every lab, from setup to sign-off.",
  },
];

type DemoKind = "interactive" | "video" | "live";

// "#" marks demos that aren't wired up yet.
const demos: {
  kind: DemoKind;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    kind: "interactive",
    icon: ListChecks,
    title: "Quiz-led learning",
    description: "A fresh quiz on every attempt",
    href: "#",
  },
  {
    kind: "interactive",
    icon: Presentation,
    title: "Interactive slides",
    description: "Change the inputs, see the result",
    href: "#",
  },
  {
    kind: "interactive",
    icon: Pencil,
    title: "Live whiteboarding",
    description: "A diagram drawn in real time",
    href: "#",
  },
  {
    kind: "interactive",
    icon: BriefcaseBusiness,
    title: "Case studies",
    description: "Real infrastructure decisions",
    href: "#",
  },
  {
    kind: "video",
    icon: SquareTerminal,
    title: "Lab mentorship",
    description: "An AI agent guiding a live lab",
    href: "#",
  },
  {
    kind: "video",
    icon: CircleQuestionMark,
    title: "Ask anything",
    description: "Questions answered at any point",
    href: "#",
  },
  {
    kind: "video",
    icon: FileText,
    title: "Content generation",
    description: "How course material is produced",
    href: "#",
  },
  {
    kind: "live",
    icon: Calendar,
    title: "Book a walkthrough",
    description: "The full platform, with our team",
    href: demoHref,
  },
];

const demoStyles: Record<
  DemoKind,
  {
    label: string;
    card: string;
    tag: string;
    accent: string;
    body: string;
    corner: LucideIcon;
  }
> = {
  interactive: {
    label: "Interactive",
    card: "border-cream-600 bg-cream-100 text-ink-900 hover:border-gold-300",
    tag: "bg-gold-100 text-gold-700",
    accent: "text-gold-700",
    body: "text-ink-600",
    corner: ArrowUpRight,
  },
  video: {
    label: "Video",
    card: "border-cream-600 bg-white text-ink-900 hover:border-info-fg/40",
    tag: "bg-info-bg text-info-fg",
    accent: "text-info-fg",
    body: "text-ink-600",
    corner: Play,
  },
  live: {
    label: "Live session",
    card: "border-navy-800 bg-navy-800 text-cream-300 hover:bg-navy-700",
    tag: "bg-gold-400/16 text-gold-400",
    accent: "text-gold-400",
    body: "text-mist-400",
    corner: ArrowRight,
  },
};

const studentVideoUrl = "/videos/customer-experience.mp4";

export function ScalabilitySection() {
  return (
    <section id="scalability" className="border-t border-cream-500 bg-white">
      <div className="container-page flex flex-col gap-16 section-y">
        <div className="flex flex-wrap gap-8">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
            <Eyebrow>Included with every seat</Eyebrow>
            {included.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl bg-navy-800 p-[26px] text-cream-300"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-gold-500/14 text-gold-400">
                  <item.icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl leading-[1.3] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-mist-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex min-w-0 flex-[2.2_1_620px] flex-col gap-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <Eyebrow>See it in action</Eyebrow>
              <span className="text-sm text-ink-500">
                Each demo opens right here on the page
              </span>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
              {demos.map((demo) => (
                <li key={demo.title} className="flex">
                  <DemoTile {...demo} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="watch-a-student"
          className="mx-auto flex w-full max-w-[1040px] scroll-mt-8 flex-col gap-[18px]"
        >
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <h2 className="font-display text-[clamp(24px,2.4vw,32px)] leading-[1.2] font-semibold tracking-[-0.015em]">
              Watch a student use Aurilearn
            </h2>
            <KindTag kind="video" />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-navy-900 shadow-[0_30px_70px_rgb(15_23_42/0.18)]">
            <video
              src={`${studentVideoUrl}#t=0.1`}
              controls
              playsInline
              preload="metadata"
              aria-label="Watch a student use Aurilearn"
              className="absolute inset-0 size-full object-contain"
            >
              Your browser does not support embedded video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function KindTag({ kind }: { kind: DemoKind }) {
  const style = demoStyles[kind];
  return (
    <span
      className={cn(
        "rounded-[6px] px-2 py-[3px] font-mono text-[10.5px] tracking-[0.1em] uppercase",
        style.tag,
      )}
    >
      {style.label}
    </span>
  );
}

function DemoTile({
  kind,
  icon: Icon,
  title,
  description,
  href,
}: (typeof demos)[number]) {
  const style = demoStyles[kind];
  const Corner = style.corner;
  return (
    <Link
      href={href}
      className={cn(
        "flex min-h-[168px] w-full flex-col gap-2.5 rounded-xl border p-[18px] transition-colors",
        style.card,
      )}
    >
      <span className="flex items-center justify-between">
        <KindTag kind={kind} />
        <Corner
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className={style.accent}
          fill={kind === "video" ? "currentColor" : "none"}
        />
      </span>
      <Icon
        size={22}
        strokeWidth={1.75}
        aria-hidden="true"
        className={style.accent}
      />
      <span className="mt-auto text-base leading-[1.3] font-semibold">
        {title}
      </span>
      <span className={cn("text-[13.5px] leading-[1.45]", style.body)}>
        {description}
      </span>
    </Link>
  );
}
