import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['storage.googleapis.com'],
  },
  transpilePackages: ['@pqina/pintura', '@pqina/react-pintura'],
};


export default nextConfig;
