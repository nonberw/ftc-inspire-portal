import Link from 'next/link'
import { Users, Calendar, Clock, School, UserPlus, Building2, Handshake, FileText } from 'lucide-react'
import { mockMetrics } from '@/lib/data'
import dynamic from 'next/dynamic'

const ImpactMap = dynamic(() => import('@/components/ImpactMap'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-gray-200 flex items-center justify-center">Загрузка карты...</div>
})

const RecentEvents = dynamic(() => import('@/components/RecentEvents'), {
  ssr: true
})

const RecentNews = dynamic(() => import('@/components/RecentNews'), {
  ssr: true
})

export default function Home() {
  const kpiCards = [
    {
      title: 'Участников',
      value: mockMetrics.totalParticipants.toLocaleString(),
      icon: Users,
      color: 'bg-blue-500',
      href: '/impact',
    },
    {
      title: 'Мероприятий',
      value: mockMetrics.totalEvents,
      icon: Calendar,
      color: 'bg-green-500',
      href: '/impact',
    },
    {
      title: 'Волонтёрских часов',
      value: mockMetrics.totalHours,
      icon: Clock,
      color: 'bg-purple-500',
      href: '/mentor',
    },
    {
      title: 'Школ',
      value: mockMetrics.totalSchools,
      icon: School,
      color: 'bg-orange-500',
      href: '/outreach',
    },
    {
      title: 'Волонтёров',
      value: mockMetrics.totalVolunteers,
      icon: UserPlus,
      color: 'bg-pink-500',
      href: '/mentor',
    },
    {
      title: 'Новых клубов',
      value: mockMetrics.newClubs,
      icon: Building2,
      color: 'bg-indigo-500',
      href: '/outreach',
    },
    {
      title: 'Партнёрств',
      value: mockMetrics.partnerships,
      icon: Handshake,
      color: 'bg-teal-500',
      href: '/about',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FTC Inspire Award Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Мощный инструмент аутрича с доказательной базой и интерактивной картой мероприятий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/judge-pack"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Сгенерировать Judge Pack</span>
              </Link>
              <Link
                href="/impact"
                className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors border-2 border-white"
              >
                Посмотреть Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Ключевые показатели
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiCards.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${card.color} p-3 rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {card.value}
                  </div>
                  <div className="text-gray-600">{card.title}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Map Preview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Интерактивная карта мероприятий
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ImpactMap events={[]} height="400px" />
          </div>
          <div className="text-center mt-6">
            <Link
              href="/impact"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Посмотреть полную карту →
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Events & News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RecentEvents />
            <RecentNews />
          </div>
        </div>
      </section>
    </div>
  )
}

