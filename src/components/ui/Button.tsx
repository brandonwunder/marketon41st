'use client'

import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-market-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-market-green text-white hover:bg-market-green-dark shadow-md hover:shadow-lg active:scale-[0.98]',
        secondary: 'bg-harvest-gold text-charcoal hover:bg-harvest-gold-dark shadow-md hover:shadow-lg active:scale-[0.98]',
        outline: 'border-2 border-market-green text-market-green hover:bg-market-green hover:text-white active:scale-[0.98]',
        ghost: 'text-market-green hover:bg-market-green/10 active:scale-[0.98]',
        danger: 'bg-tomato-red text-white hover:bg-tomato-red/90 shadow-md active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-lg',
        md: 'h-11 px-6 text-base rounded-xl',
        lg: 'h-13 px-8 text-lg rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
