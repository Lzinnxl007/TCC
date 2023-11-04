'use client'

import { Clock4 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
export default function VideoCard({ video }) {

    const router = useRouter()

    const navigate = () => {
        router.push(`/video/watch?id=${video?.id}`)
    }

    return (
        <button onClick={navigate}
         className="rounded-xl overflow-hidden w-full max-w-sm
        h-auto bg-zinc-50 dark:bg-zinc-800 mx-auto">
            <div className="w-full h-1/2 relative">
                <Image
                src={video?.tumbnail_url}
                alt="tumbnail-image"
                width={100}
                height={100}
                layout="responsive"
                className="-translate-y-10"/>
            </div>
            <div className="p-4 space-y-4 text-zinc-900 dark:text-zinc-50 w-full min-h-[170px] pt-8 relative ">
                <p className="text-orange-400 float-left">
                    {video?.topic}
                </p>
                <h2 className="w-full float-left text-left text-xl font-semibold">
                    {video?.title}
                </h2>
                <div className="flex items-center gap-2 float-right text-sm absolute -bottom-3 right-4">
                    <Clock4 size={16} className="dark:text-zinc-50"/>
                    <span>
                        {video?.duration}
                    </span>
                </div>
            </div>
        </button>
    )
}