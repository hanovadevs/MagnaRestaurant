import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Set the base path for your repository name (e.g., /MagnaRestaurant for https://hanovadevs.github.io/MagnaRestaurant)
  basePath: '/MagnaRestaurant',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
