import Image from "next/image";
import { cn } from "@/lib/utils";

/** The Aurilearn tree mark. Decorative — pair it with a visible or aria label. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      aria-hidden="true"
      width={40}
      height={40}
      loading="eager"
      className={cn("size-10 shrink-0", className)}
    />
  );
}
