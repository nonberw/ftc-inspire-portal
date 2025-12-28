'use client'

import { useEffect } from 'react'

export default function LeafletLoader() {
  useEffect(() => {
    // Dynamically import Leaflet CSS only on client
    import('leaflet/dist/leaflet.css')
  }, [])

  return null
}

