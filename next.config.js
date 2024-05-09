/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    pageDataCollectionTimeout: 10000, // Increase timeout to 10 seconds (default is 5 seconds)
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

module.exports = nextConfig;