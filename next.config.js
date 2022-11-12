/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ];
  }
};

module.exports = nextConfig;
