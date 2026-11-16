import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Crawling is allowed everywhere on purpose. Non-production hosts are kept out
// of results by the `X-Robots-Tag: noindex` header (next.config.ts), and a
// crawler can only see that header on pages it is allowed to fetch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
