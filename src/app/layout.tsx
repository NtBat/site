import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Bubbles } from '@/components/Bubbles'
import { Header } from '@/components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Nathan Batista | Sênior Front-end',
  description: 'Front end developer, React, Next.js, TypeScript, TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} h-screen bg-gradient-body antialiased`}
      >
        <Header />
        {children}
        <Bubbles />
      </body>
    </html>
  )
}
