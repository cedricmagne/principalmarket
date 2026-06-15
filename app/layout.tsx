import { Archivo_Black, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin']
})

const archivoBlack = Archivo_Black({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Yield Tokenization for Stellar RWAs',
  description: 'Secure, policy-driven treasury operations for Web3'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
