import Header from "@/components/Default/Header";

export default function About() {
    return (
        <section className="min-h-screen bg-lime-50 dark:bg-zinc-900">
            <Header/>  
            <div className="flex items-center justify-around w-full h-[90vh] lg:flex-col-reverse lg:min-h-screen lg:mt-20 lg:gap-10">
                <div className="lg:text-center">
                    <h2 className="text-lg tracking-wider text-zinc-700 dark:text-zinc-200 ">Sobre Nós</h2>
                    <h1 className="text-5xl font-semibold max-w-lg my-4 lg:mb-6 md:text-4xl text-zinc-900 leading-[55px] dark:text-zinc-50">
                        Alimente-se com consciência, cuide do planeta e de você.
                    </h1>
                    <p className="max-w-lg md:max-w-md md:mx-auto leading-7 text-zinc-700 dark:text-zinc-200">
                        Somos apaixonados por comida que faz bem para o corpo e para o planeta. Acreditamos que uma alimentação saudável e sustentável pode transformar vidas e preservar o meio ambiente.
                        Nosso desejo é oferecer uma alternativa deliciosa e equilibrada para aqueles que desejam fazer escolhas alimentares conscientes.
                    </p>
                </div>
                <div className="w-full max-w-sm ">
                    <img src="/about.png" alt="about-image" 
                    className="w-full h-full"/>
                </div>
            </div>
        </section>
    )
}