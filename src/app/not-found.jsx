'use client'

import Footer from "@/components/Default/Footer"
import Header from "@/components/Default/Header"

export default function NotFound() {

    const backToInitialPage = () => {
        window.location.href = "/"
    }
    
    return (
        <section className="w-screen min-h-screen bg-[var(--light-grey)]">
            <Header/>
            <main className="flex lg:flex-col-reverse items-center justify-evenly w-full h-[90vh]">
                <div className="gap-6 flex flex-col lg:items-center">
                    <h1 className="text-6xl lg:text-5xl font-bold max-w-lg lg:text-center lg:w-full">
                        Página Não Encontrada
                    </h1>
                    <p className="max-w-md lg:text-center lg:w-full lg:px-4">
                    Desculpe, a página que você está procurando não foi encontrada. Parece que você se perdeu na internet. Por favor, volte à página inicial para continuar sua jornada.
                    </p>
                    <button onClick={backToInitialPage}
                    className="px-4 py-1.5 rounded bg-[var(--green)] text-zinc-50 font-medium w-fit">
                        Voltar ao Início
                    </button>

                </div>
                <div className="max-w-lg lg:max-w-md md:max-w-sm">
                    <img src="/404-image.png" alt="404-image.png" 
                    className="w-full"/>
                </div>
            </main>
            <Footer/>
        </section>
    )
}