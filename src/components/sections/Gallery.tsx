import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'
import VKIcon from '@/components/ui/VKIcon'
import { CAMP } from '@/lib/data'

const photos = [
  { label: 'Открытие смены', file: '/images/opening.jpg' },
  { label: 'Спортивные игры', file: '/images/sport.jpg' },
  { label: 'Творческая мастерская', file: '/images/creative.jpg' },
  { label: 'Лагерные мероприятия', file: '/images/camp-events.jpg' },
  { label: 'Отрядные мероприятия', file: '/images/team-events.jpg' },
  { label: 'Экскурсия в бассейн', file: '/images/pool.jpg' },
  { label: 'Экскурсия на конную ферму', file: '/images/horse-farm.jpg' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-py bg-white overflow-hidden">
      <div className="container-camp">
        <SectionHeader
          label="Фотогалерея"
          title="Жизнь в лагере"
          description="Каждый день — новые события, новые фото. Следите за сменой в группе ВКонтакте в реальном времени."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {/* Hero photo */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden min-h-[280px] md:min-h-[400px] group">
            <Image
              src={photos[0].file}
              alt={photos[0].label}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="font-heading font-bold text-white text-xl md:text-2xl">
                {photos[0].label}
              </div>
            </div>
          </div>

          {/* Top right pair */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden min-h-[130px] md:min-h-[195px] group"
            >
              <Image
                src={photos[i].file}
                alt={photos[i].label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-heading font-semibold text-white text-sm">{photos[i].label}</div>
              </div>
            </div>
          ))}

          {/* Middle right pair */}
          {[3, 4].map((i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden min-h-[130px] md:min-h-[195px] group"
            >
              <Image
                src={photos[i].file}
                alt={photos[i].label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-heading font-semibold text-white text-sm">{photos[i].label}</div>
              </div>
            </div>
          ))}

          {/* Bottom wide pair */}
          {[5, 6].map((i) => (
            <div
              key={i}
              className="md:col-span-2 relative rounded-3xl overflow-hidden min-h-[200px] md:min-h-[320px] group"
            >
              <Image
                src={photos[i].file}
                alt={photos[i].label}
                fill
                sizes="(min-width: 768px) 50vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="font-heading font-bold text-white text-lg md:text-xl">{photos[i].label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={CAMP.vkGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-forest"
          >
            <VKIcon className="w-5 h-5" />
            Все фото в группе ВКонтакте
          </a>
          <p className="text-gray-400 text-sm mt-3">Публикуем фото каждый день во время смены</p>
        </div>
      </div>
    </section>
  )
}
