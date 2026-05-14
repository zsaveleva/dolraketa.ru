import { CAMP, SESSIONS } from '@/lib/data'

export default function JsonLd() {
  const baseUrl = 'https://dolraketa.ru'

  const organization = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Camp', 'LodgingBusiness'],
    '@id': `${baseUrl}/#organization`,
    name: CAMP.fullName,
    legalName: CAMP.legalName,
    alternateName: ['СОК «Ракета»', 'ДОЛ «Ракета»', 'Лагерь Ракета'],
    description: CAMP.shortDesc,
    url: baseUrl,
    logo: `${baseUrl}/images/opening.jpg`,
    image: [
      `${baseUrl}/images/opening.jpg`,
      `${baseUrl}/images/sport.jpg`,
      `${baseUrl}/images/creative.jpg`,
    ],
    telephone: CAMP.phone,
    email: CAMP.email,
    foundingDate: CAMP.founded,
    priceRange: `${SESSIONS[0].price.toLocaleString('ru-RU')} ₽`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'тер. Горьковское, д. 65, к. 1',
      addressLocality: 'пос. Горьковское, Полянское сельское поселение',
      addressRegion: 'Ленинградская область',
      postalCode: '188831',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 60.4561,
      longitude: 29.5294,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Санкт-Петербург и Ленинградская область',
    },
    sameAs: [CAMP.vkGroup],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CAMP.phone,
      contactType: 'reservations',
      areaServed: 'RU',
      availableLanguage: 'Russian',
    },
    taxID: CAMP.inn,
    vatID: CAMP.kpp,
    audience: {
      '@type': 'PeopleAudience',
      suggestedMinAge: 6,
      suggestedMaxAge: 17,
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Детский лагерь «Ракета»',
    inLanguage: 'ru-RU',
    publisher: { '@id': `${baseUrl}/#organization` },
  }

  const offers = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Летние смены 2026',
    itemListElement: SESSIONS.map((s) => ({
      '@type': 'Offer',
      name: `${s.title} — ${s.theme}`,
      description: `${s.datesFull} · ${s.duration} день · возраст ${s.ageFrom}–${s.ageTo} лет`,
      price: s.price,
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      seller: { '@id': `${baseUrl}/#organization` },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }}
      />
    </>
  )
}
