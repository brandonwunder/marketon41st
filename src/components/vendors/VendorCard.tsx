import Link from 'next/link'
import { ArrowRight, Leaf, CakeSlice, Milk, Flower2, UtensilsCrossed, Gem, Package } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { Vendor, VendorCategory } from '@/types'
import { VENDOR_CATEGORY_LABELS } from '@/types'

const categoryIcons: Record<VendorCategory, React.ComponentType<{ className?: string }>> = {
  produce: Leaf,
  baked_goods: CakeSlice,
  dairy: Milk,
  flowers: Flower2,
  prepared_food: UtensilsCrossed,
  crafts: Gem,
  other: Package,
}

interface VendorCardProps {
  vendor: Vendor
}

export function VendorCard({ vendor }: VendorCardProps) {
  const Icon = categoryIcons[vendor.category]

  return (
    <Link href={`/vendors/${vendor.slug}`} className="block group">
      <div className="rounded-2xl bg-white border border-light-stone/50 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-market-green/10 to-harvest-gold/10 flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-market-green" />
        </div>

        {/* Category */}
        <Badge variant="category" category={vendor.category} className="mb-3 self-start">
          {VENDOR_CATEGORY_LABELS[vendor.category]}
        </Badge>

        {/* Info */}
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-market-green transition-colors">
          {vendor.business_name}
        </h3>
        <p className="text-sm text-warm-gray leading-relaxed line-clamp-3 flex-1">
          {vendor.description}
        </p>

        {/* Link */}
        <div className="mt-4 pt-3 border-t border-light-stone/30">
          <span className="text-sm font-medium text-market-green group-hover:underline flex items-center gap-1">
            View Profile
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
