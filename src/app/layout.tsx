import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Bubbles } from '@/components/Bubbles'
import { Header } from '@/components/Header'
import { Profile } from '@/components/Profile'
import { Typing } from '@/components/Typing'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Nathan Batista | Sênior Front-end Engineer',
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
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="relative mx-[8vh] my-[6vw] flex h-[84vh] max-h-[674px] w-full max-w-[1268px] flex-row-reverse items-center justify-center pl-[90px] transition-all height-700:my-[3vh] height-700:h-[94vh] height-740:my-[6vh] height-740:h-[88vh]">
            <Header />
            {children}
            <Bubbles />
            <Profile />
          </div>
        </div>
      </body>
    </html>
  )
}
