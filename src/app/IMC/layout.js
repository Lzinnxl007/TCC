
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Calcule seu IMC',
    openGraph: {  
      title: 'Desperdício Zero | Calcule seu IMC',
      description: 'Descubra seu Índice de Massa Corporal conosco! Nosso calculador de IMC é uma ferramenta simples e eficaz para avaliar sua saúde. Basta inserir seus dados e obtenha instantaneamente seu IMC, uma medida que ajuda a entender sua composição corporal. Acompanhe sua jornada de saúde conosco e tenha uma visão mais completa do seu bem-estar físico.',
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