import { notFound } from 'next/navigation'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { mockNews } from '@/lib/data'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale/ru'

export default function NewsPostPage({ params }: { params: { id: string } }) {
  const post = mockNews.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Назад к новостям</span>
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {post.image && (
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Изображение</span>
            </div>
          )}
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: ru })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

