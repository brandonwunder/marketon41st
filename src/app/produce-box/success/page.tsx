'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Package, Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ProduceBoxSuccessPage() {
  return (
    <section className="py-20 md:py-32 bg-cream-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-market-green/10 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="h-10 w-10 text-market-green" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-lg text-warm-gray mb-8">
            Your produce box is being prepared with love by our vendors. We can&apos;t wait for you to taste the freshness!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 border border-light-stone/50 text-left mb-8"
        >
          <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">Order Summary</h3>

          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-light-stone/30">
            <div className="w-12 h-12 rounded-xl bg-harvest-gold/10 flex items-center justify-center">
              <Package className="h-6 w-6 text-harvest-gold" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-charcoal">Fresh Produce Box</p>
              <p className="text-sm text-warm-gray">Curated weekly selection</p>
            </div>
            <p className="font-heading text-xl font-bold text-market-green">$20.00</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-market-green" />
              <span className="text-warm-gray">Pickup: Next Saturday Market</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-market-green" />
              <span className="text-warm-gray">Corner of 41st & Elm Street</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-market-green/5 rounded-2xl p-6 mb-8"
        >
          <h3 className="font-heading text-base font-semibold text-charcoal mb-2">Pickup Instructions</h3>
          <p className="text-sm text-warm-gray leading-relaxed">
            Head to the <strong>Produce Box Pickup Table</strong> near the main entrance on market day. Just give us your name and we&apos;ll have your box ready! Arrive anytime between 9 AM and 2 PM.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary" className="group">
              Back to Market
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="outline">
              Browse Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
