import { cn } from '@/lib/utils'
import type { VendorCategory } from '@/types'

const categoryColors: Record<VendorCategory, string> = {
  produce: 'bg-market-green/10 text-market-green border-market-green/20',
  baked_goods: 'bg-harvest-gold/10 text-harvest-gold-dark border-harvest-gold/20',
  dairy: 'bg-sky-blue/10 text-sky-blue border-sky-blue/20',
  crafts: 'bg-soil-brown/10 text-soil-brown border-soil-brown/20',
  prepared_food: 'bg-tomato-red/10 text-tomato-red border-tomato-red/20',
  flowers: 'bg-pink-50 text-pink-700 border-pink-200',
  other: 'bg-warm-gray/10 text-warm-gray border-warm-gray/20',
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'category' | 'status'
  category?: VendorCategory
  status?: 'pending' | 'approved' | 'rejected' | 'cancelled'
}

export function Badge({ className, variant = 'default', category, status, children, ...props }: BadgeProps) {
  const colorClasses = (() => {
    if (variant === 'category' && category) {
      return categoryColors[category]
    }
    if (variant === 'status' && status) {
      switch (status) {
        case 'approved': return 'bg-market-green/10 text-market-green border-market-green/20'
        case 'pending': return 'bg-harvest-gold/10 text-harvest-gold-dark border-harvest-gold/20'
        case 'rejected': return 'bg-tomato-red/10 text-tomato-red border-tomato-red/20'
        case 'cancelled': return 'bg-warm-gray/10 text-warm-gray border-warm-gray/20'
      }
    }
    return 'bg-market-green/10 text-market-green border-market-green/20'
  })()

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium font-accent uppercase tracking-wide rounded-full border',
        colorClasses,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
