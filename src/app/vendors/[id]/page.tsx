import { notFound } from 'next/navigation'
import { VendorProfileContent } from './VendorProfileContent'
import { vendors, events, vendorRegistrations } from '@/lib/mock-data'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return vendors.map((vendor) => ({ id: vendor.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const vendor = vendors.find((v) => v.slug === id)
  if (!vendor) return { title: 'Vendor Not Found' }
  return {
    title: vendor.business_name,
    description: vendor.description || `Learn about ${vendor.business_name} at Market on 41st.`,
  }
}

export default async function VendorProfilePage({ params }: PageProps) {
  const { id } = await params
  const vendor = vendors.find((v) => v.slug === id)
  if (!vendor) notFound()

  const upcomingEvents = vendorRegistrations
    .filter((r) => r.vendor_id === vendor.id && r.status === 'approved')
    .map((r) => {
      const event = events.find((e) => e.id === r.event_id)
      return event
    })
    .filter(Boolean)

  const relatedVendors = vendors
    .filter((v) => v.category === vendor.category && v.id !== vendor.id && v.is_active)
    .slice(0, 3)

  return (
    <VendorProfileContent
      vendor={vendor}
      upcomingEvents={upcomingEvents as typeof events}
      relatedVendors={relatedVendors}
    />
  )
}
