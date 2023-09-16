
import '../globals.css'
import { Inter } from 'next/font/google'
import ThemeProviders from '@/components/Theme/ThemeProviders'
import Footer from '@/components/Default/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Receitas - Desperdicio Zero',
  description: 'Descubra receitas incriveis e saudaveis para seu dia a dia',
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
          <Footer/>
        </ThemeProviders>
      </body>
    </html>
  )
}
