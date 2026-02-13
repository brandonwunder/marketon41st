'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Phone, Globe, Instagram, Facebook, Calendar, Leaf, CakeSlice, Milk, Flower2, UtensilsCrossed, Gem, Package } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { VendorCard } from '@/components/vendors/VendorCard'
import type { Vendor, MarketEvent, VendorCategory } from '@/types'
import { VENDOR_CATEGORY_LABELS } from '@/types'
import { formatDate } from '@/lib/utils'

const categoryIcons: Record<VendorCategory, React.ComponentType<{ className?: string }>> = {
  produce: Leaf,
  baked_goods: CakeSlice,
  dairy: Milk,
  flowers: Flower2,
  prepared_food: UtensilsCrossed,
  crafts: Gem,
  other: Package,
}

interface VendorProfileContentProps {
  vendor: Vendor
  upcomingEvents: MarketEvent[]
  relatedVendors: Vendor[]
}

export function VendorProfileContent({ vendor, upcomingEvents, relatedVendors }: VendorProfileContentProps) {
  const Icon = categoryIcons[vendor.category]

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-market-green via-market-green-light to-market-green overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-harvest-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/vendors" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Vendors</span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-start gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
            </div>
            <div>
              <Badge variant="category" category={vendor.category} className="mb-3 bg-white/10 text-white border-white/20">
                {VENDOR_CATEGORY_LABELS[vendor.category]}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">{vendor.business_name}</h1>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 L0,30 Q360,60 720,20 Q1080,-10 1440,30 L1440,60 Z" fill="#FDF8EF" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-cream-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-light-stone/50">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">About</h2>
                <p className="text-warm-gray leading-relaxed">{vendor.description}</p>
              </div>

              {/* Upcoming Events */}
              {upcomingEvents.length > 0 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-light-stone/50">
                  <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">Upcoming Events</h2>
                  <div className="space-y-3">
                    {upcomingEvents.map((event) => (
                      <Link key={event.id} href={`/events/${event.slug}`} className="flex items-center gap-4 p-4 rounded-xl bg-cream-white hover:bg-light-stone/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-market-green/10 flex items-center justify-center shrink-0">
                          <Calendar className="h-6 w-6 text-market-green" />
                        </div>
                        <div>
                          <p className="font-medium text-charcoal">{event.title}</p>
                          <p className="text-sm text-warm-gray">{formatDate(event.event_date)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-light-stone/50 space-y-4">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-market-green shrink-0" />
                    <span className="text-warm-gray">{vendor.contact_email}</span>
                  </div>
                  {vendor.contact_phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-market-green shrink-0" />
                      <span className="text-warm-gray">{vendor.contact_phone}</span>
                    </div>
                  )}
                  {vendor.website_url && (
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="h-4 w-4 text-market-green shrink-0" />
                      <span className="text-market-green hover:underline cursor-pointer">Website</span>
                    </div>
                  )}
                </div>

                {(vendor.social_instagram || vendor.social_facebook) && (
                  <div className="pt-4 border-t border-light-stone/30">
                    <p className="text-xs text-warm-gray uppercase tracking-wide font-accent mb-3">Follow</p>
                    <div className="flex gap-2">
                      {vendor.social_instagram && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-white text-sm text-warm-gray">
                          <Instagram className="h-4 w-4" />
                          {vendor.social_instagram}
                        </span>
                      )}
                      {vendor.social_facebook && (
                        <span className="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-cream-white text-warm-gray">
                          <Facebook className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Vendors */}
          {relatedVendors.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">More in {VENDOR_CATEGORY_LABELS[vendor.category]}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedVendors.map((v) => (
                  <VendorCard key={v.id} vendor={v} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
