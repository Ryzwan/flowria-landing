import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'default' | 'teal' | 'purple' | 'outline'
  children: ReactNode
  className?: string
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  const variantClasses = {
    default: 'bg-muted text-muted-foreground',
    teal: 'bg-flowria-teal/10 text-flowria-teal border border-flowria-teal/20',
    purple: 'bg-flowria-purple/10 text-flowria-purple border border-flowria-purple/20',
    outline: 'bg-transparent text-foreground border border-border',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
