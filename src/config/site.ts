export const siteConfig = {
  name: "Aurilearn",
  url: "https://aurilearn.ai",
  description:
    "AI-powered 1:1 instructor agents for enterprise technical training at scale.",
  salesEmail: "sales@aurilearn.ai",
  demoVideoUrl: "https://www.youtube.com/watch?v=_BNz0LMvnMk",
  demoVideoId: "_BNz0LMvnMk",
  demoVideoTitle: "Aurilearn Demonstrative Video",
} as const;

/** Where every "Request a demo" call to action points. */
export const demoHref = "/contact#demo";

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Demo", href: demoHref },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
] as const;

// "#" marks pages that don't exist yet.
export const footerNav = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Security", href: "/security" },
      { label: "Analytics", href: "/security#analytics" },
      { label: "Scalability", href: "/platform#scalability" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Testimonials", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;

/** Headline numbers shown in the hero and the About section. */
export const stats = [
  { value: "Decades", label: "of IT training experience" },
  { value: "1:1", label: "AI mentorship" },
  { value: "94%", label: "Lab pass rate", highlight: true },
] as const;
