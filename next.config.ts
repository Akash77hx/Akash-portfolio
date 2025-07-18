import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['three'],
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@mantine/core', 'lucide-react'],
    serverActions: {
      bodySizeLimit: '2mb'
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
};

export default nextConfig;