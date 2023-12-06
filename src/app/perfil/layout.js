import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Perfil do Usuário',
    openGraph: {  
      title: 'Desperdício Zero | Perfil do Usuário',
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
  