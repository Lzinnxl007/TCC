
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Início',
  description: 'O Desperdício Zero é uma plataforma focada em saúde e sustentabilidade que proporciona métodos e ferramentas úteis para melhorar seu bem estar enquanto dissemina praticas sustentaveis',
  openGraph: {  
    title: 'Desperdício Zero | Saúde e Sustentabilidade',
    description: 'O Desperdício Zero é uma plataforma focada em saúde e sustentabilidade que proporciona métodos e ferramentas úteis para melhorar seu bem estar enquanto dissemina praticas sustentaveis',
    icons: {
      icon: '/favicon.ico'
    },
    images: [
      {
        url: '/openGraph-logo.png',
        width: 300,
        height: 186,
      }
    ],
    url: 'www.desperdiciozero.blog.br',
    siteName: 'Desperdício Zero',
    locale: 'pt_BR',
    type: 'website'
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
