import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.enum(['general', 'vendor_inquiry', 'partnership', 'media']).default('general'),
})

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
})

export const vendorRegistrationSchema = z.object({
  business_name: z.string().min(2, 'Business name must be at least 2 characters'),
  category: z.enum(['produce', 'baked_goods', 'dairy', 'crafts', 'prepared_food', 'flowers', 'other'], {
    message: 'Please select a category',
  }),
  description: z.string().min(20, 'Please provide at least 20 characters about your business'),
  contact_email: z.string().email('Please enter a valid email address'),
  contact_phone: z.string().optional(),
  website_url: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  social_instagram: z.string().optional(),
  social_facebook: z.string().url('Please enter a valid Facebook URL').optional().or(z.literal('')),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, {
  message: 'Passwords do not match',
  path: ['confirm_password'],
})

export const vendorLoginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const eventRegistrationSchema = z.object({
  event_id: z.string().uuid(),
  notes: z.string().optional(),
  products_preview: z.string().min(5, 'Please describe what you plan to bring'),
})

export const produceBoxOrderSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Please enter a valid email address'),
  customer_phone: z.string().optional(),
  pickup_date: z.string().min(1, 'Please select a pickup date'),
  notes: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterData = z.infer<typeof newsletterSchema>
export type VendorRegistrationData = z.infer<typeof vendorRegistrationSchema>
export type VendorLoginData = z.infer<typeof vendorLoginSchema>
export type EventRegistrationData = z.infer<typeof eventRegistrationSchema>
export type ProduceBoxOrderData = z.infer<typeof produceBoxOrderSchema>
