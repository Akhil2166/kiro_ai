import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Denz | Premium Dental Care',
  description: 'Experience world-class dental care with cutting-edge technology and compassionate professionals. Your smile, our passion.',
  keywords: 'dental clinic, dentist, dental care, teeth whitening, implants, orthodontics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  )
}
