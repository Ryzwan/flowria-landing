import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  variant?: 'default' | 'card' | 'accent'
  className?: string
  id?: string
}

export function Section({ children, variant = 'default', className, id }: SectionProps) {
  const variantClasses = {
    default: 'bg-transparent',
    card: 'bg-card',
    accent: 'bg-gradient-to-br from-flowria-purple/10 to-flowria-teal/10',
  }

  return (
    <section
      id={id}
      className={cn('py-12 md:py-20 lg:py-32', variantClasses[variant], className)}
    >
      {children}
    </section>
  )
}
