'use client'

import CalcIMC from "@/components/CalcIMC"
import Header from "@/components/Header"
import IMCTable from "@/components/IMCTable"
import { Context } from "@/context/IMC"
import { useState } from "react"
export default function IMC() {

    const [result, setResult] = useState({
        IMC: null,
        gender: null
    })

    console.log(result)

    return (
        <section className="w-screen h-[120vh] bg-[#FFE4C5]">
            <Header/>
            <div className="w-full flex flex-col items-center justify-center gap-8 px-6 translate-y-[10vh]">
                <h1 className="text-center text-5xl font-bold text-zinc-900 md:text-4xl">
                    Calcule seu IMC
                </h1>
            <Context.Provider value={{
                    setResult, result
            }}>
                    <CalcIMC/>
                    {result.IMC && result.gender && (
                        <div>
                            <p className="text-lg mb-2">
                                IMC: <strong>{result.IMC}</strong>
                            </p>
                            <IMCTable/>
                        </div>
                    )}
            </Context.Provider>
            </div>
        </section>
    )
}