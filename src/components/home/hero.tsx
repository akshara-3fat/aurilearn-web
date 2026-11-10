import { ArrowRight, Box, Cpu, Mic, Play } from "lucide-react";
import { InstructorAvatar, LiveBadge } from "@/components/ui/badges";
import { ButtonLink } from "@/components/ui/button-link";
import { VideoModalButton } from "@/components/ui/video-modal";
import { demoHref, siteConfig, stats } from "@/config/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="bg-navy-900 bg-grid bg-top text-cream-300">
      <div className="container-wide flex flex-wrap items-center gap-14 pt-[clamp(48px,6vw,88px)] pb-[clamp(72px,8vw,112px)]">
        <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-7">
          <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-gold-400/30 bg-gold-500/10 py-1.5 pr-3.5 pl-1.5 text-[13.5px] leading-[1.3] font-medium text-gold-400">
            <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-gold-400/20">
              <span className="size-2 rounded-full bg-gold-400" />
            </span>
            Your AI-delivered IT training engine · 1:1 mentorship
          </div>

          <h1 className="font-display text-[clamp(38px,3.9vw,56px)] leading-[1.04] font-semibold tracking-[-0.028em] text-balance text-cream-200">
            AI-powered 1:1 instructor agents{" "}
            <span className="text-gold-400">
              for enterprise technical training at scale.
            </span>
          </h1>

          <div className="flex max-w-[560px] items-start gap-4 rounded-xl border border-white/9 bg-white/4 px-5 py-[18px]">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gold-500/15 text-gold-400">
              <Cpu size={22} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="flex min-w-0 flex-col gap-1.5">
              <p className="text-base leading-[1.4] font-semibold">
                The world’s first AI-delivered IT training Vertical Narrow
                Language Model
              </p>
              <p className="text-[15px] leading-[1.55] text-mist-400">
                Specifically architected, orchestrated, trained on and
                fine-tuned to specifically and only deliver IT training.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={demoHref}>
              Request an Enterprise Demo
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </ButtonLink>
            <VideoModalButton
              videoId={siteConfig.demoVideoId}
              title={siteConfig.demoVideoTitle}
              className="inline-flex h-[52px] items-center gap-3 rounded-lg border border-white/16 bg-white/4 pr-5 pl-2 text-base font-medium transition-colors hover:bg-white/8"
            >
              <span className="flex size-9 items-center justify-center rounded-[9px] bg-gold-400/16 text-gold-400">
                <Play
                  size={14}
                  fill="currentColor"
                  strokeWidth={0}
                  aria-hidden="true"
                />
              </span>
              See it live
            </VideoModalButton>
          </div>

          <dl className="flex flex-wrap gap-x-11 gap-y-5 border-t border-white/8 pt-7">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-[13.5px] text-mist-400">{stat.label}</dt>
                <dd
                  className={cn(
                    "font-display text-[28px] font-semibold tracking-[-0.02em]",
                    "highlight" in stat ? "text-gold-400" : "text-cream-300",
                  )}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex min-w-0 flex-[1_1_500px] flex-col items-center">
          <SessionMockup />
          <VideoModalButton
            videoId={siteConfig.demoVideoId}
            title={siteConfig.demoVideoTitle}
            className="relative -mt-6 inline-flex items-center gap-3 rounded-full bg-cream-300 py-2 pr-5 pl-2 text-navy-850 shadow-[0_14px_34px_rgb(0_0_0/0.4)] transition-transform hover:-translate-y-0.5"
          >
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-navy-850 text-gold-400">
              <Play
                size={13}
                fill="currentColor"
                strokeWidth={0}
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col gap-0.5 leading-[1.2]">
              <span className="label-mono tracking-eyebrow text-gold-700">
                See it live
              </span>
              <span className="text-sm font-semibold">Aurilearn at work</span>
            </span>
          </VideoModalButton>
        </div>
      </div>
    </section>
  );
}

const waveform = [
  8, 14, 22, 12, 18, 26, 16, 10, 20, 24, 12, 8, 16, 22, 14, 9, 18, 11, 6,
];

const quizOptions = ["podSelector", "namespaceSelector", "ipBlock"];
const quizAnswer = "namespaceSelector";

