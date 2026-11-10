import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, type Tone } from "./eyebrow";

/** Eyebrow + h2 + optional intro, the opening block of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-[18px]", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-display text-[clamp(30px,3.4vw,48px)] leading-[1.1] font-semibold tracking-display text-balance",
          tone === "dark" ? "text-cream-200" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-[640px] text-lg leading-[1.6]",
            tone === "dark" ? "text-mist-400" : "text-ink-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Highlighted part of a heading — gold-400 on dark grounds, gold-700 on light. */
export function Accent({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span className={tone === "dark" ? "text-gold-400" : "text-gold-700"}>
      {children}
    </span>
  );
}
