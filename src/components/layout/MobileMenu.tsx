'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
  currentPath: string
}

export function MobileMenu({ isOpen, onClose, links, currentPath }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream-white z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-light-stone">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-market-green text-white">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <span className="font-heading text-lg font-bold text-charcoal">
                    Market on 41st
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-light-stone transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-charcoal" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 py-6 px-4" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          'block px-4 py-3 text-lg font-medium rounded-xl transition-colors',
                          currentPath === link.href
                            ? 'text-market-green bg-market-green/5'
                            : 'text-charcoal hover:bg-light-stone/50'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-light-stone">
                <Link href="/vendor-portal" onClick={onClose}>
                  <Button variant="secondary" size="lg" className="w-full">
                    Vendor Portal
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
