import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Tone = "light" | "dark";

/** Small uppercase label with a leading rule, shown above section headings. */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[12.5px] font-medium tracking-eyebrow uppercase",
        tone === "dark" ? "text-gold-400" : "text-gold-700",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-[18px]",
          tone === "dark" ? "bg-gold-400" : "bg-gold-500",
        )}
      />
      {children}
    </span>
  );
}
