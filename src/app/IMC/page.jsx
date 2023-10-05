'use client'

import CalcIMC from "@/components/IMC/CalcIMC"
import Header from "@/components/Default/Header"
import IMCTable from "@/components/IMC/IMCTable"
import { Context } from "@/context/IMC"
import { useState } from "react"
import Notification from "@/components/Notification/Notification"
export default function IMC() {

    const [IMC, setIMC] = useState(null)

    const saveResult = () => {
        if(IMC) {
            localStorage.setItem('IMC', JSON.stringify(IMC))
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
                            <p className="text-lg mb-2">
                                IMC: <strong>{IMC}</strong>
                            </p>
                            <IMCTable/>
                            <button onCLick={saveResult()} 
                            className="mx-auto bg-[var(--green)] rounded px-4 
                            py-1.5 text-zinc-50 font-semibold absolute left-1/2 -translate-x-1/2
                             translate-y-6 whitespace-nowrap transition hover:opacity-90">
                                Adicionar a linha do tempo
                            </button>
                        </div>
                    )}
            </Context.Provider>
            </div>
        </section>
    )
}