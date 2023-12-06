
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Receitas',
    openGraph: {  
      title: 'Desperdício Zero | Receitas',
      description: 'Explore o mundo delicioso e nutritivo das nossas receitas saudáveis. No nosso site, buscamos unir sabor e saúde em pratos irresistíveis. Apaixonados por alimentação equilibrada, oferecemos uma variedade de receitas fáceis de preparar, repletas de ingredientes nutritivos e dicas para promover um estilo de vida saudável. Junte-se a nós nessa jornada culinária e descubra como cada refeição pode ser uma celebração do bem-estar.',
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
  