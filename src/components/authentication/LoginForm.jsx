'use client'

import { CreateToken } from "@/utils/auth/CreateToken"
import { LoginAction } from "@/utils/auth/LoginAction"
import { useState } from "react"
import Cookies from "js-cookie"
export default function LogInForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(email && password) {
            const user = await LoginAction(email)

            if(user.email == email && user.password == password) {
                if(window.document !== undefined) {
                    Cookies.set('token', await CreateToken(user))

                    setEmail('')
                    setPassword('')

                    history.back()
                }
                
            }
        }
    }

    return (
        <div className="w-full max-w-sm h-auto p-6 rounded-lg bg-zinc-100">
            <h1 className="mb-6 text-3xl font-bold text-center text-zinc-900">Login</h1>
            <form onSubmit={e => handleSubmit(e)}
            className="flex flex-col w-full px-4 gap-2">

                <label className="font-medium text-zinc-900 translate-y-2">
                    E-mail
                </label>
                <input onChange={e => setEmail(e.target.value)}
                type="email" 
                placeholder="E-mail"
                className="px-4 py-1.5 rounded text-zinc-900 bg-zinc-50 border-solid border-[1px] border-zinc-300 outline-none"/>
                
                <label className="font-medium text-zinc-900 translate-y-2">
                    Senha
                </label>
                <input onChange={e => setPassword(e.target.value)} 
                type="password" 
                placeholder="Senha"
                className="px-4 py-1.5 rounded text-zinc-900 bg-zinc-50 border-solid border-[1px] border-zinc-300 outline-none"/>

                <button className="w-full py-1.5 font-medium text-zinc-50 bg-[var(--green)] rounded mt-3 transition hover:opacity-90 mb-4">
                    Entrar
                </button>
            </form>
        </div>
    )
}