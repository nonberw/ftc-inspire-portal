'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Award, Map, Users, FileText, BookOpen, Camera, Shield, Briefcase, Newspaper } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Главная', icon: Award },
    { href: '/impact', label: 'Our Impact', icon: Map },
    { href: '/outreach', label: 'Outreach', icon: Users },
    { href: '/resources', label: 'Resources', icon: BookOpen },
    { href: '/mentor', label: 'Mentor Hub', icon: Users },
    { href: '/media', label: 'Media', icon: Camera },
    { href: '/evidence', label: 'Evidence Vault', icon: Shield },
    { href: '/judge-pack', label: 'Judge Pack', icon: FileText },
    { href: '/news', label: 'Новости', icon: Newspaper },
    { href: '/about', label: 'О нас', icon: Briefcase },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">FTC Inspire Portal</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center space-x-1"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

