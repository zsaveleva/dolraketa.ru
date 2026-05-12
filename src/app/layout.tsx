import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBar from '@/components/layout/MobileBar'
import JsonLd from '@/components/seo/JsonLd'
import { CAMP } from '@/lib/data'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const TITLE = 'Детский лагерь «Ракета» — путёвки 2026 в Ленинградской области'
const DESCRIPTION = 'Детский оздоровительный лагерь «Ракета» в Выборгском районе Ленинградской области. С 1956 года. 4 летние смены 2026 года по 21 дню — 67 000 ₽. 70 км от Санкт-Петербурга, в государственном заказнике «Гладышевский». Тел. ' + CAMP.phone

export const metadata: Metadata = {
  metadataBase: new URL('https://zsaveleva.github.io/dolraketa.ru'),
  title: {
    default: TITLE,
    template: '%s | Детский лагерь «Ракета»',
  },
  description: DESCRIPTION,
  keywords: [
    'детский лагерь Ленинградская область',
    'детский лагерь Санкт-Петербург',
    'летний детский лагерь 2026',
    'путёвки в детский лагерь',
    'детский лагерь Выборгский район',
    'детский оздоровительный лагерь',
    'детский лагерь Горьковское',
    'детский лагерь Гладышевский заказник',
    'Ракета лагерь',
    'ДОЛ Ракета',
    'СОК Ракета',
    'детский лагерь у озера',
    'детский лагерь в хвойном лесу',
    'лагерь летние каникулы 2026',
    'детский лагерь 6-17 лет',
    'детский лагерь 21 день',
    'летние смены 2026 СПб',
    'детский отдых Ленобласть',
    'путёвки 2026 детский лагерь',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: CAMP.legalNameShort }],
  creator: CAMP.legalNameShort,
  publisher: CAMP.legalNameShort,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Детский лагерь «Ракета»',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'ru_RU',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/images/opening.jpg',
        width: 1200,
        height: 630,
        alt: 'Детский лагерь «Ракета» — открытие смены',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/opening.jpg'],
  },
  category: 'children camp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <MobileBar />
      </body>
    </html>
  )
}
