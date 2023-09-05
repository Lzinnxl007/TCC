'use client'

import { useState } from "react"
export default function Intro() {

    const [introShow, setIntroShow] = useState(true)

    setTimeout(() => {
        setIntroShow(false)
    }, 4000)

    return (
        <section className={`flex items-center justify-center w-full h-screen fixed
         top-0 left-0 z-50 bg-[var(--orange)] transition duration-700 ${!introShow && 'opacity-0 hidden'}`}>
            <div>
                <video autoPlay muted
                className="w-full max-w-4xl z-50">
                    <source src="/intro-video.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}