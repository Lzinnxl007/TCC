'use client'

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"
export default function ScrollToTop() {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        window.onscroll = (e) => {
            setScrollY((window.scrollY).toFixed(0))
        }
    }, [])

    const backToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
    }


    return (
        <button onClick={backToTop}
        className={`fixed z-50 bottom-20 right-20 w-16 aspect-square rounded-full 
        ${scrollY > 400 ? 'flex' : 'hidden'} items-center 
        justify-center bg-zinc-200 shadow-xl hover:bg-zinc-300 transition`}>
            <ChevronUp size={20} color="#000"/>
        </button>
    )
}