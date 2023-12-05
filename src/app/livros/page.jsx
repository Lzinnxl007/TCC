'use client'

import Header from "@/components/Default/Header"
import EBookCard from "@/components/Ebooks/EbookCard"
import { booksList } from "@/components/Ebooks/Books"
import Footer from "@/components/Default/Footer"
export default function Books() {

    return (
        <section className="min-h-screen bg-[var(--light-grey)] dark:bg-zinc-900">
            <Header/>
            <div className="mt-10">
                <h1 className="text-5xl font-bold text-center my-4 text-zinc-900 dark:text-zinc-50">eBooks</h1>
                <p className="text-semibold text-center text-zinc-700 dark:text-zinc-200">
                    Adquira mais Conhecimento com a Leitura
                </p>
            </div>
            <div className="w-auto grid grid-cols-fit gap-8 px-12 mt-16 mb-20">
                {booksList?.map((book) => {
                    return (
                        <EBookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        date={book.date}
                        author={book.authors.filter((i, index) => index <= 1)}
                        image={book.image}/>
                    )
                })}
            </div>
            <Footer/>
        </section>
    )
}