import { BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react'

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Уроки',
      items: [
        { title: 'Введение в робототехнику', type: 'video', url: '#', description: 'Базовый курс для начинающих' },
        { title: 'Программирование роботов', type: 'video', url: '#', description: 'Основы программирования на Java' },
        { title: 'Механика и дизайн', type: 'video', url: '#', description: 'Принципы конструирования' },
      ],
    },
    {
      category: 'Презентации',
      items: [
        { title: 'FTC Overview', type: 'pdf', url: '#', description: 'Обзор программы FTC' },
        { title: 'Workshop Template', type: 'pdf', url: '#', description: 'Шаблон для воркшопов' },
        { title: 'Mentor Guide', type: 'pdf', url: '#', description: 'Руководство для менторов' },
      ],
    },
    {
      category: 'Печатные материалы',
      items: [
        { title: 'QR-код для набора', type: 'print', url: '#', description: 'QR-код для печати на наборах' },
        { title: 'Чек-лист мероприятия', type: 'print', url: '#', description: 'Чек-лист для организации' },
        { title: 'Сертификат участника', type: 'print', url: '#', description: 'Шаблон сертификата' },
      ],
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video
      case 'pdf':
        return FileText
      case 'print':
        return Download
      default:
        return FileText
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
          </div>
          <p className="text-lg text-gray-600">
            Уроки, презентации, видео и печатные материалы для аутрича
          </p>
        </div>

        <div className="space-y-8">
          {resources.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, index) => {
                  const Icon = getIcon(item.type)
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <Icon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <a
                        href={item.url}
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        <span>{item.type === 'video' ? 'Смотреть' : item.type === 'print' ? 'Скачать' : 'Открыть'}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Request Custom Kit */}
        <div className="bg-primary-50 rounded-lg shadow-lg p-8 mt-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Нужны дополнительные материалы?</h2>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами для получения кастомного набора материалов для вашего мероприятия
            </p>
            <a
              href="/outreach"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Запросить Kit
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

