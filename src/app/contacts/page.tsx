import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

export const metadata: Metadata = {
  title: 'Контакты — телефон, адрес, как добраться',
  description: 'Контакты детского лагеря «Ракета»: телефон ' + CAMP.phone + ', email, адрес в пос. Горьковское Выборгского района Ленинградской области. Схема проезда из Санкт-Петербурга.',
  keywords: ['контакты детский лагерь', 'как добраться до лагеря Ракета', 'детский лагерь Горьковское адрес', 'телефон детский лагерь СПб'],
  alternates: { canonical: '/contacts' },
  openGraph: { title: 'Контакты — телефон, адрес, как добраться', url: '/contacts' },
}

export default function ContactsPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Контакты</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Контакты</h1>
          <p className="text-white/75 text-lg">Свяжитесь с нами любым удобным способом — ответим в тот же день</p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contacts */}
            <div className="space-y-5">
              {/* Phone — primary */}
              <a
                href={`tel:${CAMP.phoneRaw}`}
                className="block bg-forest rounded-3xl p-7 hover:shadow-xl hover:shadow-forest/25 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white/75 text-xs font-semibold uppercase tracking-wider">Основной контакт</div>
                    <div className="font-heading font-bold text-xl text-white">{CAMP.phone}</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Позвоните нам — ответим в рабочее время. Вопросы, запись, документы — всё по телефону.
                </p>
                <div className="text-white/50 text-xs mt-3">{CAMP.workingHours}</div>
              </a>

              {/* MAX */}
              <a
                href={CAMP.maxLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-3xl border border-gray-200 p-7 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MAXIcon className="w-10 h-10 rounded-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">MAX</div>
                    <div className="font-heading font-bold text-2xl text-ink">Написать в MAX</div>
                    <div className="text-gray-400 text-sm">Ответим быстро в рабочее время</div>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CAMP.email}`}
                className="block bg-white rounded-3xl border border-gray-200 p-7 hover:border-leaf/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-leaf-light rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-leaf" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</div>
                    <div className="font-heading font-bold text-xl text-ink">{CAMP.email}</div>
                    <div className="text-gray-400 text-sm">Для официальных запросов</div>
                  </div>
                </div>
              </a>

              {/* Address + hours */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-cream rounded-3xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div className="font-semibold text-ink text-sm mb-1">Адрес</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{CAMP.address}</div>
                </div>
                <div className="bg-cream rounded-3xl border border-gray-200 p-6">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-leaf" />
                  </div>
                  <div className="font-semibold text-ink text-sm mb-1">Режим работы</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{CAMP.workingHours}</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-5">
              <div className="flex-1 bg-forest rounded-3xl overflow-hidden relative min-h-[360px]">
                <div className="absolute inset-0 bg-grid" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                  <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center mb-5 shadow-xl">
                    <MapPin className="w-10 h-10 text-ink" />
                  </div>
                  <div className="font-heading font-black text-2xl text-white mb-2">СОК «Ракета»</div>
                  <div className="text-white/70 text-sm mb-2 max-w-xs">{CAMP.address}</div>
                  <div className="text-blue-300 text-sm mb-8">{CAMP.distanceFromSpb}</div>
                  <a
                    href="https://yandex.ru/maps/?text=Ленинградская+область+Выборгский+район+Горьковское+Лесная+1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold rounded-xl transition-colors"
                  >
                    Открыть в Яндекс.Картах →
                  </a>
                </div>
              </div>

              {/* Requisites */}
              <div className="bg-white rounded-3xl border border-gray-200 p-7">
                <h3 className="font-heading font-bold text-lg text-ink mb-4">Реквизиты организации</h3>
                <dl className="space-y-3">
                  {[
                    { dt: 'Полное наименование', dd: CAMP.legalName },
                    { dt: 'ИНН', dd: CAMP.inn },
                    { dt: 'ОГРН', dd: CAMP.ogrn },
                    { dt: 'Юридический адрес', dd: CAMP.address },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="flex flex-col gap-0.5 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                      <dt className="text-gray-400 text-xs">{dt}</dt>
                      <dd className="text-ink text-sm font-medium">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
