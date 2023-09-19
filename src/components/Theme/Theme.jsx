'use client'

import { BsSun } from 'react-icons/bs'
import { BiSolidMoon } from 'react-icons/bi'
import { useTheme } from 'next-themes'
export default function Theme() {

    const { theme, setTheme } = useTheme()

    const selectMode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <button onClick={selectMode}
        className={`p-2 rounded-full shadow-md  dark:bg-orange-400 ${theme == 'light' ? 'bg-orange-300' : 'bg-[var(--green)]'}`}>
            {theme == 'dark' ? (
                <BsSun/> 
            ) : (
                <BiSolidMoon/>
            )}
        </button>
    )
}