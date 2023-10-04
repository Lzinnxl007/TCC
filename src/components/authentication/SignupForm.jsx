'use client'

import { CreateUserAction } from "@/utils/auth/CreateUserAction"
import { useState } from "react"
import { toast } from "react-toastify"
export default function SignUpForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const sucessSignUp = () => toast("Cadastro realizado com sucesso!")

    const notFilled = () => toast("Preencha todos os campos")

    const errorPassword = () => toast("As senhas nao coincidem!")

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(name && email && password) {
            if(password == confirmPassword) {
                await CreateUserAction(name, email, password)

                setName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')

                sucessSignUp()
                
                setTimeout(() => {
                    history.back()
                }, 1000)
            } else {
                errorPassword()
            }
            
        } else {
            notFilled()
        }
    }
    

    return (
        <div className="w-full max-w-sm h-auto p-6 rounded-lg bg-zinc-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10">
            <h1 className="mb-6 text-3xl font-bold text-center text-zinc-900">Signin</h1>
            <form onSubmit={e => handleSubmit(e)}
            className="flex flex-col w-full px-4 gap-2">

                <label className="font-medium text-zinc-900 translate-y-2">
                    Nome
                </label>
                <input onChange={e => setName(e.target.value)}
                type="text" 
                required
                placeholder="Nome"
                className="px-4 py-1.5 rounded text-zinc-900 bg-zinc-50 border-solid border-[1px] border-zinc-300 outline-none"/>

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

                <label className="font-medium text-zinc-900 translate-y-2">
                    Confirme a senha
                </label>
                <input onChange={e => setConfirmPassword(e.target.value)} 
                type="password" 
                required
                placeholder="Confirme a senha"
                className="px-4 py-1.5 rounded text-zinc-900 bg-zinc-50 border-solid border-[1px] border-zinc-300 outline-none"/>

                <button className="w-full py-1.5 font-medium text-zinc-50 bg-[var(--green)] rounded mt-3 transition hover:opacity-90 mb-6">
                    Cadastrar
                </button>
            </form>
        </div>
    )
}