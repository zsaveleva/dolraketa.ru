import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/privacy/'],
      },
    ],
    sitemap: 'https://zsaveleva.github.io/sitemap.xml',
    host: 'https://zsaveleva.github.io',
  }
}
