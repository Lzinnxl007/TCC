'use client'

import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from 'next-themes'
export default function Theme() {

    const { theme, setTheme } = useTheme()

    const [mode, setMode] = useState('light')

    const selectMode = () => {
        mode == 'light' ? setMode('dark') : setMode('light')
        
    }

    useEffect(() => {
        setTheme(mode)
    }, [mode])

    return (
        <button onClick={selectMode}
        className={`p-2 rounded-full shadow-md ${mode == 'light' ? 'bg-[var(--orange)]' : 'bg-[var(--green)]'}`}>
            {mode == 'light' ? (
                <Sun/>
            ) : (
                <Moon/>
            )}
        </button>
    )
}