import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["react-icons", "lucide-react", "framer-motion"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Origin-Trial",
            value:
              "AscrjOqCU6Z877AYlbdHQy1I/11TBwteuMRjIY/9eTGa7tPkWkvg6kzqj41j17O4q4i/ROxioPJJP0h6A1siKA0AAABieyJvcmlnaW4iOiJodHRwczovL3d3dy5hbXJzYWxtLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViTUNQIiwiZXhwaXJ5IjoxODA2MzY0ODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
          },
        ],
      },
    ];
  },
};

export default nextConfig;