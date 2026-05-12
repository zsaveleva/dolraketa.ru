'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { ACTIVITIES } from '@/lib/data'

const tabColors = {
  blue: { active: 'bg-blue-600 text-white', dot: 'bg-blue-600', border: 'border-blue-200 bg-blue-50' },
  gold: { active: 'bg-gold text-ink', dot: 'bg-gold', border: 'border-gold/20 bg-gold-light' },
  leaf: { active: 'bg-leaf text-white', dot: 'bg-leaf', border: 'border-leaf/20 bg-leaf-light' },
  forest: { active: 'bg-forest text-white', dot: 'bg-forest', border: 'border-forest/20 bg-cream' },
  green: { active: 'bg-emerald-600 text-white', dot: 'bg-emerald-600', border: 'border-emerald-200 bg-emerald-50' },
}

export default function Activities() {
  const [active, setActive] = useState(0)
  const current = ACTIVITIES[active]
  const colors = tabColors[current.color as keyof typeof tabColors]

  return (
    <section id="activities" className="section-py bg-white">
      <div className="container-camp">
        <SectionHeader
          label="Программа"
          title="Каждый найдёт своё"
          description="Более 10 кружков и секций по 2 направлениям. Дети сами выбирают то, что им интересно."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ACTIVITIES.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                active === i
                  ? tabColors[cat.color as keyof typeof tabColors].active + ' border-transparent shadow-md'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`rounded-3xl border-2 p-8 md:p-10 transition-all duration-300 ${colors.border}`}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left */}
            <div>
              <div className="text-4xl mb-4">{current.emoji}</div>
              <h3 className="font-heading font-black text-3xl text-ink mb-4">{current.category}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {current.description}
              </p>
              <Link href="/activities" className="btn-outline-forest">
                Подробная программа
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: items list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.items.map((item) => (
                <div key={item} className="flex items-center gap-3 py-3 px-4 bg-white/80 rounded-xl border border-gray-200">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                  <span className="text-gray-700 text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom teaser */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
          {[
            { num: '10+', label: 'кружков и секций' },
            { num: 'Каждый день', label: 'новые активности' },
            { num: 'Свободный выбор', label: 'направлений' },
          ].map((item) => (
            <div key={item.num} className="p-5 rounded-2xl bg-cream border border-gray-200">
              <div className="font-heading font-black text-2xl text-forest mb-1">{item.num}</div>
              <div className="text-gray-500 text-base">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
