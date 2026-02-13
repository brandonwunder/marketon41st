'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, Store, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { ToastContainer } from '@/components/ui/Toast'
import { useToast } from '@/hooks/useToast'
import { vendorRegistrationSchema, type VendorRegistrationData } from '@/lib/validation'

const categoryOptions = [
  { value: 'produce', label: 'Produce' },
  { value: 'baked_goods', label: 'Baked Goods' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'crafts', label: 'Crafts' },
  { value: 'prepared_food', label: 'Prepared Food' },
  { value: 'flowers', label: 'Flowers' },
  { value: 'other', label: 'Other' },
]

export default function VendorRegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const { toasts, addToast, removeToast } = useToast()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<VendorRegistrationData>({
    resolver: zodResolver(vendorRegistrationSchema),
    defaultValues: {
      category: undefined,
    },
  })

  const onSubmit = async (data: VendorRegistrationData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitted(true)
    addToast('Registration submitted successfully!', 'success')
  }

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-16 bg-cream-white">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-20 h-20 rounded-full bg-market-green/10 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="h-10 w-10 text-market-green" />
          </motion.div>
          <h1 className="text-3xl font-heading font-bold text-charcoal mb-4">Registration Received!</h1>
          <p className="text-warm-gray mb-8">
            Thank you for your interest in joining Market on 41st! We&apos;ll review your application and get back to you within 2-3 business days.
          </p>
          <Link href="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-cream-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/vendor-portal" className="inline-flex items-center gap-2 text-warm-gray hover:text-charcoal transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Login</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-14 h-14 rounded-2xl bg-market-green/10 flex items-center justify-center mx-auto mb-4">
            <Store className="h-7 w-7 text-market-green" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-charcoal mb-2">Register Your Business</h1>
          <p className="text-warm-gray">Join the Market on 41st vendor family. Tell us about your business.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 md:p-8 border border-light-stone/50 shadow-sm"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Business Info */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">Business Information</h3>
              <div className="space-y-4">
                <Input
                  label="Business Name"
                  id="business_name"
                  placeholder="e.g., Sunrise Organics"
                  error={errors.business_name?.message}
                  {...register('business_name')}
                />
                <Select
                  label="Category"
                  id="category"
                  options={categoryOptions}
                  placeholder="Select your category"
                  error={errors.category?.message}
                  {...register('category')}
                />
                <Textarea
                  label="About Your Business"
                  id="description"
                  placeholder="Tell us about your farm, products, or craft. What makes your business special?"
                  error={errors.description?.message}
                  {...register('description')}
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Contact Email"
                    id="contact_email"
                    type="email"
                    placeholder="hello@yourbusiness.com"
                    error={errors.contact_email?.message}
                    {...register('contact_email')}
                  />
                  <Input
                    label="Phone (optional)"
                    id="contact_phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    error={errors.contact_phone?.message}
                    {...register('contact_phone')}
                  />
                </div>
                <Input
                  label="Website (optional)"
                  id="website_url"
                  type="url"
                  placeholder="https://yourbusiness.com"
                  error={errors.website_url?.message}
                  {...register('website_url')}
                />
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">Social Media (optional)</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Instagram Handle"
                  id="social_instagram"
                  placeholder="@yourbusiness"
                  {...register('social_instagram')}
                />
                <Input
                  label="Facebook Page URL"
                  id="social_facebook"
                  placeholder="https://facebook.com/yourbusiness"
                  error={errors.social_facebook?.message}
                  {...register('social_facebook')}
                />
              </div>
            </div>

            {/* Account */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">Create Account</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Min 8 characters"
                  error={errors.password?.message}
                  {...register('password')}
                />
                <Input
                  label="Confirm Password"
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                  error={errors.confirm_password?.message}
                  {...register('confirm_password')}
                />
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
              Submit Registration
            </Button>

            <p className="text-xs text-center text-warm-gray">
              By registering, you agree to our vendor terms and community guidelines.
            </p>
          </form>
        </motion.div>
      </div>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  )
}
