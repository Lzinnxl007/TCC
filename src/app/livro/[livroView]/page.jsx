import Header from "@/components/Default/Header"
import Image from "next/image"
import Link from "next/link"
export default function Livro() {
    return (
        <section className="w-screen min-h-screen bg-[var(--light-grey)]">
            <Header/>
            <div className="flex w-full min-h-screen flex 
            items-center justify-center">
                <div className="bg-zinc-50 lg:flex-col lg:mx-auto flex gap-8 shadow-lg rounded-xl p-8 w-full max-w-4xl h-auto">
                    <div className="w-auto mt-6 lg:ml-4">
                        <Image src="https://www.livrosabertos.sibi.usp.br/public/presses/1/submission_1125_1452_coverImage_pt_BR_t.jpg"
                        layout="responsive"
                        width={100}
                        height={100} 
                        className="w-full object-cover h-full lg:max-w-sm"/>

                        <div className="mt-6 text-xs text-zinc-800 mr-16">
                            <p className="max-w-xs">
                                LAHAM, Beatriz Sinelli et al. Cartilha para quem ensina: material de apoio do livreto didático: “Detetives da comida: o que comemos e por que comemos o que comemos?”. . Universidade de São Paulo. Instituto de Estudos Brasileiros, 2023. DOI: https://doi.org/10.11606/9786587773520 Disponível em: www.livrosabertos.sibi.usp.br/portaldelivrosUSP/catalog/book/1125 . Acesso em 17 outubro. 2023.
                            </p>
                        </div>
                        <div className="mt-10">
                            <p className="text-zinc-600 text-sm max-w-xs">
                            Este trabalho está licenciado sob uma licença 
                                
                                <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                target="_blank"
                                className="text-blue-400 underline ml-1">
                                    Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                                </Link>
                                .
                            </p>

                        </div>
                    </div>
                    <div className="w-3/4 ml-4 lg:w-full lg:pr-10">
                        <h1 className="text-3xl font-semibold mt-4 mb-6">
                            Detetives da comida: o que comemos e por que comemos o que comemos?
                        </h1>
                        <p className="font-medium text-sm mb-8">
                            A Saúde Planetária é uma área de estudo que reúne de forma interdisciplinar a saúde humana e suas relações com a saúde dos ecossistemas. Embora seja um campo em grande expansão frente aos desafios das mudanças globais recentes, trata-se de um assunto ainda pouco abordado no ensino básico e em escolas. Para suprir esta lacuna, nesta cartilha tratamos o tema da Segurança e Soberania Alimentar sob a perspectiva da Saúde Planetária. O material serve de apoio ao livreto didático “Detetives da comida: o que comemos e por que comemos o que comemos?”, que traz uma Sequência Didática para estudantes do Ensino Fundamental II. Assim, a presente cartilha traz subsídios teóricos e práticos para aplicação da sequência didática por professores em sala de aula, bem como possibilita adaptações ao contexto e realidade de cada escola. Os temas abordados incluem: ciência cidadã, ensino por investigação, educomunicação, segurança e soberania alimentar e nutricional.
                        </p>
                        <p className="text-sm">
                            Beatriz Sinelli Laham, Universidade de São Paulo. Instituto de Biociências; Luís Gustavo Arruda, Universidade de São Paulo. Instituto de Biociências; Sheina Koffler, Universidade de São Paulo. Instituto de Estudos Avançados; Vanessa Goes, Universidade Federal do Rio de Janeiro. Instituto de Química; Antonio Mauro Saraiva, Universidade de São Paulo. Escola Politécnica ; Aline Martins de Carvalho, Universidade de São Paulo. Faculdade de Saúde Pública
                        </p>
                        <p className="my-6 text-xs flex flex-col gap-2">
                            <span className="text-zinc-700">
                                Publicado em:
                            </span>
                            <span>
                                10 Outubro, 2023
                            </span>
                            
                        </p>
                        
                        <button className="w-full py-1.5 bg-orange-400 hover:bg-orange-500 transition text-zinc-50 font-medium rounded mt-10">
                            Baixar
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}