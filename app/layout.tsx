import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flowria — Automatisation IA & Agents Intelligents',
  description:
    "Transformez vos processus avec l'IA. Product Manager expert en automatisation, agents intelligents et intégrations no-code. +8 ans d'expérience, +22 produits digitaux lancés.",
  keywords: [
    'automatisation IA',
    'agents intelligents',
    'no-code',
    'Zapier',
    'Make',
    'n8n',
    'product manager',
    'chatbot GPT',
    'intégrations',
  ],
  authors: [{ name: 'Ryzwan' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://flowria.com',
    siteName: 'Flowria',
    title: 'Flowria — Automatisation IA & Agents Intelligents',
    description:
      "Transformez vos processus avec l'IA. Expert en automatisation et agents intelligents.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flowria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowria — Automatisation IA & Agents Intelligents',
    description:
      "Transformez vos processus avec l'IA. Expert en automatisation et agents intelligents.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
