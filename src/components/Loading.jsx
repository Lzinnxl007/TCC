'use client'

import { useState } from 'react'
export default function Loading() {

    const [show, setShow] = useState(true)

    setTimeout(() => {
        setShow(false)
    }, 10000)

    return (
        <div>
            {show && (
                <div className="flex w-screen h-screen z-50 items-center justify-center text-6xl absolute top-0 left-0 bg-red-300">
                    Carregando...
                </div>
            )}
        </div>
    )
}