/** Illustration of a live lesson: whiteboard, speaking instructor, check-in quiz. */
function SessionMockup() {
  return (
    <div
      role="img"
      aria-label="An Aurilearn live session: the AI instructor explains Kubernetes network policies on a whiteboard and runs a quick check-in quiz."
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-[0_40px_100px_rgb(0_0_0/0.55)]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/7 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-[26px] shrink-0 items-center justify-center rounded-[7px] bg-gold-500 font-display text-[13px] font-bold text-navy-850">
            A
          </span>
          <span className="truncate text-[13px] text-mist-400">
            Kubernetes CKA <span className="text-mist-500">/</span>{" "}
            <span className="text-cream-300">Pod Networking</span>
          </span>
        </div>
        <LiveBadge />
      </div>

      <div className="flex flex-wrap gap-3 p-3">
        {/* Whiteboard */}
        <div className="flex min-w-0 flex-[3_1_280px] flex-col gap-3 rounded-lg bg-cream-100 p-4 text-ink-900">
          <div className="flex items-center justify-between gap-2">
            <span className="label-mono text-gold-700">Live whiteboard</span>
            <span className="font-mono text-[10.5px] text-ink-500">
              Slide 4 / 12
            </span>
          </div>
          <p className="font-display text-[17px] leading-tight font-semibold">
            Traffic between namespaces
          </p>
          <div className="flex items-center gap-2">
            <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-md border-[1.5px] border-dashed border-gold-500 bg-gold-500/6 p-2.5">
              <span className="font-mono text-[10px] text-gold-700">
                ns: web
              </span>
              <PodChip className="text-gold-700">frontend</PodChip>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-1">
              <span className="font-mono text-[9.5px] text-ink-600">
                ingress
              </span>
              <svg
                width="48"
                height="12"
                viewBox="0 0 48 12"
                aria-hidden="true"
              >
                <path
                  d="M1 6h42M38 1.5l5 4.5-5 4.5"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-md border-[1.5px] border-dashed border-ink-400 p-2.5">
              <span className="font-mono text-[10px] text-ink-600">
                ns: api
              </span>
              <PodChip className="text-ink-600">backend</PodChip>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <span className="rounded-[7px] bg-ink-900 px-[9px] py-1 text-cream-300">
              NetworkPolicy
            </span>
            <span className="text-gold-700">+ namespaceSelector</span>
            <span className="text-ink-600">+ podSelector</span>
          </div>
          <div className="flex flex-col gap-1.5 border-t border-cream-600 pt-2.5">
            {["92%", "74%", "56%"].map((width) => (
              <div
                key={width}
                className="h-1.5 rounded-[3px] bg-cream-600"
                style={{ width }}
              />
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-[2_1_200px] flex-col gap-3">
          {/* Instructor speaking */}
          <div className="flex flex-col gap-3 rounded-lg border border-white/8 bg-white/4 p-3.5">
            <div className="flex items-center gap-2.5">
              <InstructorAvatar className="size-[34px] text-sm" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[13px] font-semibold text-cream-300">
                  Aurilearn Instructor
                </span>
                <span className="text-[11.5px] text-mist-400">Speaking</span>
              </div>
            </div>
            <div className="flex h-[26px] items-center gap-[3px]">
              {waveform.map((height, i) => (
                <span
                  key={i}
                  className={cn(
                    "w-[3px] rounded-[2px] bg-gold-400",
                    i >= 17 ? "opacity-35" : i >= 14 && "opacity-50",
                  )}
                  style={{ height }}
                />
              ))}
            </div>
            <p className="text-[12.5px] leading-normal text-mist-200">
              “Add a namespaceSelector block alongside the podSelector.”
            </p>
          </div>

          {/* Check-in quiz */}
          <div className="flex flex-col gap-2 rounded-lg bg-white p-3.5 text-ink-900">
            <div className="flex items-center justify-between">
              <span className="label-mono text-gold-700">Check-in</span>
              <span className="font-mono text-[10.5px] text-ink-500">
                1 of 3
              </span>
            </div>
            <p className="text-[13px] leading-[1.35] font-semibold">
              Which selector admits traffic from another namespace?
            </p>
            {quizOptions.map((option) => {
              const selected = option === quizAnswer;
              return (
                <div
                  key={option}
                  className={cn(
                    "flex items-center gap-2 rounded-sm border px-2.5 py-[7px] font-mono text-[11.5px]",
                    selected
                      ? "border-gold-500 bg-gold-50 text-ink-900"
                      : "border-cream-600 text-ink-600",
                  )}
                >
                  {selected ? (
                    <span className="flex size-3 shrink-0 items-center justify-center rounded-full bg-gold-500">
                      <span className="size-1 rounded-full bg-white" />
                    </span>
                  ) : (
                    <span className="size-3 shrink-0 rounded-full border-[1.5px] border-ink-400" />
                  )}
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-white/7 px-3.5 pt-3 pb-[30px]">
        <div className="flex flex-wrap gap-1.5">
          {["Repeat that", "Give me an example", "Draw it out"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/12 px-[11px] py-1.5 text-xs text-mist-200"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-xs whitespace-nowrap text-mist-400">
            Module 2 of 5
          </span>
          <span className="inline-block h-1.5 w-[84px] overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-[65%] rounded-full bg-gold-400" />
          </span>
          <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-850">
            <Mic size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}

function PodChip({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-sm border border-cream-600 bg-white px-2 py-[7px] text-xs font-semibold">
      <Box
        size={14}
        strokeWidth={1.8}
        aria-hidden="true"
        className={className}
      />
      <span className="text-ink-900">{children}</span>
    </div>
  );
}
