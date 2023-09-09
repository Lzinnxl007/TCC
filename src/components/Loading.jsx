'use client'

import { useState, useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader"
export default function Loading() {

    const [show, setShow] = useState(true)

    setTimeout(() => {
        setShow(false)
    }, 1000)

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
                <div className="w-screen h-screen z-50 flex items-center justify-center text-6xl absolute top-0 left-0 bg-zinc-50 bg-opacity-60 backdrop-blur-lg">
                    <BeatLoader
                    color="#A3BD36"
                    loading={true}
                    size={30}
                    aria-label="Loading Beat"
                    data-testid="loader"/>
                </div>
            )}
        </div>
    )
}
//bg-opacity-60 backdrop-blur-lg