import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Phone, Calendar, Clock, Users } from 'lucide-react'
import { SESSIONS, CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

export const metadata: Metadata = {
  title: 'Смены и цены 2026 — путёвки от 67 000 ₽',
  description: 'Путёвки в детский лагерь «Ракета» на лето 2026: 4 смены по 21 дню для детей 6–17 лет. Единая цена — 67 000 ₽, всё включено. Оформление по телефону, без онлайн-форм.',
  keywords: ['путёвки в детский лагерь 2026', 'цены детский лагерь Ленинградская область', 'летние смены 2026', 'стоимость детский лагерь СПб', 'путёвки лето 2026'],
  alternates: { canonical: '/services' },
  openGraph: { title: 'Смены и цены 2026 — путёвки от 67 000 ₽', url: '/services' },
}

const included = [
  'Трансфер',
  'Проживание в корпусе (3–8 чел. в комнате)',
  '5-разовое питание по нормам СанПиН',
  'Полная программа мероприятий',
  'Занятия в кружках и секциях',
  'Медицинское обслуживание (педиатр 24/7)',
  'Спортивное оборудование и инвентарь',
  'Расходные материалы для кружков',
]

const notIncluded = [
  'Личные расходы ребёнка',
  'Дополнительные экскурсии (по желанию)',
]

const discounts = [
  { label: 'Ранняя запись (до 1 марта)', value: '−5%' },
  { label: 'Два и более детей из семьи', value: '−7%' },
  { label: 'Партнёрские организации', value: '−10%' },
]


export default function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Услуги и стоимость</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Услуги и стоимость</h1>
          <p className="text-white/75 text-lg max-w-xl">Путёвки 2026. Цены прозрачные, без скрытых платежей.</p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          {/* Regular sessions */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {SESSIONS.map((s) => (
              <div key={s.id} className="bg-white rounded-3xl border-2 border-gray-100 hover:border-forest/20 p-7 hover:shadow-lg transition-all duration-300">
                <div className="text-xs font-bold uppercase tracking-wider text-leaf mb-4">{s.title}</div>
                <h3 className="font-heading font-black text-2xl text-ink mb-6">{s.theme}</h3>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-forest flex-shrink-0" />
                    {s.datesFull}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-forest flex-shrink-0" />
                    {s.duration} день
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-forest flex-shrink-0" />
                    {s.ageFrom}–{s.ageTo} лет · {s.spotsLeft} мест
                  </div>
                </div>
                <div className="pt-5 border-t border-gray-100">
                  <div className="text-gray-400 text-xs mb-1">Полная стоимость</div>
                  <div className="font-heading font-black text-3xl text-forest mb-4">
                    {s.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <a
                    href={`tel:${CAMP.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest hover:bg-forest-light text-white font-semibold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-leaf-light rounded-3xl p-8">
              <h3 className="font-heading font-bold text-xl text-ink mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-leaf rounded-lg flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </span>
                Включено в стоимость
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 mb-5">
                <h3 className="font-heading font-bold text-xl text-ink mb-5">Оплачивается отдельно</h3>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      {/* <span className="w-4 h-4 border-2 border-orange-300 rounded flex-shrink-0 mt-0.5" /> */}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Discounts */}
              <div className="bg-gold-light border border-yellow-100 rounded-3xl p-8">
                <h3 className="font-heading font-bold text-xl text-ink mb-5">Скидки</h3>
                <ul className="space-y-3">
                  {discounts.map((d) => (
                    <li key={d.label} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-600">{d.label}</span>
                      <span className="font-bold text-gold-dark text-sm flex-shrink-0">{d.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs mt-4">Скидки не суммируются. Уточняйте при бронировании.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-forest rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Готовы записаться?</h3>
              <p className="text-white/60">Позвоните или напишите в MAX — ответим и поможем с оформлением</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href={`tel:${CAMP.phoneRaw}`} className="btn-outline-white">
                <Phone className="w-4 h-4" />
                Позвонить
              </a>
              <a href={CAMP.maxLink} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                <MAXIcon className="w-4 h-4" />
                Написать в MAX
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
