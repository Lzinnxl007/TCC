export default function Main() {
    return (
        <main className="w-screen h-[89vh] bg-[#FFE4C5] flex items-center justify-evenly">
            <div className="space-y-4">
                <h1 className="text-7xl font-bold leading-[70px]">
                    Aprenda a 
                    <br/>
                    se alimentar
                </h1>
                <p className="max-w-md text-sm">Desperdício Zero ensina nutrição consciente e uso sustentável de alimentos, evitando desperdícios, aproveitando ingredientes e escolhendo alimentos sazonais, visando benefícios pessoais e ambientais.</p>
                <button className="rounded px-4 py-1.5 text-zinc-50 bg-[var(--green)] font-medium hover:opacity-90 transition">
                    Descobrir
                </button>
            </div>
            <div>
                <img src="/main-image.png" alt="complementar" 
                className="max-w-2xl"/>
            </div>
        </main>
    )
}