import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const statusTones = {
  success: "bg-success-bg text-success-fg",
  info: "bg-info-bg text-info-fg",
  warning: "bg-warning-bg text-warning-fg",
  neutral: "bg-ink-100 text-ink-600",
};

export type StatusTone = keyof typeof statusTones;

/** Pill used for learner and module status: Completed, In Progress, At Risk… */
export function StatusBadge({
  tone,
  children,
  className,
}: {
  tone: StatusTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block shrink-0 rounded-full px-[9px] py-[3px] text-xs font-semibold",
        statusTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Green "Live session" pill shown on dark product mockups. */
export function LiveBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-live/12 px-2.5 py-1 text-xs font-medium text-live-soft">
      <span className="size-[7px] rounded-full bg-live" />
      Live session
    </span>
  );
}

/** Round gold "A" avatar standing in for the Aurilearn instructor. */
export function InstructorAvatar({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 font-display font-bold text-navy-850",
        className,
      )}
    >
      A
    </span>
  );
}
