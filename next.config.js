/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/python-learning-hub' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/python-learning-hub/' : '',
}

module.exports = nextConfig