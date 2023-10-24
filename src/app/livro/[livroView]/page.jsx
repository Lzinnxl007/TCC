'use client'

import Header from "@/components/Default/Header"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { booksList } from "@/components/Ebooks/Books"
export default function Livro() {

    const searchParams = useSearchParams()

    const id = searchParams.get('id')

    const book = booksList.filter((item) => item.id == id)[0]



    return (
        <section className="w-screen min-h-screen bg-[var(--light-grey)]">
            <Header/>
            <div className="flex w-full min-h-screen 
            items-center justify-center mt-16">
                <div className="bg-zinc-50 lg:flex-col lg:mx-auto flex gap-8 shadow-lg rounded-xl p-8 w-full max-w-4xl h-auto">
                    <div className="w-auto mt-6 lg:ml-4">
                        <Image src={book.image}
                        layout="responsive"
                        width={100}
                        height={100} 
                        className="w-full object-cover h-full lg:max-w-sm"/>

                        <div className="mt-6 text-xs text-zinc-800 mr-16">
                            <p className="max-w-xs">
                                {book?.citation}
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
                            {book?.title}
                        </h1>
                        <p className="font-medium text-sm mb-8">
                            {book?.synopsis}
                        </p>
                        <p className="text-sm">
                            {book?.authors}
                        </p>
                        <p className="my-6 text-xs flex flex-col gap-2">
                            <span className="text-zinc-700">
                                Publicado em:
                            </span>
                            <span>
                                {book?.date}
                            </span>
                            
                        </p>
                        
                        <Link href={book.link}>
                            <button className="w-full py-1.5 bg-orange-400 hover:bg-orange-500 transition text-zinc-50 font-medium rounded mt-10">
                                Baixar
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}