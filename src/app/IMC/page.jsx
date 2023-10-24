'use client'

import CalcIMC from "@/components/IMC/CalcIMC"
import Header from "@/components/Default/Header"
import IMCTable from "@/components/IMC/IMCTable"
import { Context } from "@/context/IMC"
import { useState } from "react"
import Notification from "@/components/Notification/Notification"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import { GetIMCAction } from "@/utils/IMC/GetIMCAction"
import { SaveIMCAction } from "@/utils/IMC/SaveIMCAction"
export default function IMC() {

    const [IMC, setIMC] = useState(null)

    const notLogin = () => toast("Faça login para salvar os resultados!")

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
        } else {
            notLogin()
        }
    }

    return (
        <section className="w-screen h-[130vh] bg-[var(--light-grey)] dark:bg-zinc-900 ">
            <Notification/>
            <Header/>
            <div className="w-full flex flex-col items-center justify-center gap-8 px-6 translate-y-[10vh]">
                <h1 className="text-center text-5xl font-bold md:text-4xl dark:text-zinc-50">
                    Calcule seu IMC
                </h1>
            <Context.Provider value={{
                    setIMC, IMC
            }}>
                <CalcIMC/>
                {IMC && (
                    <div className="relative">
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
           
        </section>
    )
}