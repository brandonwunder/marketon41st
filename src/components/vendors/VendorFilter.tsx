'use client'

import { cn } from '@/lib/utils'
import type { VendorCategory } from '@/types'

const categories: { value: string; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'produce', label: 'Produce' },
  { value: 'baked_goods', label: 'Baked Goods' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'crafts', label: 'Crafts' },
  { value: 'prepared_food', label: 'Prepared Food' },
  { value: 'flowers', label: 'Flowers' },
]

interface VendorFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function VendorFilter({ activeCategory, onCategoryChange }: VendorFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            activeCategory === cat.value
              ? 'bg-market-green text-white shadow-sm'
              : 'bg-white text-warm-gray border border-light-stone hover:border-market-green/30 hover:text-charcoal'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
