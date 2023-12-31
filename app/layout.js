import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Halldór Valberg',
  description: 'Komdu í kaffi!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
