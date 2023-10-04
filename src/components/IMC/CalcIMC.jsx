'use client'

import { useState } from 'react'
import { Context } from '@/context/IMC'
import { useContext } from 'react'
import { Info } from 'lucide-react'

export default function CalcIMC() {

    const { setIMC } = useContext(Context)

    const [data, setData] = useState({
        weight: null,
        height: null,
    })

    const HandleData = (e) => {
        if(e.target.getAttribute('name') == 'weight') {
            setData({
                weight: e.target.value,
                height: data.height,
            })
        }
        else {
            setData({
                weight: data.weight,
                height: e.target.value,
            })
        }
    }

    const calculate = (e) => {
        e.preventDefault()

        if(data.height && data.weight && data.gender !== null) {
           setIMC((+data.weight / ((+data.height / 100) * (+data.height / 100))).toFixed(2))

        }
    }



    return (
        <div className="rounded-2xl px-10 py-6 w-full max-w-md h-[350px] flex items-center relative bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50">

            <div className="group absolute left-4 top-4 cursor-pointer z-30">
                <Info size={20} 
                color="#222"
                className="dark:stroke-white"/>
                <div className="w-[150px] text-xs px-4 py-4 rounded-lg bg-zinc-50 absolute translate-y-2 invisible group-hover:visible transition text-zinc-900">
                    <p>
                        O Índice de Massa Corporal (IMC) é uma medida que relaciona peso e altura para avaliar a saúde ponderal.
                    </p>
                </div>
            </div>

            <form onSubmit={e => calculate(e)} 
            className="h-auto dark:text-zinc-50">
                <label className="text-sm">
                    Peso em KG:
                </label>
                <input onChange={e => HandleData(e)} 
                type="number" 
                name="weight"
                value={data.weight}
                placeholder="Ex: 70"
                className="px-4 py-1.5 rounded w-full outline-none mb-2 dark:bg-zinc-700 dark:text-zinc-50"/>

                <label className="mt-4 text-sm">
                    Altura em CM:
                </label>
                <input onChange={e => HandleData(e)} 
                type="number" 
                name="height"
                value={data.height}
                placeholder="Ex: 170"
                className="px-4 py-1.5 rounded w-full outline-none mb-2 dark:bg-zinc-700 dark:text-zinc-50"/>
               
                <button className="w-full px-4 py-2 bg-[var(--green)] rounded font-semibold hover:opacity-90 transition text-zinc-50 mt-3 outline-none">
                    Calcular
                </button>
            </form>
        </div>
    )
}