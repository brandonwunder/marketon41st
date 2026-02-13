import { cn } from '@/lib/utils'

export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-xl bg-light-stone/60',
        className
      )}
    />
  )
}

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className="h-8 w-8 rounded-full border-3 border-light-stone border-t-market-green animate-spin" />
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-light-stone/50">
      <LoadingSkeleton className="h-40 w-full mb-4" />
      <LoadingSkeleton className="h-6 w-3/4 mb-2" />
      <LoadingSkeleton className="h-4 w-1/2 mb-4" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-5/6 mt-2" />
    </div>
  )
}
