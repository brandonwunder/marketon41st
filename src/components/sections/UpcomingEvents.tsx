'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { events } from '@/lib/mock-data'
import { formatDate, formatTime } from '@/lib/utils'

export function UpcomingEvents() {
  const { ref, isVisible } = useScrollReveal()
  const upcomingEvents = events.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Upcoming Markets"
          subtitle="Mark your calendar! Here's what's coming up at the corner of 41st & Elm."
        />

        <div ref={ref} className="grid md:grid-cols-3 gap-6 mt-12">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/events/${event.slug}`} className="block group">
                <div className="rounded-2xl bg-cream-white border border-light-stone/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Date Header */}
                  <div className="bg-gradient-to-r from-market-green to-market-green-light p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-heading font-bold">
                          {new Date(event.event_date).getDate()}
                        </p>
                        <p className="text-sm text-white/80 font-accent uppercase tracking-wide">
                          {new Date(event.event_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                      {event.special_theme && (
                        <Badge className="bg-harvest-gold/20 text-harvest-gold-light border-harvest-gold/30">
                          {event.special_theme}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 group-hover:text-market-green transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2 text-sm text-warm-gray">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-market-green shrink-0" />
                        <span>{formatDate(event.event_date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-market-green shrink-0" />
                        <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-market-green shrink-0" />
                        <span>{event.vendor_count} / {event.max_vendors} vendors</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-light-stone/50">
                      <span className="text-sm font-medium text-market-green group-hover:underline flex items-center gap-1">
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/events">
            <Button variant="outline" size="md">
              View All Events
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
