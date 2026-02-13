'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Package, Leaf, Apple, Cherry, Egg, Croissant, Droplets, Sprout, Sparkles, ShoppingBag, Truck, Smile } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { ToastContainer } from '@/components/ui/Toast'
import { useToast } from '@/hooks/useToast'
import { produceBoxOrderSchema, type ProduceBoxOrderData } from '@/lib/validation'
import { produceBoxFAQ } from '@/lib/mock-data'
import { events } from '@/lib/mock-data'

const boxItems = [
  { icon: Leaf, name: 'Seasonal Greens', desc: 'Mixed salad greens & kale' },
  { icon: Apple, name: 'Fresh Fruit', desc: 'Whatever\'s ripest this week' },
  { icon: Cherry, name: 'Local Berries', desc: 'In season picks' },
  { icon: Egg, name: 'Farm Eggs', desc: 'Pasture-raised, dozen' },
  { icon: Croissant, name: 'Artisan Bread', desc: 'From Golden Crust Bakery' },
  { icon: Droplets, name: 'Local Honey', desc: 'Raw & unfiltered' },
  { icon: Sprout, name: 'Fresh Herbs', desc: 'Basil, cilantro, or dill' },
  { icon: Sparkles, name: 'Weekly Surprise', desc: 'Something special!' },
]

const steps = [
  { icon: ShoppingBag, title: 'Order Online', desc: 'Fill out the form and choose your pickup date.' },
  { icon: Truck, title: 'We Pack It Fresh', desc: 'Our vendors hand-pick the best of the week.' },
  { icon: Smile, title: 'Pick Up & Enjoy', desc: 'Grab your box at the market and eat well all week!' },
]

export function ProduceBoxContent() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const { toasts, addToast, removeToast } = useToast()
  const { ref: contentsRef, isVisible: contentsVisible } = useScrollReveal()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal()

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ProduceBoxOrderData>({
    resolver: zodResolver(produceBoxOrderSchema),
  })

  const onSubmit = async (data: ProduceBoxOrderData) => {
    // Hollow - just show success toast
    await new Promise((resolve) => setTimeout(resolve, 1000))
    addToast('Order placed! Redirecting to checkout...', 'success')
    reset()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-market-green via-market-green-light to-market-green overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-harvest-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Package className="h-12 w-12 text-harvest-gold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Fresh Produce Box
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-6">
              A curated box of the week&apos;s freshest picks from your favorite Market on 41st vendors.
            </p>
            <div className="inline-flex items-center gap-2 bg-harvest-gold text-charcoal px-6 py-3 rounded-full font-heading text-2xl font-bold shadow-lg">
              $20 <span className="text-sm font-sans font-normal">per box</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
            <path d="M0,60 L0,30 Q360,60 720,20 Q1080,-10 1440,30 L1440,60 Z" fill="#FDF8EF" />
          </svg>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 md:py-24 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What's Inside"
            subtitle="Every box is packed with 6-8 items sourced directly from our market vendors. Contents change weekly!"
          />
          <div ref={contentsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {boxItems.map((item, i) => {
              const ItemIcon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={contentsVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="p-5 rounded-2xl bg-white border border-light-stone/30 text-center hover:shadow-md transition-shadow"
                >
                  <ItemIcon className="h-8 w-8 text-market-green mx-auto mb-3" />
                  <p className="font-heading font-semibold text-charcoal text-sm">{item.name}</p>
                  <p className="text-xs text-warm-gray mt-1">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How It Works" subtitle="Three simple steps to fresh, local goodness." />
          <div ref={stepsRef} className="grid md:grid-cols-3 gap-8 mt-12">
            {steps.map((step, i) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={stepsVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-market-green/10 flex items-center justify-center mx-auto mb-4 relative">
                    <StepIcon className="h-8 w-8 text-market-green" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-harvest-gold text-charcoal text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-warm-gray">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 md:py-24 bg-cream-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Order Your Box" subtitle="Fill in your details and pick your market day." />

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-light-stone/50 shadow-sm mt-10">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-light-stone/30">
              <div>
                <p className="font-heading text-lg font-semibold text-charcoal">Fresh Produce Box</p>
                <p className="text-sm text-warm-gray">Curated weekly selection</p>
              </div>
              <p className="text-3xl font-heading font-bold text-market-green">$20</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  id="customer_name"
                  placeholder="Jane Doe"
                  error={errors.customer_name?.message}
                  {...register('customer_name')}
                />
                <Input
                  label="Email"
                  id="customer_email"
                  type="email"
                  placeholder="jane@example.com"
                  error={errors.customer_email?.message}
                  {...register('customer_email')}
                />
              </div>

              <Input
                label="Phone (optional)"
                id="customer_phone"
                type="tel"
                placeholder="(555) 123-4567"
                error={errors.customer_phone?.message}
                {...register('customer_phone')}
              />

              <div className="space-y-1.5">
                <label htmlFor="pickup_date" className="block text-sm font-medium text-charcoal">
                  Pickup Date
                </label>
                <select
                  id="pickup_date"
                  className="w-full appearance-none px-4 py-3 rounded-xl border border-light-stone bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-market-green/30 focus:border-market-green transition-all"
                  {...register('pickup_date')}
                >
                  <option value="">Select a market day</option>
                  {events.map((event) => (
                    <option key={event.id} value={event.event_date}>
                      {new Date(event.event_date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                      {event.special_theme ? ` — ${event.special_theme}` : ''}
                    </option>
                  ))}
                </select>
                {errors.pickup_date && (
                  <p className="text-sm text-tomato-red">{errors.pickup_date.message}</p>
                )}
              </div>

              <Textarea
                label="Special Requests (optional)"
                id="notes"
                placeholder="Any allergies or preferences? Let us know!"
                {...register('notes')}
              />

              <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
                Purchase — $20.00
              </Button>

              <p className="text-xs text-center text-warm-gray">
                You&apos;ll be redirected to our secure checkout. Payment processed by Stripe.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />

          <div className="space-y-3 mt-10">
            {produceBoxFAQ.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-light-stone/50 bg-cream-white overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-light-stone/20 transition-colors"
                >
                  <span className="font-heading font-semibold text-charcoal pr-4">{item.question}</span>
                  <span className={`text-market-green text-xl transition-transform ${faqOpen === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {faqOpen === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-warm-gray leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  )
}
