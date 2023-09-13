'use client'

import Link from "next/link"
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from "./Logo"
import Theme from "./Theme"
import { useTheme } from 'next-themes'
export default function Header() {

    const { theme } = useTheme()

    const [menuShow, setMenuShow] = useState(false)
    const [systemIsDark, setSystemIsDark] = useState(null)

    const openCloseMenu = () => {
        setMenuShow(!menuShow)
    }

    useEffect(() => {
        if(menuShow) {
            window.document.body.style.overflow = 'hidden'
        }
        else window.document.body.style.overflow = 'scroll'
    }, [menuShow])

    useEffect(() => {
        setSystemIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }, [])

    return (
        <header className={`w-screen h-[10vh] ${theme == 'light' ? 'bg-[var(--green)]' : 'bg-zinc-950'} dark:bg-zinc-950 dark:text-zinc-50 overflow-hidden`}>
            <nav className="w-full h-full flex items-center justify-around z-20 py-4">
               <Link href="/">
                <div className="flex items-center gap-4 md:gap-2">
                        {theme == 'light' ? (
                            <Logo size={90} url="/logo.png"/>
                        ) : (
                            <Logo size={70} url="/white-logo.png"/>
                        )}
                        <span className="text-2xl font-bold whitespace-nowrap md:text-lg">Desperdício Zero</span>
                    </div>
               </Link>
                <ul className={`flex items-center justify-center gap-6 font-medium text-lg w-[40vw]
                md:absolute md:flex-col md:bg-[#FBEEDB] md:justify-normal md:h-[91vh] md:px-6 
                md:py-8 md:transition-right md:duration-500 md:top-[10vh] md:text-zinc-900 dark:text-zinc-50
                md:z-50 ${menuShow ? 'md:flex md:right-0' : 'md:hidden md:-right-full'}`}>
                    <li className="md:dark:hover:text-zinc-700 hover:text-zinc-200 transition">
                        <Link href="/cardapio">Cardapio</Link> 
                    </li>
                    <li className="md:dark:hover:text-zinc-700 hover:text-zinc-200 transition">
                        <Link href="/receitas">Receitas</Link>
                    </li>
                    <li className="md:dark:hover:text-zinc-700 hover:text-zinc-200 transition">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="md:dark:hover:text-zinc-700 hover:text-zinc-200 transition">
                        <Link href="/IMC">IMC</Link>
                    </li>
                </ul>
                {!systemIsDark && (
                    <Theme/>
                )}
                <button onClick={openCloseMenu}
                className="hidden md:block cursor-pointer z-10 md:-translate-x-4">
                    <Menu size={36}/>
                </button>
            </nav>
        </header>
    )
}