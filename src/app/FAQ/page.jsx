import Header from "@/components/Default/Header"
import FAQToggle from "@/components/Initial/FAQToggle"

export default function FAQ() {
    return (
        <div className="w-screen min-h-screen bg-[var(--light-grey)]">
            <Header/>
            <main className="py-10">
                <div>
                    <h1 className="text-center my-4 font-bold text-4xl text-zinc-900">
                        Perguntas Frequentes
                    </h1>
                    <p className="text-center text-lg">
                        Tem alguma duvida? Consulte aqui!
                    </p>
                </div>
                <div className="w-full flex justify-around mt-10 py-8">
                    <ul className="grid grid-cols-1 gap-2">
                        <li>
                            <FAQToggle
                            question="Como ter uma alimentação saudavel?"
                            answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, dolorum. Dolores quam porro accusantium fugit ipsum laborum sunt repudiandae, sequi incidunt fuga ea blanditiis, doloribus quasi autem voluptas dolor amet."/>
                        </li>
                        <li>
                            <FAQToggle
                            question=""
                            answer=""/>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}