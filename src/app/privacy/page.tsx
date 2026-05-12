import type { Metadata } from 'next'
import Link from 'next/link'
import { CAMP } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика в отношении обработки персональных данных в ООО «СОК «Ракета». Согласно требованиям Федерального закона №152-ФЗ.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Политика конфиденциальности</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            Политика в отношении обработки персональных данных
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-base leading-relaxed">

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">1. Общие положения</h2>
              <p>
                Настоящая политика обработки персональных данных составлена в соответствии с требованиями
                Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок
                обработки персональных данных, принятые меры по обеспечению безопасности персональных данных
                в {CAMP.legalName} (далее — Оператор).
              </p>
              <p className="mt-3">
                Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение
                прав и свобод человека и гражданина при обработке его персональных данных.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">2. Основные понятия</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Персональные данные</strong> — любая информация, относящаяся прямо или косвенно к определённому физическому лицу (субъекту персональных данных).</li>
                <li><strong>Оператор</strong> — {CAMP.legalName}, ИНН {CAMP.inn}, ОГРН {CAMP.ogrn}, самостоятельно или совместно с другими лицами организующий и осуществляющий обработку персональных данных.</li>
                <li><strong>Обработка персональных данных</strong> — любое действие (операция) или совокупность действий, совершаемых с персональными данными.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">3. Оператор может обрабатывать следующие персональные данные</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Фамилия, имя, отчество родителя/законного представителя и ребёнка;</li>
                <li>Дата рождения ребёнка;</li>
                <li>Контактный телефон и адрес электронной почты;</li>
                <li>Сведения о состоянии здоровья ребёнка (по медицинским документам);</li>
                <li>Сведения о наличии медицинских показаний и противопоказаний;</li>
                <li>Данные документов, удостоверяющих личность.</li>
              </ul>
              <p className="mt-3">
                Сайт также в автоматическом режиме собирает технические данные: IP-адрес, данные файлов cookie,
                информацию о браузере и операционной системе, время посещения страниц.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">4. Цели обработки персональных данных</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Заключение договора об оказании услуг по организации отдыха и оздоровления детей;</li>
                <li>Обеспечение безопасности и охраны жизни и здоровья детей в период пребывания в лагере;</li>
                <li>Информирование о деятельности лагеря, сменах, мероприятиях;</li>
                <li>Ответы на обращения и запросы;</li>
                <li>Улучшение качества работы сайта.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">5. Правовые основания обработки персональных данных</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Согласие субъекта персональных данных на обработку его персональных данных;</li>
                <li>Федеральный закон от 27.07.2006 № 152-ФЗ «О персональных данных»;</li>
                <li>Федеральный закон от 24.07.1998 № 124-ФЗ «Об основных гарантиях прав ребёнка в Российской Федерации»;</li>
                <li>Иные федеральные законы и нормативные правовые акты в сфере защиты персональных данных.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">6. Порядок сбора, хранения и защиты персональных данных</h2>
              <p>
                Оператор обеспечивает сохранность персональных данных и принимает все возможные меры,
                исключающие доступ к персональным данным неуполномоченных лиц. Персональные данные
                хранятся на территории Российской Федерации.
              </p>
              <p className="mt-3">
                Персональные данные обрабатываются и хранятся не дольше, чем того требуют цели их обработки.
                По достижении целей обработки или утрате необходимости в их достижении персональные данные
                уничтожаются или обезличиваются.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">7. Права субъекта персональных данных</h2>
              <p>Субъект персональных данных имеет право:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Получать сведения об обработке своих персональных данных;</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных;</li>
                <li>Отозвать согласие на обработку персональных данных;</li>
                <li>Обжаловать действия Оператора в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">8. Использование файлов cookie</h2>
              <p>
                Сайт может использовать файлы cookie для улучшения работы сервиса. Продолжая использовать сайт,
                вы соглашаетесь на использование файлов cookie. Вы можете отключить файлы cookie в настройках
                браузера, однако это может повлиять на работу сайта.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">9. Контактные данные оператора</h2>
              <p>По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
              <ul className="list-none pl-0 space-y-2 mt-3">
                <li><strong>Наименование:</strong> {CAMP.legalName}</li>
                <li><strong>ИНН:</strong> {CAMP.inn}</li>
                <li><strong>Адрес:</strong> {CAMP.address}</li>
                <li>
                  <strong>Телефон:</strong>{' '}
                  <a href={`tel:${CAMP.phoneRaw}`} className="text-forest hover:text-leaf transition-colors">
                    {CAMP.phone}
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${CAMP.email}`} className="text-forest hover:text-leaf transition-colors">
                    {CAMP.email}
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-ink mb-3">10. Изменение политики</h2>
              <p>
                Оператор оставляет за собой право вносить изменения в настоящую Политику. Новая редакция
                Политики вступает в силу с момента её размещения на сайте. Дата последнего обновления: 2025 г.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
