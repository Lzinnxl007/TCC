import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-screen h-[90vh]">
            <div className="bg-[url(/dashboard-hero-image.jpg)] bg-cover bg-no-repeat opacity-60 bg-center w-full h-full absolute z-0"/>
            <div className="w-full h-full flex justify-center items-center opacity-100 z-30">
                <div className="text-center z-30">
                    <h1 className="text-9xl font-bold mx-auto text-zinc-50">
                        Por um Mundo
                        <br/>
                        Sustentável
                    </h1>
                    <p className="w-full max-w-xl text-lg mt-4 text-zinc-200 font-medium mx-auto">
                        Descubra soluções inovadoras para um estilo de vida mais sustentável, onde cada ação faz a diferença. Explore maneiras práticas de preservar o planeta e viver em harmonia com o meio ambiente.
                    </p>
                </div>
            </div>
        </section>
    )
}