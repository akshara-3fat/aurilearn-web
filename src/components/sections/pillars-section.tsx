import { Award, BookOpen, ChartLine, SquareTerminal } from "lucide-react";
import { Accent, SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "Build core knowledge with an AI instructor that adapts to each learner.",
  },
  {
    icon: SquareTerminal,
    title: "Skilling",
    description: "Apply it in hands-on labs, with guidance at every step.",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Targeted exam preparation built to pass on the first attempt.",
  },
  {
    icon: ChartLine,
    title: "Analytics",
    description:
      "See who is progressing, where, and how well across your teams.",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-cream-100">
      <div className="container-page flex flex-col gap-14 section-y">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              A personal AI instructor, hands-on labs and exam preparation for
              every learner, <Accent>with the data to show it worked.</Accent>
            </>
          }
          className="max-w-[940px]"
        />

        <ol className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="flex flex-col gap-3.5 rounded-2xl border border-cream-600 bg-white px-6 pt-7 pb-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-ink-900 text-gold-400">
                  <pillar.icon
                    size={22}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span className="font-mono text-[13px] text-gold-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="text-[15.5px] leading-[1.6] text-ink-600">
                {pillar.description}
              </p>
              {/* Fills a quarter more with each step of the journey */}
              <div
                aria-hidden="true"
                className="mt-auto h-1 overflow-hidden rounded-[4px] bg-cream-400"
              >
                <div
                  className="h-full bg-gold-500"
                  style={{ width: `${((i + 1) / pillars.length) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
