import Header from "@/components/Default/Header";

export default function About() {
    return (
        <section className="min-h-screen bg-lime-50 dark:bg-zinc-900">
            <Header/>  
            <div className="min-h-screen flex items-center justify-around w-full h-[90vh] lg:flex-col-reverse
             lg:mt-[0.5vh] lg:gap-[0.5vh]">
                <div className="lg:text-center">
                    <h2 className="text-xl tracking-wider text-zinc-700 dark:text-zinc-200 ">Sobre Nós</h2>
                    <h1 className="px-4 text-6xl font-semibold max-w-xl my-4 lg:mb-6 md:text-4xl text-zinc-900 
                    leading-[70px] dark:text-zinc-50">
                        Alimente-se com consciência, cuide do planeta e de você.
                    </h1>
                    <p className="text-lg max-w-lg md:max-w-sm md:mx-auto leading-7 text-zinc-700 dark:text-zinc-200">
                        Somos apaixonados por comida que faz bem para o corpo e para o planeta. Acreditamos que uma alimentação saudável e sustentável pode transformar vidas e preservar o meio ambiente.
                        Nosso desejo é oferecer uma alternativa deliciosa e equilibrada para aqueles que desejam fazer escolhas alimentares conscientes.
                    </p>
                </div>
                <div className="w-full max-w-lg md:max-w-sm px-4">
                    <img src="/about.png" alt="about-image" 
                    className="w-full h-full"/>
                </div>
            </div>
            <img src="/about-team-image.jpg" alt="team-image" 
            className="w-screen object-contain h-[70vw] mb-[1vw]"/>

            <div className="w-full h-auto py-10">
                <div className="mx-auto flex flex-col gap-4 items-center text-center">
                    <h2 className="text-zinc-700 text-xl">
                        Nossa História
                    </h2>
                    <h1 className="text-4xl font-semibold px-4 text-zinc-900">A história da Desperdício Zero</h1>
                    <p className="max-w-5xl lg:max-w-2xl md:max-w-md text-zinc-700 mt-4 text-lg">
                    O projeto Desperdício Zero foi 
                    desenvolvido por três alunos comprometidos com a promoção de escolhas alimentares 
                    conscientes e sustentáveis.
                    A pesquisa começou com uma análise aprofundada da literatura disponível sobre
                    alimentação saudável e sustentável, permitindo a nós
                    compreender as nuances desses conceitos e sua importância na sociedade atual.
                    Nós realizamos uma extensa revisão bibliográfica para entender os impactos ambientais e
                    de saúde associados ao consumo de alimentos processados e de origem animal, bem como as 
                    alternativas mais saudáveis e sustentáveis disponíveis.
                    </p>
                </div>
                <img src="/about-work-image.jpg" alt="about-work-image" 
                className="max-w-5xl lg:max-w-3xl md:max-w-md mx-auto mt-28 md:mt-16"/>
            </div>
        </section>
    )
}