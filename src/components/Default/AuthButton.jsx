'use client'

import { useRouter } from "next/navigation"
import { tv } from "tailwind-variants"


export default function AuthButton({ method, destiny, type }) {

    const button = tv({
        base: `px-4 py-1 font-medium rounded text-zinc-50 transition duration-300`,
        variants: {
            color: {
                primary: 'bg-orange-400 hover:bg-orange-500',
                secondary: 'bg-transparent border-solid border-2 dark:border-[var(--green)] border-zinc-50 text-zinc-50 dark:text-[var(--green)] hover:bg-zinc-50 dark:hover:bg-[var(--green)] hover:text-[var(--green)] dark:hover:text-zinc-50 hover:border-none hover:ml-1'
            }
        },
        defaultVariants: {
            color: 'primary'
        }
    })
    

    const router = useRouter()

    return (
        <button onClick={() => router.push(destiny)}
        className={button({color: type})}>
            {method}
        </button>
    )
    
}