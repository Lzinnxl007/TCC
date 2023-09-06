'use client'

import CalcIMC from "@/components/CalcIMC"
import Header from "@/components/Header"
import IMCTable from "@/components/IMCTable"
import { Context } from "@/context/IMC"
import { useState } from "react"
export default function IMC() {

    const [IMC, setIMC] = useState(null)

    const saveResult = () => {
        if(IMC) {
            localStorage.setItem('IMC', JSON.stringify(IMC))
        }
    }

    return (
        <section className="w-screen h-[120vh] bg-[#FFE4C5]">
            <Header/>
            <div className="w-full flex flex-col items-center justify-center gap-8 px-6 translate-y-[10vh]">
                <h1 className="text-center text-5xl font-bold text-zinc-900 md:text-4xl">
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