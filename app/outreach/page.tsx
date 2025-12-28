import { Calendar, MapPin, Users, BookOpen, Download } from 'lucide-react'
import Link from 'next/link'
import { mockEvents } from '@/lib/data'

export default function OutreachPage() {
  const upcomingEvents = mockEvents.filter(e => new Date(e.date) > new Date())
  const pastEvents = mockEvents.filter(e => new Date(e.date) <= new Date())

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Outreach</h1>
          <p className="text-lg text-gray-600">
            Мероприятия, расписание, регистрация и материалы для аутрича
          </p>
        </div>

        {/* Request Kit */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Запросить Outreach Kit</h2>
              <p className="text-primary-100">
                Получите набор материалов для проведения воркшопов: презентации, чек-листы, печатные материалы
              </p>
            </div>
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Запросить Kit
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Предстоящие мероприятия</h2>
          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString('ru-RU')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location.address}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{event.participants} мест</span>
                        </div>
                      </div>
                      <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Зарегистрироваться
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Нет предстоящих мероприятий</p>
          )}
        </div>

        {/* Past Events */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Прошедшие мероприятия</h2>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location.address}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{event.participants} участников</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Quick Links */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Быстрые ссылки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/resources"
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center space-x-3"
            >
              <BookOpen className="h-6 w-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Ресурсы</h3>
                <p className="text-sm text-gray-600">Уроки и материалы</p>
              </div>
            </Link>
            <Link
              href="/media"
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center space-x-3"
            >
              <Download className="h-6 w-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Скачать материалы</h3>
                <p className="text-sm text-gray-600">Презентации и PDF</p>
              </div>
            </Link>
            <Link
              href="/impact"
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-center space-x-3"
            >
              <MapPin className="h-6 w-6 text-primary-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Карта мероприятий</h3>
                <p className="text-sm text-gray-600">Интерактивная карта</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

