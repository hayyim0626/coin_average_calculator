import type { NextConfig } from "next";

const s3Domain = process.env.NEXT_PUBLIC_S3_DOMAIN || "";
const hostname = new URL(s3Domain).hostname;

const nextConfig: NextConfig = {
  images: {
    domains: [hostname, "coin-images.coingecko.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: hostname,
        pathname: "/images/**"
      }
    ]
  },
  // for svg image
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/coin-calculator",
        destination: "/coinCalculator"
      }
    ];
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        }
      }
    }
  }
};

export default nextConfig;
