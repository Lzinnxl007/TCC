import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Entrar',
    openGraph: {  
      title: 'Desperdício Zero | Entrar',
    }
    
  }
  
  
  export default function RootLayout({ children }) {
    
      return (
        <html lang="pt-BR">
          <body className={inter.className}>
            {children}  
          </body>
        </html>
      )
    
  }
  