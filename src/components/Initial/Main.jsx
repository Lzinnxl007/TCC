import Image from "next/image"
export default function Main() {
    return (
        <main className="w-screen h-[91vh] flex z-20
        items-center justify-evenly md:flex-col-reverse overflow-hidden  dark:bg-zinc-900 dark:text-zinc-50 bg-[var(--light-grey)]  pb-10">
            <div className="space-y-4 md:flex md:flex-col md:items-center">
                <h1 className="text-7xl md:text-5xl font-bold leading-[70px] md:text-center text-zinc-900 w-full max-w-md">
                    Se <span className="text-[var(--green)]">Alimente</span> de Forma <span className="text-[var(--green)]">Sustentável</span>
                </h1>
                <p className="max-w-md md:max-w-sm text-sm md:text-center">Desperdício Zero ensina nutrição consciente e uso sustentável de alimentos, evitando desperdícios, aproveitando ingredientes e escolhendo alimentos sazonais, visando benefícios pessoais e ambientais.</p>
                <button className="rounded px-4 py-1.5 text-zinc-50 
                bg-[var(--green)] font-medium hover:opacity-90 transition">
                    Descobrir
                </button>
            </div>
            <div>
                <Image 
                src="/main-image.png" 
                alt="complementar" 
                layout="responsive"
                width={100}
                height={100}
                className="max-w-2xl md:max-w-md"/>
            </div>
        </main>
    )
}