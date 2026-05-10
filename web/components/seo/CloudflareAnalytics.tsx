import Script from "next/script";

/**
 * Cloudflare Web Analytics. Cookieless, no GDPR banner required for this script.
 *
 * Setup after deploying to Cloudflare Pages:
 *   1. Cloudflare dashboard → Web Analytics → Add a site
 *   2. Choose the free web-only beacon, add the production domain
 *   3. Copy the token
 *   4. Set NEXT_PUBLIC_CF_BEACON_TOKEN in Pages env vars
 *
 * Until the env var is set this renders nothing.
 */
export default function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
  if (!token) return null;

  return (
    <Script
      strategy="afterInteractive"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
