'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
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
        <div className="relative">
          <select
            id={id}
            ref={ref}
            className={cn(
              'w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-light-stone bg-white text-charcoal',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-market-green/30 focus:border-market-green',
              'hover:border-warm-gray',
              error && 'border-tomato-red focus:ring-tomato-red/30 focus:border-tomato-red',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-gray pointer-events-none" />
        </div>
        {error && (
          <p className="text-sm text-tomato-red mt-1">{error}</p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'

export { Select }
