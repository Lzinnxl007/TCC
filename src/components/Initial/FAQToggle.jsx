'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
export default function FAQToggle({ question, answer }) {

    const [open, setOpen] = useState(false)

    const openClose = () => {
        setOpen(!open)
    }

    return (
        <button onClick={openClose}
        className="w-full max-w-xl h-auto shadow rounded text-zinc-900 bg-zinc-50 dark:bg-zinc-800 relative">
           
           <div className="w-full h-full flex items-center justify-between gap-2 px-4 pt-0.5 translate-y-4">
                <span className="text-zinc-900 dark:text-zinc-50">{question}</span>
                <div className={`transition ${open && 'rotate-180 '}`}>
                    <ChevronDown size={16}
                    className="dark:stroke-zinc-50"/>
                </div>
           </div>
           
            <div className={`w-full left-0 transition-all px-6 translate-y-5 py-4 bg-zinc-50 dark:bg-zinc-800 rounded-b relative border-solid border-t-[1px] border-zinc-300 dark:border-zinc-600 overflow-hidden ${open ? 'visible h-auto mb-6 mt-4' : 'invisible h-0'}`}>
                <p className="text-zinc-900 dark:text-zinc-50">
                    {answer}
                </p>
            </div>
        </button>
    )

}