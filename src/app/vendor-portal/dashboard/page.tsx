'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Store, Calendar, Edit, MapPin, Clock, Users, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { vendors, events, vendorRegistrations } from '@/lib/mock-data'
import { VENDOR_CATEGORY_LABELS } from '@/types'
import { formatDate, formatTime } from '@/lib/utils'
import { ToastContainer } from '@/components/ui/Toast'
import { useToast } from '@/hooks/useToast'

export default function VendorDashboardPage() {
  const { toasts, addToast, removeToast } = useToast()

  // Mock: pretend we're logged in as vendor #1 (Sunrise Organics)
  const vendor = vendors[0]
  const myRegistrations = vendorRegistrations
    .filter((r) => r.vendor_id === vendor.id)
    .map((r) => ({
      ...r,
      event: events.find((e) => e.id === r.event_id),
    }))

  const availableEvents = events.filter(
    (e) => !vendorRegistrations.some((r) => r.vendor_id === vendor.id && r.event_id === e.id)
  )

  return (
    <section className="py-12 md:py-20 bg-cream-white min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-sm text-warm-gray font-accent uppercase tracking-wide mb-1">Vendor Dashboard</p>
            <h1 className="text-3xl font-heading font-bold text-charcoal">
              Welcome back, {vendor.business_name}!
            </h1>
          </div>
          <Button variant="outline" size="sm" onClick={() => addToast('Profile editing coming soon!', 'info')}>
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <Card hover={false} className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-market-green/10 to-harvest-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Store className="h-10 w-10 text-market-green" />
                </div>
                <h2 className="font-heading text-xl font-bold text-charcoal">{vendor.business_name}</h2>
                <Badge variant="category" category={vendor.category} className="mt-2">
                  {VENDOR_CATEGORY_LABELS[vendor.category]}
                </Badge>
              </div>

              <div className="space-y-3 text-sm border-t border-light-stone/30 pt-4">
                <div className="flex justify-between">
                  <span className="text-warm-gray">Email</span>
                  <span className="text-charcoal font-medium">{vendor.contact_email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray">Phone</span>
                  <span className="text-charcoal font-medium">{vendor.contact_phone || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray">Status</span>
                  <Badge variant="status" status="approved">Active</Badge>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-light-stone/30">
                <div className="text-center p-3 rounded-xl bg-cream-white">
                  <p className="text-2xl font-heading font-bold text-market-green">{myRegistrations.length}</p>
                  <p className="text-xs text-warm-gray">Events</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-cream-white">
                  <p className="text-2xl font-heading font-bold text-harvest-gold">
                    {myRegistrations.filter(r => r.status === 'approved').length}
                  </p>
                  <p className="text-xs text-warm-gray">Approved</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* My Registrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card hover={false} className="p-6">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">My Event Registrations</h3>
                <div className="space-y-3">
                  {myRegistrations.map((reg) => (
                    <div key={reg.id} className="flex items-center gap-4 p-4 rounded-xl bg-cream-white">
                      <div className="w-12 h-12 rounded-xl bg-market-green/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-6 w-6 text-market-green" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-charcoal">
                          {reg.event?.title || 'Unknown Event'}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-warm-gray mt-1">
                          {reg.event && (
                            <>
                              <span>{formatDate(reg.event.event_date)}</span>
                              <span>&bull;</span>
                              <span>{formatTime(reg.event.start_time)}</span>
                            </>
                          )}
                        </div>
                        {reg.products_preview && (
                          <p className="text-xs text-warm-gray mt-1">Bringing: {reg.products_preview}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="status" status={reg.status}>
                          {reg.status}
                        </Badge>
                        {reg.booth_number && (
                          <span className="text-xs text-warm-gray">Booth {reg.booth_number}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Available Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card hover={false} className="p-6">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">Register for Events</h3>
                <div className="space-y-3">
                  {availableEvents.map((event) => (
                    <div key={event.id} className="flex items-center gap-4 p-4 rounded-xl bg-cream-white">
                      <div className="w-12 h-12 rounded-xl bg-harvest-gold/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-6 w-6 text-harvest-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-charcoal">{event.title}</p>
                        <div className="flex items-center gap-3 text-sm text-warm-gray mt-1">
                          <span>{formatDate(event.event_date)}</span>
                          <span>&bull;</span>
                          <span>{event.max_vendors - (event.vendor_count || 0)} spots left</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addToast(`Registration for "${event.title}" submitted!`, 'success')}
                      >
                        Register
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  )
}
