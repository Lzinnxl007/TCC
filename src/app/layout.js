

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desperdício Zero | Se alimente melhor',
  description: 'Aprenda a se alimentar de verdade!',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  )
}
