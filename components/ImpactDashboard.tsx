'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { ImpactMetrics } from '@/lib/types'
import { Users, Calendar, Clock, School } from 'lucide-react'

interface ImpactDashboardProps {
  metrics: ImpactMetrics
}

export default function ImpactDashboard({ metrics }: ImpactDashboardProps) {
  const chartData = [
    { month: 'Янв', мероприятия: 5, участники: 120 },
    { month: 'Фев', мероприятия: 8, участники: 200 },
    { month: 'Мар', мероприятия: 6, участники: 150 },
    { month: 'Апр', мероприятия: 7, участники: 180 },
    { month: 'Май', мероприятия: 9, участники: 220 },
    { month: 'Июн', мероприятия: 10, участники: 330 },
  ]

  const schoolData = [
    { name: 'Школа №1', мероприятия: 12, участники: 180 },
    { name: 'Школа №2', мероприятия: 8, участники: 120 },
    { name: 'Школа №3', мероприятия: 10, участники: 150 },
    { name: 'Школа №4', мероприятия: 6, участники: 90 },
    { name: 'Школа №5', мероприятия: 9, участники: 130 },
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact Dashboard</h2>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Участников</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{metrics.totalParticipants}</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600">Мероприятий</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{metrics.totalEvents}</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-gray-600">Часов</span>
          </div>
          <div className="text-2xl font-bold text-purple-600">{metrics.totalHours}</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <School className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-gray-600">Школ</span>
          </div>
          <div className="text-2xl font-bold text-orange-600">{metrics.totalSchools}</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Динамика мероприятий</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="мероприятия" stroke="#0ea5e9" strokeWidth={2} />
              <Line type="monotone" dataKey="участники" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Активность по школам</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={schoolData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="мероприятия" fill="#0ea5e9" />
              <Bar dataKey="участники" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

