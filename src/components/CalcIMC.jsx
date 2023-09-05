'use client'

import { useState } from 'react'
import { Context } from '@/context/IMC'
import { useContext } from 'react'
import { Info } from 'lucide-react'
export default function CalcIMC() {

    const { setResult } = useContext(Context)

    const [data, setData] = useState({
        weight: null,
        height: null,
        gender: 'masculino'
    })

    const HandleData = (e) => {
        if(e.target.getAttribute('name') == 'weight') {
            setData({
                weight: e.target.value,
                height: data.height,
                gender: data.gender
            })
        }
        else if(e.target.getAttribute('name') == 'height') {
            setData({
                weight: data.weight,
                height: e.target.value,
                gender: data.gender
            })
        }
        else {
            setData({
                weight: data.weight,
                height: data.height,
                gender: e.target.value,
            })
        }
    }

    const calculate = (e) => {
        e.preventDefault()

        if(data.height && data.weight && data.gender !== null) {
           setResult({
                IMC: (+data.weight / ((+data.height / 100) * (+data.height / 100))).toFixed(2),
                gender: data.gender
           })

        }
    }



    return (
        <div className="rounded-2xl bg-orange-300/50 px-10 py-6 w-full max-w-md h-[350px] flex items-center relative">

            <div className="group absolute left-4 top-4 cursor-pointer z-30">
                <Info size={20}/>
                <div className="w-[150px] text-xs text-zinc-900 px-4 py-4 rounded-lg bg-zinc-50 absolute translate-y-2 invisible group-hover:visible transition">
                    <p>
                        O Índice de Massa Corporal (IMC) é uma medida que relaciona peso e altura para avaliar a saúde ponderal.
                    </p>
                </div>
            </div>

            <form onSubmit={e => calculate(e)} 
            className="h-auto">
                <label className="text-zinc-900 text-sm">
                    Peso em KG:
                </label>
                <input onChange={e => HandleData(e)} 
                type="number" 
                name="weight"
                value={data.weight}
                placeholder="Ex: 70"
                className="px-4 py-1.5 rounded bg-zinc-50 text-zinc-900 w-full outline-none mb-2"/>

                <label className="mt-4 text-zinc-900 text-sm">
                    Altura em CM:
                </label>
                <input onChange={e => HandleData(e)} 
                type="number" 
                name="height"
                value={data.height}
                placeholder="Ex: 170"
                className="px-4 py-1.5 rounded bg-zinc-50 text-zinc-900 w-full outline-none mb-2"/>

                <label className="mt-4 text-zinc-900 text-sm">
                    Sexo:
                </label>
                <br/>
               <select name="gender"
               onChange={e => HandleData(e)}
               className="px-2 py-1 rounded outline-none cursor-pointer">
                    <option value="masculino">
                        Masculino
                    </option>
                    <option value="feminino">Feminino</option>
                </select>   

                <button className="w-full px-4 py-1.5 bg-[var(--green)] rounded font-semibold hover:opacity-90 transition text-zinc-50 mt-4 outline-none">
                    Calcular
                </button>
            </form>
        </div>
    )
}