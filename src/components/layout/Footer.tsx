import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CAMP, FOOTER_LINKS } from '@/lib/data'
import VKIcon from '@/components/ui/VKIcon'

export default function Footer() {
  return (
    <footer className="bg-ink text-white pb-24 lg:pb-0">
      {/* Main footer */}
      <div className="container-camp pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white flex-shrink-0">
                <path d="M12 2C10 2 8 4.5 8 8v5.5l-2 1.5V17h12v-2l-2-1.5V8c0-3.5-2-6-4-6zm0 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                <path d="M10.5 17v1.5a1.5 1.5 0 0 0 3 0V17h-3z"/>
                <path d="M8 12.5 5.5 14H8zM16 12.5 18.5 14H16z"/>
              </svg>
              <div>
                <div className="font-heading font-black text-xl text-white">Ракета</div>
                <div className="text-xs text-white/55 mt-0.5">детский лагерь с 1956 года</div>
              </div>
            </Link>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              {CAMP.shortDesc}. Ленинградская область.
            </p>
            <div className="flex flex-col gap-3 items-start">
              <a
                href={`tel:${CAMP.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CAMP.phone}
              </a>
              <a
                href={CAMP.vkGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                <VKIcon className="w-4 h-4" />
                ВКонтакте
              </a>
            </div>
          </div>

          {/* Об организации */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white/55 uppercase tracking-wider mb-4">
              Об организации отдыха детей
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Лагерь */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white/55 uppercase tracking-wider mb-4">
              Деятельность и услуги
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.camp.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-bold text-sm text-white/55 uppercase tracking-wider mb-4 mt-6">
              Дополнительно
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-heading font-bold text-sm text-white/55 uppercase tracking-wider mb-4">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CAMP.phoneRaw}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-leaf transition-colors">
                    <Phone className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-leaf transition-colors">{CAMP.phone}</div>
                    <div className="text-xs text-white/55">Основной телефон</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CAMP.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-leaf transition-colors">
                    <Mail className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-leaf transition-colors">{CAMP.email}</div>
                    <div className="text-xs text-white/55">Электронная почта</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white/70" />
                </div>
                <div>
                  <div className="text-sm text-white/70 leading-relaxed">{CAMP.address}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-white/70" />
                </div>
                <div>
                  <div className="text-sm text-white/70">{CAMP.workingHours}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-camp py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div className="text-center md:text-left">
              <div>© {new Date().getFullYear()} {CAMP.legalName}. Все права защищены.</div>
              <div className="mt-1">ИНН {CAMP.inn} · ОГРН {CAMP.ogrn}</div>
              <div className="mt-1">{CAMP.license}</div>
              <div className="mt-1">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
                {' · '}
                <span>Персональные данные обрабатываются в соответствии с 152-ФЗ</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div>Сайт соответствует требованиям Приказа №201 от 14.03.2025</div>
              <div className="mt-1">Сведения актуальны на {new Date().getFullYear()} год</div>
              <div className="mt-1">
                Сайт разработан{' '}
                <a href="https://ai-solutionslab.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  AI Solutions Lab
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
