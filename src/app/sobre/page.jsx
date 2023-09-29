import Header from "@/components/Default/Header"

export default function About() {
    return (
        <section className="min-h-screen bg-lime-50 dark:bg-zinc-900">
            <Header/>  
            <div className="min-h-screen flex items-center justify-around w-full h-[90vh] lg:flex-col-reverse
             lg:mt-[0.5vh] lg:gap-[0.5vh] lg:h-auto lg:py-10">
                <div className="lg:text-center">
                    <h2 className="text-xl tracking-wider text-zinc-700 dark:text-zinc-200 ">Sobre Nós</h2>
                    <h1 className="md:px-8 text-6xl font-semibold max-w-xl my-4 lg:mb-6 md:text-4xl text-zinc-900 
                    leading-[70px] dark:text-zinc-50">
                        Alimente-se com consciência, cuide do planeta e de você.
                    </h1>
                    <p className="text-lg max-w-lg md:max-w-sm md:mx-auto leading-7 text-zinc-700 dark:text-zinc-200 md:px-6">
                        Somos apaixonados por comida que faz bem para o corpo e para o planeta. Acreditamos que uma alimentação saudável e sustentável pode transformar vidas e preservar o meio ambiente.
                        Nosso desejo é oferecer uma alternativa deliciosa e equilibrada para aqueles que desejam fazer escolhas alimentares conscientes.
                    </p>
                </div>
                <div className="w-full max-w-lg md:max-w-sm px-4 lg:mb-10">
                    <img src="/about.png" alt="about-image" 
                    className="w-full h-full"/>
                </div>
            </div>
            <div className="">
                <img src="/about-team-image.jpg" alt="team-image" 
                className="w-screen object-contain h-[70vw]"/>
            </div>
            
            <div className="w-full h-screen flex items-center justify-around px-20 md:px-8 lg:flex-col lg:h-auto lg:py-10 md:py-16 bg-zinc-800 -translate-y-8">
                <div className="w-full lg:mx-auto">
                    <h1 className="mb-6 text-4xl md:text-3xl font-semibold max-w-xl lg:mx-auto text-zinc-900 dark:text-zinc-50">
                        Sabia que cerca de 30% dos alimentos produzidos no Brasil são desperdiçados?
                    </h1>
                    <p className="w-full max-w-xl text-lg lg:mx-auto md:text-6 dark:text-zinc-200 text-zinc-800">
                    Isso resulta em perdas econômicas e impactos ambientais significativos. Paralelamente, a obesidade é uma crescente preocupação de saúde que afeta a vida de muitos brasileiros.

                    No Desperdício Zero, exploramos como esses dois problemas estão interligados e como você pode fazer a diferença. Mostramos como o desperdício de alimentos pode contribuir para a obesidade devido ao consumo excessivo e à falta de acesso a alimentos saudáveis.

                    Oferecemos informações detalhadas e recursos para ajudá-lo a reduzir o desperdício de alimentos em sua vida cotidiana e para promover escolhas alimentares saudáveis. Acreditamos que juntos podemos conscientizar, tomar medidas e criar mudanças positivas na sociedade.

                    Junte-se ao Desperdício Zero e explore nosso site para aprender mais sobre como adotar um estilo de vida de consumo consciente, reduzir o desperdício de alimentos e abraçar uma alimentação mais saudável.
                    </p>
                </div>
                <div className="max-w-lg lg:mt-10">
                    <img src="/argumentation-complementary-image.jpg" 
                    alt="argumentation-complementary-image" 
                    className="w-full"/>
                </div>
            </div>

            <div className="w-full h-auto py-10">
                <div className="mx-auto flex flex-col gap-4 items-center text-center">
                    <h2 className="text-zinc-700 dark:text-zinc-300 text-xl">
                        Nossa História
                    </h2>
                    <h1 className="text-4xl font-semibold px-4 text-zinc-900 dark:text-zinc-50">A história da Desperdício Zero</h1>
                    <p className="max-w-5xl lg:max-w-2xl md:max-w-md dark:text-zinc-300 mt-4 text-lg">
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