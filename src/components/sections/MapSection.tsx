'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Car, Sun } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const details = [
  {
    icon: MapPin,
    title: 'Location',
    info: 'Corner of 41st & Elm Street',
    sub: 'Portland, OR 97215',
  },
  {
    icon: Clock,
    title: 'Hours',
    info: 'Every Saturday',
    sub: '9:00 AM - 2:00 PM',
  },
  {
    icon: Sun,
    title: 'Season',
    info: 'April through October',
    sub: 'Rain or shine!',
  },
  {
    icon: Car,
    title: 'Parking',
    info: 'Free street parking',
    sub: 'Bike racks available',
  },
]

export function MapSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Find Us"
          subtitle="We're right at the heart of the neighborhood. Come say hello!"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-light-stone/30 border border-light-stone/50 aspect-[4/3] flex items-center justify-center"
          >
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-market-green/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-market-green" />
              </div>
              <p className="font-heading text-lg font-semibold text-charcoal mb-2">
                Market on 41st
              </p>
              <p className="text-sm text-warm-gray mb-4">
                Corner of 41st & Elm Street<br />
                Portland, OR 97215
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-market-green hover:underline"
              >
                Open in Google Maps
                <MapPin className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 content-center"
          >
            {details.map((detail) => {
              const Icon = detail.icon
              return (
                <div
                  key={detail.title}
                  className="p-5 rounded-2xl bg-cream-white border border-light-stone/30"
                >
                  <Icon className="h-6 w-6 text-market-green mb-3" />
                  <p className="font-accent text-xs uppercase tracking-widest text-warm-gray mb-1">
                    {detail.title}
                  </p>
                  <p className="font-heading text-base font-semibold text-charcoal">
                    {detail.info}
                  </p>
                  <p className="text-sm text-warm-gray mt-0.5">
                    {detail.sub}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
