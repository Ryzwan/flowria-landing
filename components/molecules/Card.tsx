'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'accent'
  hoverable?: boolean
}

export function Card({ children, className, variant = 'default', hoverable = false }: CardProps) {
  const variantClasses = {
    default: 'glass',
    accent: 'glass bg-gradient-to-br from-flowria-purple/5 to-flowria-teal/5',
  }

  const baseClasses = cn(
    'rounded-2xl p-6 transition-all duration-300',
    variantClasses[variant],
    hoverable && 'hover:scale-[1.02] hover:shadow-xl cursor-pointer',
    className
  )

  if (hoverable) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
