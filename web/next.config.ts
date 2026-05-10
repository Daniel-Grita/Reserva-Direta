import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Pages doesn't run Vercel's on-demand image optimizer.
    // We ship pre-optimized WebPs from /public, so this is fine.
    unoptimized: true,
  },
};

export default nextConfig;
