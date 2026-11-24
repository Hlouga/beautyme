import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true, // <-- Add this line
    partialPrefetching: true,
};

export default nextConfig;