'use client'

import { useEffect, useState } from 'react'
import { X } from "lucide-react"
import { SaveEmailAction } from '@/utils/SaveEmailsAction'
export default function Modal() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [show, setShow] = useState(null)

    useEffect(() => {
        if(localStorage.getItem('modal-view')) {
            setShow(false)
        }
        else setShow(true)
    }, [])

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(email && name) {
            await SaveEmailAction(email, name)
            setEmail('')
            setName('')
            setShow(false)
            localStorage.setItem('modal-view', JSON.stringify(true))
        }
    }

    const close = () => {
        setShow(false)
        localStorage.setItem('modal-view', JSON.stringify(true))
    }

    return (
        <div className={`flex w-full max-w-2xl shadow-xl lg:max-w-lg md:max-w-sm h-[450px] lg:h-[400px] md:h-[300px] rounded-lg bg-[var(--light-grey)] fixed ${show ? 'animate-open-modal top-1/2' : '-top-full'} transition-all duration-1000 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 overflow-hidden`}>
            <div className="text-zinc-900 w-[60%] px-4 my-auto md:py-6">
                <h1 className="text-3xl lg:text-2xl md:text-xl font-bold text-center mb-4">Desperdício Zero</h1>
                <h2 className="text-xl lg:text-lg md:text-sm font-semibold text-center mt-2">
                    Quer receber novidades do nosso projeto?
                </h2>
                <form onSubmit={e => handleSubmit(e)}
                className="flex flex-col items-center gap-2 mt-6 w-full mx-auto px-2 lg:px-4">

                    <input onChange={e => handleName(e)}
                    type="text" 
                    value={name}
                    placeholder="Name"
                    className="rounded-[20px] px-4 py-1.5 lg:py-1 md:py-0.5 md:text-sm outline-none border-zinc-300 border-[1px] bg-zinc-50 text-zinc-900 w-full"/>

                    <input onChange={e => handleEmail(e)}
                    type="email" 
                    value={email}
                    placeholder="E-mail"
                    className="rounded-[20px] px-4 py-1.5 lg:py-1 md:py-0.5 md:text-sm outline-none border-zinc-300 border-[1px] bg-zinc-50 text-zinc-900 w-full"/>

                    <button className="px-4 py-1.5 lg:py-1 md:py-0.5 md:text-sm rounded-[20px] bg-[var(--green)] w-full font-semibold hover:opacity-90 transition">
                        Continuar
                    </button>
                </form>
            </div>
            <button onClick={close}
            className="absolute z-30 top-4 left-4">
                <X size={20} color="#111"/>
            </button>
            
            <div className="w-1/2 h-full">
                <img src="/modal-image.webp" alt="modal-image" 
                className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}