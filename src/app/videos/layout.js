import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Videos',
    openGraph: {  
      title: 'Desperdício Zero | Videos',
      description: 'Embarque em uma jornada visual de conhecimento e inspiração! Nossa coleção de vídeos sobre alimentação e nutrição é um tesouro de informações valiosas, dicas práticas e receitas deliciosas. Explore nossa biblioteca audiovisual para aprender, se inspirar e transformar sua relação com a comida. De vídeos educativos a tutoriais de culinária saudável, estamos aqui para guiá-lo rumo a um estilo de vida mais nutritivo e equilibrado.',
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