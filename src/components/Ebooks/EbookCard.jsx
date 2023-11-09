'use client'

import { useRouter } from "next/navigation"
export default function EBookCard({ title, image, date, author, id }) {

    const router = useRouter()

    const navigate = () => {
        router.push(`/livro/${title}?id=${id}`)
    }

    return (
        <div className="rounded-xl w-full max-w-[340px] max-h-[570px] shadow-lg bg-zinc-50 dark:bg-zinc-800 overflow-hidden md:mx-auto">
            <div className="w-full h-1/2 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center p-4">
                <img src={image} alt="E-book-image" 
                className="object-cover h-full"/>
            </div>
            <div className="w-full px-6 py-6 relative h-1/2">
                <p className="font-medium text-ellipsis text-zinc-900 dark:text-zinc-50">
                    {title}
                </p>
                <p className="text-xs font-medium my-4 text-zinc-800 dark:text-zinc-200 text-ellipsis">
                    {author}...
                </p>
                <p className="text-xs text-zinc-700 dark:text-zinc-200 mt-4">
                    {date}
                </p>
                <button onClick={navigate}
                className="w-[85%] py-1.5 font-medium bg-orange-400 text-zinc-50 rounded hover:bg-orange-500 transition absolute bottom-6 left-1/2 -translate-x-1/2">
                    Ver mais
                </button>
            </div>
        </div>
    )
}