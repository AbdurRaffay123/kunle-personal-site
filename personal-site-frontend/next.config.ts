import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  outputFileTracingRoot: undefined, // Let Next.js auto-detect
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "website-2025-backend-1.onrender.com",
      },
    ],
    unoptimized: true, // For static export compatibility
  },
  
  // Enable strict mode for better development experience
  reactStrictMode: true,

  // Environment variables that should be available on the client side
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GISCUS_REPO: process.env.NEXT_PUBLIC_GISCUS_REPO,
    NEXT_PUBLIC_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
    NEXT_PUBLIC_GISCUS_CATEGORY: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  },
};

export default nextConfig;
