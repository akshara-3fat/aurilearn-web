import Script from "next/script";
import { GA_ID } from "@/config/analytics";

/**
 * Google's standard gtag.js snippet, loaded after the page is interactive so it
 * never slows the site down. Renders nothing off the live site (see config).
 *
 * Page views (including in-site navigation), scrolls, outbound links and
 * YouTube plays are recorded automatically by GA4 "enhanced measurement".
 */
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
