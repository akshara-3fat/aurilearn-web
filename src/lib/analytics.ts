/**
 * Custom GA4 events, for actions that have no URL of their own.
 *
 * Never pass personal data (name, email, phone, typed text) as a parameter:
 * Google's terms forbid it.
 *
 * Safe to call anywhere: does nothing on the server, or when GA isn't loaded
 * (previews, local dev, or blocked by an ad blocker).
 */

type GtagWindow = Window & {
  gtag?: (
    command: "event",
    name: string,
    params?: Record<string, unknown>,
  ) => void;
};

export type AnalyticsEvent =
  // GA4's recommended event name for a lead; mark it as a key event in GA.
  { name: "generate_lead"; params: { form: "demo_request" } };

export function trackEvent({ name, params }: AnalyticsEvent): void {
  if (typeof window === "undefined") return;
  try {
    (window as GtagWindow).gtag?.("event", name, params);
  } catch {
    // Analytics must never break the site.
  }
}
