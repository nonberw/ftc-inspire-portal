import { Users, Award, Target, Handshake, Mail, Phone, MapPin } from 'lucide-react'
import { mockMetrics } from '@/lib/data'

export default function AboutPage() {
  const sponsors = [
    { name: 'Спонсор 1', logo: '/sponsor1.png' },
    { name: 'Спонсор 2', logo: '/sponsor2.png' },
    { name: 'Спонсор 3', logo: '/sponsor3.png' },
  ]

  const teamMembers = [
    { name: 'Иван Иванов', role: 'Капитан команды', bio: 'Опыт в робототехнике 5 лет' },
    { name: 'Мария Петрова', role: 'Программист', bio: 'Специалист по Java и Python' },
    { name: 'Алексей Сидоров', role: 'Механик', bio: 'Эксперт по конструированию' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900">О нас</h1>
          </div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Наша миссия</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Расширение доступа к STEM образованию в регионе через практические воркшопы, 
              наставничество и создание сообщества энтузиастов робототехники. Мы верим, 
              что каждый ребёнок должен иметь возможность изучать робототехнику и развивать 
              навыки программирования, конструирования и инженерии.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Наши достижения</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {mockMetrics.totalParticipants}
                </div>
                <div className="text-gray-600">Участников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {mockMetrics.totalEvents}
                </div>
                <div className="text-gray-600">Мероприятий</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {mockMetrics.totalSchools}
                </div>
                <div className="text-gray-600">Школ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {mockMetrics.newClubs}
                </div>
                <div className="text-gray-600">Новых клубов</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-900">Команда</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Handshake className="h-8 w-8 text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-900">Спонсоры и партнёры</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center"
              >
                <div className="h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">{sponsor.name}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{sponsor.name}</h3>
                <button className="mt-3 text-sm text-primary-600 hover:text-primary-700">
                  Получить письмо-подтверждение
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Mail className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:contact@ftc-inspire.org" className="text-primary-600 hover:text-primary-700">
                  contact@ftc-inspire.org
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                <a href="tel:+7XXXXXXXXXX" className="text-primary-600 hover:text-primary-700">
                  +7 (XXX) XXX-XX-XX
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                <p className="text-gray-600">Ваш город, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

