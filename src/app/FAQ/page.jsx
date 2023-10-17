import Header from "@/components/Default/Header"
import FAQToggle from "@/components/Initial/FAQToggle"

export default function FAQ() {
    return (
        <div className="w-screen min-h-screen bg-[var(--light-grey)] dark:bg-zinc-900">
            <Header/>
            <main className="py-10">
                <div>
                    <h1 className="text-center my-4 font-bold text-4xl text-zinc-900 dark:text-zinc-50">
                        Perguntas Frequentes
                    </h1>
                    <p className="text-center text-lg text-zinc-900 dark:text-zinc-100">
                        Tem alguma duvida? Consulte aqui!
                    </p>
                </div>
                <div className="w-full flex justify-around mt-10 py-8">
                    <ul className="flex flex-col gap-2 px-8">
                        <li>
                            <FAQToggle
                            question="Como ter uma alimentação saudavel?"
                            answer="Uma alimentação saudável envolve a escolha de uma variedade de alimentos frescos e nutritivos, evitando o consumo excessivo de açúcar, gorduras prejudiciais e alimentos processados. Mantenha o equilíbrio, controle as porções e fique hidratado. Praticar atividades físicas regularmente também é fundamental para a saúde. Consultar um profissional de saúde para orientação personalizada pode ser benéfico."/>
                        </li>
                        <li>
                            <FAQToggle
                            question="Qual é o valor ideal de IMC?"
                            answer="O valor ideal de Índice de Massa Corporal (IMC) varia para cada pessoa, mas, em geral, um IMC de 18,5 a 24,9 é considerado faixa de peso saudável. No entanto, o IMC é uma medida limitada e não leva em consideração outros fatores importantes para a saúde, como a composição corporal. É importante discutir sua saúde e peso com um profissional de saúde para uma avaliação mais completa e personalizada."/>
                        </li>
                        <li>
                            <FAQToggle
                            question="Como posso perder peso de forma saudável?"
                            answer="Perder peso de forma saudável envolve uma combinação de dieta equilibrada, exercícios regulares e mudanças no estilo de vida, com a orientação de um profissional de saúde quando necessário. Estabeleça metas realistas, evite dietas radicais e priorize a saúde ao longo da perda de peso."/>
                        </li>
                        <li>
                            <FAQToggle
                            question="Quais são os benefícios de uma alimentação equilibrada?"
                            answer="Uma alimentação equilibrada oferece benefícios como controle de peso, saúde cardíaca, níveis glicêmicos controlados, saúde óssea, energia, digestão, bem-estar mental, fortalecimento do sistema imunológico e redução do risco de várias doenças. Mantê-la pode contribuir para uma vida longa e saudável."/>
                        </li>
                        <li>
                            <FAQToggle
                            question="Quais são os alimentos recomendados para uma dieta equilibrada?"
                            answer="Uma dieta equilibrada inclui frutas, vegetais, grãos integrais, proteínas magras, laticínios com baixo teor de gordura, gorduras saudáveis, peixes ricos em ômega-3, água, nozes, sementes, legumes, ervas, especiarias e frutas secas. É caracterizada por moderação, variedade e porções controladas. Consultar um profissional de saúde pode ajudar a personalizar seu plano alimentar."/>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}