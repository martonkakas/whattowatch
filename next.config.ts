import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://m.media-amazon.com/**')],
  },
  crossOrigin: 'anonymous',
};

export default nextConfig;
