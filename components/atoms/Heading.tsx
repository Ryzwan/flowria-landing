import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  size?: 'display-xl' | 'display-lg' | 'display-md' | 'h1' | 'h2' | 'h3'
  children: ReactNode
  className?: string
  gradient?: boolean
}

export function Heading({
  as: Component = 'h2',
  size = 'h2',
  children,
  className,
  gradient = false,
}: HeadingProps) {
  const sizeClasses = {
    'display-xl': 'text-5xl md:text-6xl lg:text-display-xl font-bold tracking-tight',
    'display-lg': 'text-4xl md:text-5xl lg:text-display-lg font-bold tracking-tight',
    'display-md': 'text-3xl md:text-4xl lg:text-display-md font-bold tracking-tight',
    h1: 'text-3xl md:text-4xl font-bold tracking-tight',
    h2: 'text-2xl md:text-3xl font-bold tracking-tight',
    h3: 'text-xl md:text-2xl font-semibold',
  }

  return (
    <Component
      className={cn(
        sizeClasses[size],
        gradient && 'gradient-text-teal-purple',
        !gradient && 'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  )
}
