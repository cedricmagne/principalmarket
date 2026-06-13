import { Instrument_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

const instrumentSans = Instrument_Sans({
  variable: '--font-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Smart Treasury Account',
  description: 'Secure, policy-driven treasury operations for Web3'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
