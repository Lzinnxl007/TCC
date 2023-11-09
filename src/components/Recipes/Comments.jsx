'use client'

import { useEffect, useState } from "react"
import { GetCommentsAction } from "@/utils/recipes/GetCommentsAction"
import { UserCircle2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
export default function Comments() {

    const [comments, setComments] = useState([])

    const searchParams = useSearchParams()

    const recipeId = searchParams.get('id')

    const getComments = async() => {
        let totalComments = await GetCommentsAction()

        totalComments = totalComments.filter((comment) => comment.recipeId == recipeId)
   
        setComments(totalComments)
    }

    useEffect(() => {
        getComments()
    }, [])


    return (
        <div className="pb-20">
            {comments?.length ? (
                <ul className="mt-10 space-y-6 pb-10 md:px-4 overflow-y-scroll overflow-x-hidden divide-y-[1px] px-4 max-h-60">
                {comments?.map((comment) => {
                    return (
                        <li key={comment.id} className="px-4 py-4 bg-[var(--orange)] text-zinc-900 dark:text-zinc-50">
                            <div className="flex items-center gap-2">
                                <UserCircle2 size={40}/>
                                <p className="font-semibold capitalize text-lg -translate-y-[2px]">{comment.name}</p>
                            </div>
                            <p className="translate-x-10 text-zinc-700 dark:text-zinc-200 mt-2">{comment.comment}</p>
                        </li>
                    )
                })}
            </ul>
            ) : null}
        </div>
    )
}