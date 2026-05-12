import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Территория и условия проживания — корпуса, питание',
  description: 'Жилые корпуса, спортивные и игровые площадки, столовая, медпункт. Территория 8 га хвойного леса в государственном заказнике «Гладышевский», Ленинградская область. Питание 5 раз в день по СанПиН.',
  keywords: ['проживание в детском лагере', 'корпуса детский лагерь', 'питание детский лагерь', 'территория детского лагеря Ракета', 'безопасность детский лагерь'],
  alternates: { canonical: '/facilities' },
  openGraph: { title: 'Территория и условия проживания — корпуса, питание', url: '/facilities' },
}

const facilities = [
  {
    category: 'Жилые корпуса',
    items: [
      '7 жилых корпусов, капитальный ремонт 2018 г.',
      'Горячая вода, индивидуальные душевые',
      'Системы отопления',
      'Стеллажи и шкафы для личных вещей',
    ],
  },
  {
    category: 'Спортивная инфраструктура',
    items: [
      'Футбольное поле с искусственным покрытием',
      '2 волейбольных поля',
    ],
  },
  {
    category: 'Творческие пространства',
    items: [
      'Арт-студия',
      'Театральная сцена на 300 мест',
      'Студия фото и видео',
      'Библиотека',
    ],
  },
  {
    category: 'Питание и столовая',
    items: [
      'Столовая на 200 посадочных мест',
      'Современное технологическое оборудование 2025 г.',
      'Собственная заготовочная кухня',
      'Система ХАССП (безопасность питания)',
      'Отдельная линия для аллергиков',
    ],
  },
  {
    category: 'Медицинский пункт',
    items: [
      'Лицензированный медицинский пункт',
      'Изолятор на 12 мест',
      'Запас медикаментов и перевязочных материалов',
      'Договор с районной больницей (15 мин)',
    ],
  },
  {
    category: 'Территория',
    items: [
      '8 га огороженной территории',
      'Собственный лес — сосновый бор',
      'Костровая площадка',
      'Экологическая тропа (5 км)',
      'Видеонаблюдение: более 10 камер',
    ],
  },
]

export default function FacilitiesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Материально-техническое обеспечение</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Материально-техническая база
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            Условия проживания, спортивная инфраструктура и творческие пространства
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f) => (
              <div key={f.category} className="bg-white rounded-3xl border border-gray-200 p-7">
                <h3 className="font-heading font-bold text-lg text-ink mb-5 pb-4 border-b border-gray-100">
                  {f.category}
                </h3>
                <ul className="space-y-2.5">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-base text-gray-600">
                      <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="safety" className="mt-10 bg-forest rounded-3xl p-8 md:p-10">
            <h2 className="font-heading font-bold text-2xl text-white mb-6">Безопасность объекта</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: 'Охрана', value: 'Круглосуточно', icon: '🛡️' },
                { label: 'Камер наблюдения', value: 'Более 10', icon: '📷' },
                { label: 'До больницы', value: '15 мин', icon: '🏥' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-heading font-black text-2xl text-white mb-1">{item.value}</div>
                  <div className="text-white/60 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
