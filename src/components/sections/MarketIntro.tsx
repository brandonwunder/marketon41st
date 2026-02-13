'use client'

import { motion } from 'framer-motion'
import { Leaf, Store, Heart } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const values = [
  {
    icon: Leaf,
    title: 'Fresh Produce',
    description: 'Harvested within 24 hours of market day. You won\'t find anything fresher unless you grow it yourself.',
    color: 'bg-market-green/10 text-market-green',
  },
  {
    icon: Store,
    title: 'Local Vendors',
    description: 'Every vendor is a neighbor. When you shop here, your dollars stay in the community that raised you.',
    color: 'bg-harvest-gold/10 text-harvest-gold-dark',
  },
  {
    icon: Heart,
    title: 'Community Spirit',
    description: 'More than a market — it\'s where friendships bloom, kids run free, and Saturday mornings feel like home.',
    color: 'bg-tomato-red/10 text-tomato-red',
  },
]

export function MarketIntro() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-20 md:py-28 bg-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What is Market on 41st?"
          subtitle="A place where the soil meets the soul. Every Saturday, we transform the corner of 41st & Elm into a celebration of local food, craftsmanship, and community."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Story */}
          <div>
            <p className="text-lg text-warm-gray leading-relaxed mb-6">
              What started as a handful of neighbors sharing backyard harvests has grown into something beautiful. Market on 41st is where the retired teacher sells her legendary strawberry jam, where the family farm three miles out brings their sunrise-picked heirlooms, and where your kids discover that carrots come from dirt, not bags.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              We&apos;re not just selling produce — we&apos;re growing a community. One tomato, one conversation, one Saturday morning at a time.
            </p>
          </div>

          {/* Value Cards */}
          <div ref={ref} className="space-y-4">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-light-stone/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${value.color} shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
