/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// To make pages/api work we need to add this to next.config.js
module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
}