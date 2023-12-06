
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Sobre Nós',
    openGraph: {  
      title: 'Desperdício Zero | Sobre Nós',
      description: 'Bem-vindo ao Desperdício Zero, onde a sustentabilidade encontra a nutrição. Somos apaixonados por reduzir o desperdício e promover escolhas alimentares saudáveis. Nossa missão é oferecer dicas práticas, receitas inovadoras e informações valiosas para ajudar você a adotar um estilo de vida mais sustentável e nutritivo. Junte-se a nós nessa jornada para um mundo mais consciente e saudável!',
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
  