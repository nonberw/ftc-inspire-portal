'use client'

import { useState } from 'react'
import { Users, Mail, Clock, CheckCircle, Calendar, UserPlus } from 'lucide-react'
import { mockMentors } from '@/lib/data'

export default function MentorPage() {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null)
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900">Mentor Hub</h1>
          </div>
          <p className="text-lg text-gray-600">
            Система менторства и волонтерства для поддержки команд FTC
          </p>
        </div>

        {/* Signup Banner */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Стать ментором</h2>
              <p className="text-primary-100">
                Помогите новым командам развиваться в робототехнике. Зарегистрируйтесь как ментор и начните помогать!
              </p>
            </div>
            <button
              onClick={() => setShowSignup(true)}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center space-x-2"
            >
              <UserPlus className="h-5 w-5" />
              <span>Зарегистрироваться</span>
            </button>
          </div>
        </div>

        {/* Mentors List */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Наши менторы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockMentors.map((mentor) => (
              <div
                key={mentor.id}
                className={`border-2 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer ${
                  selectedMentor === mentor.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200'
                }`}
                onClick={() => setSelectedMentor(selectedMentor === mentor.id ? null : mentor.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.bio}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{mentor.hours} часов менторства</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{mentor.availability.join(', ')}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Навыки:</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedMentor === mentor.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${mentor.email}`}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Связаться</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Статистика менторства</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {mockMentors.length}
              </div>
              <div className="text-gray-600">Активных менторов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {mockMentors.reduce((sum, m) => sum + m.hours, 0)}
              </div>
              <div className="text-gray-600">Всего часов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Команд поддержано</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
          </div>
        </div>

        {/* Signup Modal */}
        {showSignup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Регистрация ментора</h2>
                <button
                  onClick={() => setShowSignup(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Навыки (через запятую)
                  </label>
                  <input
                    type="text"
                    placeholder="Программирование, Механика, Электроника"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Доступность
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day) => (
                      <label key={day} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Краткая биография
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Зарегистрироваться
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSignup(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Отмена
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

