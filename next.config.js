/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
