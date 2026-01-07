/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', 'gsap', 'framer-motion'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
