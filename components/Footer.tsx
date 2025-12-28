import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FTC Inspire Portal</h3>
            <p className="text-gray-400 text-sm">
              Мощный инструмент аутрича для команды FTC с доказательной базой и интерактивной картой мероприятий.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impact" className="text-gray-400 hover:text-white">Our Impact</Link></li>
              <li><Link href="/outreach" className="text-gray-400 hover:text-white">Outreach</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link href="/mentor" className="text-gray-400 hover:text-white">Mentor Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Ресурсы</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/judge-pack" className="text-gray-400 hover:text-white">Judge Pack</Link></li>
              <li><Link href="/evidence" className="text-gray-400 hover:text-white">Evidence Vault</Link></li>
              <li><Link href="/media" className="text-gray-400 hover:text-white">Media Gallery</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white">Новости</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@ftc-inspire.org" className="text-gray-400 hover:text-white">
                  contact@ftc-inspire.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-400">+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-400">Ваш город</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FTC Inspire Portal. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

