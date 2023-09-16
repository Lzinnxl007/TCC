
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProviders from '@/components/Theme/ThemeProviders'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desperdício Zero | Se alimente melhor',
  description: 'Aprenda a se alimentar de verdade!',
  icons: {
    icon: '/favicon.ico'
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          {children}
          
        </ThemeProviders>
      </body>
    </html>
  )
}
