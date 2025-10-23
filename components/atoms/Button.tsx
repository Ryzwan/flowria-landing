'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  href?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled = false,
  type = 'button',
  onClick,
  href,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary:
      'bg-flowria-teal text-black hover:bg-flowria-teal-400 hover:shadow-[0_0_30px_rgba(0,229,185,0.5)] active:scale-95',
    secondary:
      'bg-flowria-purple text-white hover:bg-flowria-purple-400 hover:shadow-[0_0_30px_rgba(116,25,226,0.5)] active:scale-95',
    ghost:
      'bg-transparent text-flowria-teal border-2 border-flowria-teal hover:bg-flowria-teal/10 active:scale-95',
    link: 'bg-transparent text-flowria-teal hover:text-flowria-teal-400 underline-offset-4 hover:underline',
  }

  const sizeClasses = {
    sm: 'text-sm px-4 py-2 rounded-lg',
    md: 'text-base px-6 py-3 rounded-xl',
    lg: 'text-lg px-8 py-4 rounded-xl',
  }

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    variant !== 'link' && sizeClasses[size],
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: variant !== 'link' ? 1.02 : 1 }}
        whileTap={{ scale: variant !== 'link' ? 0.98 : 1 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: variant !== 'link' ? 1.02 : 1 }}
      whileTap={{ scale: variant !== 'link' ? 0.98 : 1 }}
    >
      {children}
    </motion.button>
  )
}
