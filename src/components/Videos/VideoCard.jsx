'use client'

import { Clock4 } from "lucide-react"
import { useRouter } from "next/navigation"
export default function VideoCard({ url, title }) {

    const router = useRouter()

    const navigate = () => {
        router.push(`/video/${title}?url=${url}`)
    }

    return (
        <button onClick={navigate}
         className="rounded-xl overflow-hidden w-full max-w-sm
        h-auto bg-zinc-50 dark:bg-zinc-800 mx-auto">
            <div className="w-full h-1/2">
                <iframe 
                width="100%" 
                height="250px" 
                src={url} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen/>
            </div>
            <div className="p-4 space-y-4 text-zinc-900 dark:text-zinc-50 w-full min-h-[170px]">
                <p className="text-orange-400 float-left">
                    Nutrição
                </p>
                <h2 className="w-full float-left text-left text-2xl font-semibold">
                    Curso de Nutrição Básica I - Conceitos Iniciais
                </h2>
                <div className="flex items-center gap-2 float-right text-sm">
                    <Clock4 size={16} className="dark:text-zinc-50"/>
                    <span>
                        6m 23s
                    </span>
                </div>
            </div>
        </button>
    )
}