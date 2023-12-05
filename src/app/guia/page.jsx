'use server'

import Header from '@/components/Default/Header'
import Graphic from "@/components/Dashboard/Graphic"
import Hero from '@/components/Dashboard/Hero'
import Image from 'next/image'
import Locals from '@/components/Dashboard/Locals'
import { GetLocals } from '@/utils/guia/GetLocals'
import { getLocationFromIP } from '@/utils/guia/GetLocation'
import Footer from '@/components/Default/Footer'

export default async function Guia() {

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
        <section className="w-screen overflow-x-hidden min-h-screen dark:bg-zinc-900">
            <Header/>
            <Hero/>
            <div className="bg-[var(--light-grey)] w-full h-auto text-zinc-900">
              <div className="w-full min-h-screen pt-20 px-12 md:px-2">
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
                    <div className="w-full max-w-lg lg:max-w-2xl h-auto md:h-auto float-right mb-12 lg:mx-auto border-solid border-[0.4rem] border-[var(--green)] rounded overflow-hidden">
                      <Image src="/dashboard-local-image.jpg"
                      alt="local-food-image"
                      layout="responsive"
                      width={100}
                      height={100}
                      className="w-full h-full"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 mt-10">
                <h1 className="text-5xl lg:text-4xl md:text-3xl text-center my-6 font-bold text-zinc-900">
                  Organicos e Sustentaveis próximos a você
                </h1>
                <Locals locals={locals}/>
              </div>

              <div className="w-screen h-auto px-16 md:px-12">
                <h1 className="text-5xl lg:text-4xl md:text-3xl text-center mb-6 mt-10 font-bold text-zinc-900 w-full">
                  Como Criar a Sua Composteira
                </h1>
                <div className="w-full flex lg:flex-col-reverse items-center justify-around">

                  <div className="mt-8 pb-10 pr-8 md:pr-0 mb-20">
                    <div className="mt-16 mb-10">
                      <h2 className="font-semibold text-2xl">
                        Materiais Necessários
                      </h2>
                      <ul className="mt-8 list-disc">
                        <li>Recipientes de plástico ou metal com tampa (2 unidades)</li>
                        <li>Furadeira</li>
                        <li>Solo ou terra</li>
                        <li>Material marrom (folhas secas, papelão picado)</li>
                        <li>Restos de alimentos (cascas de frutas, vegetais, borra de café, etc.)</li>
                      </ul>
                    </div>
                    <h2 className="font-semibold text-2xl">
                      Passo a Passo
                    </h2>
                    <ul className="mt-8 space-y-6">
                      <li>
                        <h3 className="font-medium mb-2">
                          1. Prepare os Recipientes
                        </h3>
                        <div className="px-6">
                          <ul>
                            <li>
                              - Faça pequenos furos no fundo e nas laterais de um recipiente para permitir a drenagem do líquido. Este será o recipiente de baixo.
                            </li>
                            <li>
                              - Coloque este recipiente dentro do outro para coletar o líquido gerado durante a compostagem.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <h3 className="font-medium mb-2">
                          2. Monte as Camadas
                        </h3>
                        <div className="px-6">
                          <ul>
                            <li>
                              - Comece com uma camada de material marrom no fundo do recipiente de cima, cerca de 5-10 cm de espessura.
                            </li>
                            <li>
                              - Adicione uma camada de restos de alimentos, com a mesma espessura.
                            </li>
                            <li>
                              - Cubra com uma camada de solo ou terra.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <h3 className="font-medium mb-2">
                          3. Manutenção da Composteira
                        </h3>
                        <div className="px-6">
                          <ul>
                            <li>
                              - Mantenha a composteira úmida, mas não encharcada.
                            </li>
                            <li>
                              - Misture os materiais regularmente para facilitar a decomposição.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <h3 className="font-medium mb-2">
                          4. Tempo de Decomposição
                        </h3>
                        <div className="px-6">
                          <ul>
                            <li>
                              - Em condições ideais, os materiais começarão a se decompor em algumas semanas a alguns meses.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <h3 className="font-medium mb-2">
                          5. Utilização do Composto
                        </h3>
                        <div className="px-6">
                          <ul>
                            <li>
                              - Quando pronto, utilize o composto como adubo para suas plantas em vasos, jardins ou hortas.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <h3 className="font-medium mb-2">
                          6. Dicas Extras
                        </h3>
                        <div className="px-6">
                          <ul>
                            <li>
                              - Posicione a composteira em local arejado, protegido da luz direta do sol e da chuva.
                            </li>
                            <li>
                            Evite adicionar carnes, laticínios ou óleos na composteira para evitar odores desagradáveis.
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ml-16 lg:mx-auto lg:max-w-sm lg:mt-20 md:mt-10">
                  <div className="ml-16 max-w-2xl translate-y-16">

                    <Image src="/compost-bin-image.jpg"
                    layout="responsive"
                    width={100}
                    height={100}/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <Footer/>
        </section>
    )
}
//<Graphic data={data}/>