import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE = 'https://zsaveleva.github.io/dolraketa.ru'

const ROUTES: { path: string; changeFrequency: 'monthly' | 'weekly' | 'yearly'; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/activities', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/facilities', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contacts', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about/management', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/about/staff', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/about/documents', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE}${path}/`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
