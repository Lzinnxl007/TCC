import Header from "@/components/Default/Header";
import EBookCard from "@/components/Ebooks/EbookCard";

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
            <div className="w-full grid grid-cols-fit gap-8 px-12 mt-10">
                <EBookCard
                title="Detetives da comida: o que comemos e por que comemos o que comemos?"
                image="https://www.livrosabertos.sibi.usp.br/public/presses/1/submission_1134_1461_coverImage_pt_BR_t.jpg"
                author="Luís Gustavo Arruda, Sheina Koffler, Beatriz Sinelli Laham, Vanessa Goes, Antonio Mauro Saraiva (Organizador)"
                date="Outubro 10, 2023"/>
            </div>
        </section>
    )
}