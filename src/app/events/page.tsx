import type { Metadata } from 'next'
import { EventsContent } from './EventsContent'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Browse upcoming Market on 41st events. Find market dates, themes, and register as a vendor.',
}

export default function EventsPage() {
  return <EventsContent />
}
