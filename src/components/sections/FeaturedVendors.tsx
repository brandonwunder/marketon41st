'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, CakeSlice, Milk, Flower2, UtensilsCrossed, Gem, Package } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { vendors } from '@/lib/mock-data'
import { VENDOR_CATEGORY_LABELS, type VendorCategory } from '@/types'

const categoryIcons: Record<VendorCategory, React.ComponentType<{ className?: string }>> = {
  produce: Leaf,
  baked_goods: CakeSlice,
  dairy: Milk,
  flowers: Flower2,
  prepared_food: UtensilsCrossed,
  crafts: Gem,
  other: Package,
}

export function FeaturedVendors() {
  const { ref, isVisible } = useScrollReveal()
  const featuredVendors = vendors.filter((v) => v.is_featured)

  return (
    <section className="py-20 md:py-28 bg-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet Our Vendors"
          subtitle="The heart and soul of Market on 41st. These are your neighbors, your farmers, your artisans."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featuredVendors.map((vendor, i) => {
            const Icon = categoryIcons[vendor.category]
            return (
              <motion.div
                key={vendor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/vendors/${vendor.slug}`} className="block group">
                  <div className="rounded-2xl bg-white border border-light-stone/50 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                    {/* Vendor Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-market-green/10 to-harvest-gold/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-market-green" />
                    </div>

                    {/* Info */}
                    <Badge variant="category" category={vendor.category} className="mb-3 self-start">
                      {VENDOR_CATEGORY_LABELS[vendor.category]}
                    </Badge>

                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-market-green transition-colors">
                      {vendor.business_name}
                    </h3>

                    <p className="text-sm text-warm-gray leading-relaxed line-clamp-3 flex-1">
                      {vendor.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-light-stone/30">
                      <span className="text-sm font-medium text-market-green group-hover:underline flex items-center gap-1">
                        Visit Profile
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/vendors">
            <Button variant="outline" size="md">
              View All Vendors
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
