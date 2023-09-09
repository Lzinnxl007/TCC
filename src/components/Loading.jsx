'use client'

import { useState, useEffect } from 'react'
export default function Loading() {

    const [show, setShow] = useState(true)

    setTimeout(() => {
        setShow(false)
    }, 2000)

    useEffect(() => {
        if(show) {
            window.document.body.style.overflow = 'hidden'
        } else {
            window.document.body.style.overflow = 'scroll'
        }
    }, [show])

    return (
        <div>
            {show && (
                <div className="flex w-screen h-screen z-50 items-center justify-center text-6xl absolute top-0 left-0 bg-zinc-50 bg-opacity-60 backdrop-blur-lg">
                    <div className="w-[200px] aspect-square rounded-full border-solid border-14 border-t-[var(--green)] animate-spin" />
                </div>
            )}
        </div>
    )
}