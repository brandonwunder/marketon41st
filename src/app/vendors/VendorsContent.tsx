'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Store } from 'lucide-react'
import { VendorCard } from '@/components/vendors/VendorCard'
import { VendorFilter } from '@/components/vendors/VendorFilter'
import { vendors } from '@/lib/mock-data'

export function VendorsContent() {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filteredVendors = useMemo(() => {
    return vendors.filter((v) => {
      const matchesCategory = category === 'all' || v.category === category
      const matchesSearch = v.business_name.toLowerCase().includes(search.toLowerCase()) ||
        (v.description?.toLowerCase().includes(search.toLowerCase()) ?? false)
      return matchesCategory && matchesSearch && v.is_active
    })
  }, [category, search])

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
            <Store className="h-10 w-10 text-harvest-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our Vendors
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              The heart and soul of Market on 41st. These are your neighbors, your farmers, your artisans.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 L0,30 Q360,60 720,20 Q1080,-10 1440,30 L1440,60 Z" fill="#FDF8EF" />
          </svg>
        </div>
      </section>

      {/* Vendors */}
      <section className="py-12 md:py-20 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-gray/50" />
              <input
                type="text"
                placeholder="Search vendors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-light-stone bg-white text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-market-green/30 focus:border-market-green transition-all"
              />
            </div>
            <VendorFilter activeCategory={category} onCategoryChange={setCategory} />
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVendors.map((vendor, i) => (
              <motion.div
                key={vendor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <VendorCard vendor={vendor} />
              </motion.div>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-20">
              <Store className="h-12 w-12 text-light-stone mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">No vendors found</h3>
              <p className="text-warm-gray">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
