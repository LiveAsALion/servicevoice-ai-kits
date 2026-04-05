import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',   // required for Docker
  poweredByHeader: false, // don't leak Next.js version
};

export default nextConfig;
