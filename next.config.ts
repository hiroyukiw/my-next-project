import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  typescript: {
    // 警告: これは一時的な解決策です
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
