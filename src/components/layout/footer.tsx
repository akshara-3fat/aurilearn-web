import Link from "next/link";
import { LogoMark } from "@/components/ui/logo-mark";
import { CurrentYear } from "./current-year";
import { footerNav, legalNav, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-navy-950 text-mist-400">
      <div className="container-page flex flex-col gap-14 pt-[72px] pb-8">
        <div className="flex flex-wrap justify-between gap-x-12 gap-y-10">
          <div className="flex max-w-[360px] flex-[1_1_280px] flex-col gap-[18px]">
            <Link
              href="/"
              aria-label="Aurilearn home"
              className="inline-flex items-center gap-2.5 text-cream-300"
            >
              <LogoMark />
              <span className="font-display text-[17px] font-semibold tracking-[0.16em]">
                AURILEARN.AI
              </span>
            </Link>
            <p className="text-[15px] leading-[1.6]">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {footerNav.map((group) => (
              <nav
                key={group.title}
                aria-label={group.title}
                className="flex min-w-[130px] flex-col gap-3"
              >
                <span className="font-mono text-xs tracking-eyebrow text-gold-400 uppercase">
                  {group.title}
                </span>
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[14.5px] text-mist-300 transition-colors hover:text-cream-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/8 pt-6 text-[13.5px]">
          <span className="text-mist-500">
            © <CurrentYear /> AURILEARN.AI Inc. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-cream-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
