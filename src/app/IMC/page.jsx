'use client'

import CalcIMC from "@/components/IMC/CalcIMC"
import Header from "@/components/Default/Header"
import IMCTable from "@/components/IMC/IMCTable"
import Graphic from "@/components/Dashboard/Graphic"
import { Context } from "@/context/IMC"
import { useEffect, useState } from "react"
import Notification from "@/components/Notification/Notification"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { GetIMCAction } from "@/utils/IMC/GetIMCAction"
import { SaveIMCAction } from "@/utils/IMC/SaveIMCAction"
import Loading from "@/components/Default/Loading"
import Footer from "@/components/Default/Footer"
export default function IMC() {

    const [IMC, setIMC] = useState(null)
    const [showCalc, setShowCalc] = useState(true)
    const [userData, setUserData] = useState([])

    const notLogin = () => toast("Faça login para salvar e ver os seus resultados!")

    const user = Cookies.get('user') && JSON.parse(Cookies.get('user'))
    
    const saveResult = async() => {
        
        if(user) {
            const IMCHistory = JSON.parse(await GetIMCAction(user.id))
            const date = new Date()
            
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()

            const fullDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`

            IMCHistory.push({
                imc: IMC,
                date: fullDate
            })
            await SaveIMCAction(user.id, JSON.stringify(IMCHistory))
            window.location.reload()
        } else {
            notLogin()
        }
    }

    const getUserData = async() => {
        if(user) {
            const data = await GetIMCAction(user.id)
            setUserData(JSON.parse(data))
        }
    }
    useEffect(() => {
        if(user) {
            getUserData()
        }
    }, [])

    const categories = userData?.map((i) => i.date)
    const imc = userData?.map((i) => i.imc)

    const data = {
        x: {
          categories: categories,
          text: 'Períodos'
        },
        y: {
          text: 'IMC'
        },
        title: 'Histórico de IMC',
        series: [
          {
            name: 'IMC',
            data: imc,
          },
        ]
      }

    return (
        <section className="w-screen h-auto bg-[var(--light-grey)] dark:bg-zinc-900 ">
            <Notification/>
            <Header/>
            <div className="min-h-screen">
                {user && (
                    <Loading/>
                        )}
                        <div className="w-full flex flex-col items-center justify-center gap-8 px-6 translate-y-[10vh]">
                        <h1 className="text-center text-5xl font-bold md:text-4xl dark:text-zinc-50">
                            Calcule seu IMC
                        </h1>
                    <Context.Provider value={{
                            setIMC, IMC
                    }}>
                        <CalcIMC/>
                        {IMC && (
                            <div className="relative mb-48">
                                <p className="text-lg mb-2 text-zinc-900 dark:text-zinc-50">
                                    IMC: <strong>{IMC}</strong>
                                </p>
                                <IMCTable/>
                                <button onClick={saveResult} 
                                className="mx-auto bg-[var(--green)] rounded px-4 py-1.5 text-zinc-50 font-semibold absolute left-1/2 -translate-x-1/2 translate-y-6 whitespace-nowrap transition hover:opacity-90">
                                    Adicionar a linha do tempo
                                </button>
                            </div>
                        )}
                    </Context.Provider>
                    </div>
                    
                    {user ? (
                        <div className="max-w-2xl px-8 mx-auto mt-40 flex justify-center w-screen mb-40">
                            <Graphic data={data}/>
                        </div>
                    ) : (
                        notLogin()
                    )}
                
            </div>
            <Footer/>
        </section>
    )
}