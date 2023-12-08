'use server'

import Header from '@/components/Default/Header'
import Graphic from "@/components/Guia/Graphic"
import Hero from '@/components/Guia/Hero'
import Image from 'next/image'
import Locals from '@/components/Guia/Locals'
import { GetLocals } from '@/utils/guia/GetLocals'
import { getLocationFromIP } from '@/utils/guia/GetLocation'
import Footer from '@/components/Default/Footer'
import ScrollToTop from '@/components/Default/ScrollToTop'

export default async function Guia() {

  const { lat, lng } = await getLocationFromIP()

  const radius = 4000
  const type = 'store, marketplace, establishment'
  const keyword = 'alimentos organicos e saudaveis, frutas, vegetais'


    let locals = await GetLocals(lat, lng, radius, type, keyword)
    locals = locals.filter((i, index) => index <= 2)

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
        <section className="w-screen overflow-x-hidden min-h-screen dark:bg-zinc-900 dark:text-zinc-50">
            <Header/>
            <Hero/>
            <div className="bg-[var(--light-grey)] w-full h-auto dark:bg-zinc-900">
              <div className="w-full min-h-screen pt-20 px-12 md:px-2 dark:bg-zinc-800">
                <h1 className="text-center font-bold text-4xl md:text-3xl px-10">
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
                      alt="comercio organico exemplo"
                      layout="responsive"
                      width={100}
                      height={100}
                      className="w-full h-full"/>
                    </div>
                  </div>
                </div>
                  <div className="px-8 mt-16">
                    <h1 className="text-5xl lg:text-4xl md:text-3xl text-center my-6 font-bold text-zinc-900 dark:text-zinc-50">
                      Orgânicos e Sustentáveis próximos a você
                    </h1>
                    <Locals locals={locals}/>
                  </div>
              </div>

              <div className="w-screen h-auto px-16 md:px-12 pt-10">
                <h1 className="text-5xl dark:text-zinc-50 lg:text-4xl md:text-3xl text-center mb-6 mt-10 font-bold text-zinc-900 w-full">
                  Crie a Sua Composteira
                </h1>
                <div className="w-full flex lg:flex-col-reverse items-center justify-around">

                  <div className="mt-8 pb-10 pr-8 md:pr-0 mb-20">
                    <div className="mt-16 mb-10">
                      <h2 className="font-semibold text-2xl">
                        Materiais Necessários
                      </h2>
                      <ul className="mt-8 list-disc md:text-sm">
                        <li>Recipientes de plástico ou metal com tampa (2 unidades)</li>
                        <li>Furadeira</li>
                        <li>Solo ou terra</li>
                        <li>Material marrom (folhas secas, papelão picado)</li>
                        <li>Restos de alimentos (cascas de frutas, vegetais, borra de café, etc.)</li>
                      </ul>
                    </div>
                    <h2 className="font-semibold text-2xl md:text-xl">
                      Passo a Passo
                    </h2>
                    <ul className="mt-8 space-y-6">
                      <li>
                        <h3 className="font-medium mb-2">
                          1. Prepare os Recipientes
                        </h3>
                        <div className="px-6 md:text-sm">
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
                        <div className="px-6 md:text-sm">
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
                        <div className="px-6 md:text-sm">
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
                        <div className="px-6 md:text-sm">
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
                        <div className="px-6 md:text-sm">
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
                        <div className="px-6 md:text-sm">
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
                  <div className="ml-16 lg:mx-auto lg:max-w-sm lg:mt-20 md:mt-10 lg:w-full">
                  <div className="w-full">

                    <Image src="/compost-bin-image.jpg"
                    alt="composteira"
                    layout="responsive"
                    width={100}
                    height={100}/>
                  </div>
                </div>
              </div>
            </div>

              <div className="mt-10 bg-[var(--light-grey)] dark:bg-zinc-800 pb-14 pt-2">
                <h1 className="font-bold text-4xl lg:text-3xl text-zinc-900 dark:text-zinc-50 text-center my-12">
                  Desperdício Alimentar
                </h1>
                <div className="w-full px-16 lg:px-8 flex lg:flex-col justify-around items-center lg:gap-y-10">
                  <div className="w-[40%] lg:w-full">
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 my-14">
                      A Escola
                    </h2>
                    <p className="w-full text-zinc-700 dark:text-zinc-200 md:text-sm">
                      Na Escola Raul Cardoso de Almeida, dezenas de quilos de alimentos são descartados semanalmente, como se o conhecimento estivesse sendo jogado fora em cada prato vazio. Neste ambiente educacional, onde o aprendizado deveria florescer, testemunhamos um desperdício que ecoa a realidade global. É como se cada grama de comida jogada no lixo representasse não apenas um desperdício de recursos valiosos, mas também uma oportunidade perdida de nutrir e cuidar. Nos gráficos abaixo, o retrato visual desse desperdício na escola é alarmante, chamando a atenção para a necessidade urgente de repensar nossos hábitos, promover a conscientização e agir com responsabilidade diante desse desafio global.
                    </p>
                  </div>
                  <div className="max-w-md lg:w-full">
                    <Image src="/garbage-collection.jpeg"
                    alt="Coleta de lixo"
                    layout="responsive"
                    width={100}
                    height={100}/>
                  </div>
                </div>
                <div className="mt-10 w-full flex justify-around items-center mb-10 lg:flex-col lg:gap-y-10 lg:px-8">
                  <Graphic data={data}/>
                  <div className="w-[40%] lg:w-full mt-10">
                    <p className="w-full lg:px-2 text-zinc-700 dark:text-zinc-200">
                      O gráfico retrata a produção e o desperdício de alimentos ao longo de quatro dias da semana, medidos em quilogramas. A produção varia, atingindo seu ponto mais alto na sexta-feira, com 45 kg, enquanto o desperdício flutua, atingindo seu ápice na quinta-feira, com 4.836 kg descartados. Esses dados oferecem uma visão dos dias de maior produção e desperdício, fornecendo informações cruciais para a implementação de estratégias voltadas à redução dessas perdas e à promoção de práticas mais sustentáveis no manuseio de alimentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ScrollToTop/>
            <Footer/>
        </section>
    )
}
//<Graphic data={data}/>