export interface Event {
  id: string
  title: string
  date: string
  location: {
    lat: number
    lng: number
    address: string
  }
  type: 'workshop' | 'competition' | 'outreach' | 'mentoring' | 'partnership'
  participants: number
  description: string
  photos: string[]
  verified: boolean
  evidence?: Evidence[]
}

export interface Evidence {
  id: string
  eventId: string
  type: 'photo' | 'signature' | 'letter' | 'report' | 'video'
  fileUrl: string
  metadata?: {
    date?: string
    location?: string
    signer?: string
  }
  verified: boolean
  uploadedAt: string
}

export interface Mentor {
  id: string
  name: string
  email: string
  skills: string[]
  availability: string[]
  hours: number
  bio: string
  photo?: string
}

export interface NewsPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  publishedAt: string
  image?: string
  tags: string[]
}

export interface ImpactMetrics {
  totalParticipants: number
  totalEvents: number
  totalHours: number
  totalSchools: number
  totalVolunteers: number
  newClubs: number
  partnerships: number
}

export interface JudgePackData {
  teamName: string
  teamNumber: string
  mission: string
  metrics: ImpactMetrics
  keyEvents: Event[]
  impact: string
  plans: string
  contact: {
    email: string
    phone: string
  }
}

