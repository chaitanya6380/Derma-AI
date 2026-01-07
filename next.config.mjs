/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', 'gsap', 'framer-motion'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
