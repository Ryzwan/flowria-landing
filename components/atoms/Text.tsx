import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TextProps {
  variant?: 'default' | 'subtle' | 'large' | 'small'
  children: ReactNode
  className?: string
  as?: 'p' | 'span' | 'div'
}

export function Text({
  variant = 'default',
  children,
  className,
  as: Component = 'p',
}: TextProps) {
  const variantClasses = {
    default: 'text-base text-foreground leading-relaxed',
    subtle: 'text-sm text-muted-foreground leading-relaxed',
    large: 'text-lg text-foreground leading-relaxed',
    small: 'text-sm text-foreground leading-relaxed',
  }

  return <Component className={cn(variantClasses[variant], className)}>{children}</Component>
}
