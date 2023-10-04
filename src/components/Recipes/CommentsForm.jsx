'use client'

import { CreateCommentAction } from "@/utils/recipes/CreateCommentAction"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
export default function CommentsForm() {

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const searchParams = useSearchParams()

    const recipeId = searchParams.get('id')


    const handleSubmit = async(e) => {
        e.preventDefault()

        if(name && comment) {
            await CreateCommentAction(name, comment, +recipeId)
            setName('')
            setComment('')
        }

    }

    return (
        <div className="w-full md:px-4">
            <h1 className="font-semibold text-xl">
                Adicione um comentario!
            </h1>

            <form onSubmit={e => handleSubmit(e)}
            className="flex flex-col gap-2 w-full mt-3">
                <input onChange={e => setName(e.target.value)}
                type="text"
                maxLength="20" 
                value={name}
                placeholder="Nome"
                className="w-full rounded px-4 py-1.5 outline-none text-zinc-900 bg-zinc-50"/>

                <input onChange={e => setComment(e.target.value)} 
                type="text"
                maxLength="60" 
                value={comment}
                placeholder="Comentario"
                className="pb-28 py-1.5 rounded px-4 outline-none text-zinc-900 bg-zinc-50"/>

                <button className="bg-orange-400 hover:bg-orange-500 px-4 py-1.5 rounded 
                transition text-zinc-900 font-semibold">
                    Enviar
                </button>
            </form>
        </div>
    )
}