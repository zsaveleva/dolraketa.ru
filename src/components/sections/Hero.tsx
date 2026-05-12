import { Phone, ChevronDown } from 'lucide-react'
import { CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

const stats = [
  { value: '4 смены', label: 'Весна · Лето · Осень' },
  { value: '67 000 ₽', label: '21 день', accent: true },
  { value: '70 км', label: 'от Санкт-Петербурга' },
  { value: '6–17 лет', label: 'Возраст' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background texture */}
      <div className="absolute inset-0 bg-dots opacity-100" />

      {/* Ambient blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-leaf rounded-full opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold rounded-full opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-64 h-64 bg-sky-camp rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

      {/* Star particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        {[
          [10, 12, 1, 40], [18, 40, 1.5, 30], [8, 75, 1, 50],
          [35, 8, 1, 35], [60, 15, 1.5, 25], [80, 10, 1, 45],
          [92, 30, 1, 30], [5, 55, 1, 25], [25, 65, 2, 20],
          [50, 70, 1, 40], [72, 60, 1.5, 30], [88, 75, 1, 35],
          [40, 90, 1, 25], [65, 85, 1.5, 20], [15, 85, 1, 30],
          [45, 25, 1, 45], [70, 40, 1, 25], [30, 45, 1.5, 30],
        ].map(([top, left, size, opacity], i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity / 100,
            }}
          />
        ))}
        {/* Gold stars */}
        {[[40, 10, 2, 25], [75, 28, 2, 20], [20, 90, 2, 30]].map(([top, left, size, opacity], i) => (
          <div
            key={`g${i}`}
            className="absolute rounded-full bg-gold"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity / 100,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container-camp w-full text-center py-32 lg:py-40">
        {/* Live badge */}
        {/* <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-10">
          Набор на сезон 2026 открыт
        </div> */}

        {/* Headline */}
        <h1 className="font-heading font-black text-[clamp(2.5rem,8vw,6rem)] text-white leading-[1.2] md:leading-[1.05] mb-6 tracking-tight">
          Каникулы, которые{' '}
          <span className="text-gold relative">
            запомнят
            <svg className="absolute -bottom-0.5 md:-bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none" preserveAspectRatio="none">
              <path d="M2 8c60-6 120-6 200-4s138 4 198 2" stroke="#f0a30e" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </span>
          <br />
          навсегда
        </h1>

        {/* Sub */}
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12">
          Детский оздоровительный лагерь «Ракета»
          <br />
          <span className="text-white/60 text-base sm:text-lg">Ленинградская область · Сосновый лес · Рядом с природой</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={`tel:${CAMP.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-forest hover:bg-forest-light text-white font-bold text-lg rounded-2xl transition-all duration-200 shadow-xl shadow-forest/30 hover:shadow-2xl hover:shadow-forest/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5" />
            {CAMP.phone}
          </a>
          <a
            href={CAMP.maxLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-outline-white text-lg px-8 py-4"
          >
            <MAXIcon className="w-5 h-5" />
            Написать в MAX
          </a>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:inline-grid sm:grid-cols-4 sm:divide-x sm:divide-white/15 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`px-5 sm:px-7 py-3.5 text-center
                ${i === 1 || i === 3 ? 'border-l border-white/15 sm:border-l-0' : ''}
                ${i >= 2 ? 'border-t border-white/15 sm:border-t-0' : ''}
              `}
            >
              <div className={`font-heading font-bold text-lg sm:text-xl ${s.accent ? 'text-gold' : 'text-white'}`}>
                {s.value}
              </div>
              <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-32 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Подробнее</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
