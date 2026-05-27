import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

// Neue Montreal style — using Inter with tight tracking as closest Google match
// For production, replace with actual Neue Montreal local font files
const displayFont = Inter({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Denz | Luxury Dental Care',
  description: 'Where precision meets artistry. Premium dental care crafted for those who demand excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="vignette film-grain">{children}</body>
    </html>
  )
}
