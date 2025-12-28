'use client'

import { useState } from 'react'
import { Filter, Download, Map as MapIcon } from 'lucide-react'
import ImpactMap from '@/components/ImpactMap'
import { mockEvents, mockMetrics } from '@/lib/data'
import { Event } from '@/lib/types'
import ImpactDashboard from '@/components/ImpactDashboard'

export default function ImpactPage() {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents)
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const eventTypes = [
    { value: 'all', label: 'Все типы' },
    { value: 'workshop', label: 'Воркшопы' },
    { value: 'competition', label: 'Соревнования' },
    { value: 'outreach', label: 'Аутрич' },
    { value: 'mentoring', label: 'Менторство' },
    { value: 'partnership', label: 'Партнёрства' },
  ]

  const handleFilter = (type: string, year: string) => {
    let filtered = [...mockEvents]
    
    if (type !== 'all') {
      filtered = filtered.filter(e => e.type === type)
    }
    
    if (year !== 'all') {
      filtered = filtered.filter(e => {
        const eventYear = new Date(e.date).getFullYear().toString()
        return eventYear === year
      })
    }
    
    setFilteredEvents(filtered)
  }

  const handleExportCSV = () => {
    const csv = [
      ['Название', 'Дата', 'Тип', 'Участников', 'Адрес'],
      ...filteredEvents.map(e => [
        e.title,
        e.date,
        e.type,
        e.participants.toString(),
        e.location.address,
      ]),
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `events-export-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h1>
          <p className="text-lg text-gray-600">
            Интерактивная карта мероприятий и метрики нашего влияния
          </p>
        </div>

        {/* Dashboard */}
        <ImpactDashboard metrics={mockMetrics} />

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Фильтры</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Тип мероприятия
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value)
                  handleFilter(e.target.value, selectedYear)
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Год
              </label>
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value)
                  handleFilter(selectedType, e.target.value)
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">Все годы</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Найдено мероприятий: <span className="font-semibold">{filteredEvents.length}</span>
            </p>
            <button
              onClick={handleExportCSV}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Экспорт CSV</span>
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <MapIcon className="h-5 w-5 text-primary-600" />
              <h2 className="text-xl font-semibold text-gray-900">Интерактивная карта</h2>
            </div>
          </div>
          <ImpactMap events={filteredEvents} height="600px" />
        </div>

        {/* Events List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Список мероприятий</h2>
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>📅 {new Date(event.date).toLocaleDateString('ru-RU')}</span>
                      <span>📍 {event.location.address}</span>
                      <span>👥 {event.participants} участников</span>
                      <span className={`px-2 py-1 rounded ${
                        event.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.verified ? '✓ Верифицировано' : '⏳ На проверке'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

