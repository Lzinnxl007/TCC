'use client'

import { useState } from "react"
import { X } from "lucide-react"

export default function SetProfileImage() {

    const [show, setShow] = useState(true)

    const close = () => {
        setShow(false)
    }

    return (
        <div className="p-8 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-[var(--orange)] dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 h-auto">

            <button onClick={close}
            className="absolute top-3 left-3">
                <X size={20} />
            </button>

            <h1 className="font-bold my-4 text-center text-3xl">
                Selecionar Imagem
            </h1>
            <div className="mt-8">
                <input type="file" name="profile-image"/>
            </div>
        </div>
    )
}