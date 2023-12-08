
export default function Hero() {
    return (
        <section className="w-screen h-screen">
            <div className="bg-[url(/dashboard-hero-image.jpg)] bg-cover bg-no-repeat opacity-90 dark:opacity-60 bg-center w-full h-screen absolute z-0"/>
            <div className="w-full h-full flex justify-center items-center z-30">
                <div className="text-center z-30">
                    <h1 className="text-8xl lg:text-7xl md:text-6xl font-bold mx-auto text-zinc-900 dark:text-zinc-50">
                        Por um Mundo
                        <br/>
                        Sustentável
                    </h1>
                    <p className="w-full max-w-xl text-lg lg:text-[16px] md:text-sm md:px-6 mt-4 text-zinc-700 dark:text-zinc-200 font-medium mx-auto">
                        Descubra soluções inovadoras para um estilo de vida mais sustentável, onde cada ação faz a diferença. Explore maneiras práticas de preservar o planeta e viver em harmonia com o meio ambiente.
                    </p>
                </div>
            </div>
        </section>
    )
}