import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download } from 'lucide-react'
import { DOCUMENTS, CAMP } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Документы — лицензии и заключения',
  description: 'Лицензия на медицинскую деятельность, санитарно-эпидемиологическое заключение, развивающая программа, рецензия и устав детского лагеря «Ракета». Всё в открытом доступе.',
  keywords: ['лицензия детский лагерь', 'санитарно-эпидемиологическое заключение лагерь', 'программа детского лагеря', 'устав детский лагерь Ракета'],
  alternates: { canonical: '/about/documents' },
  openGraph: { title: 'Документы — лицензии и заключения', url: '/about/documents' },
}

export default function DocumentsPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">Об организации</Link>
            <span>/</span>
            <span className="text-white/80">Документы</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Документы</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Лицензии, заключения, программы — всё в открытом доступе. Никаких скрытых условий.
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp max-w-3xl">
          <div className="space-y-3">
            {DOCUMENTS.map((doc) => (
              <a
                key={doc.title}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:border-forest/20 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-leaf-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-leaf transition-colors">
                  <FileText className="w-6 h-6 text-leaf group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-ink group-hover:text-forest transition-colors truncate">{doc.title}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{doc.format ?? 'PDF'}</div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-leaf transition-colors flex-shrink-0">
                  <Download className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 p-6 bg-cream rounded-2xl border border-gray-200 text-base text-gray-600">
            <p className="mb-2">
              <strong className="text-ink">Не нашли нужный документ?</strong> Напишите нам — вышлем по запросу.
            </p>
            <div className="flex gap-4">
              <a href={`mailto:${CAMP.email}`} className="text-leaf hover:text-forest font-medium transition-colors">
                {CAMP.email}
              </a>
              <span className="text-gray-200">|</span>
              <a href={`tel:${CAMP.phoneRaw}`} className="text-leaf hover:text-forest font-medium transition-colors">
                {CAMP.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
