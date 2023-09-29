'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AuthButton({ method, destiny, bg }) {

    const router = useRouter()

    const [cookie, setCookie] = useState(false)

    useEffect(() => {
        if(document.cookie) {
            setCookie(true)
        }
    }, [])
    if(!cookie && method == 'Entrar') {
        return (
            <button onClick={() => router.push(destiny)}
            className={`px-4 py-1 font-medium rounded text-zinc-50 ${bg} transition hover:opacity-90`}>
                {method}
            </button>
        )
    }
}