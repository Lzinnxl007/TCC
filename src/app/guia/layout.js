
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Guia Sustentável',
    openGraph: {  
      title: 'Desperdício Zero | Guia Sustentável',
      description: 'Bem-vindo ao nosso guia simples de sustentabilidade! Aqui, buscamos simplificar a jornada em direção a um estilo de vida mais eco-friendly. Com dicas práticas, informações acessíveis e pequenas mudanças que fazem grande diferença, nosso objetivo é mostrar como cada um pode contribuir para um mundo mais sustentável. Explore conosco maneiras simples, porém impactantes, de reduzir seu impacto ambiental e abraçar uma vida mais consciente.',
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
  