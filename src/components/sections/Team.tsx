import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { TEAM } from '@/lib/data'

const avatarColors = {
  forest: 'bg-forest text-white',
  'sky-camp': 'bg-sky-camp text-white',
  leaf: 'bg-leaf text-white',
  gold: 'bg-gold text-ink',
}

export default function Team() {
  return (
    <section id="team" className="section-py bg-white">
      <div className="container-camp">
        <SectionHeader
          label="Команда"
          title="Люди, которым вы доверяете детей"
          description="Профильное образование и проверка по реестру МВД у каждого сотрудника. Настоящие энтузиасты детского отдыха."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {TEAM.map((member) => {
            const colorClass = avatarColors[member.color as keyof typeof avatarColors]
            return (
              <div key={member.name} className="card-hover text-center group">
                <div className={`w-20 h-20 rounded-2xl ${colorClass} flex items-center justify-center font-heading font-black text-2xl mx-auto mb-5 transition-transform duration-300 group-hover:scale-105`}>
                  {member.initials}
                </div>
                <h3 className="font-heading font-bold text-base text-ink leading-tight mb-1">
                  {member.name}
                </h3>
                <div className="text-leaf text-sm font-semibold">{member.role}</div>
              </div>
            )
          })}
        </div>

        {/* Staff note */}
        <div className="bg-cream rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-forest rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-ink mb-1">Весь педагогический состав</div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                Список вожатых, их образование и опыт — в разделе «Педагогический состав» на сайте. Всё открыто и проверяемо.
              </p>
            </div>
          </div>
          <Link href="/about/staff" className="btn-outline-forest flex-shrink-0">
            Весь состав
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
