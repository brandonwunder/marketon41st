import Link from 'next/link'
import { Calendar, MapPin, Users } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { MarketEvent } from '@/types'
import { formatDate, formatTime } from '@/lib/utils'

interface EventCardProps {
  event: MarketEvent
}

export function EventCard({ event }: EventCardProps) {
  const slotsRemaining = event.max_vendors - (event.vendor_count || 0)

  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <div className="rounded-2xl bg-white border border-light-stone/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        {/* Date Header */}
        <div className="bg-gradient-to-r from-market-green to-market-green-light p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-4xl font-heading font-bold leading-none">
                {new Date(event.event_date).getDate()}
              </p>
              <p className="text-sm text-white/80 font-accent uppercase tracking-wide mt-1">
                {new Date(event.event_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
            {event.special_theme && (
              <Badge className="bg-harvest-gold/20 text-harvest-gold-light border-harvest-gold/30">
                {event.special_theme}
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 group-hover:text-market-green transition-colors">
            {event.title}
          </h3>

          {event.description && (
            <p className="text-sm text-warm-gray leading-relaxed mb-4 line-clamp-2">
              {event.description}
            </p>
          )}

          <div className="space-y-2 text-sm text-warm-gray mt-auto">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-market-green shrink-0" />
              <span>{formatDate(event.event_date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-market-green shrink-0" />
              <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-market-green shrink-0" />
              <span>
                {event.vendor_count || 0} vendors registered
                {slotsRemaining > 0 && (
                  <span className="text-harvest-gold-dark"> &bull; {slotsRemaining} slots left</span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
