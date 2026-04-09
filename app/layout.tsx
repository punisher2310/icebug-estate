import './globals.css'
import { Inter, Syne } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne' })

export const metadata = {
  title: 'IceBug Estate | 50x Beyond Experience',
  description: 'Kanpur’s Most Elite Private Fitness Circle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased bg-black text-white">
          {children}
      </body>
    </html>
  )
}