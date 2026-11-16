/**
 * Google Analytics 4 for the marketing website.
 *
 * GA runs only on the live site (Vercel production deploy). Local dev and
 * Vercel preview links never load it, so test visits don't mix with real
 * visitor data. Vercel sets NEXT_PUBLIC_VERCEL_ENV automatically.
 *
 * To test GA locally, put NEXT_PUBLIC_GA_ID=G-… in .env.local (remove after).
 */

/** GA4 property "AuriLearn Website", stream "Website – Production". Not a secret. */
const WEBSITE_GA_ID = "G-610DF9T6RS";

const GA4_MEASUREMENT_ID = /^G-[A-Z0-9]+$/;

export function resolveGaId(raw: string | undefined): string | null {
  const value = raw?.trim().toUpperCase() ?? "";
  return GA4_MEASUREMENT_ID.test(value) ? value : null;
}

const isLiveDeploy = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export const GA_ID =
  resolveGaId(process.env.NEXT_PUBLIC_GA_ID) ??
  (isLiveDeploy ? WEBSITE_GA_ID : null);
