import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'
import { Nunito_Sans } from "next/font/google"


export const nunitoSans = Nunito_Sans({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'YelpCamp',
  description: 'YelpCamp | Codewell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
