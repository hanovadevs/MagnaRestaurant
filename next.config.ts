import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_PUBLIC_STATIC_DEMO === "true" ? "export" : undefined,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: process.env.NEXT_PUBLIC_STATIC_DEMO === "true",
  turbopack: { root: process.env.RAUM_BUILD_ROOT || process.cwd() },
  devIndicators: false,
  images: {
    unoptimized: process.env.NEXT_PUBLIC_STATIC_DEMO === "true",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
