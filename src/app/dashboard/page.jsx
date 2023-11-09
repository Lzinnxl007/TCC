
import Header from '@/components/Default/Header'
import Graphic from "@/components/Dashboard/Graphic"
import Hero from '@/components/Dashboard/Hero'
export default async function Dashboard() {



    const data = {
        x: {
          categories: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
          text: 'Dias da semana'
        },
        y: {
          text: 'Quantidade em Quilos (KG)'
        },
        title: 'Produção e Desperdício de alimentos',
        series: [
          {
            name: 'Produzidos',
            data: [29, 0, 27, 33, 45],
          },
          {
            name: 'Desperdiçados',
            data: [4.575, 0, 2.134, 4.836, 1.625],
          },
        ]
      }

    return (
        <section className="min-h-screen dark:bg-zinc-900">
            <Header/>
            <Hero/>
            <Graphic data={data}/>
        </section>
    )
}