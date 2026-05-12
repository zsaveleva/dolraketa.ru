import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/privacy/'],
      },
    ],
    sitemap: 'https://zsaveleva.github.io/dolraketa.ru/sitemap.xml',
    host: 'https://zsaveleva.github.io/dolraketa.ru',
  }
}
