import type { NextConfig } from "next";

// Only the real domain may appear in Google. Every other host serving this site
// (aurilearn-web.vercel.app, Vercel previews, localhost) is marked noindex, so
// Google never lists a duplicate copy of aurilearn.ai.
const PRODUCTION_HOST = String.raw`(www\.)?aurilearn\.ai`;

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        missing: [{ type: "host", value: PRODUCTION_HOST }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
