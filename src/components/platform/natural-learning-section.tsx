import {
  Bug,
  CircleQuestionMark,
  Lightbulb,
  RefreshCw,
  Route,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    icon: CircleQuestionMark,
    title: "Ask Questions Anytime",
    description:
      "Learners can ask the AI mentor questions at any stage of training — no waiting, no bottlenecks.",
  },
  {
    icon: Bug,
    title: "Debug Errors Instantly",
    description:
      "Paste logs, errors, or configurations and receive guided troubleshooting explanations in real time.",
  },
  {
    icon: Route,
    title: "Guided Lab Execution",
    description:
      "The AI mentor walks engineers through complex infrastructure tasks step by step.",
  },
  {
    icon: Lightbulb,
    title: "Concept Explanations",
    description:
      "Difficult engineering concepts are explained clearly using examples and structured reasoning.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning Support",
    description:
      "The AI instructor remembers context and continues guiding the learner through their full progress.",
  },
];

export function NaturalLearningSection() {
  return (
    <section className="bg-navy-900 text-cream-300">
      <div className="container-page flex flex-col gap-12 section-y">
        <SectionHeading
          tone="dark"
          eyebrow="Customer experience"
          title="Natural learning experience"
          description="Interact with your Aurilearn AI instructor like working with a senior engineer."
          className="max-w-[780px]"
        />

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-navy-800 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-[11px] bg-gold-500/14 text-gold-400">
                <feature.icon
                  size={20}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <h3 className="font-display text-lg leading-[1.3] font-semibold">
                {feature.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-mist-400">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
