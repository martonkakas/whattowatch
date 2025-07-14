import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://m.media-amazon.com/**')],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT
  },
  crossOrigin: 'anonymous',
};

export default nextConfig;
