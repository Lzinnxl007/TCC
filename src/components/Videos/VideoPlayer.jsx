'use client'

import { useSearchParams } from "next/navigation"
import { useRef } from "react"

export default function VideoPlayer() {

    const searchParams = useSearchParams()
    const player = useRef()

    const url = searchParams.get('url')

    return (
        <div className="w-full max-w-[70%] lg:max-w-full">
            <div className="w-full h-full rounded-xl aspect-video overflow-hidden">
                <iframe 
                height="100%" 
                src={url} 
                width="100%" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
                ref={player}/>
            </div>

            <div className="mt-6">
                <h1 className="text-2xl font-semibold">
                    Curso de Nutrição Básica I - Conceitos Iniciais
                </h1>
            </div>
        </div>
    )
}