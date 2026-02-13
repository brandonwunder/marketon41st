'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/vendors', label: 'Vendors' },
  { href: '/produce-box', label: 'Produce Box' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-market-green focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-cream-white/95 backdrop-blur-md shadow-sm border-b border-light-stone/50'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-market-green text-white transition-transform group-hover:scale-110">
                <Leaf className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg md:text-xl font-bold text-charcoal leading-tight">
                  Market on 41st
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    pathname === link.href
                      ? 'text-market-green bg-market-green/5'
                      : 'text-warm-gray hover:text-charcoal hover:bg-light-stone/50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + Mobile Trigger */}
            <div className="flex items-center gap-3">
              <Link href="/vendor-portal" className="hidden md:block">
                <Button variant="secondary" size="sm">
                  Vendor Portal
                </Button>
              </Link>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-light-stone/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-charcoal" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  )
}
