
import '../globals.css'
import { Inter } from 'next/font/google'
import ThemeProviders from '@/components/Theme/ThemeProviders'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calcule seu IMC - Desperdicio Zero',
  description: 'Calcule seu IMC e verifique o melhor peso para sua saúde',
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
