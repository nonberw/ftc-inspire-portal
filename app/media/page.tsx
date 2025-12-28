import { Camera, Video, Image as ImageIcon, Download } from 'lucide-react'

export default function MediaPage() {
  const galleries = [
    {
      title: 'Воркшопы',
      type: 'workshop',
      items: [
        { id: '1', title: 'Воркшоп в школе №1', date: '2024-01-15', type: 'photo', count: 12 },
        { id: '2', title: 'Мастер-класс по программированию', date: '2024-02-20', type: 'video', count: 3 },
      ],
    },
    {
      title: 'Соревнования',
      type: 'competition',
      items: [
        { id: '3', title: 'FTC Regional 2024', date: '2024-02-25', type: 'photo', count: 45 },
        { id: '4', title: 'Финальные соревнования', date: '2024-03-10', type: 'video', count: 5 },
      ],
    },
    {
      title: 'Менторство',
      type: 'mentoring',
      items: [
        { id: '5', title: 'Онлайн-сессия с новыми командами', date: '2024-03-15', type: 'video', count: 2 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Camera className="h-8 w-8 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900">Media Gallery</h1>
          </div>
          <p className="text-lg text-gray-600">
            Фото и видео наших мероприятий, воркшопов и соревнований
          </p>
        </div>

        <div className="space-y-8">
          {galleries.map((gallery) => (
            <div key={gallery.type} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{gallery.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Video className="h-12 w-12 text-gray-400" />
                      ) : (
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                        <span className="flex items-center space-x-1">
                          {item.type === 'video' ? (
                            <>
                              <Video className="h-4 w-4" />
                              <span>{item.count} видео</span>
                            </>
                          ) : (
                            <>
                              <ImageIcon className="h-4 w-4" />
                              <span>{item.count} фото</span>
                            </>
                          )}
                        </span>
                      </div>
                      <button className="mt-3 w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                        Открыть галерею
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Видео-таймлайн</h2>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">1-минутный клип с лучшими моментами</p>
              <p className="text-sm text-gray-500 mt-2">Автоматически сгенерированное видео</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

