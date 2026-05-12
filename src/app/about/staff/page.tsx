import type { Metadata } from 'next'
import Link from 'next/link'
import { TEAM, CAMP } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Педагогический состав — педагоги и воспитатели',
  description: 'Педагогический состав детского лагеря «Ракета»: педагог-организатор, воспитатели, педагог-психолог, главный врач. У всех педагогическое образование и проверка по реестру МВД.',
  keywords: ['педагогический состав детский лагерь', 'воспитатели детский лагерь', 'педагог-психолог лагерь', 'врач в детском лагере'],
  alternates: { canonical: '/about/staff' },
  openGraph: { title: 'Педагогический состав — педагоги и воспитатели', url: '/about/staff' },
}

const avatarColors: Record<string, string> = {
  forest: 'bg-forest text-white',
  'sky-camp': 'bg-sky-camp text-white',
  leaf: 'bg-leaf text-white',
  gold: 'bg-gold text-ink',
}

export default function StaffPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">Об организации</Link>
            <span>/</span>
            <span className="text-white/80">Педагогический состав</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Педагогический состав</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Все педагоги и вожатые — с профильным образованием и проверкой по реестру МВД
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          {/* Requirements note */}
          <div className="bg-leaf-light border border-green-100 rounded-2xl p-6 mb-10 flex items-start gap-4">
            <div className="w-10 h-10 bg-leaf rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-forest mb-1">Требования к персоналу</div>
              <p className="text-gray-600 text-base leading-relaxed">
                Каждый сотрудник, работающий с детьми, проходит обязательную проверку в реестре лиц, лишённых права работать с несовершеннолетними (МВД РФ). Все педагоги имеют высшее или среднее специальное педагогическое образование.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((person) => (
              <div key={person.name} className="card">
                <div className={`w-12 h-12 ${avatarColors[person.color]} rounded-xl flex items-center justify-center font-heading font-black text-lg mb-4`}>
                  {person.initials}
                </div>
                <h3 className="font-heading font-bold text-base text-ink leading-tight mb-1">{person.name}</h3>
                <div className="text-leaf text-sm font-semibold">{person.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-cream rounded-2xl p-6 text-center">
            <p className="text-gray-500 text-base">
              Копии дипломов и справок об отсутствии судимости доступны по запросу.{' '}
              <a href={`mailto:${CAMP.email}`} className="text-leaf hover:text-forest font-medium transition-colors">
                Написать запрос
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
