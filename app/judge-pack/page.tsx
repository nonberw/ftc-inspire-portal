'use client'

import { useState } from 'react'
import { FileText, Download, CheckCircle, Video, QrCode } from 'lucide-react'
import { mockEvents, mockMetrics } from '@/lib/data'
import { Event } from '@/lib/types'
import jsPDF from 'jspdf'

export default function JudgePackPage() {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])
  const [teamName, setTeamName] = useState('North Star FTC')
  const [teamNumber, setTeamNumber] = useState('12345')
  const [mission, setMission] = useState('Расширение доступа к STEM в регионе через практические воркшопы и наставничество.')
  const [impact, setImpact] = useState('Более 1200 участников получили доступ к робототехнике. Открыто 6 новых школьных клубов. 35 волонтёров провели 420 часов менторства.')
  const [plans, setPlans] = useState('Планируем расширить охват до 20 школ, запустить онлайн-платформу для дистанционного обучения и организовать региональный фестиваль робототехники.')
  const [contactEmail, setContactEmail] = useState('contact@ftc-inspire.org')
  const [contactPhone, setContactPhone] = useState('+7 (XXX) XXX-XX-XX')
  const [videoUrl, setVideoUrl] = useState('')

  const toggleEvent = (eventId: string) => {
    setSelectedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    )
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    let yPos = margin

    // Header
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Executive Summary', margin, yPos)
    yPos += 15

    // Team Info
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text(`Команда: ${teamName}`, margin, yPos)
    yPos += 8
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(12)
    doc.text(`Номер команды: ${teamNumber}`, margin, yPos)
    yPos += 15

    // Mission
    doc.setFont('helvetica', 'bold')
    doc.text('Миссия:', margin, yPos)
    yPos += 8
    doc.setFont('helvetica', 'normal')
    const missionLines = doc.splitTextToSize(mission, pageWidth - 2 * margin)
    doc.text(missionLines, margin, yPos)
    yPos += missionLines.length * 6 + 10

    // Key Metrics
    doc.setFont('helvetica', 'bold')
    doc.text('Ключевые показатели:', margin, yPos)
    yPos += 8
    doc.setFont('helvetica', 'normal')
    doc.text(`• ${mockMetrics.totalParticipants.toLocaleString()} участников`, margin + 5, yPos)
    yPos += 6
    doc.text(`• ${mockMetrics.totalSchools} школ`, margin + 5, yPos)
    yPos += 6
    doc.text(`• ${mockMetrics.totalHours} волонтёрских часов`, margin + 5, yPos)
    yPos += 6
    doc.text(`• ${mockMetrics.newClubs} новых школьных клубов`, margin + 5, yPos)
    yPos += 10

    // Key Events
    doc.setFont('helvetica', 'bold')
    doc.text('Ключевые мероприятия:', margin, yPos)
    yPos += 8
    doc.setFont('helvetica', 'normal')
    const selectedEventsData = mockEvents.filter(e => selectedEvents.includes(e.id))
    selectedEventsData.forEach((event, index) => {
      if (yPos > 250) {
        doc.addPage()
        yPos = margin
      }
      doc.text(`${index + 1}. ${event.title}`, margin + 5, yPos)
      yPos += 6
      doc.setFontSize(10)
      doc.text(`   ${event.date} | ${event.participants} участников | ${event.location.address}`, margin + 5, yPos)
      yPos += 8
      doc.setFontSize(12)
    })
    yPos += 5

    // Impact
    if (yPos > 250) {
      doc.addPage()
      yPos = margin
    }
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Влияние:', margin, yPos)
    yPos += 8
    doc.setFont('helvetica', 'normal')
    const impactLines = doc.splitTextToSize(impact, pageWidth - 2 * margin)
    doc.text(impactLines, margin, yPos)
    yPos += impactLines.length * 6 + 10

    // Plans
    if (yPos > 250) {
      doc.addPage()
      yPos = margin
    }
    doc.setFont('helvetica', 'bold')
    doc.text('Планы и масштабирование:', margin, yPos)
    yPos += 8
    doc.setFont('helvetica', 'normal')
    const plansLines = doc.splitTextToSize(plans, pageWidth - 2 * margin)
    doc.text(plansLines, margin, yPos)
    yPos += plansLines.length * 6 + 10

    // Contact
    if (yPos > 250) {
      doc.addPage()
      yPos = margin
    }
    doc.setFont('helvetica', 'bold')
    doc.text('Контакт:', margin, yPos)
    yPos += 8
    doc.setFont('helvetica', 'normal')
    doc.text(`Email: ${contactEmail}`, margin, yPos)
    yPos += 6
    doc.text(`Телефон: ${contactPhone}`, margin, yPos)

    // Save PDF
    doc.save(`judge-pack-${teamNumber}-${new Date().toISOString().split('T')[0]}.pdf`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="h-8 w-8 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900">Judge Pack Generator</h1>
          </div>
          <p className="text-lg text-gray-600">
            Автоматическая генерация Executive Summary для судей Inspire Award
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Team Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Информация о команде</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название команды
                  </label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Номер команды
                  </label>
                  <input
                    type="text"
                    value={teamNumber}
                    onChange={(e) => setTeamNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Миссия
                  </label>
                  <textarea
                    value={mission}
                    onChange={(e) => setMission(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Key Events */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Выберите ключевые мероприятия</h2>
              <div className="space-y-3">
                {mockEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => toggleEvent(event.id)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedEvents.includes(event.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {selectedEvents.includes(event.id) && (
                            <CheckCircle className="h-5 w-5 text-primary-600" />
                          )}
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                        <div className="text-xs text-gray-500">
                          {event.date} • {event.participants} участников
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & Plans */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Влияние и планы</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Влияние
                  </label>
                  <textarea
                    value={impact}
                    onChange={(e) => setImpact(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Планы и масштабирование
                  </label>
                  <textarea
                    value={plans}
                    onChange={(e) => setPlans(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Contact & Video */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Контакт и видео</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ссылка на видео (YouTube/Vimeo)
                  </label>
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preview & Actions */}
          <div className="space-y-6">
            {/* Metrics Preview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ключевые показатели</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Участников:</span>
                  <span className="font-semibold">{mockMetrics.totalParticipants.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Школ:</span>
                  <span className="font-semibold">{mockMetrics.totalSchools}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Часов:</span>
                  <span className="font-semibold">{mockMetrics.totalHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Новых клубов:</span>
                  <span className="font-semibold">{mockMetrics.newClubs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Выбрано мероприятий:</span>
                  <span className="font-semibold">{selectedEvents.length}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Действия</h2>
              <div className="space-y-3">
                <button
                  onClick={generatePDF}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Сгенерировать PDF</span>
                </button>
                {videoUrl && (
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Video className="h-5 w-5" />
                    <span>Открыть видео</span>
                  </a>
                )}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">QR-код для печати</p>
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <QrCode className="h-24 w-24 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Сгенерируется после создания PDF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

