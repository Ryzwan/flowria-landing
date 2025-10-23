'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Container } from '@/components/organisms/Container'

interface HeroSectionProps {
  title: string
  subtitle?: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function HeroSection({ title, subtitle, primaryCTA, secondaryCTA }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-flowria-purple/20 via-background to-flowria-teal/20 animate-gradient-xy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(116,25,226,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,229,185,0.1),transparent_50%)]" />
      </div>

      <Container>
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <Heading as="h1" size="display-xl" gradient className="mb-6">
            {title}
          </Heading>

          {/* Subtitle */}
          {subtitle && (
            <Text variant="large" className="mb-8 max-w-2xl text-muted-foreground">
              {subtitle}
            </Text>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button variant="primary" size="lg" href={primaryCTA.href}>
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button variant="ghost" size="lg" href={secondaryCTA.href}>
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>

      {/* Decorative gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flowria-teal to-transparent opacity-50" />
    </section>
  )
}
