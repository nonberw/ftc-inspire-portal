import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { mockNews } from '@/lib/data'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'

export default function RecentNews() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Последние новости</h2>
        <Link
          href="/news"
          className="text-primary-600 hover:text-primary-700 text-sm font-semibold"
        >
          Все →
        </Link>
      </div>
      <div className="space-y-4">
        {mockNews.map((post) => (
          <Link
            key={post.id}
            href={`/news/${post.id}`}
            className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Calendar className="h-3 w-3" />
                <span>
                  {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: ru })}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-primary-600" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

