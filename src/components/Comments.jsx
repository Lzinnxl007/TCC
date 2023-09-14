'use client'

import { useEffect, useState } from "react"
import { GetCommentsAction } from "@/utils/GetCommentsAction"
import { UserCircle2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
export default function Comments() {

    const [comments, setComments] = useState([])

    const searchParams = useSearchParams()

    const recipeId = searchParams.get('id')

    const getComments = async() => {
        let totalComments = await GetCommentsAction()

        totalComments = totalComments.filter((comment) => comment.recipeId == recipeId)
        console.log(totalComments)
   
        setComments(totalComments)
    }

    useEffect(() => {
        getComments()
    }, [])


    return (
        <div>
            <ul className="mt-10 space-y-6 pb-10 ">
                {comments?.map((comment) => {
                    return (
                        <li key={comment.id} className="px-4 py-4 rounded bg-[var(--orange)] text-zinc-900">
                            <div className="flex items-center gap-2">
                                <UserCircle2 size={40}/>
                                <p className="font-semibold capitalize text-lg -translate-y-[2px]">{comment.name}</p>
                            </div>
                            <p className="translate-x-10 text-zinc-700 mt-2">{comment.comment}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}