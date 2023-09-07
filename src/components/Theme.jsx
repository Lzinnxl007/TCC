'use client'

import { Sun, Moon } from "lucide-react"
import { useTheme } from 'next-themes'
export default function Theme() {

    const { theme, setTheme } = useTheme()

    console.log(theme)

    const selectMode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
        
    }

    return (
        <button onClick={() => selectMode()}
        className={`p-2 rounded-full shadow-md  dark:bg-orange-400 ${theme == 'light' ? 'bg-orange-300' : 'bg-[var(--green)]'}`}>
            {theme == 'dark' ? (
                <Sun/>
            ) : (
                <Moon/>
            )}
        </button>
    )
}