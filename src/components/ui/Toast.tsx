'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, AlertCircle, Info } from 'lucide-react'
import type { Toast as ToastType } from '@/hooks/useToast'

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
}

const colors = {
  success: 'bg-market-green text-white',
  error: 'bg-tomato-red text-white',
  info: 'bg-sky-blue text-charcoal',
}

interface ToastContainerProps {
  toasts: ToastType[]
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type]
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg ${colors[toast.type]} min-w-[300px]`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium flex-1">{toast.message}</p>
              <button
                onClick={() => onRemove(toast.id)}
                className="shrink-0 hover:opacity-70 transition-opacity"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
