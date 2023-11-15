'use server'

import Header from '@/components/Default/Header'
import Graphic from "@/components/Dashboard/Graphic"
import Hero from '@/components/Dashboard/Hero'
import Image from 'next/image'
import Locals from '@/components/Dashboard/Locals'
import { GetLocals } from '@/utils/dashboard/GetLocals'
import { getLocationFromIP } from '@/utils/dashboard/GetLocation'

export default async function Dashboard() {

  const { lat, lng } = await getLocationFromIP()

  const radius = 4000
  const type = 'store, marketplace, establishment'
  const keyword = 'alimentos organicos e saudaveis, frutas, vegetais'


    let locals = await GetLocals(lat, lng, radius, type, keyword)
    locals = locals.filter((i, index) => index <= 2)

    /*const data = {
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
      }*/

    return (
        <section className="min-h-screen dark:bg-zinc-900">
            <Header/>
            <Hero/>
            <div className="bg-[var(--light-grey)] w-full h-auto mt-14 text-zinc-900">
              <div className="w-full min-h-screen translate-y-20 px-12 md:px-2 pb-40">
                <h1 className="text-center font-bold text-4xl px-10">
                  Escolhendo Produtos Locais e Orgânicos
                </h1>
                <p className="text-center mt-8 text-lg font-medium px-16 md:px-8">
                    Você sabia que as escolhas que fazemos em relação aos alimentos que consumimos podem ter um impacto significativo no meio ambiente e na economia local? Optar por produtos locais e orgânicos é uma maneira poderosa de contribuir para um estilo de vida mais sustentável.
                </p>

                <div className="mt-24 font-semibold px-10">
                  <h2 className="text-2xl md:text-center">
                    Por que escolher produtos locais?
                  </h2>
                  <div className="mt-10 flex lg:flex-col-reverse items-center justify-between">
                    <ul className="font-medium text-[18px] space-y-8 max-w-xl lg:max-w-2xl">
                      <li>
                        <strong>Redução da Pegada de Carbono:</strong> Ao comprar alimentos produzidos localmente, você está ajudando a reduzir as emissões de carbono associadas ao transporte de longa distância. Essa escolha simples pode ter um impacto positivo no meio ambiente.
                      </li>
                      <li>
                        <strong>Apoio à Economia Local:</strong> Escolher produtos locais significa apoiar agricultores e produtores da sua própria comunidade. Isso contribui para o fortalecimento da economia local, criando empregos e promovendo a sustentabilidade econômica.
                      </li>
                      <li>
                        <strong>Conexão com a Origem dos Alimentos:</strong> Ao optar por produtos locais, você tem a oportunidade de conhecer a origem dos alimentos que consome. Isso estabelece uma conexão mais direta com os agricultores locais, promovendo uma compreensão mais profunda do ciclo de produção.
                      </li>
                    </ul>
                    <div className="w-full max-w-lg lg:max-w-2xl h-[60vh] md:h-auto float-right mb-12 lg:mx-auto border-solid border-[0.4rem] border-[var(--green)] rounded overflow-hidden">
                      <Image src="/dashboard-local-image.jpg"
                      alt="local-food-image"
                      layout="responsive"
                      width={100}
                      height={100}
                      className="w-full h-full "/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 mt-10">
                <h1 className="text-5xl lg:text-4xl md:text-3xl text-center my-6 font-bold">
                  Organicos e Sustentaveis próximos a você
                </h1>
                <Locals locals={locals}/>
              </div>
            </div>
        </section>
    )
}
//<Graphic data={data}/>