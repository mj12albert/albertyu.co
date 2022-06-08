/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    IMAGE_TAG_V: process.env.IMAGE_TAG_V,
  },
}

module.exports = nextConfig
