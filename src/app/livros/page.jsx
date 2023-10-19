'use client'

import Header from "@/components/Default/Header"
import EBookCard from "@/components/Ebooks/EbookCard"
import { booksList } from "@/components/Ebooks/Books"
export default function Books() {

    return (
        <section className="min-h-screen bg-[var(--light-grey)]">
            <Header/>
            <div className="mt-10">
                <h1 className="text-5xl font-bold text-center my-4 text-zinc-900">E-books</h1>
                <p className="text-semibold text-center text-zinc-700">
                    Adquira mais conhecimento com a leitura
                </p>
            </div>
            <div className="w-full grid grid-cols-fit gap-8 px-12 mt-16">
                {booksList?.map((book) => {
                    return (
                        <EBookCard
                        id={book.id}
                        title={book.title}
                        date={book.date}
                        author={book.authors.filter((i, index) => index <= 1)}/>
                    )
                })}
            </div>
        </section>
    )
}