/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        crypto: false,
      };
    }
    return config;
  },
  pageExtensions: ['tsx', 'ts'],
};

module.exports = nextConfig;
