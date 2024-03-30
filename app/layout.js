import './globals.css'
import { Inter } from 'next/font/google'
<<<<<<< HEAD
import { Analytics } from '@vercel/analytics/react';
=======
>>>>>>> parent of c53a89e (Add Vercel Analytics to layout.js and package.json)

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
