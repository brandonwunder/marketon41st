import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'mt-6 h-1 w-16 bg-gradient-to-r from-market-green to-harvest-gold rounded-full',
        align === 'center' && 'mx-auto'
      )} />
    </div>
  )
}
