'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { EventCard } from '@/components/events/EventCard'
import { events } from '@/lib/mock-data'

export function EventsContent() {
  return (
    <>
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-market-green via-market-green-light to-market-green overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-harvest-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="h-10 w-10 text-harvest-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Upcoming Markets
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Every Saturday is a celebration. Find your next market day and see what&apos;s in store.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 L0,30 Q360,60 720,20 Q1080,-10 1440,30 L1440,60 Z" fill="#FDF8EF" />
          </svg>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 md:py-24 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-20">
              <Calendar className="h-12 w-12 text-light-stone mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">No upcoming events</h3>
              <p className="text-warm-gray">Check back soon — we&apos;re planning something great!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
