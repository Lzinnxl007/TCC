import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Perguntas Frequentes',
    openGraph: {  
      title: 'Desperdício Zero | Perguntas Frequentes',
      description: 'Encontre respostas para suas dúvidas mais comuns em nossa seção de perguntas frequentes. Reunimos uma lista abrangente de questões comuns sobre alimentação e nutrição, sustentabilidade ou qualquer tópico relacionado ao nosso conteúdo. Navegue por nossa FAQ para obter informações claras, diretas e úteis, facilitando sua jornada rumo a um estilo de vida mais saudável, consciente e sustentável.',
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