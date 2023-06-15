import React from 'react'
import { Footer, HeroSection } from '@src/components'
import '@src/assets/styles/global.scss'

export const metadata = {
  title: 'OMEGA',
  description: 'Test task',
}

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <HeroSection />
        <div className='container'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
