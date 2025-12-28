import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const LeafletLoader = dynamic(() => import('@/components/LeafletLoader'), {
  ssr: false
})

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'FTC Inspire Award Portal',
  description: 'Мощный инструмент аутрича для команды FTC с доказательной базой',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LeafletLoader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

