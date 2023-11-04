'use client'

import { useSearchParams } from "next/navigation"
import { Youtube } from "lucide-react"
import Link from "next/link"
export default function VideoPlayer({ videos }) {

    const searchParams = useSearchParams()

    const id = searchParams.get('id')

    const video = videos.filter((video) => video.id == id)[0]

    return (
        <div className="w-full">
            <div className="w-full h-full rounded-xl aspect-video overflow-hidden">
                <iframe 
                height="100%" 
                src={video.video_src} 
                width="100%" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"/>
            </div>

            <div className="mt-6 pr-8 lg:border-b-[1px] border-zinc-300 border-solid lg:pb-10">
                <h2 className="flex items-center gap-2 mb-4">
                    <Youtube className="fill-red-500"/>
                    <Link href={video?.credit_link}
                    className="text-zinc-900 underline transition hover:text-zinc-600">
                        {video?.credit}
                    </Link>
                </h2>
                <h1 className="text-2xl font-semibold">
                    {video.title}
                </h1>
                <p className="mt-4">
                    {video.description}
                </p>
            </div>
        </div>
    )
}