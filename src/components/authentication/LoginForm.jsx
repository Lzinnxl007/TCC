'use client'

import { CreateToken } from "@/utils/auth/CreateToken"
import { LoginAction } from "@/utils/auth/LoginAction"
import { useState } from "react"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
export default function LogInForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emptyCredentials = () => toast("Preencha todos os campos!")
    const errorCredentials = () => toast("E-mail ou senha incorretos!")
    const loginSucess = () => toast("Login realizado com sucesso!")

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(email && password) {
            const user = await LoginAction(email)

            if(user.email == email && user.password == password) {
                
                Cookies.set('token', await CreateToken(user))
                Cookies.set('user', JSON.stringify(user))

                setEmail('')
                setPassword('')
                loginSucess()

                setTimeout(() => {
                    history.back()
                }, 1000)
                
                
                } else {
                    errorCredentials()
                }
            } else {
                emptyCredentials()
            }
        }

    return (
        <div className="w-full max-w-sm h-auto p-6 rounded-lg bg-zinc-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10">
            <h1 className="mb-6 text-3xl font-bold text-center text-zinc-900">Login</h1>
            <form onSubmit={e => handleSubmit(e)}
            className="flex flex-col w-full px-4 gap-2">

                <label className="font-medium text-zinc-900 translate-y-2">
                    E-mail
                </label>
                <input onChange={e => setEmail(e.target.value)}
                type="email" 
                required
                placeholder="E-mail"
                className="px-4 py-1.5 rounded text-zinc-900 bg-zinc-50 border-solid border-[1px] border-zinc-300 outline-none"/>
                
                <label className="font-medium text-zinc-900 translate-y-2">
                    Senha
                </label>
                <input onChange={e => setPassword(e.target.value)} 
                type="password" 
                required
                placeholder="Senha"
                className="px-4 py-1.5 rounded text-zinc-900 bg-zinc-50 border-solid border-[1px] border-zinc-300 outline-none"/>

                <button className="w-full py-1.5 font-medium text-zinc-50 bg-[var(--green)] rounded mt-3 transition hover:opacity-90 mb-4">
                    Entrar
                </button>
            </form>
        </div>
    )
}