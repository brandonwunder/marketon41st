'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-charcoal"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border border-light-stone bg-white text-charcoal placeholder:text-warm-gray/60 resize-y min-h-[120px]',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-market-green/30 focus:border-market-green',
            'hover:border-warm-gray',
            error && 'border-tomato-red focus:ring-tomato-red/30 focus:border-tomato-red',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-tomato-red mt-1">{error}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
