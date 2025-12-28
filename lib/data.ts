import { Event, ImpactMetrics, NewsPost, Mentor } from './types'

export const mockMetrics: ImpactMetrics = {
  totalParticipants: 1200,
  totalEvents: 45,
  totalHours: 420,
  totalSchools: 14,
  totalVolunteers: 35,
  newClubs: 6,
  partnerships: 8,
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Воркшоп по робототехнике в школе №1',
    date: '2024-01-15',
    location: {
      lat: 55.7558,
      lng: 37.6173,
      address: 'Москва, ул. Примерная, 1',
    },
    type: 'workshop',
    participants: 45,
    description: 'Провели воркшоп по основам робототехники для учеников 5-7 классов',
    photos: ['/placeholder-event.jpg'],
    verified: true,
  },
  {
    id: '2',
    title: 'Соревнование FTC Regional',
    date: '2024-02-20',
    location: {
      lat: 55.7558,
      lng: 37.6173,
      address: 'Москва, Конференц-центр',
    },
    type: 'competition',
    participants: 200,
    description: 'Участие в региональных соревнованиях FTC',
    photos: ['/placeholder-event.jpg'],
    verified: true,
  },
  {
    id: '3',
    title: 'Менторская сессия для новых команд',
    date: '2024-03-10',
    location: {
      lat: 55.7558,
      lng: 37.6173,
      address: 'Онлайн',
    },
    type: 'mentoring',
    participants: 12,
    description: 'Онлайн-сессия по менторству для новых команд FTC',
    photos: [],
    verified: true,
  },
]

export const mockNews: NewsPost[] = [
  {
    id: '1',
    title: 'Открытие нового клуба робототехники в школе №5',
    content: 'Мы рады объявить об открытии нового клуба робототехники...',
    excerpt: 'Мы рады объявить об открытии нового клуба робототехники в школе №5. Это уже шестой клуб, открытый при нашей поддержке.',
    author: 'Команда FTC',
    publishedAt: '2024-03-15',
    image: '/placeholder-news.jpg',
    tags: ['outreach', 'partnership'],
  },
  {
    id: '2',
    title: 'Победа на региональных соревнованиях',
    content: 'Наша команда заняла первое место...',
    excerpt: 'Наша команда заняла первое место на региональных соревнованиях FTC.',
    author: 'Команда FTC',
    publishedAt: '2024-02-25',
    image: '/placeholder-news.jpg',
    tags: ['competition', 'achievement'],
  },
]

export const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    skills: ['Программирование', 'Механика', 'Электроника'],
    availability: ['Понедельник', 'Среда', 'Пятница'],
    hours: 120,
    bio: 'Опытный ментор с 5-летним стажем в робототехнике',
  },
  {
    id: '2',
    name: 'Мария Петрова',
    email: 'maria@example.com',
    skills: ['Дизайн', '3D-моделирование', 'Проектирование'],
    availability: ['Вторник', 'Четверг'],
    hours: 80,
    bio: 'Специалист по 3D-моделированию и дизайну',
  },
]

