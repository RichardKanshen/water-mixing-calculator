import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kalkulačka Kalorimetrickej Rovnice'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='px-16 py-12'>{children}</body>
    </html>
  )
}
