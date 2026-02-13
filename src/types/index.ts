export interface Vendor {
  id: string
  business_name: string
  slug: string
  description: string | null
  category: VendorCategory
  contact_email: string
  contact_phone: string | null
  website_url: string | null
  logo_url: string | null
  social_instagram: string | null
  social_facebook: string | null
  is_active: boolean
  is_featured: boolean
  created_at: string
  updated_at: string
}

export type VendorCategory =
  | 'produce'
  | 'baked_goods'
  | 'dairy'
  | 'crafts'
  | 'prepared_food'
  | 'flowers'
  | 'other'

export interface MarketEvent {
  id: string
  title: string
  slug: string
  description: string | null
  event_date: string
  start_time: string
  end_time: string
  location: string
  max_vendors: number
  is_published: boolean
  is_cancelled: boolean
  special_theme: string | null
  image_url: string | null
  created_at: string
  updated_at: string
  vendor_count?: number
}

export interface VendorRegistration {
  id: string
  vendor_id: string
  event_id: string
  status: 'pending' | 'approved' | 'rejected' | 'cancelled'
  booth_number: string | null
  notes: string | null
  products_preview: string | null
  created_at: string
  updated_at: string
  vendor?: Vendor
  event?: MarketEvent
}

export interface ProduceBoxOrder {
  id: string
  stripe_session_id: string
  stripe_payment_intent: string | null
  customer_email: string
  customer_name: string
  customer_phone: string | null
  amount_cents: number
  currency: string
  status: 'pending' | 'paid' | 'fulfilled' | 'refunded' | 'cancelled'
  pickup_event_id: string | null
  pickup_date: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string | null
  message: string
  type: 'general' | 'vendor_inquiry' | 'partnership' | 'media'
  is_read: boolean
  created_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  name: string | null
  is_active: boolean
  subscribed_at: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  image_url?: string
}

export interface ProduceBoxItem {
  name: string
  icon: string
  seasonal: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export const VENDOR_CATEGORY_LABELS: Record<VendorCategory, string> = {
  produce: 'Produce',
  baked_goods: 'Baked Goods',
  dairy: 'Dairy',
  crafts: 'Crafts',
  prepared_food: 'Prepared Food',
  flowers: 'Flowers',
  other: 'Other',
}
