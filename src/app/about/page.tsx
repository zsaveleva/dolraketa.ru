import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, FileText, Users, Phone, Award, MapPin } from 'lucide-react'
import { CAMP } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Об организации отдыха детей — реквизиты, лицензии',
  description: 'Сведения об ООО «Спортивно-оздоровительный комплекс «Ракета»: ИНН, ОГРН, банковские реквизиты, лицензии, контрольно-надзорная деятельность. Соответствие Приказу Минпросвещения №201.',
  keywords: ['СОК Ракета реквизиты', 'детский лагерь Ракета ИНН', 'детский лагерь лицензия', 'ООО СОК Ракета'],
  alternates: { canonical: '/about' },
  openGraph: { title: 'Об организации отдыха детей — реквизиты, лицензии', url: '/about' },
}

const sections = [
  { icon: FileText, label: 'Документы', href: '/about/documents', desc: 'Лицензии, заключения, программа воспитания' },
  { icon: Building2, label: 'Руководство', href: '/about/management', desc: 'Директор и административный состав' },
  { icon: Users, label: 'Педагогический состав', href: '/about/staff', desc: 'Вожатые, педагоги, воспитатели' },
  { icon: Phone, label: 'Контакты', href: '/contacts', desc: 'Телефон, email, адрес, MAX' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Об организации отдыха детей</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Об организации отдыха детей
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Полные сведения об организации — в соответствии с требованиями Приказа Минпросвещения №201 от 14.03.2025
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          {/* Sub-sections nav */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card-hover flex flex-col gap-3 group"
              >
                <div className="inline-flex p-3 bg-leaf-light text-leaf rounded-xl w-fit group-hover:bg-leaf group-hover:text-white transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-bold text-ink group-hover:text-forest transition-colors">{s.label}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-leaf transition-colors mt-auto" />
              </Link>
            ))}
          </div>

          {/* Main info grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Organization info */}
            <div className="bg-cream rounded-3xl p-8">
              <h2 className="font-heading font-bold text-2xl text-ink mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                Основные сведения
              </h2>
              <dl className="space-y-4">
                {[
                  { dt: 'Полное наименование', dd: CAMP.fullName },
                  { dt: 'Сокращённое наименование', dd: `ДОЛ «${CAMP.name}»` },
                  { dt: 'Юридическое лицо', dd: CAMP.legalName },
                  { dt: 'ИНН', dd: CAMP.inn },
                  { dt: 'КПП', dd: CAMP.kpp },
                  { dt: 'ОГРН', dd: CAMP.ogrn },
                  { dt: 'Расчётный счёт', dd: CAMP.bankAccount },
                  { dt: 'Банк', dd: CAMP.bankName },
                  { dt: 'Корр. счёт', dd: CAMP.corrAccount },
                  { dt: 'БИК', dd: CAMP.bik },
                  { dt: 'Год основания', dd: CAMP.founded },
                  { dt: 'Возраст детей', dd: `${CAMP.ages}` },
                  { dt: 'Местонахождение', dd: CAMP.address },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="grid grid-cols-[auto_1fr] gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <dt className="text-gray-500 text-sm min-w-[160px]">{dt}</dt>
                    <dd className="text-ink text-base font-medium break-all">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* License & certifications */}
            <div className="space-y-4">
              <div className="bg-forest rounded-3xl p-8 text-white">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-1">Лицензия</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{CAMP.license}</p>
                  </div>
                </div>
                <Link href="/about/documents" className="inline-flex items-center gap-2 text-blue-300 text-sm font-semibold hover:text-white transition-colors">
                  Посмотреть все документы
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 p-8">
                <h3 className="font-heading font-bold text-lg text-ink mb-4">Контрольно-надзорная деятельность</h3>
                <div className="space-y-3">
                  {[
                    { org: 'Роспотребнадзор', result: 'Без нарушений, 2025', ok: true },
                    { org: 'МЧС (пожнадзор)', result: 'Без нарушений, 2025', ok: true },
                    { org: 'МВД', result: 'Без нарушений, 2025', ok: true },
                  ].map((item) => (
                    <div key={item.org} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600 text-sm">{item.org}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.ok ? 'bg-leaf-light text-leaf' : 'bg-red-50 text-red-500'}`}>
                        {item.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <div className="font-semibold text-ink mb-1">Юридический и фактический адрес</div>
                  <div className="text-gray-500 text-sm">{CAMP.address}</div>
                  <div className="text-gray-400 text-xs mt-1">{CAMP.distanceFromSpb}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity description */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-10 mb-8">
            <h2 className="font-heading font-bold text-2xl text-ink mb-6">Описание деятельности</h2>
            <div className="prose-camp grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-lg text-forest mb-3">Цели и задачи</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  СОК «Ракета» осуществляет организацию отдыха, оздоровления и занятости детей и подростков в возрасте от 6 до 17 лет в каникулярный период.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Основные задачи: укрепление здоровья, развитие личностных качеств, формирование навыков самостоятельности и коллективной работы, реализация творческого потенциала.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-forest mb-3">Режим работы</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Лагерь работает в нескольких сменах продолжительностью 21 день каждая в течение всего года. Актуальное расписание смен уточняйте у администрации.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Офис организации работает: {CAMP.workingHours}. В период смен — круглосуточно с дежурным персоналом.
                </p>
              </div>
            </div>
          </div>

          {/* Иная информация */}
          <div id="info" className="bg-cream rounded-3xl p-8">
            <h2 className="font-heading font-bold text-xl text-ink mb-4">Иная информация</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
              {[
                'Сайт не требует регистрации и не собирает персональные данные',
                'Все цены указаны в рублях РФ включая НДС',
                'Сведения актуальны по состоянию на 2025 год',
                'Информация обновляется по мере изменений',
              ].map((info) => (
                <div key={info} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-leaf rounded-full flex-shrink-0 mt-2" />
                  <span>{info}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
