'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import type { MarketEvent, VendorRegistration, Vendor } from '@/types'
import { VENDOR_CATEGORY_LABELS } from '@/types'
import { formatDate, formatTime } from '@/lib/utils'

interface EventDetailContentProps {
  event: MarketEvent
  registrations: (VendorRegistration & { vendor?: Vendor })[]
}

export function EventDetailContent({ event, registrations }: EventDetailContentProps) {
  const slotsRemaining = event.max_vendors - (event.vendor_count || 0)

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-market-green via-market-green-light to-market-green overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-harvest-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/events" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Events</span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {event.special_theme && (
              <Badge className="bg-harvest-gold/20 text-harvest-gold-light border-harvest-gold/30 mb-4">
                {event.special_theme}
              </Badge>
            )}
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{event.title}</h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 L0,30 Q360,60 720,20 Q1080,-10 1440,30 L1440,60 Z" fill="#FDF8EF" />
          </svg>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 md:py-20 bg-cream-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-light-stone/50 mb-8">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">About This Event</h2>
                <p className="text-warm-gray leading-relaxed">{event.description}</p>
              </div>

              {/* Registered Vendors */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-light-stone/50">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">
                  Registered Vendors ({registrations.length})
                </h2>
                {registrations.length > 0 ? (
                  <div className="space-y-3">
                    {registrations.map((reg) => (
                      <div key={reg.id} className="flex items-center gap-4 p-4 rounded-xl bg-cream-white">
                        <div className="w-10 h-10 rounded-full bg-market-green/10 flex items-center justify-center shrink-0">
                          <Leaf className="h-5 w-5 text-market-green" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link href={`/vendors/${reg.vendor?.slug}`} className="font-medium text-charcoal hover:text-market-green transition-colors">
                            {reg.vendor?.business_name}
                          </Link>
                          <p className="text-sm text-warm-gray">{reg.products_preview}</p>
                        </div>
                        {reg.vendor?.category && (
                          <Badge variant="category" category={reg.vendor.category} className="hidden sm:inline-flex">
                            {VENDOR_CATEGORY_LABELS[reg.vendor.category]}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-warm-gray text-center py-8">No vendors registered yet. Be the first!</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-light-stone/50 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-market-green mt-0.5" />
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wide font-accent">Date</p>
                    <p className="font-medium text-charcoal">{formatDate(event.event_date)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-market-green mt-0.5" />
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wide font-accent">Time</p>
                    <p className="font-medium text-charcoal">{formatTime(event.start_time)} - {formatTime(event.end_time)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-market-green mt-0.5" />
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wide font-accent">Location</p>
                    <p className="font-medium text-charcoal">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-market-green mt-0.5" />
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wide font-accent">Vendor Spots</p>
                    <p className="font-medium text-charcoal">
                      {event.vendor_count || 0} / {event.max_vendors}
                      {slotsRemaining > 0 && (
                        <span className="text-harvest-gold-dark text-sm ml-1">({slotsRemaining} left)</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/vendor-portal">
                <Button variant="primary" size="lg" className="w-full">
                  Register as Vendor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
