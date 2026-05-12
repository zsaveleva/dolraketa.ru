import type { Metadata } from 'next'
import Link from 'next/link'
import { ACTIVITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Программа смены — спорт, творчество, экскурсии',
  description: 'Что делают дети в лагере «Ракета»: спортивные секции, творческие мастерские, экскурсии в бассейн и на конную ферму. Распорядок дня и особые мероприятия каждой смены.',
  keywords: ['программа детского лагеря', 'кружки и секции детский лагерь', 'распорядок дня лагерь', 'мероприятия в детском лагере', 'экскурсии в детском лагере'],
  alternates: { canonical: '/activities' },
  openGraph: { title: 'Программа смены — спорт, творчество, экскурсии', url: '/activities' },
}

const schedule = [
  { time: '08:00', activity: 'Подъём' },
  { time: '08:45', activity: 'Зарядка' },
  { time: '09:00', activity: 'Завтрак' },
  { time: '09:30–12:50', activity: 'Кружки и секции' },
  { time: '13:00', activity: 'Обед' },
  { time: '14:00–15:50', activity: 'Тихий час' },
  { time: '16:00', activity: 'Полдник' },
  { time: '16:30', activity: 'Общелагерное мероприятие' },
  { time: '18:30', activity: 'Ужин' },
  { time: '19:30', activity: 'Вечернее мероприятие / дискотека' },
  { time: '20:30', activity: 'Второй ужин' },
  { time: '21:00', activity: 'Подготовка ко сну' },
  { time: '22:00', activity: 'Отбой' },
]

const special = [
  { title: 'День самоуправления', desc: 'Дети управляют лагерем сами — один день в смену', emoji: '🏛️' },
  { title: 'Ярмарка', desc: 'Ребята организуют тематические станции и получают за это лагерные деньги', emoji: '🎪' },
  { title: 'НеИгры', desc: 'Интерактивная программа с нестандартными заданиями и играми для развития личности и командного взаимодействия', emoji: '🎲' },
  { title: 'Звёздный фестиваль', desc: 'Финальный гала-концерт с награждением лучших', emoji: '⭐' },
  { title: 'Олимпиада', desc: 'Спортивные состязания между всеми отрядами', emoji: '🏆' },
]

export default function ActivitiesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Деятельность</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Программа и деятельность</h1>
          <p className="text-white/75 text-lg max-w-xl">10+ кружков, особые события каждой смены и режим дня, который не скучает</p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          {/* Directions */}
          <h2 className="font-heading font-black text-3xl text-ink mb-8">Направления</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {ACTIVITIES.map((cat) => (
              <div key={cat.category} className="bg-white rounded-3xl border border-gray-200 p-7 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{cat.emoji}</div>
                <h3 className="font-heading font-bold text-xl text-ink mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-cream rounded-lg text-gray-600 text-sm border border-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <h2 className="font-heading font-black text-3xl text-ink mb-8">Распорядок дня</h2>
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden mb-16">
            {schedule.map((item, i) => (
              <div
                key={item.time}
                className={`flex items-center gap-5 px-7 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
              >
                <span className="font-heading font-bold text-forest text-sm w-28 flex-shrink-0">{item.time}</span>
                <span className="w-px h-5 bg-gray-200 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item.activity}</span>
              </div>
            ))}
          </div>

          {/* Special events */}
          <h2 className="font-heading font-black text-3xl text-ink mb-8">Особые события каждой смены</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {special.map((e) => (
              <div key={e.title} className="card-hover">
                <div className="text-3xl mb-4">{e.emoji}</div>
                <h3 className="font-heading font-bold text-lg text-ink mb-2">{e.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
