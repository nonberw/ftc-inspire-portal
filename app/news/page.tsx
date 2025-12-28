import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { mockNews } from '@/lib/data'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Новости</h1>
          <p className="text-lg text-gray-600">
            Последние новости о наших мероприятиях, достижениях и планах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {post.image && (
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Изображение</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center space-x-1 px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: ru })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Add News Button (for admins) */}
        <div className="mt-8 text-center">
          <Link
            href="/news/add"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Добавить новость
          </Link>
        </div>
      </div>
    </div>
  )
}

