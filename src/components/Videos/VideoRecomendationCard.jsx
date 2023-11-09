'use client'

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function VideoRecomendationCard({ id, videos }) {

    const video = videos.filter((video) => video.id == id)[0]

    const searchParams = useSearchParams()

    const urlId = searchParams.get('id')

    let formatedDuration = video?.duration

    formatedDuration = formatedDuration.split('')
    formatedDuration = formatedDuration.filter((item) => item !== 'm' && item !== 's')

    formatedDuration[formatedDuration.indexOf(' ')] = ':'
    formatedDuration = formatedDuration.join('')

    return (
        <>
            {id !== +urlId && (
                <Link href={`/video/watch?id=${video.id}`}>
                    <button className="rounded-xl overflow-hidden flex gap-2 w-full min-h-[120px] shadow dark:shadow-zinc-600">
                        <div className="w-full max-w-[45%] relative">
                            <Image
                            src={video?.tumbnail_url}
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-r-xl"/>

                            <div className="absolute text-[10px] font-medium right-2 bottom-2 p-0.5 px-1 bg-zinc-800 text-zinc-50 rounded">
                                {formatedDuration}
                            </div>
                        </div>
                        <div className="py-2 px-2 text-left">
                            <h1 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                                {video?.title}
                            </h1>
                            <p className="text-xs mt-2 text-zinc-900 dark:text-zinc-50">
                                {video?.credit}
                            </p>
        
                        </div>
                    </button>
                </Link>
            )}
        </>
    )
}