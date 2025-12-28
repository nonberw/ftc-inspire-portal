'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Event } from '@/lib/types'

// Dynamically import map component to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface ImpactMapProps {
  events: Event[]
  height?: string
}

export default function ImpactMap({ events, height = '600px' }: ImpactMapProps) {
  const [isClient, setIsClient] = useState(false)
  const center: [number, number] = [55.7558, 37.6173]

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div style={{ height, width: '100%' }} className="bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Загрузка карты...</p>
      </div>
    )
  }

  return (
    <div style={{ height, width: '100%' }} className="relative">
      <MapContainer
        center={center}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => (
          <Marker
            key={event.id}
            position={[event.location.lat, event.location.lng]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-sm mb-1">{event.title}</h3>
                <p className="text-xs text-gray-600 mb-1">{event.date}</p>
                <p className="text-xs text-gray-600 mb-1">{event.location.address}</p>
                <p className="text-xs text-gray-600">Участников: {event.participants}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

