import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'
import { mockEvents } from '@/lib/data'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'

export default function RecentEvents() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Последние мероприятия</h2>
        <Link
          href="/impact"
          className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
        >
          Все →
        </Link>
      </div>
      <div className="space-y-4">
        {mockEvents.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {format(new Date(event.date), 'd MMMM yyyy', { locale: ru })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>{event.participants} участников</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

