import { notFound } from 'next/navigation'
import { EventDetailContent } from './EventDetailContent'
import { events, vendors, vendorRegistrations } from '@/lib/mock-data'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((event) => ({ id: event.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const event = events.find((e) => e.slug === id)
  if (!event) return { title: 'Event Not Found' }
  return {
    title: event.title,
    description: event.description || `Join us at ${event.title} at Market on 41st.`,
  }
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params
  const event = events.find((e) => e.slug === id)
  if (!event) notFound()

  const registrations = vendorRegistrations
    .filter((r) => r.event_id === event.id && r.status === 'approved')
    .map((r) => {
      const vendor = vendors.find((v) => v.id === r.vendor_id)
      return { ...r, vendor }
    })

  return <EventDetailContent event={event} registrations={registrations} />
}
