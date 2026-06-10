import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Prevents Next.js from using C:\Users\spsjd\package-lock.json as the workspace root.
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/65f356ec7415593fe8a16928/**",
      },
    ],
  },
};

export default nextConfig;
