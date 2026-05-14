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
    sitemap: 'https://dolraketa.ru/sitemap.xml',
    host: 'https://dolraketa.ru',
  }
}
