
import { useTheme } from 'next-themes'
export default function Main() {

    const { theme } = useTheme()

    return (
        <main className={`w-screen h-[91vh] flex 
        items-center justify-evenly md:flex-col-reverse overflow-hidden  dark:bg-zinc-900 dark:text-zinc-50 ${theme == 'light' ? 'bg-[var(--orange)]' : 'bg-zinc-900'}`}>
            <div className="space-y-4 md:flex md:flex-col md:items-center">
                <h1 className="text-7xl md:text-6xl font-bold leading-[70px] md:text-center">
                    Aprenda a 
                    <br/>
                    se alimentar
                </h1>
                <p className="max-w-md md:max-w-sm text-sm md:text-center">Desperdício Zero ensina nutrição consciente e uso sustentável de alimentos, evitando desperdícios, aproveitando ingredientes e escolhendo alimentos sazonais, visando benefícios pessoais e ambientais.</p>
                <button className="rounded px-4 py-1.5 text-zinc-50 
                bg-[var(--green)] font-medium hover:opacity-90 transition">
                    Descobrir
                </button>
            </div>
            <div>
                <img src="/main-image.png" alt="complementar" 
                className="max-w-2xl md:max-w-md"/>
            </div>
        </main>
    )
}