'use client'

import { useState } from 'react'
import { Shield, Upload, CheckCircle, FileText, Image, Video, Mail, FileCheck } from 'lucide-react'
import { Evidence } from '@/lib/types'

export default function EvidencePage() {
  const [evidenceType, setEvidenceType] = useState<'photo' | 'signature' | 'letter' | 'report' | 'video'>('photo')
  const [uploading, setUploading] = useState(false)

  const mockEvidence: Evidence[] = [
    {
      id: '1',
      eventId: '1',
      type: 'photo',
      fileUrl: '/placeholder.jpg',
      metadata: { date: '2024-01-15', location: 'Москва, школа №1' },
      verified: true,
      uploadedAt: '2024-01-16',
    },
    {
      id: '2',
      eventId: '1',
      type: 'signature',
      fileUrl: '/signature.pdf',
      metadata: { signer: 'Иванов И.И.', date: '2024-01-15' },
      verified: true,
      uploadedAt: '2024-01-16',
    },
    {
      id: '3',
      eventId: '2',
      type: 'letter',
      fileUrl: '/letter.pdf',
      verified: false,
      uploadedAt: '2024-02-21',
    },
  ]

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000))
    setUploading(false)
    alert('Файл загружен! Ожидает верификации.')
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'photo':
        return Image
      case 'signature':
        return FileCheck
      case 'letter':
        return Mail
      case 'report':
        return FileText
      case 'video':
        return Video
      default:
        return FileText
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900">Evidence Vault</h1>
          </div>
          <p className="text-lg text-gray-600">
            Загрузка и верификация доказательств для мероприятий
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Загрузить доказательство</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Тип доказательства
              </label>
              <select
                value={evidenceType}
                onChange={(e) => setEvidenceType(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="photo">Фото</option>
                <option value="signature">Подпись</option>
                <option value="letter">Письмо поддержки</option>
                <option value="report">Отчёт</option>
                <option value="video">Видео</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Выберите файл
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Перетащите файл сюда или нажмите для выбора
                </p>
                <input
                  type="file"
                  onChange={handleUpload}
                  disabled={uploading}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className={`inline-block px-6 py-2 bg-primary-600 text-white rounded-lg cursor-pointer hover:bg-primary-700 transition-colors ${
                    uploading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {uploading ? 'Загрузка...' : 'Выбрать файл'}
                </label>
              </div>
            </div>
            {evidenceType === 'photo' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  💡 <strong>Совет:</strong> Фото с геометкой и метаданными автоматически верифицируются быстрее
                </p>
              </div>
            )}
            {evidenceType === 'signature' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  📝 Используйте шаблон формы посещения для сбора подписей участников
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Evidence List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Загруженные доказательства</h2>
          <div className="space-y-4">
            {mockEvidence.map((evidence) => {
              const Icon = getIcon(evidence.type)
              return (
                <div
                  key={evidence.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`p-3 rounded-lg ${
                        evidence.verified ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          evidence.verified ? 'text-green-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 capitalize">
                            {evidence.type === 'photo' ? 'Фото' :
                             evidence.type === 'signature' ? 'Подпись' :
                             evidence.type === 'letter' ? 'Письмо' :
                             evidence.type === 'report' ? 'Отчёт' : 'Видео'}
                          </h3>
                          {evidence.verified ? (
                            <span className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                              <CheckCircle className="h-3 w-3" />
                              <span>Верифицировано</span>
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                              На проверке
                            </span>
                          )}
                        </div>
                        {evidence.metadata && (
                          <div className="text-sm text-gray-600 space-y-1">
                            {evidence.metadata.date && (
                              <div>Дата: {evidence.metadata.date}</div>
                            )}
                            {evidence.metadata.location && (
                              <div>Место: {evidence.metadata.location}</div>
                            )}
                            {evidence.metadata.signer && (
                              <div>Подписант: {evidence.metadata.signer}</div>
                            )}
                          </div>
                        )}
                        <div className="text-xs text-gray-500 mt-2">
                          Загружено: {new Date(evidence.uploadedAt).toLocaleDateString('ru-RU')}
                        </div>
                      </div>
                    </div>
                    <a
                      href={evidence.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                    >
                      Открыть
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Templates */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Шаблоны</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <FileText className="h-6 w-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Форма посещения</h3>
              <p className="text-sm text-gray-600">Шаблон для сбора подписей участников</p>
            </a>
            <a
              href="#"
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <Mail className="h-6 w-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Письмо поддержки</h3>
              <p className="text-sm text-gray-600">Шаблон письма от школ/партнёров</p>
            </a>
            <a
              href="#"
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <FileCheck className="h-6 w-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Отчёт о мероприятии</h3>
              <p className="text-sm text-gray-600">Шаблон отчёта о проведённом мероприятии</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

