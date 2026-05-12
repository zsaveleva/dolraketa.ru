import { Phone } from 'lucide-react'
import { CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

export default function CTA() {
  return (
    <section className="section-py-sm bg-white">
      <div className="container-camp">
        <div className="relative overflow-hidden rounded-3xl bg-forest px-8 md:px-14 py-14 md:py-16">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-leaf rounded-full opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gold rounded-full opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-dots pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
                Готовы записать<br />
                <span className="text-gold">ребёнка в лагерь?</span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                Не откладывайте — места ограничены. Позвоните или напишите нам, и мы всё расскажем.
              </p>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-auto">
              <a
                href={`tel:${CAMP.phoneRaw}`}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-forest font-bold text-lg rounded-2xl transition-all duration-200 shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                {CAMP.phone}
              </a>
              <a
                href={CAMP.maxLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold text-lg rounded-2xl transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MAXIcon className="w-5 h-5" />
                Написать в MAX
              </a>
              <p className="text-center text-white/60 text-xs">
                Отвечаем в рабочее время · {CAMP.workingHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
