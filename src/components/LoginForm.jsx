'use client'

import { useState } from "react"
import { VerifyPassword } from "../utils/VerifyPassword"
import { useRouter } from "next/navigation"
export default function LoginForm() {

    const [password, setPassword] = useState('')

    const router = useRouter()

    const verifyPassword = async(password, e) => {
        e.preventDefault()
        const verify = await VerifyPassword(password)

         if(verify) {
            router.push("/tela")
         }
         else {
            alert("Senha incorreta!")
         }
    }

    const handleInput = (e) => {
        setPassword(e.target.value)
    }
    

    return (
        <div className="absolute top-1/2 left-1/2 
        -translate-y-1/2 -translate-x-1/2 rounded-2xl p-8 bg-zinc-100
        backdrop-blur bg-opacity-50 w-full max-w-xs h-80">
            <form onSubmit={e => verifyPassword(password, e)}
            className="flex flex-col justify-center 
            px-8 h-full
             bg-zinc-50 rounded-2xl">
                <input onChange={e => handleInput(e)}
                type="password" 
                value={password}
                className="rounded-md outline-none px-4 py-1.5
                 text-zinc-900 w-full bg-zinc-100 border-solid border-[1px] border-zinc-200"/>
                <button className="text-zinc-50 py-1.5 bg-[var(--button)] w-full 
                rounded-md mt-2 font-medium hover:bg-[var(--buttonHovered)]">
                    Entrar
                </button>
            </form>
        </div>
    )
}