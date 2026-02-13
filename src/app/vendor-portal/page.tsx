'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Store, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ToastContainer } from '@/components/ui/Toast'
import { useToast } from '@/hooks/useToast'
import { vendorLoginSchema, type VendorLoginData } from '@/lib/validation'

export default function VendorPortalPage() {
  const { toasts, addToast, removeToast } = useToast()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<VendorLoginData>({
    resolver: zodResolver(vendorLoginSchema),
  })

  const onSubmit = async (data: VendorLoginData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    addToast('Login functionality coming soon! Check back later.', 'info')
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16 bg-cream-white">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-14 h-14 rounded-2xl bg-market-green/10 flex items-center justify-center mx-auto mb-4">
            <Store className="h-7 w-7 text-market-green" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-charcoal mb-2">Vendor Portal</h1>
          <p className="text-warm-gray">Sign in to manage your vendor profile and events.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 md:p-8 border border-light-stone/50 shadow-sm"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="you@yourbusiness.com"
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-warm-gray cursor-pointer">
                <input type="checkbox" className="rounded border-light-stone text-market-green focus:ring-market-green" />
                Remember me
              </label>
              <button type="button" className="text-market-green hover:underline" onClick={() => addToast('Password reset coming soon!', 'info')}>
                Forgot password?
              </button>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={isSubmitting}>
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-light-stone/30 text-center">
            <p className="text-sm text-warm-gray">
              New vendor?{' '}
              <Link href="/vendor-portal/register" className="text-market-green font-medium hover:underline">
                Register your business
              </Link>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-warm-gray/60">
            <Leaf className="h-4 w-4" />
            <span>Market on 41st Vendor Portal</span>
          </div>
        </motion.div>
      </div>
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </section>
  )
}
