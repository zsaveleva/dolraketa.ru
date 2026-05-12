import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dolraketa.ru',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
