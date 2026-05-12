import type { Metadata } from 'next'
import Link from 'next/link'
import { CAMP } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Руководство — директор и заместители',
  description: 'Руководство детского лагеря «Ракета»: генеральный директор Сердаров Ю.К., директор лагеря Цапин П.А., заместитель директора Храмова А.Е. Контакты приёмной.',
  keywords: ['директор детский лагерь Ракета', 'руководство лагеря', 'Цапин Павел Анатольевич', 'Сердаров Юрий Кузьмич'],
  alternates: { canonical: '/about/management' },
  openGraph: { title: 'Руководство — директор и заместители', url: '/about/management' },
}

const management = [
  {
    name: 'Сердаров Юрий Кузьмич',
    role: 'Генеральный директор',
    fullRole: 'Генеральный директор ООО «СОК «Ракета»',
    initials: 'С',
    color: 'bg-forest',
  },
  {
    name: 'Цапин Павел Анатольевич',
    role: 'Директор лагеря',
    fullRole: 'Директор «ДОЛ «Ракета»',
    initials: 'Ц',
    color: 'bg-leaf',
  },
  {
    name: 'Храмова Анастасия Евгеньевна',
    role: 'Заместитель директора',
    fullRole: 'Заместитель директора',
    initials: 'Х',
    color: 'bg-sky-camp',
  },
]

export default function ManagementPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">Об организации</Link>
            <span>/</span>
            <span className="text-white/80">Руководство</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Руководство</h1>
          <p className="text-white/75 text-lg">Административный состав СОК «Ракета»</p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp max-w-4xl">
          <div className="space-y-6">
            {management.map((person) => (
              <div key={person.name} className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className={`${person.color} px-8 py-10 flex flex-col items-center justify-center gap-4 md:w-[200px] md:flex-shrink-0`}>
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center font-heading font-black text-3xl text-white">
                      {person.initials}
                    </div>
                    <div className="text-white/85 text-sm text-center font-medium leading-snug min-h-[2.5rem] flex items-center">
                      {person.role}
                    </div>
                  </div>
                  <div className="p-8 flex-1">
                    <h2 className="font-heading font-bold text-2xl text-ink mb-1">{person.name}</h2>
                    <div className="text-leaf font-semibold text-base mb-5">{person.fullRole}</div>
                    <dl className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <dt className="text-gray-400 text-sm font-medium mb-1">Телефон (приёмная)</dt>
                        <dd><a href={`tel:${CAMP.phoneRaw}`} className="text-forest text-base font-medium hover:underline">{CAMP.phone}</a></dd>
                      </div>
                      <div>
                        <dt className="text-gray-400 text-sm font-medium mb-1">Email</dt>
                        <dd><a href={`mailto:${CAMP.email}`} className="text-forest text-base font-medium hover:underline">{CAMP.email}</a></dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-gray-400 text-sm font-medium mb-1">Часы приёма</dt>
                        <dd className="text-gray-700 text-base">{CAMP.workingHours}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
