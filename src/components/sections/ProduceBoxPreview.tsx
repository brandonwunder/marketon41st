'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Package, ArrowRight, Sparkles, Leaf, Apple, Cherry, Egg, Croissant } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Button } from '@/components/ui/Button'

const items = [
  { icon: Leaf, label: 'Seasonal Greens' },
  { icon: Apple, label: 'Fresh Fruit' },
  { icon: Cherry, label: 'Local Berries' },
  { icon: Egg, label: 'Farm Eggs' },
  { icon: Croissant, label: 'Artisan Bread' },
]

export function ProduceBoxPreview() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-harvest-gold/5 via-cream-white to-market-green/5 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-harvest-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-market-green/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Box Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-light-stone/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-harvest-gold/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-harvest-gold" />
                </div>
                <div>
                  <p className="font-accent text-xs uppercase tracking-widest text-warm-gray">This Week&apos;s Box</p>
                  <p className="font-heading text-lg font-bold text-charcoal">Fresh Produce Box</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {items.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-cream-white border border-light-stone/30"
                    >
                      <Icon className="h-6 w-6 text-market-green" />
                      <span className="text-xs text-warm-gray text-center font-medium">{item.label}</span>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-harvest-gold/5 border border-harvest-gold/20"
                >
                  <Sparkles className="h-6 w-6 text-harvest-gold" />
                  <span className="text-xs text-harvest-gold-dark text-center font-medium">+ Surprise!</span>
                </motion.div>
              </div>
            </div>

            {/* Price tag */}
            <div className="absolute -top-4 -right-4 bg-harvest-gold text-charcoal rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-xs font-accent font-medium">Only</span>
              <span className="text-2xl font-heading font-bold leading-none">$20</span>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight mb-6">
              A box of <span className="text-market-green">sunshine</span>,<br />
              delivered every Saturday
            </h2>

            <p className="text-lg text-warm-gray leading-relaxed mb-6">
              Our curated $20 Produce Box is packed with the week&apos;s freshest picks from Market on 41st vendors. Seasonal fruits, crisp vegetables, farm eggs, artisan bread — and always a little surprise to delight you.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Curated selection from 6-8 local vendors',
                'Harvested within 24 hours of pickup',
                'New surprises every single week',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-charcoal">
                  <div className="w-5 h-5 rounded-full bg-market-green/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-market-green" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/produce-box">
              <Button variant="primary" size="lg" className="group">
                Order Your Box
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
