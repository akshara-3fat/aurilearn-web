"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { LogoMark } from "@/components/ui/logo-mark";
import { demoHref, mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    // Sticks only from lg up: below that the nav wraps and the header gets too tall to pin
    <header className="z-50 border-b border-white/7 bg-navy-900 text-cream-300 lg:sticky lg:top-0">
      <div className="container-wide flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-3.5">
        <Link
          href="/"
          aria-label="Aurilearn home"
          className="inline-flex items-center gap-2.5"
        >
          <LogoMark />
          <span className="font-display text-[17px] font-semibold tracking-[0.18em]">
            AURILEARN
          </span>
        </Link>

        <nav aria-label="Main" className="flex flex-wrap items-center gap-0.5">
          {mainNav.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-sm px-3.5 py-2 text-[15px] font-medium transition-colors",
                  active
                    ? "bg-gold-500/12 text-gold-400"
                    : "text-mist-300 hover:text-cream-200",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <ButtonLink href={demoHref} size="sm">
          Request Enterprise Demo
        </ButtonLink>
      </div>
    </header>
  );
}
