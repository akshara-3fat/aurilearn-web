import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Search-engine settings.
 *
 * Only aurilearn.ai is meant to appear in Google. Every other host that serves
 * this site (aurilearn-web.vercel.app, Vercel preview URLs, localhost) gets an
 * `X-Robots-Tag: noindex` header from next.config.ts, so no env var is needed:
 * the right thing happens on whichever domain the site is opened on.
 */

/** Public pages listed in sitemap.xml. Add new pages here. */
export const sitemapPages = [
  "/",
  "/about",
  "/platform",
  "/security",
  "/contact",
] as const;

type PagePath = (typeof sitemapPages)[number];

/**
 * The share card drawn by app/opengraph-image.tsx. Listed explicitly because a
 * page that sets its own `openGraph` otherwise loses the inherited image.
 */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: ${siteConfig.description}`,
};

/**
 * Title, description, canonical URL and social-share tags for one page.
 *
 * Next.js replaces (does not merge) nested fields like `openGraph` between the
 * layout and a page, so every page builds the full set here to keep them in
 * step.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: PagePath;
  /** Use the title as-is, without the "| Aurilearn" suffix (home page). */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}

/** Organization details for Google (name, logo, contact) as JSON-LD. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  email: siteConfig.salesEmail,
} as const;
