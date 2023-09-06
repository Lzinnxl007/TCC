'use client'

import { Sun, Moon } from "lucide-react"
import { SetLightMode } from "@/utils/UseLightMode"
import { useEffect, useState } from "react"
export default function LightMode() {

    const [mode, setMode] = useState('light')

    const selectMode = () => {
        mode == 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        SetLightMode(mode)
    }, [mode])

    return (
        <button onClick={selectMode}>
            {mode == 'light' ? (
                <Sun/>
            ) : (
                <Moon/>
            )}
        </button>
    )
}