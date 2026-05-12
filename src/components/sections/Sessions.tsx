import { Calendar, Clock, Users, Phone } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { SESSIONS, CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

function SpotsBar({ total, left }: { total: number; left: number }) {
  const pct = Math.round((left / total) * 100)
  const color = left < 20 ? 'bg-red-400' : left < 40 ? 'bg-gold' : 'bg-leaf'
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-500">Свободных мест</span>
        <span className={`font-bold ${left < 20 ? 'text-red-400' : left < 40 ? 'text-gold' : 'text-leaf'}`}>
          {left} из {total}
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden bg-gray-100">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export default function Sessions() {
  return (
    <section id="sessions" className="section-py bg-white">
      <div className="container-camp">
        <SectionHeader
          label="Летние смены"
          title="4 смены на выбор"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {SESSIONS.map((s) => (
            <div
              key={s.id}
              className="relative rounded-3xl border-2 border-gray-200 bg-white shadow-md hover:border-forest/30 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-bold uppercase tracking-widest mb-3 text-leaf">
                {s.title}
              </div>

              <h3 className="font-heading font-black text-2xl mb-6 text-ink">
                {s.theme}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  {s.datesFull}
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  {s.duration} день
                </div>
                <div className="flex items-center gap-3 text-base text-gray-600">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  {s.ageFrom}–{s.ageTo} лет
                </div>
              </div>

              <SpotsBar total={s.spotsTotal} left={s.spotsLeft} />

              <div className="mt-auto pt-5 border-t border-gray-100">
                <div className="text-xs mb-1 text-gray-500">
                  Стоимость путёвки
                </div>
                <div className="font-heading font-black text-3xl mb-5 text-forest">
                  {s.price.toLocaleString('ru-RU')} ₽
                </div>
                <a
                  href={`tel:${CAMP.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 bg-forest hover:bg-forest-light text-white"
                >
                  <Phone className="w-4 h-4" />
                  Позвонить
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="bg-cream rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-ink mb-1">Есть вопросы по сменам?</h4>
            <p className="text-gray-500 text-base">Позвоните или напишите — ответим на все вопросы и поможем с выбором</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:flex-shrink-0">
            <a href={`tel:${CAMP.phoneRaw}`} className="btn-outline-forest w-full sm:w-auto">
              <Phone className="w-4 h-4 flex-shrink-0" />
              Позвонить
            </a>
            <a href={CAMP.maxLink} target="_blank" rel="noopener noreferrer" className="btn-max w-full sm:w-auto">
              <MAXIcon className="w-4 h-4 flex-shrink-0" />
              Написать в MAX
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
