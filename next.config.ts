import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // Static export is required for GitHub Pages but optional for Vercel/Local
  output: isGithubActions ? 'export' : undefined,
  
  // Set the base path ONLY for GitHub Pages deployments (e.g., /MagnaRestaurant)
  // This ensures Local Dev and Vercel remain at the root (/)
  basePath: isGithubActions ? '/MagnaRestaurant' : '',
  
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
