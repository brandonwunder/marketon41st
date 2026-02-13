import type { Metadata } from 'next'
import { Playfair_Display, Inter, DM_Sans } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Market on 41st | Fresh. Local. Community.',
    template: '%s | Market on 41st',
  },
  description:
    'Your neighborhood farmers market connecting local vendors with the community. Fresh produce, artisan goods, and community spirit every Saturday.',
  openGraph: {
    title: 'Market on 41st',
    description: 'Fresh. Local. Community. Your neighborhood farmers market.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Market on 41st',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-cream-white text-charcoal font-sans antialiased">
        <Header />
        <main id="main-content" className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
