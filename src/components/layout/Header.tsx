'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

const aboutSubmenu = [
  { label: 'Основные сведения', href: '/about' },
  { label: 'Документы', href: '/about/documents' },
  { label: 'Руководство', href: '/about/management' },
  { label: 'Педагогический состав', href: '/about/staff' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href
  const isAboutActive = aboutSubmenu.some(item => pathname.startsWith(item.href))

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setAboutOpen(false)
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="container-camp">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M12 2C10 2 8 4.5 8 8v5.5l-2 1.5V17h12v-2l-2-1.5V8c0-3.5-2-6-4-6zm0 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                  <path d="M10.5 17v1.5a1.5 1.5 0 0 0 3 0V17h-3z"/>
                  <path d="M8 12.5 5.5 14H8zM16 12.5 18.5 14H16z"/>
                </svg>
              </div>
              <div>
                <div className={`font-heading font-black text-xl leading-none ${scrolled ? 'text-forest' : 'text-white'}`}>
                  Ракета
                </div>
                <div className={`text-xs leading-none mt-0.5 ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
                  детский лагерь
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* About with submenu */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopDropdownOpen(true)}
                onMouseLeave={() => setDesktopDropdownOpen(false)}
              >
                <button
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setDesktopDropdownOpen(false)
                    if (e.key === 'ArrowDown') { e.preventDefault(); setDesktopDropdownOpen(true) }
                  }}
                  aria-expanded={desktopDropdownOpen}
                  aria-haspopup="menu"
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    scrolled
                      ? isAboutActive
                        ? 'text-forest bg-gray-50 font-semibold'
                        : 'text-gray-700 hover:text-forest hover:bg-gray-50'
                      : isAboutActive
                        ? 'text-white bg-white/15 font-semibold'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  О лагере
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  role="menu"
                  className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                    desktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                  }`}
                >
                  {aboutSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setDesktopDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                        isActive(item.href) ? 'text-forest font-semibold bg-gray-50' : 'text-gray-700 hover:text-forest'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {[
                { label: 'Смены и цены', href: '/services' },
                { label: 'Программа', href: '/activities' },
                { label: 'Условия', href: '/facilities' },
                { label: 'Контакты', href: '/contacts' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                    scrolled
                      ? isActive(link.href)
                        ? 'text-forest bg-gray-50 font-semibold'
                        : 'text-gray-700 hover:text-forest hover:bg-gray-50'
                      : isActive(link.href)
                        ? 'text-white bg-white/15 font-semibold'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CAMP.phoneRaw}`}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-forest' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                {CAMP.phone}
              </a>
              <a
                href={CAMP.maxLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-max py-2.5 text-sm"
              >
                <MAXIcon className="w-4 h-4" />
                Написать в MAX
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 sm:w-80 bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
            <span className="font-heading font-bold text-forest">Меню</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-4 py-6 space-y-1">
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50"
              >
                О лагере
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {aboutSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-forest rounded-xl hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { label: 'Смены и цены', href: '/services' },
              { label: 'Программа', href: '/activities' },
              { label: 'Условия', href: '/facilities' },
              { label: 'Контакты', href: '/contacts' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-4 border-t border-gray-100 space-y-3">
            <a
              href={`tel:${CAMP.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-forest hover:bg-forest-light text-white font-semibold text-base rounded-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full"
            >
              <Phone className="w-4 h-4" />
              {CAMP.phone}
            </a>
            <a
              href={CAMP.maxLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-max w-full justify-center"
            >
              <MAXIcon className="w-4 h-4" />
              Написать в MAX
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

