
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Livros',
    openGraph: {  
      title: 'Desperdício Zero | Livros',
      description: 'Explore um universo de conhecimento e descobertas na nossa coleção de livros sobre alimentação e nutrição. Nossa seleção cuidadosamente curada oferece uma gama diversificada de obras que abordam desde receitas saudáveis até teorias nutricionais. Aprofunde-se nesse mundo de sabedoria e encontre inspiração para uma jornada de alimentação mais consciente e saudável.',
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