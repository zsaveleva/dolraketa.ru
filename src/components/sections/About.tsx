import Link from 'next/link'
import { ArrowRight, Award, MapPin, Users, Calendar } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { CAMP } from '@/lib/data'

const stats = [
  { icon: Calendar, value: '1956', label: 'Год основания', color: 'text-forest' },
  { icon: Users, value: '50 000+', label: 'Детей побывало', color: 'text-leaf' },
  { icon: MapPin, value: '8 га', label: 'Территория', color: 'text-gold' },
  { icon: Award, value: '100%', label: 'Рейтинг безопасности', color: 'text-gold' },
]

export default function About() {
  return (
    <section id="about" className="section-py bg-cream">
      <div className="container-camp">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: content */}
          <div>
            <SectionHeader
              label="О лагере"
              title={`«Ракета» — это не просто лагерь`}
              align="left"
            />
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                Мы работаем с 1956 года — и за это время подарили незабываемый отдых десяткам тысяч детей. Лагерь расположен в Ленинградской области, в государственном природном заказнике «Гладышевский»: восемь гектаров хвойного леса поблизости озера, в 70 км от Санкт-Петербурга.
              </p>
              <p>
                Для нас важны три вещи: <strong className="text-ink font-semibold">безопасность</strong> каждого ребёнка, <strong className="text-ink font-semibold">насыщенная программа</strong>, которую дети вспоминают всю жизнь, и <strong className="text-ink font-semibold">доверие родителей</strong>, которое мы ценим больше всего.
              </p>
              <p>
                Все вожатые — с педагогическим образованием. Питание — по нормам СанПиН. Документы — в открытом доступе. Никаких скрытых условий.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-outline-forest">
                Об организации
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about/documents" className="flex items-center gap-2 text-gray-500 hover:text-forest font-medium transition-colors py-3.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Документы и лицензии
              </Link>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="card p-5 sm:p-7 text-center"
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gray-50 mb-4 ${s.color}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div className={`font-heading font-black text-2xl sm:text-3xl md:text-4xl mb-2 ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm font-medium">{s.label}</div>
              </div>
            ))}

            {/* Trust badges */}
            <div className="col-span-2 bg-forest rounded-3xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-heading font-bold text-lg mb-1">Лицензированная деятельность</div>
                  <div className="text-white/60 text-sm leading-relaxed">
                    {CAMP.license}. Ежегодная проверка Роспотребнадзора.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
