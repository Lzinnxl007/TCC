'use client'

import { useState } from 'react'
export default function Loading() {

    const [show, setShow] = useState(true)

    setTimeout(() => {
        setShow(false)
    }, 2000)

    return (
        <div>
            {show && (
                <div className="flex w-screen h-screen z-50 items-center justify-center text-6xl absolute top-0 left-0 bg-zinc-50 bg-opacity-60 backdrop-blur-lg">
                    <div className="w-[40vw] aspect-square rounded-full border-solid border-8 border-t-[var(--green)] animation-spin bg-transparent" />
                </div>
            )}
        </div>
    )
}