import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-gold-500 text-navy-850 hover:bg-gold-400",
  outline: "border border-gold-400/50 text-gold-400 hover:bg-gold-400/10",
};

const sizes = {
  sm: "h-[42px] rounded-md px-[18px] text-[14.5px]",
  md: "h-[50px] rounded-lg px-5 text-[15.5px]",
  lg: "h-[52px] rounded-lg px-[22px] text-base",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

/** A link styled as a button. */
export function ButtonLink({
  variant = "primary",
  size = "lg",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2.5 font-semibold whitespace-nowrap transition-colors",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
