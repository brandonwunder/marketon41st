'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Sprout } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-cream-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-market-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-harvest-gold/5 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-market-green/10 flex items-center justify-center mx-auto mb-6">
            <Sprout className="h-7 w-7 text-market-green" />
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-warm-gray mb-8">
            Get weekly market updates, vendor spotlights, seasonal recipes, and first dibs on special events. No spam — just good stuff from your neighbors.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-gray/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-light-stone bg-white text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-market-green/30 focus:border-market-green transition-all"
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="group">
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-market-green font-medium mt-4"
            >
              Welcome to the community! Check your inbox soon.
            </motion.p>
          )}

          <p className="text-xs text-warm-gray/60 mt-4">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
