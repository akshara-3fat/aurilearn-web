import type { ReactNode } from "react";
import { Layers, Mic, Send, Target, TrendingUp, User, Zap } from "lucide-react";
import { InstructorAvatar, LiveBadge } from "@/components/ui/badges";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: User,
    title: "Human-Like Mentorship",
    description:
      "Learners interact with the AI instructor as if they are working with an experienced mentor.",
  },
  {
    icon: Target,
    title: "Context-Aware Teaching",
    description:
      "The AI understands what the learner is currently doing and adapts its guidance accordingly.",
  },
  {
    icon: Zap,
    title: "Continuous Feedback",
    description:
      "Learners receive immediate feedback on commands, configurations, and decisions in real time.",
  },
  {
    icon: TrendingUp,
    title: "Confidence Building",
    description:
      "Engineers learn by doing while the AI mentor supports and validates their reasoning process.",
  },
  {
    icon: Layers,
    title: "Deeper Learning Engagement",
    description:
      "Mentorship-style interaction improves understanding, retention, and real-world skill transfer.",
  },
];

export function MentorshipSection() {
  return (
    <section className="bg-cream-100">
      <div className="container-page flex flex-wrap items-center gap-14 section-y">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-8">
          <SectionHeading
            eyebrow="1:1 mentorship"
            title="Mentorship that feels real"
            description="Aurilearn’s AI instructor behaves like a senior engineer guiding your learning journey — patient, precise, and always available."
          />
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-7 gap-y-6">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex flex-col gap-2">
                <span className="flex size-9 items-center justify-center rounded-md bg-gold-100 text-gold-700">
                  <benefit.icon
                    size={18}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="text-base leading-[1.35] font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-600">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <ChatMockup />
      </div>
    </section>
  );
}

function Code({ children }: { children: string }) {
  return (
    <span className="font-mono text-[13px] text-gold-700">{children}</span>
  );
}

function Message({
  from,
  children,
}: {
  from: "learner" | "ai";
  children: ReactNode;
}) {
  const learner = from === "learner";
  return (
    <div
      className={cn("flex items-end gap-2.5", learner && "flex-row-reverse")}
    >
      {learner ? (
        <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-navy-500 text-xs font-semibold text-mist-200">
          R
        </span>
      ) : (
        <InstructorAvatar className="size-[30px] text-xs" />
      )}
      <div
        className={cn(
          "px-3.5 py-3 text-[14.5px] leading-[1.55]",
          learner
            ? "max-w-[78%] rounded-[16px_16px_4px_16px] bg-navy-600 text-mist-100"
            : "max-w-[82%] rounded-[16px_16px_16px_4px] bg-cream-300 text-ink-900",
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** Illustration of a learner debugging a NetworkPolicy with the AI instructor. */
function ChatMockup() {
  return (
    <div
      role="img"
      aria-label="A chat where the Aurilearn instructor helps a learner find a missing namespaceSelector in their Kubernetes NetworkPolicy."
      className="min-w-0 flex-[1_1_480px] overflow-hidden rounded-3xl border border-navy-600 bg-navy-800 text-cream-300 shadow-[0_40px_80px_rgb(15_23_42/0.22)]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/7 px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <InstructorAvatar className="size-[38px] text-[15px]" />
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="text-[15px] font-semibold">
              Aurilearn Instructor
            </span>
            <span className="truncate text-[12.5px] text-mist-400">
              Kubernetes CKA — Pod Networking
            </span>
          </div>
        </div>
        <LiveBadge />
      </div>

      <div className="flex flex-col gap-4 px-5 py-[22px]">
        <Message from="learner">
          I applied the NetworkPolicy but traffic is still being blocked between
          namespaces.
        </Message>
        <Message from="ai">
          Good catch. Let’s check two things: first, ensure the{" "}
          <Code>podSelector</Code> labels match exactly. A common mistake is a
          label casing mismatch. Can you paste your policy spec?
        </Message>
        <Message from="learner">
          Here it is —
          <pre className="mt-2 overflow-x-auto rounded-sm bg-navy-900 px-3 py-2.5 font-mono text-[12.5px] leading-[1.6] text-gold-400">
            {"podSelector:\n  matchLabels:\n    app: frontend"}
          </pre>
        </Message>
        <Message from="ai">
          I see it — your destination namespace selector is missing. Add a{" "}
          <Code>namespaceSelector</Code> block alongside the{" "}
          <Code>podSelector</Code>. Here’s the corrected structure…
        </Message>
        <div className="flex items-center gap-2.5">
          <InstructorAvatar className="size-[30px] text-xs" />
          <span className="inline-flex items-center gap-[5px] rounded-2xl bg-white/6 px-3.5 py-3">
            <span className="size-1.5 rounded-full bg-gold-400" />
            <span className="size-1.5 rounded-full bg-gold-400/60" />
            <span className="size-1.5 rounded-full bg-gold-400/30" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 border-t border-white/7 px-4 py-3.5">
        <div className="flex h-11 min-w-0 flex-1 items-center rounded-lg border border-white/8 bg-white/5 px-3.5 text-sm text-mist-500">
          Ask something...
        </div>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/6 text-mist-200">
          <Mic size={18} strokeWidth={1.9} />
        </span>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-navy-850">
          <Send size={18} strokeWidth={1.9} />
        </span>
      </div>
    </div>
  );
}
