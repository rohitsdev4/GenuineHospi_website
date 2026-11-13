import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'genuinehospi.vercel.app',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
